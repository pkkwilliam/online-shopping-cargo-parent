// parcel status
const DELIVERED = { key: "DELIVERED", label: "已送達" };
const EXCEPTION = { key: "EXCEPTION", label: "聯繫客服" };
const IN_TRANSIT = { key: "IN_TRANSIT", label: "運輸中" };
const PICKED_UP = { key: "PICKED_UP", label: "已自提" };
const READY_TO_PICKUP = { key: "READY_TO_PICKUP", label: "可自提" };
const PARCEL_STATUS = [
  DELIVERED,
  EXCEPTION,
  IN_TRANSIT,
  PICKED_UP,
  READY_TO_PICKUP,
];

// parcel location
const SHOP = { key: "SHOP", label: "自提點" };
const WAREHOUSE = { key: "WAREHOUSE", label: "轉運倉" };
const VEHICLE = { key: "VEHICLE", label: "轉運車" };
const PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

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

  getParcelStatusBageAndLabel(parcelStatus) {
    switch (parcelStatus) {
      case DELIVERED.key:
        return { badge: "primary", label: "送達" };
      case EXCEPTION.key:
        return { badge: "danger", label: "請致電客服" };
      case IN_TRANSIT.key:
        return { badge: "warning", label: "運輸中" };
      case PICKED_UP.key:
        return { badge: "primary", label: "已提" };
      case READY_TO_PICKUP.key:
        return { badge: "success", label: "可提" };
      default:
        return { badge: "danger", label: "未知" };
    }
  }

  // TODO PLEASE REWORD ON THIS ONCE WE HAVE SOME TIME!!!
  sortParcels(parcelResponse) {
    const firstLevel = [];
    const secondLevel = [];
    const thirdLevel = [];
    const result = [];
    parcelResponse.parcels.forEach((parcel) => {
      const { trackingHistories } = parcel;
      const parcelStatus =
        trackingHistories[trackingHistories.length - 1].parcelStatus;
      if (parcelStatus === READY_TO_PICKUP.key) {
        firstLevel.push(parcel);
      } else if (parcelStatus === EXCEPTION.key) {
        secondLevel.push(parcel);
      } else if (parcelStatus === IN_TRANSIT.key) {
        thirdLevel.push(parcel);
      } else {
        result.push(parcel);
      }
    });
    return [...firstLevel, ...secondLevel, ...thirdLevel, ...result];
  }

  getLastParcelStatus(parcel) {
    const { trackingHistories } = parcel;
    return trackingHistories[trackingHistories.length - 1].parcelStatus;
  }
}
