"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _ui = _interopRequireDefault(require("../widget/ui.widget"));

var _scroll_view = _interopRequireDefault(require("../scroll_view"));

var _diagram = require("./diagram.importer");

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

var DiagramScrollView = /*#__PURE__*/function (_Widget) {
  _inherits(DiagramScrollView, _Widget);

  var _super = _createSuper(DiagramScrollView);

  function DiagramScrollView() {
    _classCallCheck(this, DiagramScrollView);

    return _super.apply(this, arguments);
  }

  _createClass(DiagramScrollView, [{
    key: "_init",
    value: function _init() {
      _get(_getPrototypeOf(DiagramScrollView.prototype), "_init", this).call(this);

      var _getDiagram = (0, _diagram.getDiagram)(),
          EventDispatcher = _getDiagram.EventDispatcher;

      this.onScroll = new EventDispatcher();

      this._createOnCreateDiagramAction();
    }
  }, {
    key: "_initMarkup",
    value: function _initMarkup() {
      var _this = this;

      _get(_getPrototypeOf(DiagramScrollView.prototype), "_initMarkup", this).call(this);

      var $scrollViewWrapper = (0, _renderer.default)('<div>').appendTo(this.$element());
      this._scrollView = this._createComponent($scrollViewWrapper, _scroll_view.default, {
        direction: 'both',
        bounceEnabled: false,
        onScroll: function onScroll(_ref) {
          var scrollOffset = _ref.scrollOffset;

          _this._raiseOnScroll(scrollOffset.left, scrollOffset.top);
        }
      });

      this._onCreateDiagramAction({
        $parent: (0, _renderer.default)(this._scrollView.content()),
        scrollView: this
      });
    }
  }, {
    key: "setScroll",
    value: function setScroll(left, top) {
      this._scrollView.scrollTo({
        left: left,
        top: top
      });

      this._raiseOnScrollWithoutPoint();
    }
  }, {
    key: "offsetScroll",
    value: function offsetScroll(left, top) {
      this._scrollView.scrollBy({
        left: left,
        top: top
      });

      this._raiseOnScrollWithoutPoint();
    }
  }, {
    key: "getSize",
    value: function getSize() {
      var _getDiagram2 = (0, _diagram.getDiagram)(),
          Size = _getDiagram2.Size;

      var $element = this._scrollView.$element();

      return new Size(Math.floor($element.width()), Math.floor($element.height()));
    }
  }, {
    key: "getScrollContainer",
    value: function getScrollContainer() {
      return this._scrollView.$element()[0];
    }
  }, {
    key: "getScrollBarWidth",
    value: function getScrollBarWidth() {
      return 0;
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {}
  }, {
    key: "_raiseOnScroll",
    value: function _raiseOnScroll(left, top) {
      var _getDiagram3 = (0, _diagram.getDiagram)(),
          Point = _getDiagram3.Point;

      this.onScroll.raise('notifyScrollChanged', function () {
        return new Point(left, top);
      });
    }
  }, {
    key: "_raiseOnScrollWithoutPoint",
    value: function _raiseOnScrollWithoutPoint() {
      var _this2 = this;

      var _getDiagram4 = (0, _diagram.getDiagram)(),
          Point = _getDiagram4.Point;

      this.onScroll.raise('notifyScrollChanged', function () {
        return new Point(_this2._scrollView.scrollLeft(), _this2._scrollView.scrollTop());
      });
    }
  }, {
    key: "_createOnCreateDiagramAction",
    value: function _createOnCreateDiagramAction() {
      this._onCreateDiagramAction = this._createActionByOption('onCreateDiagram');
    }
  }, {
    key: "_optionChanged",
    value: function _optionChanged(args) {
      switch (args.name) {
        case 'onCreateDiagram':
          this._createOnCreateDiagramAction();

          break;

        default:
          _get(_getPrototypeOf(DiagramScrollView.prototype), "_optionChanged", this).call(this, args);

      }
    }
  }]);

  return DiagramScrollView;
}(_ui.default);

var _default = DiagramScrollView;
exports.default = _default;
module.exports = exports.default;