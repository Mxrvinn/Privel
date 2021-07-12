"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../constants/_variables");

var _functions = require("../functions/_functions");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseInputGroup = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  div {\n    margin-left: -1px;\n    touch-action: manipulation;\n    border-radius: 0;\n\n    input {\n      border-radius: 0;\n    }\n    :nth-child(1) input {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n    }\n    :last-child input {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n  }\n\n  button {\n    margin-left: -1px;\n    touch-action: manipulation;\n    border-radius: 0;\n\n    :hover {\n      z-index: 2;\n    }\n    :nth-child(1) {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n    }\n    :last-child {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n  }\n\n  :hover {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"])), function (props) {
  return props.d && _functions.functions.makeResponsive("display", props.d);
}, function (props) {
  return props.justify && _functions.functions.makeResponsive("justify-content", props.justify);
}, function (props) {
  return props.align && _functions.functions.makeResponsive("align-items", props.align);
}, function (props) {
  return props.flexDir && _functions.functions.makeResponsive("flex-direction", props.flexDir);
}, function (props) {
  return props.flexGrow && _functions.functions.makeResponsive("flex-grow", props.flexGrow);
}, function (props) {
  return props.flexWrap && _functions.functions.makeResponsive("flex-wrap", props.flexWrap);
}, function (props) {
  return props.m && _functions.functions.findDirection("margin", props.m);
}, function (props) {
  return props.p && _functions.functions.findDirection("padding", props.p);
}, function (props) {
  return props.rounded && _functions.functions.findRoundedDirection(props.rounded);
}, function (props) {
  return props.border && _functions.functions.findDirection("border", props.border);
}, function (props) {
  return props.borderColor && _functions.functions.makeResponsive("border-color", _variables.colorVar[props.borderColor]);
}, function (props) {
  return props.h && _functions.functions.makeResponsive("height", props.h);
}, function (props) {
  return props.maxH && _functions.functions.makeResponsive("max-height", props.maxH);
}, function (props) {
  return props.minH && _functions.functions.makeResponsive("min-height", props.minH);
}, function (props) {
  return props.w && _functions.functions.makeResponsive("width", props.w);
}, function (props) {
  return props.maxW && _functions.functions.makeResponsive("max-width", props.maxW);
}, function (props) {
  return props.minW && _functions.functions.makeResponsive("min-width", props.minW);
}, function (props) {
  return props.cursor && _functions.functions.makeResponsive("cursor", props.cursor);
}, function (props) {
  return props.bg && _functions.functions.makeResponsive("background", _variables.colorVar[props.bg]);
}, function (props) {
  return props.textColor && _functions.functions.makeResponsive("color", _variables.colorVar[props.textColor]);
}, function (props) {
  return props.textWeight && _functions.functions.makeResponsive("weight", props.textWeight);
}, function (props) {
  return props.textAlign && _functions.functions.makeResponsive("align", props.textAlign);
}, function (props) {
  return props.shadow && "box-shadow: ".concat(_variables.themeVars["shadows"][props.shadow]);
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return _variables.themeVars["rounded"][props.rounded];
}, function (props) {
  return props.hoverBg && _functions.functions.makeResponsive("background", _variables.colorVar[props.hoverBg]);
}, function (props) {
  return props.hoverTextColor && _functions.functions.makeResponsive("color", _variables.colorVar[props.hoverTextColor]);
}, function (props) {
  return props.hoverBorderColor && _functions.functions.makeResponsive("border-color", _variables.colorVar[props.hoverBorderColor]);
}, function (props) {
  return props.hoverShadow && "box-shadow: ".concat(_variables.themeVars["shadows"][props.hoverShadow]);
});

var InputGroup = function InputGroup(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement(BaseInputGroup, rest, rest.children);
};

InputGroup.defaultProps = {
  flexWrap: "wrap",
  rounded: "default"
};
var _default = InputGroup;
exports["default"] = _default;