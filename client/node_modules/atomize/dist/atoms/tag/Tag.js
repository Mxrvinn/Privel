"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("../div/Div"));

var _excluded = ["children", "prefix", "suffix"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tag = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var children = props.children,
      prefix = props.prefix,
      suffix = props.suffix,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({}, rest, {
    ref: ref
  }), prefix, children, suffix);
});

Tag.defaultProps = {
  tag: "span",
  d: "inline-flex",
  align: "center",
  textAlign: "center",
  justify: "center",
  bg: "gray300",
  textWeight: "500",
  rounded: "sm",
  p: {
    x: "0.5rem",
    y: "0.125rem"
  },
  textColor: "medium",
  textSize: "caption"
};
var _default = Tag;
exports["default"] = _default;