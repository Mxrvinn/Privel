"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var currentDevice = function currentDevice() {
  var currentWidth = window.innerWidth;

  if (currentWidth < 576) {
    return 'xs';
  } else if (currentWidth < 768) {
    return 'sm';
  } else if (currentWidth < 960) {
    return 'md';
  } else if (currentWidth < 1280) {
    return 'lg';
  } else if (1900 < currentWidth) {
    return 'xl';
  } else {
    return "Couldn't find device";
  }
};

var _default = currentDevice;
exports["default"] = _default;