"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _extend = require("../../core/utils/extend");

var _scroll_view = _interopRequireDefault(require("../scroll_view"));

var _tab_panel = _interopRequireDefault(require("../tab_panel"));

var _uiDiagram = _interopRequireDefault(require("./ui.diagram.floating_panel"));

var _diagram = _interopRequireDefault(require("./diagram.commands_manager"));

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

var DIAGRAM_PROPERTIES_POPUP_WIDTH = 420;
var DIAGRAM_PROPERTIES_POPUP_HEIGHT = 340;
var DIAGRAM_PROPERTIES_POPUP_CLASS = 'dx-diagram-properties-popup';
var DIAGRAM_PROPERTIES_POPUP_NOTABS_CLASS = 'dx-diagram-properties-popup-notabs';
var DIAGRAM_PROPERTIES_PANEL_CLASS = 'dx-diagram-properties-panel';
var DIAGRAM_PROPERTIES_PANEL_GROUP_TITLE_CLASS = 'dx-diagram-properties-panel-group-title';
var DIAGRAM_PROPERTIES_PANEL_GROUP_TOOLBAR_CLASS = 'dx-diagram-properties-panel-group-toolbar';

var DiagramPropertiesPanel = /*#__PURE__*/function (_DiagramFloatingPanel) {
  _inherits(DiagramPropertiesPanel, _DiagramFloatingPanel);

  var _super = _createSuper(DiagramPropertiesPanel);

  function DiagramPropertiesPanel() {
    _classCallCheck(this, DiagramPropertiesPanel);

    return _super.apply(this, arguments);
  }

  _createClass(DiagramPropertiesPanel, [{
    key: "_init",
    value: function _init() {
      _get(_getPrototypeOf(DiagramPropertiesPanel.prototype), "_init", this).call(this);

      this._commandTabs = _diagram.default.getPropertyPanelCommandTabs(this.option('propertyTabs'));

      this._createOnCreateToolbar();

      this._createOnSelectedGroupChanged();
    }
  }, {
    key: "_initMarkup",
    value: function _initMarkup() {
      this._toolbars = [];
      this._selectedToolbar = undefined;

      _get(_getPrototypeOf(DiagramPropertiesPanel.prototype), "_initMarkup", this).call(this);
    }
  }, {
    key: "_getPopupClass",
    value: function _getPopupClass() {
      var className = DIAGRAM_PROPERTIES_POPUP_CLASS;

      if (!this._hasTabPanel()) {
        className += ' ' + DIAGRAM_PROPERTIES_POPUP_NOTABS_CLASS;
      }

      return className;
    }
  }, {
    key: "_getPopupWidth",
    value: function _getPopupWidth() {
      return this.isMobileView() ? '100%' : DIAGRAM_PROPERTIES_POPUP_WIDTH;
    }
  }, {
    key: "_getPopupHeight",
    value: function _getPopupHeight() {
      return DIAGRAM_PROPERTIES_POPUP_HEIGHT;
    }
  }, {
    key: "_getPopupPosition",
    value: function _getPopupPosition() {
      var $parent = this.option('offsetParent');

      if (this.isMobileView()) {
        return {
          my: 'left bottom',
          at: 'left bottom',
          of: $parent
        };
      }

      return {
        my: 'right bottom',
        at: 'right bottom',
        of: $parent,
        offset: '-' + this.option('offsetX') + ' -' + this.option('offsetY')
      };
    }
  }, {
    key: "_getPopupAnimation",
    value: function _getPopupAnimation() {
      var $parent = this.option('offsetParent');

      if (this.isMobileView()) {
        return {
          hide: this._getPopupSlideAnimationObject({
            direction: 'bottom',
            from: {
              position: {
                my: 'left bottom',
                at: 'left bottom',
                of: $parent
              }
            },
            to: {
              position: {
                my: 'left top',
                at: 'left bottom',
                of: $parent
              }
            }
          }),
          show: this._getPopupSlideAnimationObject({
            direction: 'top',
            from: {
              position: {
                my: 'left top',
                at: 'left bottom',
                of: $parent
              }
            },
            to: {
              position: {
                my: 'left bottom',
                at: 'left bottom',
                of: $parent
              }
            }
          })
        };
      }

      return _get(_getPrototypeOf(DiagramPropertiesPanel.prototype), "_getPopupAnimation", this).call(this);
    }
  }, {
    key: "_getPopupOptions",
    value: function _getPopupOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(DiagramPropertiesPanel.prototype), "_getPopupOptions", this).call(this), {
        showTitle: this.isMobileView(),
        showCloseButton: this.isMobileView()
      });
    }
  }, {
    key: "_renderPopupContent",
    value: function _renderPopupContent($parent) {
      if (!this._commandTabs.length) return;
      var $panel = (0, _renderer.default)('<div>').addClass(DIAGRAM_PROPERTIES_PANEL_CLASS).appendTo($parent);

      if (this._hasTabPanel()) {
        this._renderTabPanel($panel);
      } else {
        this._renderTabContent($panel, this._commandTabs[0], 0, true);
      }
    }
  }, {
    key: "_hasTabPanel",
    value: function _hasTabPanel() {
      return this._commandTabs.length > 1;
    }
  }, {
    key: "_renderTabPanel",
    value: function _renderTabPanel($parent) {
      var _this = this;

      var $tabPanel = (0, _renderer.default)('<div>').appendTo($parent);
      this._tabPanel = this._createComponent($tabPanel, _tab_panel.default, {
        focusStateEnabled: false,
        dataSource: this._commandTabs,
        itemTemplate: function itemTemplate(data, index, $element) {
          _this._renderTabContent($element, data, index);
        },
        onSelectionChanged: function onSelectionChanged(e) {
          _this._onSelectedGroupChangedAction();

          _this._onPointerUpAction();
        },
        onContentReady: function onContentReady(e) {
          _this._popup.option('height', e.component.$element().height() + _this._getVerticalPaddingsAndBorders());

          if (_this._firstScrollView) {
            _this._scrollViewHeight = _this._firstScrollView.$element().outerHeight();

            _this._firstScrollView.option('height', _this._scrollViewHeight);
          }
        }
      });
    }
  }, {
    key: "_renderTabContent",
    value: function _renderTabContent($parent, tab, index, isSingleTab) {
      var $scrollViewWrapper = (0, _renderer.default)('<div>').appendTo($parent);

      var scrollView = this._createComponent($scrollViewWrapper, _scroll_view.default, {
        height: this._scrollViewHeight
      });

      this._renderTabInnerContent(scrollView.content(), tab, index);

      if (isSingleTab) {
        this._popup.option('height', scrollView.$element().height() + this._getVerticalPaddingsAndBorders());
      } else {
        this._firstScrollView = this._firstScrollView || scrollView;
      }
    }
  }, {
    key: "_renderTabInnerContent",
    value: function _renderTabInnerContent($parent, group, index) {
      var _this2 = this;

      if (group.groups) {
        group.groups.forEach(function (sg, si) {
          _this2._renderTabGroupContent($parent, index, sg.title, sg.commands);
        });
      } else if (group.commands) {
        this._renderTabGroupContent($parent, index, undefined, group.commands);
      }
    }
  }, {
    key: "_renderTabGroupContent",
    value: function _renderTabGroupContent($parent, index, title, commands) {
      if (title) {
        (0, _renderer.default)('<div>').addClass(DIAGRAM_PROPERTIES_PANEL_GROUP_TITLE_CLASS).appendTo($parent).text(title);
      }

      var $toolbar = (0, _renderer.default)('<div>').addClass(DIAGRAM_PROPERTIES_PANEL_GROUP_TOOLBAR_CLASS).appendTo($parent);
      var args = {
        $parent: $toolbar,
        commands: commands
      };

      this._onCreateToolbarAction(args);

      if (!this._toolbars[index]) {
        this._toolbars[index] = [];
      }

      this._toolbars[index].push(args.toolbar);

      this._selectedToolbar = args.toolbar;
    }
  }, {
    key: "getActiveToolbars",
    value: function getActiveToolbars() {
      var index = this._tabPanel ? this._tabPanel.option('selectedIndex') : 0;
      return this._toolbars[index];
    }
  }, {
    key: "_createOnCreateToolbar",
    value: function _createOnCreateToolbar() {
      this._onCreateToolbarAction = this._createActionByOption('onCreateToolbar');
    }
  }, {
    key: "_createOnSelectedGroupChanged",
    value: function _createOnSelectedGroupChanged() {
      this._onSelectedGroupChangedAction = this._createActionByOption('onSelectedGroupChanged');
    }
  }, {
    key: "_optionChanged",
    value: function _optionChanged(args) {
      switch (args.name) {
        case 'onCreateToolbar':
          this._createOnCreateToolbar();

          break;

        case 'onSelectedGroupChanged':
          this._createOnSelectedGroupChanged();

          break;

        case 'propertyTabs':
          this._invalidate();

          break;

        default:
          _get(_getPrototypeOf(DiagramPropertiesPanel.prototype), "_optionChanged", this).call(this, args);

      }
    }
  }]);

  return DiagramPropertiesPanel;
}(_uiDiagram.default);

var _default = DiagramPropertiesPanel;
exports.default = _default;
module.exports = exports.default;