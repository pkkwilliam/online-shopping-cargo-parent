"use strict";

// parcel status
var DELIVERED = { key: "DELIVERED", labe: "已送達" };
var EXCEPTION = { key: "EXCEPTION", labe: "聯繫客服" };
var IN_TRANSIT = { key: "IN_TRANSIT", labe: "運輸中" };
var PICKED_UP = { key: "PICKED_UP", labe: "已自提" };
var READY_TO_PICKUP = { key: "READY_TO_PICKUP", labe: "可自提" };
var PARCEL_STATUS = [DELIVERED, EXCEPTION, IN_TRANSIT, PICKED_UP, READY_TO_PICKUP];

// parcel location
var SHOP = { key: "SHOP", labe: "自提點" };
var WAREHOUSE = { key: "WAREHOUSE", labe: "轉運倉" };
var VEHICLE = { key: "VEHICLE", labe: "轉運車" };
var PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

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
  return parcels.sort(function (p1, p2) {
    if (p1.parcelStatus === READY_TO_PICKUP.key) {
      return -2;
    } else if (p1.parcelStatus === EXCEPTION.key) {
      return -1;
    } else if (p1.parcelStatus === DELIVERED.key || p1.parcelStatus === READY_TO_PICKUP.key) {
      return 1;
    } else {
      return 0;
    }
  });
}