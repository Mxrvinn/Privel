"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styletronReact = require("styletron-react");

var _ThemeContext = require("../../core/ThemeContext");

var _Button = _interopRequireDefault(require("./Button.style"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _excluded = ["isLoading", "prefix", "children", "suffix", "textColor", "tag"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Consumer, null, function (value) {
    var output = (0, _Button["default"])(props, value);

    var _output$ = output[0],
        isLoading = _output$.isLoading,
        prefix = _output$.prefix,
        children = _output$.children,
        suffix = _output$.suffix,
        textColor = _output$.textColor,
        tag = _output$.tag,
        rest = _objectWithoutProperties(_output$, _excluded);

    return /*#__PURE__*/_react["default"].createElement(BasicButton, _extends({
      ref: ref,
      $as: tag
    }, rest, {
      $styleArray: output[1]
    }), isLoading && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "Loading",
      size: "16px",
      m: {
        r: "0.5rem"
      },
      color: textColor
    }), prefix, children, suffix);
  });
});

var BasicButton = (0, _styletronReact.styled)("button", function (props) {
  return _objectSpread({}, props.$styleArray);
});
Button.defaultProps = {
  tag: "button",
  d: "flex",
  justify: "center",
  align: "center",
  p: {
    x: "1rem"
  },
  pos: "relative",
  rounded: "md",
  border: "none",
  h: "2.5rem",
  cursor: "pointer",
  bg: "black",
  textColor: "white",
  textSize: "body",
  textWeight: "500",
  fontFamily: "primary",
  transition: "true",
  disableBg: "gray400",
  disableShadow: "0",
  disableBorderColor: "gray300",
  disableColor: "white"
};
var _default = Button;
exports["default"] = _default;