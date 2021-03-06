"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../core/renderer"));

var _component_registrator = _interopRequireDefault(require("../core/component_registrator"));

var _dom_component = _interopRequireDefault(require("../core/dom_component"));

var _validation_summary = _interopRequireDefault(require("./validation_summary"));

var _validation_engine = _interopRequireDefault(require("./validation_engine"));

var _validator = _interopRequireDefault(require("./validator"));

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

var VALIDATION_ENGINE_CLASS = 'dx-validationgroup';
var VALIDATOR_CLASS = 'dx-validator';
var VALIDATION_SUMMARY_CLASS = 'dx-validationsummary';

var ValidationGroup = /*#__PURE__*/function (_DOMComponent) {
  _inherits(ValidationGroup, _DOMComponent);

  var _super = _createSuper(ValidationGroup);

  function ValidationGroup() {
    _classCallCheck(this, ValidationGroup);

    return _super.apply(this, arguments);
  }

  _createClass(ValidationGroup, [{
    key: "_getDefaultOptions",
    value: function _getDefaultOptions() {
      return _get(_getPrototypeOf(ValidationGroup.prototype), "_getDefaultOptions", this).call(this);
      /**
      * @name dxValidationGroupOptions.rtlEnabled
      * @hidden
      */

      /**
      * @name dxValidationGroupMethods.beginUpdate
      * @publicName beginUpdate()
      * @hidden
      */

      /**
      * @name dxValidationGroupMethods.defaultOptions
      * @publicName defaultOptions(rule)
      * @hidden
      */

      /**
      * @name dxValidationGroupMethods.endUpdate
      * @publicName endUpdate()
      * @hidden
      */
    }
  }, {
    key: "_init",
    value: function _init() {
      _get(_getPrototypeOf(ValidationGroup.prototype), "_init", this).call(this);

      _validation_engine.default.addGroup(this);
    }
  }, {
    key: "_initMarkup",
    value: function _initMarkup() {
      var $element = this.$element();
      $element.addClass(VALIDATION_ENGINE_CLASS);
      $element.find(".".concat(VALIDATOR_CLASS)).each(function (_, validatorContainer) {
        _validator.default.getInstance((0, _renderer.default)(validatorContainer))._initGroupRegistration();
      });
      $element.find(".".concat(VALIDATION_SUMMARY_CLASS)).each(function (_, summaryContainer) {
        _validation_summary.default.getInstance((0, _renderer.default)(summaryContainer))._initGroupRegistration();
      });

      _get(_getPrototypeOf(ValidationGroup.prototype), "_initMarkup", this).call(this);
    }
  }, {
    key: "validate",
    value: function validate() {
      return _validation_engine.default.validateGroup(this);
    }
  }, {
    key: "reset",
    value: function reset() {
      return _validation_engine.default.resetGroup(this);
    }
  }, {
    key: "_dispose",
    value: function _dispose() {
      _validation_engine.default.removeGroup(this);

      this.$element().removeClass(VALIDATION_ENGINE_CLASS);

      _get(_getPrototypeOf(ValidationGroup.prototype), "_dispose", this).call(this);
    }
  }, {
    key: "_useTemplates",
    value: function _useTemplates() {
      return false;
    }
  }]);

  return ValidationGroup;
}(_dom_component.default);

(0, _component_registrator.default)('dxValidationGroup', ValidationGroup);
var _default = ValidationGroup;
exports.default = _default;
module.exports = exports.default;