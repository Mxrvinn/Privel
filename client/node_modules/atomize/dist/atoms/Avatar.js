"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("./Div"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _excluded = ["children", "iconProp", "status"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Avatar = function Avatar(_ref) {
  var children = _ref.children,
      iconProp = _ref.iconProp,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_Div["default"], rest, !rest.bgImg && (children ? children : /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
    name: "UserSolid",
    color: "white"
  }, iconProp))), status && /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
    name: "Status",
    pos: "absolute",
    bottom: rest.rounded === "circle" && '0',
    top: rest.rounded === "circle" ? 'auto' : '-4px',
    right: rest.rounded === "circle" ? '0' : '-4px',
    size: "8px"
  }, status)));
};

Avatar.defaultProps = {
  bg: "brand700",
  pos: "relative",
  textColor: "white",
  d: "flex",
  align: "center",
  justify: "center",
  h: "40px",
  w: "40px",
  rounded: "circle",
  textWeight: "500",
  bgSize: "cover"
};
var _default = Avatar;
exports["default"] = _default;