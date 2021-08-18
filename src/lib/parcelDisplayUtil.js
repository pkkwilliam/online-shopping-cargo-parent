// parcel status
export const COMBINED = {
  defaultAreaShortName: "澳門",
  key: "COMBINED",
  label: "已合併",
  useCustomAreaShortName: false,
};
export const DELIVERED = {
  defaultAreaShortName: "澳門",
  key: "DELIVERED",
  label: "已送達",
  useCustomAreaShortName: false,
};
export const EXCEPTION = {
  defaultAreaShortName: "澳門",
  key: "EXCEPTION",
  label: "請致電客服",
  useCustomAreaShortName: false,
};
export const IN_TRANSIT = {
  defaultAreaShortName: "澳門",
  key: "IN_TRANSIT",
  label: "運輸中",
  useCustomAreaShortName: false,
};
export const PICKED_UP = {
  defaultAreaShortName: "澳門",
  key: "PICKED_UP",
  label: "已提",
  useCustomAreaShortName: true,
};
export const READY_FOR_COMBINE = {
  defaultAreaShortName: "澳門",
  key: "READY_FOR_COMBINE",
  label: "待處理",
  useCustomAreaShortName: false,
};
export const READY_TO_PICKUP = {
  defaultAreaShortName: "澳門",
  key: "READY_TO_PICKUP",
  label: "可提",
  useCustomAreaShortName: true,
};
export const WAREHOUSE_RECEIVED = {
  defaultAreaShortName: "珠海",
  key: "WAREHOUSE_RECEIVED",
  label: "入庫",
  useCustomAreaShortName: false,
};
export const PARCEL_STATUS = [
  DELIVERED,
  EXCEPTION,
  IN_TRANSIT,
  PICKED_UP,
  READY_TO_PICKUP,
  WAREHOUSE_RECEIVED,
];

// parcel location
export const SHOP = { key: "SHOP", label: "自提點" };
export const WAREHOUSE = { key: "WAREHOUSE", label: "轉運倉" };
export const VEHICLE = { key: "VEHICLE", label: "轉運車" };
export const PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

// parcel type
export const BAD_PARCEL = { key: "BAD_PARCEL", label: "疑難包裹" };
export const SHIP_TO_HOME = { key: "SHIP_TO_HOME", label: "送貨上門" };
export const STORE_PICKUP = { key: "STORE_PICKUP", label: "門店自提" };
export default class ParcelDisplayUtil {
  getParcelLocation(parcelLocation) {
    switch (parcelLocation) {
      case SHOP.key:
        return "自提點";
      case WAREHOUSE.key:
        return "轉運倉";
      case VEHICLE.key:
        return "轉運車";
      default:
        return "";
    }
  }

  getParcelStatusBageAndLabel(parcelStatus, areaShortName) {
    const concatCustomAreaShortName = (predefinedParcelStatus) => {
      const { defaultAreaShortName, label, useCustomAreaShortName } =
        predefinedParcelStatus;
      return useCustomAreaShortName
        ? `${areaShortName ? areaShortName : defaultAreaShortName} - ${label}`
        : `${defaultAreaShortName} - ${label}`;
    };
    switch (parcelStatus) {
      case COMBINED.key:
        return { badge: "success", label: concatCustomAreaShortName(COMBINED) };
      case DELIVERED.key:
        return {
          badge: "secondary",
          label: concatCustomAreaShortName(DELIVERED),
        };
      case EXCEPTION.key:
        return { badge: "danger", label: concatCustomAreaShortName(EXCEPTION) };
      case IN_TRANSIT.key:
        return {
          badge: "warning",
          label: concatCustomAreaShortName(IN_TRANSIT),
        };
      case PICKED_UP.key:
        return {
          badge: "secondary",
          label: concatCustomAreaShortName(PICKED_UP),
        };
      case READY_FOR_COMBINE.key:
        return {
          badge: "warning",
          label: concatCustomAreaShortName(READY_FOR_COMBINE),
        };
      case READY_TO_PICKUP.key:
        return {
          badge: "success",
          label: concatCustomAreaShortName(READY_TO_PICKUP),
        };
      case WAREHOUSE_RECEIVED.key:
        return {
          badge: "warning",
          label: concatCustomAreaShortName(WAREHOUSE_RECEIVED),
        };
      default:
        return { badge: "danger", label: "未知" };
    }
  }

  // TODO PLEASE REWORD ON THIS ONCE WE HAVE SOME TIME!!!
  sortParcels(parcels) {
    const firstLevel = [];
    const secondLevel = [];
    const thirdLevel = [];
    const result = [];
    parcels.forEach((parcel) => {
      const parcelStatus = parcel.parcelStatus;
      if (parcelStatus === READY_TO_PICKUP.key) {
        firstLevel.push(parcel);
      } else if (parcelStatus === EXCEPTION.key) {
        secondLevel.push(parcel);
      } else if (
        parcelStatus === IN_TRANSIT.key ||
        parcelStatus === WAREHOUSE_RECEIVED.key
      ) {
        thirdLevel.push(parcel);
      } else {
        result.push(parcel);
      }
    });
    return [
      ...this.sortByDisplayIdDesc(firstLevel),
      ...this.sortByDisplayIdDesc(secondLevel),
      ...this.sortByDisplayIdDesc(thirdLevel),
      ...this.sortByDisplayIdDesc(result),
    ];
  }

  sortByDisplayIdDesc(items) {
    return items.sort((a, b) => {
      if (a.displayId < b.displayId) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  getLastParcelStatus(parcel) {
    const { trackingHistories } = parcel;
    return trackingHistories[trackingHistories.length - 1].parcelStatus;
  }
}

export function filterParcel(parcels, requireParcelStatus) {
  return parcels.filter(
    (parcel) => parcel.parcelStatus === requireParcelStatus.key
  );
}
