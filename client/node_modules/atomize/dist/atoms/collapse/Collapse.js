"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _Div = _interopRequireDefault(require("../div/Div"));

var _excluded = ["p", "children", "isOpen"];

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

var Collapse = /*#__PURE__*/function (_Component) {
  _inherits(Collapse, _Component);

  var _super = _createSuper(Collapse);

  function Collapse() {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.call(this);
    _this.state = {
      defaultHeight: 0
    };
    _this.innerDiv = /*#__PURE__*/_react["default"].createRef();
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Set State for Height on Enter
   */


  _createClass(Collapse, [{
    key: "onEntering",
    value: function onEntering() {
      this.setState({
        defaultHeight: this.innerDiv.current.clientHeight
      }); // Start Function if recieved a onEntering Props

      var onEntering = this.props.onEntering;
      if (onEntering) onEntering();
    }
    /**
     * Set State for Height on Exit
     */

  }, {
    key: "onExiting",
    value: function onExiting() {
      this.setState({
        defaultHeight: this.innerDiv.current.clientHeight
      }); // Start Function if recieved a onExiting Props

      var onExiting = this.props.onExiting;
      if (onExiting) onExiting();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var defaultHeight = this.state.defaultHeight;

      var _this$props = this.props,
          p = _this$props.p,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          rest = _objectWithoutProperties(_this$props, _excluded);
      /**
       * Duration for the transition
       */


      var duration = 400;
      /**
       * Default Style for Backlayer
       */

      var defaultStyle = {
        transition: "height ".concat(duration, "ms ease-in-out"),
        height: 0,
        opacity: 0
      };
      /**
       * Trasition Styles for Backlayer
       */

      var transitionStyles = {
        entering: {
          opacity: 0,
          height: 0
        },
        entered: {
          opacity: 1,
          height: defaultHeight
        },
        exiting: {
          opacity: 0,
          height: 0
        },
        exited: {
          opacity: 0,
          height: 0
        }
      };
      return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": isOpen,
        timeout: duration,
        onEntering: this.onEntering,
        onExiting: this.onExiting
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({}, rest, {
          style: _objectSpread(_objectSpread({}, defaultStyle), transitionStyles[state]),
          transition: true
        }), /*#__PURE__*/_react["default"].createElement("div", {
          ref: _this2.innerDiv
        }, children));
      });
    }
  }]);

  return Collapse;
}(_react.Component);

exports["default"] = Collapse;
Collapse.defaultProps = {
  m: {
    y: 0
  },
  p: {
    y: 0
  },
  overflow: "hidden"
};