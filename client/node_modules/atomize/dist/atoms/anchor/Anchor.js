"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../text/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Anchor = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Text["default"], _extends({
    ref: ref,
    tag: "a"
  }, props));
});

Anchor.defaultProps = {
  hoverTextColor: "info800",
  textWeight: "500",
  textDecor: "none",
  textColor: "info700",
  cursor: "pointer"
};
var _default = Anchor;
exports["default"] = _default;