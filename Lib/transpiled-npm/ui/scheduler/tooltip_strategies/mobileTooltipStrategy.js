"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.MobileTooltipStrategy = void 0;

var _overlay = _interopRequireDefault(require("../../overlay"));

var _tooltipStrategyBase = require("./tooltipStrategyBase");

var _window = require("../../../core/utils/window");

var _renderer = _interopRequireDefault(require("../../../core/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SLIDE_PANEL_CLASS_NAME = 'dx-scheduler-overlay-panel';
var MAX_TABLET_OVERLAY_HEIGHT_FACTOR = 0.9;
var MAX_HEIGHT = {
  PHONE: 250,
  TABLET: '90%',
  DEFAULT: 'auto'
};
var MAX_WIDTH = {
  PHONE: '100%',
  TABLET: '80%'
};
var animationConfig = {
  show: {
    type: 'slide',
    duration: 300,
    from: {
      position: {
        my: 'top',
        at: 'bottom',
        of: (0, _window.getWindow)()
      }
    },
    to: {
      position: {
        my: 'center',
        at: 'center',
        of: (0, _window.getWindow)()
      }
    }
  },
  hide: {
    type: 'slide',
    duration: 300,
    to: {
      position: {
        my: 'top',
        at: 'bottom',
        of: (0, _window.getWindow)()
      }
    },
    from: {
      position: {
        my: 'center',
        at: 'center',
        of: (0, _window.getWindow)()
      }
    }
  }
};

var createPhoneDeviceConfig = function createPhoneDeviceConfig(listHeight) {
  return {
    shading: false,
    width: MAX_WIDTH.PHONE,
    height: listHeight > MAX_HEIGHT.PHONE ? MAX_HEIGHT.PHONE : MAX_HEIGHT.DEFAULT,
    position: {
      my: 'bottom',
      at: 'bottom',
      of: (0, _window.getWindow)()
    }
  };
};

var createTabletDeviceConfig = function createTabletDeviceConfig(listHeight) {
  var currentMaxHeight = (0, _renderer.default)((0, _window.getWindow)()).height() * MAX_TABLET_OVERLAY_HEIGHT_FACTOR;
  return {
    shading: true,
    width: MAX_WIDTH.TABLET,
    height: listHeight > currentMaxHeight ? MAX_HEIGHT.TABLET : MAX_HEIGHT.DEFAULT,
    position: {
      my: 'center',
      at: 'center',
      of: (0, _window.getWindow)()
    }
  };
};

var MobileTooltipStrategy = /*#__PURE__*/function (_TooltipStrategyBase) {
  _inherits(MobileTooltipStrategy, _TooltipStrategyBase);

  var _super = _createSuper(MobileTooltipStrategy);

  function MobileTooltipStrategy() {
    _classCallCheck(this, MobileTooltipStrategy);

    return _super.apply(this, arguments);
  }

  _createClass(MobileTooltipStrategy, [{
    key: "_shouldUseTarget",
    value: function _shouldUseTarget() {
      return false;
    }
  }, {
    key: "_onShowing",
    value: function _onShowing() {
      var isTabletWidth = (0, _renderer.default)((0, _window.getWindow)()).width() > 700;

      this._tooltip.option('height', MAX_HEIGHT.DEFAULT);

      var listHeight = this._list.$element().outerHeight();

      this._tooltip.option(isTabletWidth ? createTabletDeviceConfig(listHeight) : createPhoneDeviceConfig(listHeight));
    }
  }, {
    key: "_createTooltip",
    value: function _createTooltip(target, dataList) {
      var _this = this;

      var element = this._createTooltipElement(SLIDE_PANEL_CLASS_NAME);

      return this._options.createComponent(element, _overlay.default, {
        target: (0, _window.getWindow)(),
        closeOnOutsideClick: true,
        animation: animationConfig,
        onShowing: function onShowing() {
          return _this._onShowing();
        },
        onShown: this._onShown.bind(this),
        contentTemplate: this._getContentTemplate(dataList)
      });
    }
  }]);

  return MobileTooltipStrategy;
}(_tooltipStrategyBase.TooltipStrategyBase);

exports.MobileTooltipStrategy = MobileTooltipStrategy;