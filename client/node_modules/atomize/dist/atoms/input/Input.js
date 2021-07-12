"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styletronReact = require("styletron-react");

var _ThemeContext = require("../../core/ThemeContext");

var _Input = _interopRequireDefault(require("./Input.style"));

var _Div = _interopRequireDefault(require("../div/Div"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _excluded = ["children", "prefix", "isLoading", "suffix", "order", "tag"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Consumer, null, function (value) {
    var output = (0, _Input["default"])(props, value);

    var _output$ = output[0],
        children = _output$.children,
        prefix = _output$.prefix,
        isLoading = _output$.isLoading,
        suffix = _output$.suffix,
        order = _output$.order,
        tag = _output$.tag,
        rest = _objectWithoutProperties(_output$, _excluded);

    return /*#__PURE__*/_react["default"].createElement(_Div["default"], {
      pos: "relative",
      d: rest.d,
      m: rest.m,
      w: rest.w,
      order: order,
      maxW: rest.maxW,
      minW: rest.minW,
      flexGrow: rest.flexGrow
    }, prefix, /*#__PURE__*/_react["default"].createElement(BasicInput, _extends({
      ref: ref
    }, rest, {
      $as: tag,
      $styleArray: output[1]
    })), suffix, isLoading && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "Loading",
      pos: "absolute",
      top: "50%",
      right: "0.75rem",
      transform: "translateY(-50%)",
      size: "16px"
    }));
  });
});

var BasicInput = (0, _styletronReact.styled)("input", function (props) {
  return _objectSpread({}, props.$styleArray);
});
Input.contextType = _ThemeContext.ThemeContext;
Input.defaultProps = {
  tag: "input",
  d: "flex",
  p: {
    x: "0.75rem"
  },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "2.5rem",
  w: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray900",
  placeholderTextColor: "light",
  transition: "true"
};
var _default = Input;
exports["default"] = _default;