"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deviceQuerry = _interopRequireDefault(require("../../style-functions/deviceQuerry"));

var _mergeObjects = _interopRequireDefault(require("../../style-functions/mergeObjects"));

var _excluded = ["p", "m", "size", "offset"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var computeColStyle = function computeColStyle(props, context) {
  var p = props.p,
      m = props.m,
      size = props.size,
      offset = props.offset,
      rest = _objectWithoutProperties(props, _excluded);

  var offsetObject = {};
  var sizeObject = {}; // Offset Present

  if (offset) {
    // Give style directly if not an object
    if (typeof offset === "string" || typeof offset === "number") {
      offsetObject["margin-left"] = "".concat(100 * parseInt(offset) / context.grid.colCount, "%");
    } // Create an array for responsive value
    else if (_typeof(offset) === "object") {
        Object.keys(offset).map(function (key) {
          if (key === "xs") {
            offsetObject["margin-left"] = "".concat(100 * parseInt(offset[key]) / context.grid.colCount, "%");
          } else {
            offsetObject[_deviceQuerry["default"][key]] = {
              "margin-left": "".concat(100 * parseInt(offset[key]) / context.grid.colCount, "%")
            };
          }
        });
      }
  } // Size Present


  if (size) {
    if (typeof size === "string" || typeof size === "number") {
      sizeObject["flex"] = "0 1 ".concat(100 * parseInt(size) / context.grid.colCount, "%");
      sizeObject["max-width"] = "".concat(100 * parseInt(size) / context.grid.colCount, "%");
    } // Create an array for responsive value
    else if (_typeof(size) === "object") {
        Object.keys(size).map(function (key) {
          if (key === "xs") {
            sizeObject["flex"] = "0 1 ".concat(100 * parseInt(size[key]) / context.grid.colCount, "%");
            sizeObject["max-width"] = "".concat(100 * parseInt(size[key]) / context.grid.colCount, "%");
          } else if (size[key]) {
            sizeObject[_deviceQuerry["default"][key]] = {
              flex: "0 1 ".concat(100 * parseInt(size[key]) / context.grid.colCount, "%"),
              "max-width": "".concat(100 * parseInt(size[key]) / context.grid.colCount, "%")
            };
          }
        });
      }
  } // If size for mobile is not defined


  if (!(typeof size === "string" || typeof size === "number" || size && size.xs)) {
    sizeObject["flex-basis"] = "0";
    sizeObject["flex-grow"] = "1";
    sizeObject["max-width"] = "100%";
  }

  return [rest, (0, _mergeObjects["default"])(sizeObject, offsetObject)];
};

var _default = computeColStyle;
exports["default"] = _default;