"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deviceQuerry = _interopRequireDefault(require("./deviceQuerry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var makeResponsive = function makeResponsive(value, property) {
  var themeValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var style = {};

  if (!value) {
    return;
  } // Give style directly if not an object


  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    style["".concat(property)] = themeValues["".concat(value)] || "".concat(value);
  } // Create an array for responsive value
  else if (_typeof(value) === "object") {
      Object.keys(value).map(function (key) {
        if (key === "xs") {
          style[property] = themeValues["".concat(value[key])] || "".concat(value[key]);
        } else {
          style[_deviceQuerry["default"][key]] = _defineProperty({}, property, themeValues["".concat(value[key])] || "".concat(value[key]));
        }
      });
    }

  return style;
};

var _default = makeResponsive;
exports["default"] = _default;