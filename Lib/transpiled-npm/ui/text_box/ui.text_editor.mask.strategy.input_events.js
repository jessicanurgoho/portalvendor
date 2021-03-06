"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _uiText_editorMaskStrategy = _interopRequireDefault(require("./ui.text_editor.mask.strategy.base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var DELETE_INPUT_TYPE = 'deleteContentBackward';

var InputEventsMaskStrategy = /*#__PURE__*/function (_BaseMaskStrategy) {
  _inherits(InputEventsMaskStrategy, _BaseMaskStrategy);

  var _super = _createSuper(InputEventsMaskStrategy);

  function InputEventsMaskStrategy() {
    _classCallCheck(this, InputEventsMaskStrategy);

    return _super.apply(this, arguments);
  }

  _createClass(InputEventsMaskStrategy, [{
    key: "_getStrategyName",
    value: function _getStrategyName() {
      return 'inputEvents';
    }
  }, {
    key: "getHandleEventNames",
    value: function getHandleEventNames() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(InputEventsMaskStrategy.prototype), "getHandleEventNames", this).call(this)), ['beforeInput']);
    }
  }, {
    key: "_beforeInputHandler",
    value: function _beforeInputHandler() {
      this._prevCaret = this.editorCaret();
    }
  }, {
    key: "_inputHandler",
    value: function _inputHandler(_ref) {
      var originalEvent = _ref.originalEvent;

      if (!originalEvent) {
        return;
      }

      var inputType = originalEvent.inputType,
          data = originalEvent.data;
      var currentCaret = this.editorCaret();

      if (inputType === DELETE_INPUT_TYPE) {
        var length = this._prevCaret.end - this._prevCaret.start || 1;
        this.editor.setBackwardDirection();

        this._updateEditorMask({
          start: currentCaret.start,
          length: length,
          text: this._getEmptyString(length)
        });
      } else {
        if (!currentCaret.end) {
          return;
        }

        this._autoFillHandler(originalEvent);

        this.editorCaret(currentCaret);

        var _length = this._prevCaret.end - this._prevCaret.start;

        var newData = data + (_length ? this._getEmptyString(_length - data.length) : '');
        this.editor.setForwardDirection();

        var hasValidChars = this._updateEditorMask({
          start: this._prevCaret.start,
          length: _length || newData.length,
          text: newData
        });

        if (!hasValidChars) {
          this.editorCaret(this._prevCaret);
        }
      }
    }
  }, {
    key: "_getEmptyString",
    value: function _getEmptyString(length) {
      return Array(length + 1).join(' ');
    }
  }, {
    key: "_updateEditorMask",
    value: function _updateEditorMask(args) {
      var textLength = args.text.length;

      var updatedCharsCount = this.editor._handleChain(args);

      if (this.editor.isForwardDirection()) {
        var _this$editorCaret = this.editorCaret(),
            start = _this$editorCaret.start,
            end = _this$editorCaret.end;

        var correction = updatedCharsCount - textLength;

        if (start <= updatedCharsCount && updatedCharsCount > 1) {
          this.editorCaret({
            start: start + correction,
            end: end + correction
          });
        }

        this.editor.isForwardDirection() && this.editor._adjustCaret();
      }

      this.editor._displayMask();

      return !!updatedCharsCount;
    }
  }]);

  return InputEventsMaskStrategy;
}(_uiText_editorMaskStrategy.default);

var _default = InputEventsMaskStrategy;
exports.default = _default;
module.exports = exports.default;