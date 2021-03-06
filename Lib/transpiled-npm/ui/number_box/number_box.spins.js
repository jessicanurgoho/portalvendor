"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _events_engine = _interopRequireDefault(require("../../events/core/events_engine"));

var _button = _interopRequireDefault(require("../text_box/texteditor_button_collection/button"));

var _number_box = _interopRequireDefault(require("./number_box.spin"));

var _index = require("../../events/utils/index");

var _pointer = _interopRequireDefault(require("../../events/pointer"));

var _extend = require("../../core/utils/extend");

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

var SPIN_CLASS = 'dx-numberbox-spin';
var SPIN_CONTAINER_CLASS = 'dx-numberbox-spin-container';
var SPIN_TOUCH_FRIENDLY_CLASS = 'dx-numberbox-spin-touch-friendly';

var SpinButtons = /*#__PURE__*/function (_TextEditorButton) {
  _inherits(SpinButtons, _TextEditorButton);

  var _super = _createSuper(SpinButtons);

  function SpinButtons() {
    _classCallCheck(this, SpinButtons);

    return _super.apply(this, arguments);
  }

  _createClass(SpinButtons, [{
    key: "_attachEvents",
    value: function _attachEvents(instance, $spinContainer) {
      var editor = this.editor;
      var eventName = (0, _index.addNamespace)(_pointer.default.down, editor.NAME);
      var $spinContainerChildren = $spinContainer.children();

      var pointerDownAction = editor._createAction(function (e) {
        return editor._spinButtonsPointerDownHandler(e);
      });

      _events_engine.default.off($spinContainer, eventName);

      _events_engine.default.on($spinContainer, eventName, function (e) {
        return pointerDownAction({
          event: e
        });
      });

      _number_box.default.getInstance($spinContainerChildren.eq(0)).option('onChange', function (e) {
        return editor._spinUpChangeHandler(e);
      });

      _number_box.default.getInstance($spinContainerChildren.eq(1)).option('onChange', function (e) {
        return editor._spinDownChangeHandler(e);
      });
    }
  }, {
    key: "_create",
    value: function _create() {
      var editor = this.editor;
      var $spinContainer = (0, _renderer.default)('<div>').addClass(SPIN_CONTAINER_CLASS);
      var $spinUp = (0, _renderer.default)('<div>').appendTo($spinContainer);
      var $spinDown = (0, _renderer.default)('<div>').appendTo($spinContainer);

      var options = this._getOptions();

      this._addToContainer($spinContainer);

      editor._createComponent($spinUp, _number_box.default, (0, _extend.extend)({
        direction: 'up'
      }, options));

      editor._createComponent($spinDown, _number_box.default, (0, _extend.extend)({
        direction: 'down'
      }, options));

      this._legacyRender(editor.$element(), this._isTouchFriendly(), options.visible);

      return {
        instance: $spinContainer,
        $element: $spinContainer
      };
    }
  }, {
    key: "_getOptions",
    value: function _getOptions() {
      var editor = this.editor;

      var visible = this._isVisible();

      var disabled = editor.option('disabled');
      return {
        visible: visible,
        disabled: disabled
      };
    }
  }, {
    key: "_isVisible",
    value: function _isVisible() {
      var editor = this.editor;
      return _get(_getPrototypeOf(SpinButtons.prototype), "_isVisible", this).call(this) && editor.option('showSpinButtons');
    }
  }, {
    key: "_isTouchFriendly",
    value: function _isTouchFriendly() {
      var editor = this.editor;
      return editor.option('showSpinButtons') && editor.option('useLargeSpinButtons');
    } // TODO: get rid of it

  }, {
    key: "_legacyRender",
    value: function _legacyRender($editor, isTouchFriendly, isVisible) {
      $editor.toggleClass(SPIN_TOUCH_FRIENDLY_CLASS, isTouchFriendly);
      $editor.toggleClass(SPIN_CLASS, isVisible);
    }
  }, {
    key: "update",
    value: function update() {
      var shouldUpdate = _get(_getPrototypeOf(SpinButtons.prototype), "update", this).call(this);

      if (shouldUpdate) {
        var editor = this.editor,
            instance = this.instance;
        var $editor = editor.$element();

        var isVisible = this._isVisible();

        var isTouchFriendly = this._isTouchFriendly();

        var $spinButtons = instance.children();

        var spinUp = _number_box.default.getInstance($spinButtons.eq(0));

        var spinDown = _number_box.default.getInstance($spinButtons.eq(1));

        var options = this._getOptions();

        spinUp.option(options);
        spinDown.option(options);

        this._legacyRender($editor, isTouchFriendly, isVisible);
      }
    }
  }]);

  return SpinButtons;
}(_button.default);

exports.default = SpinButtons;
module.exports = exports.default;