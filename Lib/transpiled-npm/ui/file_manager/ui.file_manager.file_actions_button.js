"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _extend = require("../../core/utils/extend");

var _ui = _interopRequireDefault(require("../widget/ui.widget"));

var _button = _interopRequireDefault(require("../button"));

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

var FILE_MANAGER_FILE_ACTIONS_BUTTON = 'dx-filemanager-file-actions-button';
var FILE_MANAGER_FILE_ACTIONS_BUTTON_ACTIVATED = 'dx-filemanager-file-actions-button-activated';
var ACTIVE_STATE_CLASS = 'dx-state-active';

var FileManagerFileActionsButton = /*#__PURE__*/function (_Widget) {
  _inherits(FileManagerFileActionsButton, _Widget);

  var _super = _createSuper(FileManagerFileActionsButton);

  function FileManagerFileActionsButton() {
    _classCallCheck(this, FileManagerFileActionsButton);

    return _super.apply(this, arguments);
  }

  _createClass(FileManagerFileActionsButton, [{
    key: "_initMarkup",
    value: function _initMarkup() {
      var _this = this;

      this._createClickAction();

      var $button = (0, _renderer.default)('<div>');
      this.$element().append($button).addClass(FILE_MANAGER_FILE_ACTIONS_BUTTON);
      this._button = this._createComponent($button, _button.default, {
        icon: 'overflow',
        stylingMode: 'text',
        onClick: function onClick(e) {
          return _this._raiseClick(e);
        }
      });

      _get(_getPrototypeOf(FileManagerFileActionsButton.prototype), "_initMarkup", this).call(this);
    }
  }, {
    key: "_createClickAction",
    value: function _createClickAction() {
      this._clickAction = this._createActionByOption('onClick');
    }
  }, {
    key: "_raiseClick",
    value: function _raiseClick(e) {
      this._clickAction(e);
    }
  }, {
    key: "_getDefaultOptions",
    value: function _getDefaultOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(FileManagerFileActionsButton.prototype), "_getDefaultOptions", this).call(this), {
        cssClass: '',
        onClick: null
      });
    }
  }, {
    key: "_optionChanged",
    value: function _optionChanged(args) {
      var name = args.name;

      switch (name) {
        case 'cssClass':
          this.repaint();
          break;

        case 'onClick':
          this._createClickAction();

          break;

        default:
          _get(_getPrototypeOf(FileManagerFileActionsButton.prototype), "_optionChanged", this).call(this, args);

      }
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      var _this2 = this;

      this.$element().toggleClass(FILE_MANAGER_FILE_ACTIONS_BUTTON_ACTIVATED, active);
      setTimeout(function () {
        return _this2._button.$element().toggleClass(ACTIVE_STATE_CLASS, active);
      });
    }
  }]);

  return FileManagerFileActionsButton;
}(_ui.default);

var _default = FileManagerFileActionsButton;
exports.default = _default;
module.exports = exports.default;