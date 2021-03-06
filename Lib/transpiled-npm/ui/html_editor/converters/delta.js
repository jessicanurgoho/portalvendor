"use strict";

exports.default = void 0;

var _converterController = _interopRequireDefault(require("../converterController"));

var _quill_importer = require("../quill_importer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeltaConverter = /*#__PURE__*/function () {
  function DeltaConverter() {
    _classCallCheck(this, DeltaConverter);

    this.TextBlot = (0, _quill_importer.getQuill)().import('blots/text');
    this.BreakBlot = (0, _quill_importer.getQuill)().import('blots/break');
  }

  _createClass(DeltaConverter, [{
    key: "setQuillInstance",
    value: function setQuillInstance(quillInstance) {
      this.quillInstance = quillInstance;
    }
  }, {
    key: "toHtml",
    value: function toHtml() {
      if (!this.quillInstance) {
        return;
      }

      return this._isQuillEmpty() ? '' : this.quillInstance.getSemanticHTML(0, this.quillInstance.getLength() + 1);
    }
  }, {
    key: "_isQuillEmpty",
    value: function _isQuillEmpty() {
      var delta = this.quillInstance.getContents();
      return delta.length() === 1 && this._isDeltaEmpty(delta);
    }
  }, {
    key: "_isDeltaEmpty",
    value: function _isDeltaEmpty(delta) {
      return delta.reduce(function (__, _ref) {
        var insert = _ref.insert;
        return insert.indexOf('\n') !== -1;
      });
    }
  }]);

  return DeltaConverter;
}();

_converterController.default.addConverter('delta', DeltaConverter);

var _default = DeltaConverter;
exports.default = _default;
module.exports = exports.default;