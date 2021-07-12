"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styletronReact = require("styletron-react");

var _ThemeContext = require("../../core/ThemeContext");

var _Text = _interopRequireDefault(require("./Text.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Consumer, null, function (value) {
    var output = (0, _Text["default"])(props, value);
    return /*#__PURE__*/_react["default"].createElement(BasicText, _extends({
      ref: ref,
      $as: props.tag
    }, output[0], {
      $styleArray: output[1]
    }));
  });
});

var BasicText = (0, _styletronReact.styled)("p", function (props) {
  return _objectSpread({}, props.$styleArray);
});
Text.defaultProps = {
  tag: "p",
  m: "0",
  p: "0"
};
var _default = Text;
exports["default"] = _default;