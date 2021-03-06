"use strict";

exports.TemplateBase = exports.renderedCallbacks = void 0;

var _renderer = _interopRequireDefault(require("../renderer"));

var _dom_adapter = _interopRequireDefault(require("../dom_adapter"));

var _callbacks = _interopRequireDefault(require("../utils/callbacks"));

var _dom = require("../utils/dom");

var _visibility_change = require("../../events/visibility_change");

var _errors = _interopRequireDefault(require("../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var renderedCallbacks = (0, _callbacks.default)({
  syncStrategy: true
});
exports.renderedCallbacks = renderedCallbacks;

var TemplateBase = /*#__PURE__*/function () {
  function TemplateBase() {
    _classCallCheck(this, TemplateBase);
  }

  _createClass(TemplateBase, [{
    key: "render",
    value: function render(options) {
      options = options || {};
      var onRendered = options.onRendered;
      delete options.onRendered;

      var $result = this._renderCore(options);

      this._ensureResultInContainer($result, options.container);

      renderedCallbacks.fire($result, options.container);
      onRendered && onRendered();
      return $result;
    }
  }, {
    key: "_ensureResultInContainer",
    value: function _ensureResultInContainer($result, container) {
      if (!container) {
        return;
      }

      var $container = (0, _renderer.default)(container);
      var resultInContainer = (0, _dom.contains)($container.get(0), $result.get(0));
      $container.append($result);

      if (resultInContainer) {
        return;
      }

      var resultInBody = _dom_adapter.default.getBody().contains($container.get(0));

      if (!resultInBody) {
        return;
      }

      (0, _visibility_change.triggerShownEvent)($result);
    }
  }, {
    key: "_renderCore",
    value: function _renderCore() {
      throw _errors.default.Error('E0001');
    }
  }]);

  return TemplateBase;
}();

exports.TemplateBase = TemplateBase;