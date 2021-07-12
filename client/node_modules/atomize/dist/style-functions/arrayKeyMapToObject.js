"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arrayKeyMapToObject = function arrayKeyMapToObject(input) {
  var output = {};
  input.forEach(function (item) {
    openObject(item, output);

    function openObject(objectToOpen, setOpenObjectTo) {
      if (!objectToOpen) {
        return;
      }

      Object.keys(objectToOpen).map(function (key) {
        if (key === undefined) {
          return;
        } else if (_typeof(setOpenObjectTo[key]) === "object") {
          openObject(objectToOpen[key], setOpenObjectTo[key]);
        } else {
          setOpenObjectTo[key] = objectToOpen[key];
        }
      });
    }
  });
  return output;
};

var _default = arrayKeyMapToObject;
exports["default"] = _default;