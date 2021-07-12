"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeResponsive = _interopRequireDefault(require("./makeResponsive"));

var _arrayKeyMapToObject = _interopRequireDefault(require("./arrayKeyMapToObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findDirection = function findDirection(value, property) {
  var themeValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!value) {
    return;
  }

  var style = [];

  if (typeof (value.x || value.y || value.b || value.t || value.l || value.r) === "undefined") {
    style.push((0, _makeResponsive["default"])(value, property, themeValues));
  } else {
    // If x direction exist
    if (value.x != "undefined") {
      style.push((0, _makeResponsive["default"])(value.x, "".concat(property, "-left"), themeValues));
      style.push((0, _makeResponsive["default"])(value.x, "".concat(property, "-right"), themeValues));
    } // If y direction exist


    if (value.y != "undefined") {
      style.push((0, _makeResponsive["default"])(value.y, "".concat(property, "-top"), themeValues));
      style.push((0, _makeResponsive["default"])(value.y, "".concat(property, "-bottom"), themeValues));
    } // If t direction exist


    if (value.t != "undefined") {
      style.push((0, _makeResponsive["default"])(value.t, "".concat(property, "-top"), themeValues));
    } // If l direction exist


    if (value.l != "undefined") {
      style.push((0, _makeResponsive["default"])(value.l, "".concat(property, "-left"), themeValues));
    } // If r direction exist


    if (value.r != "undefined") {
      style.push((0, _makeResponsive["default"])(value.r, "".concat(property, "-right"), themeValues));
    } // If b direction exist


    if (value.b != "undefined") {
      style.push((0, _makeResponsive["default"])(value.b, "".concat(property, "-bottom"), themeValues));
    }
  }

  return (0, _arrayKeyMapToObject["default"])(style);
};

var _default = findDirection;
exports["default"] = _default;