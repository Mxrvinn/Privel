"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _excluded = ["isLoading", "suffix"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = function Textarea(_ref) {
  var isLoading = _ref.isLoading,
      suffix = _ref.suffix,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    tag: "textarea",
    suffix: isLoading ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "Loading",
      pos: "absolute",
      top: "0.75rem",
      right: "0.75rem",
      size: "16px",
      color: "gray600"
    }) : suffix
  }, rest));
};

Textarea.defaultProps = {
  d: "flex",
  p: {
    x: "0.75rem",
    y: "0.5rem"
  },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "6.5rem",
  w: "100%",
  minW: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray700"
};
var _default = Textarea;
exports["default"] = _default;