"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styletronReact = require("styletron-react");

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _excluded = ["disabled", "undetermine", "m", "size", "activeColor", "inactiveColor", "isLoading", "checked"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var disabled = props.disabled,
      undetermine = props.undetermine,
      m = props.m,
      size = props.size,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      isLoading = props.isLoading,
      checked = props.checked,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CheckboxInput, _extends({
    type: "checkbox",
    disabled: disabled,
    undetermine: undetermine,
    checked: checked,
    ref: ref
  }, rest)), !undetermine && !disabled && (checked ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    m: m,
    size: size,
    color: activeColor,
    name: isLoading ? "Loading" : "CBChecked"
  }) : /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    m: m,
    size: size,
    color: inactiveColor,
    name: isLoading ? "Loading" : "CBUnchecked"
  })), undetermine && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    m: m,
    size: size,
    color: activeColor,
    name: isLoading ? "Loading" : "CBIndetermine"
  }), disabled && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    m: m,
    size: size,
    color: inactiveColor,
    name: isLoading ? "Loading" : "CBDisabled"
  }));
});

var CheckboxInput = (0, _styletronReact.styled)("input", {
  display: "none"
});
Checkbox.defaultProps = {
  cursor: "pointer",
  m: {
    r: "0.5rem"
  },
  color: "black",
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};
var _default = Checkbox;
exports["default"] = _default;