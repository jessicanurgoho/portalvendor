"use strict";

exports.default = void 0;

var _quill_importer = require("./quill_importer");

var _base = _interopRequireDefault(require("./themes/base"));

var _image = _interopRequireDefault(require("./formats/image"));

var _link = _interopRequireDefault(require("./formats/link"));

var _font = _interopRequireDefault(require("./formats/font"));

var _size = _interopRequireDefault(require("./formats/size"));

var _align = _interopRequireDefault(require("./formats/align"));

var _toolbar = _interopRequireDefault(require("./modules/toolbar"));

var _dropImage = _interopRequireDefault(require("./modules/dropImage"));

var _variables = _interopRequireDefault(require("./modules/variables"));

var _resizing = _interopRequireDefault(require("./modules/resizing"));

var _mentions = _interopRequireDefault(require("./modules/mentions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuillRegistrator = /*#__PURE__*/function () {
  function QuillRegistrator() {
    _classCallCheck(this, QuillRegistrator);

    if (QuillRegistrator.initialized) {
      return;
    }

    var quill = this.getQuill();
    var DirectionStyle = quill.import('attributors/style/direction');
    quill.register({
      'formats/align': _align.default,
      'formats/direction': DirectionStyle,
      'formats/font': _font.default,
      'formats/size': _size.default,
      'formats/extendedImage': _image.default,
      'formats/link': _link.default,
      'modules/toolbar': _toolbar.default,
      'modules/dropImage': _dropImage.default,
      'modules/variables': _variables.default,
      'modules/resizing': _resizing.default,
      'modules/mentions': _mentions.default,
      'themes/basic': _base.default
    }, true);
    this._customModules = [];
    QuillRegistrator._initialized = true;
  }

  _createClass(QuillRegistrator, [{
    key: "createEditor",
    value: function createEditor(container, config) {
      var quill = this.getQuill();
      return new quill(container, config);
    }
  }, {
    key: "registerModules",
    value: function registerModules(modulesConfig) {
      var isModule = RegExp('modules/*');
      var quill = this.getQuill();

      var isRegisteredModule = function isRegisteredModule(modulePath) {
        return !!quill.imports[modulePath];
      };

      for (var modulePath in modulesConfig) {
        if (isModule.test(modulePath) && !isRegisteredModule(modulePath)) {
          this._customModules.push(modulePath.slice(8));
        }
      }

      quill.register(modulesConfig, true);
    }
  }, {
    key: "getRegisteredModuleNames",
    value: function getRegisteredModuleNames() {
      return this._customModules;
    }
  }, {
    key: "getQuill",
    value: function getQuill() {
      return (0, _quill_importer.getQuill)();
    }
  }]);

  return QuillRegistrator;
}();

var _default = QuillRegistrator;
exports.default = _default;
module.exports = exports.default;