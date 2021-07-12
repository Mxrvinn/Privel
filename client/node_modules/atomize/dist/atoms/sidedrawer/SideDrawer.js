"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _Div = _interopRequireDefault(require("../div/Div"));

var _excluded = ["children", "isOpen", "onClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/**
 * Duration for the transition
 */
var duration = 300;
/**
 * Default Style for Backlayer
 */

var defaultbackLayerStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0
};
/**
 * Trasition Styles for Backlayer
 */

var backLayerTransitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 0.2
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};
/**
 * Default Style for SideDrawerContent
 */

var defaultSideDrawerContentStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  overflowY: "auto",
  overflowX: "hidden"
};
/**
 * Trasition Styles for SideDrawerContent
 */

var transitionSideDrawerContentStyles = {
  entering: {
    opacity: 0,
    transform: "translateX(100%)"
  },
  entered: {
    opacity: 1,
    transform: "translateX(0)"
  },
  exiting: {
    opacity: 0,
    transform: "translateX(100%)"
  },
  exited: {
    opacity: 0,
    transform: "translateX(100%)"
  }
};

var SideDrawer = /*#__PURE__*/function (_Component) {
  _inherits(SideDrawer, _Component);

  var _super = _createSuper(SideDrawer);

  function SideDrawer(props) {
    var _this;

    _classCallCheck(this, SideDrawer);

    _this = _super.call(this, props);
    _this.disableBodyScroll = _this.disableBodyScroll.bind(_assertThisInitialized(_this));
    _this.enableBodyScroll = _this.enableBodyScroll.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Disable the body scroll when Opened
   */


  _createClass(SideDrawer, [{
    key: "disableBodyScroll",
    value: function disableBodyScroll() {
      document.querySelector("body").style.overflow = "hidden"; // Start Function if recieved a onEntering Props

      var onEntering = this.props.onEntering;
      if (onEntering) onEntering();
    }
    /**
     * Enable the body scroll when Closed
     */

  }, {
    key: "enableBodyScroll",
    value: function enableBodyScroll() {
      document.querySelector("body").style.overflow = "auto"; // Start Function if recieved a onExiting Props

      var onExiting = this.props.onExiting;
      if (onExiting) onExiting();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.querySelector("body").style.overflow = "auto";
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          rest = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": isOpen,
        timeout: duration,
        onEntering: this.disableBodyScroll,
        onExiting: this.enableBodyScroll,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Div["default"], {
          style: _objectSpread(_objectSpread({}, defaultbackLayerStyle), backLayerTransitionStyles[state]),
          tabIndex: "-1",
          pos: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          bg: "black",
          opacity: "0.2",
          zIndex: "1000",
          cursor: "pointer",
          onClick: onClose
        }), /*#__PURE__*/_react["default"].createElement(_Div["default"], {
          style: _objectSpread(_objectSpread({}, defaultSideDrawerContentStyle), transitionSideDrawerContentStyles[state]),
          pos: "fixed",
          top: "0",
          right: "0",
          h: "100vh",
          d: "flex",
          bg: "white",
          zIndex: "1001"
        }, /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
          onClick: function onClick(e) {
            e.stopPropagation();
          }
        }, rest, {
          zIndex: "1"
        }), children)));
      });
    }
  }]);

  return SideDrawer;
}(_react.Component);

SideDrawer.defaultProps = {
  pos: "relative",
  w: {
    xs: "100vw",
    sm: "24rem"
  },
  bg: "white",
  p: "1.5rem",
  onClose: function onClose() {}
};
var _default = SideDrawer;
exports["default"] = _default;