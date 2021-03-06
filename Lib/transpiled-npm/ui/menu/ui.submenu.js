"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _common = require("../../core/utils/common");

var _element = require("../../core/element");

var _position = _interopRequireDefault(require("../../animation/position"));

var _extend = require("../../core/utils/extend");

var _context_menu = _interopRequireDefault(require("../context_menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DX_CONTEXT_MENU_CONTENT_DELIMITER_CLASS = 'dx-context-menu-content-delimiter';
var DX_SUBMENU_CLASS = 'dx-submenu';

var Submenu = /*#__PURE__*/function (_ContextMenu) {
  _inherits(Submenu, _ContextMenu);

  var _super = _createSuper(Submenu);

  function Submenu() {
    _classCallCheck(this, Submenu);

    return _super.apply(this, arguments);
  }

  _createClass(Submenu, [{
    key: "_getDefaultOptions",
    value: function _getDefaultOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(Submenu.prototype), "_getDefaultOptions", this).call(this), {
        orientation: 'horizontal',
        tabIndex: null,
        onHoverStart: _common.noop
      });
    }
  }, {
    key: "_initDataAdapter",
    value: function _initDataAdapter() {
      this._dataAdapter = this.option('_dataAdapter');

      if (!this._dataAdapter) {
        _get(_getPrototypeOf(Submenu.prototype), "_initDataAdapter", this).call(this);
      }
    }
  }, {
    key: "_renderContentImpl",
    value: function _renderContentImpl() {
      this._renderContextMenuOverlay();

      _get(_getPrototypeOf(Submenu.prototype), "_renderContentImpl", this).call(this);

      var node = this._dataAdapter.getNodeByKey(this.option('_parentKey'));

      node && this._renderItems(this._getChildNodes(node));

      this._renderDelimiter();
    }
  }, {
    key: "_renderDelimiter",
    value: function _renderDelimiter() {
      this.$contentDelimiter = (0, _renderer.default)('<div>').appendTo(this._itemContainer()).addClass(DX_CONTEXT_MENU_CONTENT_DELIMITER_CLASS);
    }
  }, {
    key: "_getOverlayOptions",
    value: function _getOverlayOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(Submenu.prototype), "_getOverlayOptions", this).call(this), {
        onPositioned: this._overlayPositionedActionHandler.bind(this)
      });
    }
  }, {
    key: "_overlayPositionedActionHandler",
    value: function _overlayPositionedActionHandler(arg) {
      this._showDelimiter(arg);
    }
  }, {
    key: "_hoverEndHandler",
    value: function _hoverEndHandler(e) {
      _get(_getPrototypeOf(Submenu.prototype), "_hoverEndHandler", this).call(this, e);

      this._toggleFocusClass(false, e.currentTarget);
    }
  }, {
    key: "_isMenuHorizontal",
    value: function _isMenuHorizontal() {
      return this.option('orientation') === 'horizontal';
    }
  }, {
    key: "_hoverStartHandler",
    value: function _hoverStartHandler(e) {
      var hoverStartAction = this.option('onHoverStart');
      hoverStartAction(e);

      _get(_getPrototypeOf(Submenu.prototype), "_hoverStartHandler", this).call(this, e);

      this._toggleFocusClass(true, e.currentTarget);
    }
  }, {
    key: "_drawSubmenu",
    value: function _drawSubmenu($rootItem) {
      this._actions.onShowing({
        rootItem: (0, _element.getPublicElement)($rootItem),
        submenu: this
      });

      _get(_getPrototypeOf(Submenu.prototype), "_drawSubmenu", this).call(this, $rootItem);

      this._actions.onShown({
        rootItem: (0, _element.getPublicElement)($rootItem),
        submenu: this
      });
    }
  }, {
    key: "_hideSubmenu",
    value: function _hideSubmenu($rootItem) {
      this._actions.onHiding({
        cancel: true,
        rootItem: (0, _element.getPublicElement)($rootItem),
        submenu: this
      });

      _get(_getPrototypeOf(Submenu.prototype), "_hideSubmenu", this).call(this, $rootItem);

      this._actions.onHidden({
        rootItem: (0, _element.getPublicElement)($rootItem),
        submenu: this
      });
    } // TODO: try to simplify it

  }, {
    key: "_showDelimiter",
    value: function _showDelimiter(arg) {
      if (!this.$contentDelimiter) {
        return;
      }

      var $submenu = this._itemContainer().children(".".concat(DX_SUBMENU_CLASS)).eq(0);

      var $rootItem = this.option('position').of;
      var position = {
        of: $submenu
      };
      var containerOffset = arg.position;
      var vLocation = containerOffset.v.location;
      var hLocation = containerOffset.h.location;
      var rootOffset = $rootItem.offset();
      var offsetLeft = Math.round(rootOffset.left);
      var offsetTop = Math.round(rootOffset.top);
      var rootWidth = $rootItem.width();
      var rootHeight = $rootItem.height();
      var submenuWidth = $submenu.width();
      var submenuHeight = $submenu.height();
      this.$contentDelimiter.css('display', 'block');
      this.$contentDelimiter.width(this._isMenuHorizontal() ? rootWidth < submenuWidth ? rootWidth - 2 : submenuWidth : 2);
      this.$contentDelimiter.height(this._isMenuHorizontal() ? 2 : rootHeight < submenuHeight ? rootHeight - 2 : submenuHeight);

      if (this._isMenuHorizontal()) {
        if (vLocation > offsetTop) {
          if (Math.round(hLocation) === offsetLeft) {
            position.offset = '1 -1';
            position.at = position.my = 'left top';
          } else {
            position.offset = '-1 -1';
            position.at = position.my = 'right top';
          }
        } else {
          this.$contentDelimiter.height(5);

          if (Math.round(hLocation) === offsetLeft) {
            position.offset = '1 4';
            position.at = position.my = 'left bottom';
          } else {
            position.offset = '-1 2';
            position.at = position.my = 'right bottom';
          }
        }
      } else {
        if (hLocation > offsetLeft) {
          if (Math.round(vLocation) === offsetTop) {
            position.offset = '-1 1';
            position.at = position.my = 'left top';
          } else {
            position.offset = '-1 -1';
            position.at = position.my = 'left bottom';
          }
        } else {
          if (Math.round(vLocation) === offsetTop) {
            position.offset = '1 1';
            position.at = position.my = 'right top';
          } else {
            position.offset = '1 -1';
            position.at = position.my = 'right bottom';
          }
        }
      }

      _position.default.setup(this.$contentDelimiter, position);
    }
  }, {
    key: "_getContextMenuPosition",
    value: function _getContextMenuPosition() {
      return this.option('position');
    }
  }, {
    key: "isOverlayVisible",
    value: function isOverlayVisible() {
      return this._overlay.option('visible');
    }
  }, {
    key: "getOverlayContent",
    value: function getOverlayContent() {
      return this._overlay.$content();
    }
  }]);

  return Submenu;
}(_context_menu.default);

var _default = Submenu;
exports.default = _default;
module.exports = exports.default;