// parcel status
const DELIVERED = { key: "DELIVERED", labe: "已送達" };
const EXCEPTION = { key: "EXCEPTION", labe: "聯繫客服" };
const IN_TRANSIT = { key: "IN_TRANSIT", labe: "運輸中" };
const PICKED_UP = { key: "PICKED_UP", labe: "已自提" };
const READY_TO_PICKUP = { key: "READY_TO_PICKUP", labe: "可自提" };
const PARCEL_STATUS = [
  DELIVERED,
  EXCEPTION,
  IN_TRANSIT,
  PICKED_UP,
  READY_TO_PICKUP,
];

// parcel location
const SHOP = { key: "SHOP", labe: "自提點" };
const WAREHOUSE = { key: "WAREHOUSE", labe: "轉運倉" };
const VEHICLE = { key: "VEHICLE", labe: "轉運車" };
const PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

function getParcelLocation(parcelLocation) {
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

function getParcelStatusBageAndLabel(parcelStatus) {
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

function sort(parcels) {
  return parcels.sort((p1, p2) => {
    if (p1.parcelStatus === READY_TO_PICKUP.key) {
      return -2;
    } else if (p1.parcelStatus === EXCEPTION.key) {
      return -1;
    } else if (
      p1.parcelStatus === DELIVERED.key ||
      p1.parcelStatus === READY_TO_PICKUP.key
    ) {
      return 1;
    } else {
      return 0;
    }
  });
}
