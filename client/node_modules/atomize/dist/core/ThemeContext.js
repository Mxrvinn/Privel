"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.ThemeContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _THEME = _interopRequireDefault(require("./THEME"));

var _mergeObjects = _interopRequireDefault(require("../style-functions/mergeObjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeContext = /*#__PURE__*/_react["default"].createContext(_THEME["default"]);

exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var customTheme = (0, _mergeObjects["default"])(_THEME["default"], theme);
  return /*#__PURE__*/_react["default"].createElement(ThemeContext.Provider, {
    value: customTheme
  }, children);
};

exports.ThemeProvider = ThemeProvider;