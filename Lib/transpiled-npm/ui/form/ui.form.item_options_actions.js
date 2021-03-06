"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _uiForm = _interopRequireDefault(require("./ui.form.item_option_action"));

var _element_data = require("../../core/element_data");

var _extend = require("../../core/utils/extend");

var _uiForm2 = require("./ui.form.utils");

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

var WidgetOptionItemOptionAction = /*#__PURE__*/function (_ItemOptionAction) {
  _inherits(WidgetOptionItemOptionAction, _ItemOptionAction);

  var _super = _createSuper(WidgetOptionItemOptionAction);

  function WidgetOptionItemOptionAction() {
    _classCallCheck(this, WidgetOptionItemOptionAction);

    return _super.apply(this, arguments);
  }

  _createClass(WidgetOptionItemOptionAction, [{
    key: "tryExecute",
    value: function tryExecute() {
      var value = this._options.value;
      var instance = this.findInstance();

      if (instance) {
        instance.option(value);
        return true;
      }

      return false;
    }
  }]);

  return WidgetOptionItemOptionAction;
}(_uiForm.default);

var TabOptionItemOptionAction = /*#__PURE__*/function (_ItemOptionAction2) {
  _inherits(TabOptionItemOptionAction, _ItemOptionAction2);

  var _super2 = _createSuper(TabOptionItemOptionAction);

  function TabOptionItemOptionAction() {
    _classCallCheck(this, TabOptionItemOptionAction);

    return _super2.apply(this, arguments);
  }

  _createClass(TabOptionItemOptionAction, [{
    key: "tryExecute",
    value: function tryExecute() {
      var tabPanel = this.findInstance();

      if (tabPanel) {
        var _this$_options = this._options,
            optionName = _this$_options.optionName,
            item = _this$_options.item,
            value = _this$_options.value;

        var itemIndex = this._itemsRunTimeInfo.findItemIndexByItem(item);

        if (itemIndex >= 0) {
          tabPanel.option((0, _uiForm2.getFullOptionName)("items[".concat(itemIndex, "]"), optionName), value);
          return true;
        }
      }

      return false;
    }
  }]);

  return TabOptionItemOptionAction;
}(_uiForm.default);

var TabsOptionItemOptionAction = /*#__PURE__*/function (_ItemOptionAction3) {
  _inherits(TabsOptionItemOptionAction, _ItemOptionAction3);

  var _super3 = _createSuper(TabsOptionItemOptionAction);

  function TabsOptionItemOptionAction() {
    _classCallCheck(this, TabsOptionItemOptionAction);

    return _super3.apply(this, arguments);
  }

  _createClass(TabsOptionItemOptionAction, [{
    key: "tryExecute",
    value: function tryExecute() {
      var tabPanel = this.findInstance();

      if (tabPanel) {
        var value = this._options.value;
        tabPanel.option('dataSource', value);
        return true;
      }

      return false;
    }
  }]);

  return TabsOptionItemOptionAction;
}(_uiForm.default);

var ValidationRulesItemOptionAction = /*#__PURE__*/function (_ItemOptionAction4) {
  _inherits(ValidationRulesItemOptionAction, _ItemOptionAction4);

  var _super4 = _createSuper(ValidationRulesItemOptionAction);

  function ValidationRulesItemOptionAction() {
    _classCallCheck(this, ValidationRulesItemOptionAction);

    return _super4.apply(this, arguments);
  }

  _createClass(ValidationRulesItemOptionAction, [{
    key: "tryExecute",
    value: function tryExecute() {
      var item = this._options.item;
      var instance = this.findInstance();
      var validator = instance && (0, _element_data.data)(instance.$element()[0], 'dxValidator');

      if (validator && item) {
        var filterRequired = function filterRequired(item) {
          return item.type === 'required';
        };

        var oldContainsRequired = (validator.option('validationRules') || []).some(filterRequired);
        var newContainsRequired = (item.validationRules || []).some(filterRequired);

        if (!oldContainsRequired && !newContainsRequired || oldContainsRequired && newContainsRequired) {
          validator.option('validationRules', item.validationRules);
          return true;
        }
      }

      return false;
    }
  }]);

  return ValidationRulesItemOptionAction;
}(_uiForm.default);

var CssClassItemOptionAction = /*#__PURE__*/function (_ItemOptionAction5) {
  _inherits(CssClassItemOptionAction, _ItemOptionAction5);

  var _super5 = _createSuper(CssClassItemOptionAction);

  function CssClassItemOptionAction() {
    _classCallCheck(this, CssClassItemOptionAction);

    return _super5.apply(this, arguments);
  }

  _createClass(CssClassItemOptionAction, [{
    key: "tryExecute",
    value: function tryExecute() {
      var $itemContainer = this.findItemContainer();
      var _this$_options2 = this._options,
          previousValue = _this$_options2.previousValue,
          value = _this$_options2.value;

      if ($itemContainer) {
        $itemContainer.removeClass(previousValue).addClass(value);
        return true;
      }

      return false;
    }
  }]);

  return CssClassItemOptionAction;
}(_uiForm.default);

var tryCreateItemOptionAction = function tryCreateItemOptionAction(optionName, itemActionOptions) {
  switch (optionName) {
    case 'editorOptions':
    case 'buttonOptions':
      return new WidgetOptionItemOptionAction(itemActionOptions);

    case 'validationRules':
      return new ValidationRulesItemOptionAction(itemActionOptions);

    case 'cssClass':
      return new CssClassItemOptionAction(itemActionOptions);

    case 'badge':
    case 'disabled':
    case 'icon':
    case 'template':
    case 'tabTemplate':
    case 'title':
      return new TabOptionItemOptionAction((0, _extend.extend)(itemActionOptions, {
        optionName: optionName
      }));

    case 'tabs':
      return new TabsOptionItemOptionAction(itemActionOptions);

    default:
      return null;
  }
};

var _default = tryCreateItemOptionAction;
exports.default = _default;
module.exports = exports.default;