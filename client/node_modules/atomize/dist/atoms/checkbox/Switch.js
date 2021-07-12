"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("../div/Div"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _excluded = ["checked", "m", "activeColor", "inactiveColor", "activeShadow", "inactiveShadow", "isLoading"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var checked = props.checked,
      m = props.m,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      activeShadow = props.activeShadow,
      inactiveShadow = props.inactiveShadow,
      isLoading = props.isLoading,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
    m: m,
    d: "flex",
    align: "center",
    justify: "center",
    shadow: checked ? activeShadow : inactiveShadow,
    bg: checked ? activeColor : inactiveColor,
    p: {
      y: "4px",
      x: "13px"
    },
    rounded: "circle",
    transition: true
  }, rest), isLoading ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "Loading",
    size: "20px",
    color: "white"
  }) : /*#__PURE__*/_react["default"].createElement(_Div["default"], {
    transform: checked ? "translateX(50%)" : "translateX(-50%)",
    transition: true,
    h: "16px",
    w: "16px",
    shadow: "4",
    bg: "white",
    rounded: "circle"
  }));
});

Switch.defaultProps = {
  cursor: "pointer",
  m: {
    r: "1rem"
  },
  activeColor: "info700",
  inactiveColor: "gray500",
  activeShadow: "4",
  inactiveShadow: "0"
};
var _default = Switch;
exports["default"] = _default;