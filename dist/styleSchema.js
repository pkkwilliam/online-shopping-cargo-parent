"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PRIMARY_DARK = "rgba(252,91,1,1)";
var PRIMARY_LIGHT = "rgba(252,150,3,1)";

var styleSchema = exports.styleSchema = {
  color: {
    background: "#f6f6f6",
    black: "#000000",
    primaryGradient: "linear-gradient(90deg, " + PRIMARY_LIGHT + ") 0%, " + PRIMARY_DARK + " 100%)",
    primaryDark: "#FF914D",
    primaryLight: "#FFA46C",
    secondaryDark: "#7D7D7D",
    secondaryLight: "#f6f6f6",
    white: "#FFFFFF"
  },
  shadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  shadowLight: "0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.0)",
  text: {}
};