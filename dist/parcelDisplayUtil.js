"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.filterParcel = filterParcel;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// parcel status
var COMBINED = exports.COMBINED = { key: "COMBINED", label: "已合併" };
var DELIVERED = exports.DELIVERED = { key: "DELIVERED", label: "已送達" };
var EXCEPTION = exports.EXCEPTION = { key: "EXCEPTION", label: "請致電客服" };
var IN_TRANSIT = exports.IN_TRANSIT = { key: "IN_TRANSIT", label: "運輸中" };
var PICKED_UP = exports.PICKED_UP = { key: "PICKED_UP", label: "已提" };
var READY_FOR_COMBINE = exports.READY_FOR_COMBINE = { key: "READY_FOR_COMBINE", label: "待處理" };
var READY_TO_PICKUP = exports.READY_TO_PICKUP = { key: "READY_TO_PICKUP", label: "可提" };
var WAREHOUSE_RECEIVED = exports.WAREHOUSE_RECEIVED = { key: "WAREHOUSE_RECEIVED", label: "入庫" };
var PARCEL_STATUS = exports.PARCEL_STATUS = [DELIVERED, EXCEPTION, IN_TRANSIT, PICKED_UP, READY_TO_PICKUP, WAREHOUSE_RECEIVED];

// parcel location
var SHOP = exports.SHOP = { key: "SHOP", label: "自提點" };
var WAREHOUSE = exports.WAREHOUSE = { key: "WAREHOUSE", label: "轉運倉" };
var VEHICLE = exports.VEHICLE = { key: "VEHICLE", label: "轉運車" };
var PARCEL_LOCATIONS = exports.PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

// parcel type
var BAD_PARCEL = exports.BAD_PARCEL = { key: "BAD_PARCEL", label: "疑難包裹" };
var SHIP_TO_HOME = exports.SHIP_TO_HOME = { key: "SHIP_TO_HOME", label: "送貨上門" };
var STORE_PICKUP = exports.STORE_PICKUP = { key: "STORE_PICKUP", label: "門店自提" };

var ParcelDisplayUtil = function () {
  function ParcelDisplayUtil() {
    _classCallCheck(this, ParcelDisplayUtil);
  }

  _createClass(ParcelDisplayUtil, [{
    key: "getParcelLocation",
    value: function getParcelLocation(parcelLocation) {
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
  }, {
    key: "getParcelStatusBageAndLabel",
    value: function getParcelStatusBageAndLabel(parcelStatus) {
      switch (parcelStatus) {
        case COMBINED.key:
          return { badge: "success", label: COMBINED.label };
        case DELIVERED.key:
          return { badge: "secondary", label: DELIVERED.label };
        case EXCEPTION.key:
          return { badge: "danger", label: EXCEPTION.label };
        case IN_TRANSIT.key:
          return { badge: "warning", label: IN_TRANSIT.label };
        case PICKED_UP.key:
          return { badge: "secondary", label: PICKED_UP.label };
        case READY_FOR_COMBINE.key:
          return { badge: "warning", label: READY_FOR_COMBINE.label };
        case READY_TO_PICKUP.key:
          return { badge: "success", label: READY_TO_PICKUP.label };
        case WAREHOUSE_RECEIVED.key:
          return { badge: "warning", label: WAREHOUSE_RECEIVED.label };
        default:
          return { badge: "danger", label: "未知" };
      }
    }

    // TODO PLEASE REWORD ON THIS ONCE WE HAVE SOME TIME!!!

  }, {
    key: "sortParcels",
    value: function sortParcels(parcels) {
      var firstLevel = [];
      var secondLevel = [];
      var thirdLevel = [];
      var result = [];
      parcels.forEach(function (parcel) {
        var parcelStatus = parcel.parcelStatus;
        if (parcelStatus === READY_TO_PICKUP.key) {
          firstLevel.push(parcel);
        } else if (parcelStatus === EXCEPTION.key) {
          secondLevel.push(parcel);
        } else if (parcelStatus === IN_TRANSIT.key || parcelStatus === WAREHOUSE_RECEIVED.key) {
          thirdLevel.push(parcel);
        } else {
          result.push(parcel);
        }
      });
      return [].concat(_toConsumableArray(this.sortByDisplayIdDesc(firstLevel)), _toConsumableArray(this.sortByDisplayIdDesc(secondLevel)), _toConsumableArray(this.sortByDisplayIdDesc(thirdLevel)), _toConsumableArray(this.sortByDisplayIdDesc(result)));
    }
  }, {
    key: "sortByDisplayIdDesc",
    value: function sortByDisplayIdDesc(items) {
      return items.sort(function (a, b) {
        if (a.displayId < b.displayId) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }, {
    key: "getLastParcelStatus",
    value: function getLastParcelStatus(parcel) {
      var trackingHistories = parcel.trackingHistories;

      return trackingHistories[trackingHistories.length - 1].parcelStatus;
    }
  }]);

  return ParcelDisplayUtil;
}();

exports.default = ParcelDisplayUtil;
function filterParcel(parcels, requireParcelStatus) {
  return parcels.filter(function (parcel) {
    return parcel.parcelStatus === requireParcelStatus.key;
  });
}