"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTransitionGroup = require("react-transition-group");

var _styletronReact = require("styletron-react");

var _ThemeContext = require("../../core/ThemeContext");

var _Div = _interopRequireDefault(require("../div/Div"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu.style"));

var _excluded = ["w", "minW", "maxW", "m", "children", "menu", "isOpen", "onClick", "targetHover", "prefix", "openSuffix", "closeSuffix", "isLoading", "borderColor", "focusBorderColor", "bg", "focusBg", "direction", "zIndex"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Duration for the transition
 */
var duration = 300;
/**
 * Default Style for DropdownMenu
 */

var defaultMenuStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  transform: "scaleY(1)"
};
/**
 * Trasition Styles for DropdownMenu
 */

var menuTransitionStyles = {
  entering: {
    opacity: 0,
    transform: "scaleY(0)"
  },
  entered: {
    opacity: 1,
    transform: "scaleY(1)"
  },
  exiting: {
    opacity: 0,
    transform: "scaleY(0)"
  },
  exited: {
    opacity: 0,
    transform: "scaleY(0)"
  }
};
/**
 * Styling the direction of dropdown menu
 */

var BaseDropdownMenu = (0, _styletronReact.styled)(_Div["default"], function (props) {
  return _objectSpread({}, props.$style);
});

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      isHovered: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleOutsideClick = _this.handleOutsideClick.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.onHover = _this.onHover.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onClick = _this$props.onClick,
          isLoading = _this$props.isLoading;

      if (isLoading) {
        return;
      }

      if (!onClick) {
        return;
      }

      if (!isOpen) {
        document.addEventListener("mousedown", this.handleOutsideClick, false);
      } else {
        this.removeEvents;
      }

      onClick();
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(e) {
      if (_reactDom["default"].findDOMNode(this).contains(e.target)) {
        return;
      }

      this.handleClick();
    }
  }, {
    key: "onHover",
    value: function onHover(value) {
      var _this$props2 = this.props,
          targetHover = _this$props2.targetHover,
          isLoading = _this$props2.isLoading;

      if (isLoading) {
        return;
      }

      if (!targetHover) {
        return;
      }

      this.setState({
        isHovered: value
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode != 13) {
        return;
      }

      var _this$props3 = this.props,
          onClick = _this$props3.onClick,
          targetHover = _this$props3.targetHover;

      if (onClick) {
        this.handleClick();
      } else if (targetHover) {
        this.onHover();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          w = _this$props4.w,
          minW = _this$props4.minW,
          maxW = _this$props4.maxW,
          m = _this$props4.m,
          children = _this$props4.children,
          menu = _this$props4.menu,
          isOpen = _this$props4.isOpen,
          onClick = _this$props4.onClick,
          targetHover = _this$props4.targetHover,
          prefix = _this$props4.prefix,
          openSuffix = _this$props4.openSuffix,
          closeSuffix = _this$props4.closeSuffix,
          isLoading = _this$props4.isLoading,
          borderColor = _this$props4.borderColor,
          focusBorderColor = _this$props4.focusBorderColor,
          bg = _this$props4.bg,
          focusBg = _this$props4.focusBg,
          direction = _this$props4.direction,
          zIndex = _this$props4.zIndex,
          rest = _objectWithoutProperties(_this$props4, _excluded);

      var isHovered = this.state.isHovered;
      var menustyle = (0, _DropdownMenu["default"])(direction);
      var showDropdown = isOpen || isHovered;
      return /*#__PURE__*/_react["default"].createElement(_Div["default"], {
        w: w,
        minW: minW,
        maxW: maxW,
        m: m,
        onMouseEnter: function onMouseEnter() {
          _this2.onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.onHover(false);
        },
        zIndex: zIndex,
        pos: "relative"
      }, /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
        tag: "button",
        tabIndex: "0",
        w: "100%",
        ref: function ref(node) {
          return _this2.node = node;
        },
        onClick: this.handleClick,
        onKeyDown: this.onKeyDown,
        borderColor: showDropdown ? focusBorderColor : borderColor,
        bg: showDropdown ? focusBg : bg
      }, rest), prefix, children, isLoading ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "Loading",
        color: "gray600",
        size: "18px"
      }) : isOpen ? openSuffix : closeSuffix), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": showDropdown,
        timeout: duration,
        onExiting: this.removeEvents,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(BaseDropdownMenu, {
          $style: menustyle,
          zIndex: "10",
          tabIndex: "-1",
          style: _objectSpread(_objectSpread({}, defaultMenuStyle), menuTransitionStyles[state]),
          transition: true,
          pos: "absolute",
          shadow: "4",
          minW: "100%",
          rounded: "md",
          bg: "white"
        }, menu);
      }));
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  tag: "div",
  d: "flex",
  align: "center",
  textColor: "medium",
  textWeight: "500",
  justify: "space-between",
  p: {
    x: "0.75rem"
  },
  h: "2.5rem",
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  w: "100%",
  bg: "white",
  focusBg: "gray100",
  focusBorderColor: "gray800",
  cursor: "pointer",
  onClick: function onClick() {},
  openSuffix: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "UpArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  }),
  closeSuffix: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "DownArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  })
};
Dropdown.contextType = _ThemeContext.ThemeContext;
var _default = Dropdown;
exports["default"] = _default;