"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeResponsive = _interopRequireDefault(require("./makeResponsive"));

var _arrayKeyMapToObject = _interopRequireDefault(require("./arrayKeyMapToObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findRoundedDirection = function findRoundedDirection(value) {
  var themeValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!value) {
    return;
  }

  var style = [];

  if (typeof (value.b || value.t || value.l || value.r || value.tl || value.tr || value.bl || value.br) === "undefined") {
    style.push((0, _makeResponsive["default"])(value, "border-radius", themeValues));
  } else {
    // If l direction exist
    if (value.l != "undefined") {
      style.push((0, _makeResponsive["default"])(value.l, "border-top-left-radius", themeValues));
      style.push((0, _makeResponsive["default"])(value.l, "border-bottom-left-radius", themeValues));
    } // If r direction exist


    if (value.r != "undefined") {
      style.push((0, _makeResponsive["default"])(value.r, "border-top-right-radius", themeValues));
      style.push((0, _makeResponsive["default"])(value.r, "border-bottom-right-radius", themeValues));
    } // If t direction exist


    if (value.t != "undefined") {
      style.push((0, _makeResponsive["default"])(value.t, "border-top-left-radius", themeValues));
      style.push((0, _makeResponsive["default"])(value.t, "border-top-right-radius", themeValues));
    } // If b direction exist


    if (value.b != "undefined") {
      style.push((0, _makeResponsive["default"])(value.b, "border-bottom-left-radius", themeValues));
      style.push((0, _makeResponsive["default"])(value.b, "border-bottom-right-radius", themeValues));
    } // If tl direction exist


    if (value.tl != "undefined") {
      style.push((0, _makeResponsive["default"])(value.tl, "border-top-left-radius", themeValues));
    } // If tr direction exist


    if (value.tr != "undefined") {
      style.push((0, _makeResponsive["default"])(value.tr, "border-top-right-radius", themeValues));
    } // If bl direction exist


    if (value.bl != "undefined") {
      style.push((0, _makeResponsive["default"])(value.bl, "border-bottom-left-radius", themeValues));
    } // If br direction exist


    if (value.br != "undefined") {
      style.push((0, _makeResponsive["default"])(value.br, "border-bottom-right-radius", themeValues));
    }
  }

  return (0, _arrayKeyMapToObject["default"])(style);
};

var _default = findRoundedDirection;
exports["default"] = _default;