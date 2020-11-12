"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// parcel status
var DELIVERED = { key: "DELIVERED", label: "已送達" };
var EXCEPTION = { key: "EXCEPTION", label: "聯繫客服" };
var IN_TRANSIT = { key: "IN_TRANSIT", label: "運輸中" };
var PICKED_UP = { key: "PICKED_UP", label: "已自提" };
var READY_TO_PICKUP = { key: "READY_TO_PICKUP", label: "可自提" };
var PARCEL_STATUS = [DELIVERED, EXCEPTION, IN_TRANSIT, PICKED_UP, READY_TO_PICKUP];

// parcel location
var SHOP = { key: "SHOP", label: "自提點" };
var WAREHOUSE = { key: "WAREHOUSE", label: "轉運倉" };
var VEHICLE = { key: "VEHICLE", label: "轉運車" };
var PARCEL_LOCATIONS = [SHOP, WAREHOUSE, VEHICLE];

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

  }, {
    key: "sortParcels",
    value: function sortParcels(parcelResponse) {
      var firstLevel = [];
      var secondLevel = [];
      var thirdLevel = [];
      var result = [];
      parcelResponse.parcels.forEach(function (parcel) {
        var trackingHistories = parcel.trackingHistories;

        var parcelStatus = trackingHistories[trackingHistories.length - 1].parcelStatus;
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
      return [].concat(firstLevel, secondLevel, thirdLevel, result);
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