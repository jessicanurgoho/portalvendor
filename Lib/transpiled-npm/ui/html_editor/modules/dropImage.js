"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _devextremeQuill = _interopRequireDefault(require("devextreme-quill"));

var _events_engine = _interopRequireDefault(require("../../../events/core/events_engine"));

var _index = require("../../../events/utils/index");

var _iterator = require("../../../core/utils/iterator");

var _browser = _interopRequireDefault(require("../../../core/utils/browser"));

var _window = require("../../../core/utils/window");

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

var DropImageModule = {};

if (_devextremeQuill.default) {
  var BaseModule = _devextremeQuill.default.import('core/module');

  DropImageModule = /*#__PURE__*/function (_BaseModule) {
    _inherits(DropImageModule, _BaseModule);

    var _super = _createSuper(DropImageModule);

    function DropImageModule(quill, options) {
      var _this;

      _classCallCheck(this, DropImageModule);

      _this = _super.call(this, quill, options);
      _this.editorInstance = options.editorInstance;
      var widgetName = _this.editorInstance.NAME;

      _events_engine.default.on(_this.quill.root, (0, _index.addNamespace)('dragover', widgetName), _this._dragOverHandler.bind(_assertThisInitialized(_this)));

      _events_engine.default.on(_this.quill.root, (0, _index.addNamespace)('drop', widgetName), _this._dropHandler.bind(_assertThisInitialized(_this)));

      _events_engine.default.on(_this.quill.root, (0, _index.addNamespace)('paste', widgetName), _this._pasteHandler.bind(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(DropImageModule, [{
      key: "_dragOverHandler",
      value: function _dragOverHandler(e) {
        if (_browser.default.msie) {
          e.preventDefault();
        }
      }
    }, {
      key: "_dropHandler",
      value: function _dropHandler(e) {
        var _dataTransfer$files;

        var dataTransfer = e.originalEvent.dataTransfer;
        var hasFiles = dataTransfer === null || dataTransfer === void 0 ? void 0 : (_dataTransfer$files = dataTransfer.files) === null || _dataTransfer$files === void 0 ? void 0 : _dataTransfer$files.length;

        this.editorInstance._saveValueChangeEvent(e);

        e.preventDefault();

        if (hasFiles) {
          this._getImage(dataTransfer.files, this._addImage.bind(this));
        }
      }
    }, {
      key: "_pasteHandler",
      value: function _pasteHandler(e) {
        var _clipboardData$items,
            _this2 = this;

        var clipboardData = e.originalEvent.clipboardData;

        this.editorInstance._saveValueChangeEvent(e);

        if (!clipboardData) {
          return;
        }

        var hasDataItems = (_clipboardData$items = clipboardData.items) === null || _clipboardData$items === void 0 ? void 0 : _clipboardData$items.length;
        var isHtmlData = clipboardData.getData('text/html');

        if (!isHtmlData && hasDataItems) {
          this._getImage(clipboardData.items, function (imageData) {
            if (_this2._isBrowserSupportImagePaste(_browser.default)) {
              return;
            }

            if (_browser.default.msie) {
              setTimeout(function () {
                _this2._addImage(imageData);
              });
            } else {
              _this2._addImage(imageData);
            }
          });
        }
      }
    }, {
      key: "_isBrowserSupportImagePaste",
      value: function _isBrowserSupportImagePaste(_ref) {
        var mozilla = _ref.mozilla,
            chrome = _ref.chrome,
            version = _ref.version;
        return mozilla || chrome && version > 82; // T894297
      }
    }, {
      key: "_isImage",
      value: function _isImage(file) {
        return !!file.type.match(/^image\/(a?png|bmp|gif|p?jpe?g|svg|vnd\.microsoft\.icon|webp)/i);
      }
    }, {
      key: "_getImage",
      value: function _getImage(files, callback) {
        var _this3 = this;

        var window = (0, _window.getWindow)();
        (0, _iterator.each)(files, function (index, file) {
          if (!_this3._isImage(file)) {
            return;
          }

          var reader = new window.FileReader();

          reader.onload = function (_ref2) {
            var target = _ref2.target;
            callback(target.result);
          };

          var readableFile = file.getAsFile ? file.getAsFile() : file;

          if (readableFile instanceof window.Blob) {
            reader.readAsDataURL(readableFile);
          }
        });
      }
    }, {
      key: "_addImage",
      value: function _addImage(data) {
        var selection = this.quill.getSelection();
        var pasteIndex = selection ? selection.index : this.quill.getLength();
        this.quill.insertEmbed(pasteIndex, 'extendedImage', data, 'user');
      }
    }]);

    return DropImageModule;
  }(BaseModule);
}

var _default = DropImageModule;
exports.default = _default;
module.exports = exports.default;