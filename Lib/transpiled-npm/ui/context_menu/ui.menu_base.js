"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _common = require("../../core/utils/common");

var _type = require("../../core/utils/type");

var _iterator = require("../../core/utils/iterator");

var _extend = require("../../core/utils/extend");

var _utils = require("../widget/utils.ink_ripple");

var _ui = _interopRequireDefault(require("../hierarchical_collection/ui.hierarchical_collection_widget"));

var _uiMenu_baseEdit = _interopRequireDefault(require("./ui.menu_base.edit.strategy"));

var _devices = _interopRequireDefault(require("../../core/devices"));

var _item = _interopRequireDefault(require("../collection/item"));

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

var DX_MENU_CLASS = 'dx-menu';
var DX_MENU_NO_ICONS_CLASS = DX_MENU_CLASS + '-no-icons';
var DX_MENU_BASE_CLASS = 'dx-menu-base';
var ITEM_CLASS = DX_MENU_CLASS + '-item';
var DX_ITEM_CONTENT_CLASS = ITEM_CLASS + '-content';
var DX_MENU_SELECTED_ITEM_CLASS = ITEM_CLASS + '-selected';
var DX_MENU_ITEM_WRAPPER_CLASS = ITEM_CLASS + '-wrapper';
var DX_MENU_ITEMS_CONTAINER_CLASS = DX_MENU_CLASS + '-items-container';
var DX_MENU_ITEM_EXPANDED_CLASS = ITEM_CLASS + '-expanded';
var DX_MENU_SEPARATOR_CLASS = DX_MENU_CLASS + '-separator';
var DX_MENU_ITEM_LAST_GROUP_ITEM = DX_MENU_CLASS + '-last-group-item';
var DX_ITEM_HAS_TEXT = ITEM_CLASS + '-has-text';
var DX_ITEM_HAS_ICON = ITEM_CLASS + '-has-icon';
var DX_ITEM_HAS_SUBMENU = ITEM_CLASS + '-has-submenu';
var DX_MENU_ITEM_POPOUT_CLASS = ITEM_CLASS + '-popout';
var DX_MENU_ITEM_POPOUT_CONTAINER_CLASS = DX_MENU_ITEM_POPOUT_CLASS + '-container';
var DX_MENU_ITEM_CAPTION_CLASS = ITEM_CLASS + '-text';
var SINGLE_SELECTION_MODE = 'single';
var DEFAULT_DELAY = {
  'show': 50,
  'hide': 300
};

var MenuBase = /*#__PURE__*/function (_HierarchicalCollecti) {
  _inherits(MenuBase, _HierarchicalCollecti);

  var _super = _createSuper(MenuBase);

  function MenuBase() {
    _classCallCheck(this, MenuBase);

    return _super.apply(this, arguments);
  }

  _createClass(MenuBase, [{
    key: "_getDefaultOptions",
    value: function _getDefaultOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(MenuBase.prototype), "_getDefaultOptions", this).call(this), {
        items: [],
        cssClass: '',
        activeStateEnabled: true,
        showSubmenuMode: {
          /**
          * @name dxMenuBaseOptions.showSubmenuMode.name
          * @type Enums.ShowSubmenuMode
          * @default "onHover"
          */
          name: 'onHover',

          /**
          * @name dxMenuBaseOptions.showSubmenuMode.delay
          * @type Object|number
          * @default { show: 50, hide: 300 }
          */
          delay: {
            /**
            * @name dxMenuBaseOptions.showSubmenuMode.delay.show
            * @type number
            * @default 50
            */
            show: 50,

            /**
            * @name dxMenuBaseOptions.showSubmenuMode.delay.hide
            * @type number
            * @default 300
            */
            hide: 300
          }
        },
        animation: {
          /**
          * @name dxMenuBaseOptions.animation.show
          * @type animationConfig
          * @default { type: "fade", from: 0, to: 1, duration: 100 }
          */
          show: {
            type: 'fade',
            from: 0,
            to: 1,
            duration: 100
          },

          /**
          * @name dxMenuBaseOptions.animation.hide
          * @type animationConfig
          * @default { type: "fade", from: 1, to: 0, duration: 100 }
          */
          hide: {
            type: 'fade',
            from: 1,
            to: 0,
            duration: 100
          }
        },
        selectByClick: false,
        focusOnSelectedItem: false,

        /**
        * @name dxMenuBaseOptions.onItemHold
        * @hidden
        * @action
        */

        /**
        * @name dxMenuBaseOptions.itemHoldTimeout
        * @hidden
        */

        /**
        * @name dxMenuBaseOptions.noDataText
        * @hidden
        */

        /**
        * @name dxMenuBaseOptions.selectedIndex
        * @hidden
        */

        /**
        * @name dxMenuBaseOptions.selectedItemKeys
        * @hidden
        */

        /**
        * @name dxMenuBaseOptions.keyExpr
        * @hidden
        */
        keyExpr: null,

        /**
        * @name dxMenuBaseOptions.parentIdExpr
        * @hidden
        */

        /**
        * @name dxMenuBaseOptions.expandedExpr
        * @hidden
        */

        /**
        * @name dxMenuBaseItem
        * @inherits CollectionWidgetItem
        * @type object
        */
        _itemAttributes: {
          role: 'menuitem'
        },
        useInkRipple: false
        /**
         * @name dxMenuBaseItem.html
         * @type String
         * @hidden
        */

      });
    }
  }, {
    key: "_itemDataKey",
    value: function _itemDataKey() {
      return 'dxMenuItemDataKey';
    }
  }, {
    key: "_itemClass",
    value: function _itemClass() {
      return ITEM_CLASS;
    }
  }, {
    key: "_setAriaSelected",
    value: function _setAriaSelected() {}
  }, {
    key: "_selectedItemClass",
    value: function _selectedItemClass() {
      return DX_MENU_SELECTED_ITEM_CLASS;
    }
  }, {
    key: "_widgetClass",
    value: function _widgetClass() {
      return DX_MENU_BASE_CLASS;
    }
  }, {
    key: "_focusTarget",
    value: function _focusTarget() {
      return this._itemContainer();
    }
  }, {
    key: "_clean",
    value: function _clean() {
      this.option('focusedElement', null);

      _get(_getPrototypeOf(MenuBase.prototype), "_clean", this).call(this);
    }
  }, {
    key: "_supportedKeys",
    value: function _supportedKeys() {
      var _this = this;

      var selectItem = function selectItem() {
        var $item = (0, _renderer.default)(_this.option('focusedElement'));

        if (!$item.length || !_this._isSelectionEnabled()) {
          return;
        }

        _this.selectItem($item[0]);
      };

      return (0, _extend.extend)(_get(_getPrototypeOf(MenuBase.prototype), "_supportedKeys", this).call(this), {
        space: selectItem,
        pageUp: _common.noop,
        pageDown: _common.noop
      });
    }
  }, {
    key: "_isSelectionEnabled",
    value: function _isSelectionEnabled() {
      return this.option('selectionMode') === SINGLE_SELECTION_MODE;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._activeStateUnit = ".".concat(ITEM_CLASS);

      _get(_getPrototypeOf(MenuBase.prototype), "_init", this).call(this);

      this._renderSelectedItem();

      this._initActions();
    }
  }, {
    key: "_getTextContainer",
    value: function _getTextContainer(itemData) {
      var itemText = itemData.text;
      var $itemContainer = (0, _renderer.default)('<span>').addClass(DX_MENU_ITEM_CAPTION_CLASS);
      var itemContent = (0, _type.isPlainObject)(itemData) ? itemText : String(itemData);
      return itemText && $itemContainer.text(itemContent);
    }
  }, {
    key: "_getPopoutContainer",
    value: function _getPopoutContainer(itemData) {
      var items = itemData.items;
      var $popOutContainer;

      if (items && items.length) {
        var $popOutImage = (0, _renderer.default)('<div>').addClass(DX_MENU_ITEM_POPOUT_CLASS);
        $popOutContainer = (0, _renderer.default)('<span>').addClass(DX_MENU_ITEM_POPOUT_CONTAINER_CLASS).append($popOutImage);
      }

      return $popOutContainer;
    }
  }, {
    key: "_getDataAdapterOptions",
    value: function _getDataAdapterOptions() {
      return {
        rootValue: 0,
        multipleSelection: false,
        recursiveSelection: false,
        recursiveExpansion: false,
        searchValue: ''
      };
    }
  }, {
    key: "_selectByItem",
    value: function _selectByItem(selectedItem) {
      if (!selectedItem) return;

      var nodeToSelect = this._dataAdapter.getNodeByItem(selectedItem);

      this._dataAdapter.toggleSelection(nodeToSelect.internalFields.key, true);
    }
  }, {
    key: "_renderSelectedItem",
    value: function _renderSelectedItem() {
      var selectedKeys = this._dataAdapter.getSelectedNodesKeys();

      var selectedKey = selectedKeys.length && selectedKeys[0];
      var selectedItem = this.option('selectedItem');

      if (!selectedKey) {
        this._selectByItem(selectedItem);

        return;
      }

      var node = this._dataAdapter.getNodeByKey(selectedKey);

      if (node.selectable === false) return;

      if (!selectedItem) {
        this.option('selectedItem', node.internalFields.item);
        return;
      }

      if (selectedItem !== node.internalFields.item) {
        this._dataAdapter.toggleSelection(selectedKey, false);

        this._selectByItem(selectedItem);
      }
    }
  }, {
    key: "_initActions",
    value: function _initActions() {}
  }, {
    key: "_initMarkup",
    value: function _initMarkup() {
      _get(_getPrototypeOf(MenuBase.prototype), "_initMarkup", this).call(this);

      this._addCustomCssClass(this.$element());

      this.option('useInkRipple') && this._renderInkRipple();
    }
  }, {
    key: "_renderInkRipple",
    value: function _renderInkRipple() {
      this._inkRipple = (0, _utils.render)();
    }
  }, {
    key: "_toggleActiveState",
    value: function _toggleActiveState($element, value, e) {
      _get(_getPrototypeOf(MenuBase.prototype), "_toggleActiveState", this).apply(this, arguments);

      if (!this._inkRipple) {
        return;
      }

      var config = {
        element: $element,
        event: e
      };

      if (value) {
        this._inkRipple.showWave(config);
      } else {
        this._inkRipple.hideWave(config);
      }
    }
  }, {
    key: "_getShowSubmenuMode",
    value: function _getShowSubmenuMode() {
      var defaultValue = 'onClick';
      var optionValue = this.option('showSubmenuMode');
      optionValue = (0, _type.isObject)(optionValue) ? optionValue.name : optionValue;
      return this._isDesktopDevice() ? optionValue : defaultValue;
    }
  }, {
    key: "_initSelectedItems",
    value: function _initSelectedItems() {}
  }, {
    key: "_isDesktopDevice",
    value: function _isDesktopDevice() {
      return _devices.default.real().deviceType === 'desktop';
    }
  }, {
    key: "_initEditStrategy",
    value: function _initEditStrategy() {
      var Strategy = _uiMenu_baseEdit.default;
      this._editStrategy = new Strategy(this);
    }
  }, {
    key: "_addCustomCssClass",
    value: function _addCustomCssClass($element) {
      $element.addClass(this.option('cssClass'));
    }
  }, {
    key: "_itemWrapperSelector",
    value: function _itemWrapperSelector() {
      return ".".concat(DX_MENU_ITEM_WRAPPER_CLASS);
    }
  }, {
    key: "_hoverStartHandler",
    value: function _hoverStartHandler(e) {
      var $itemElement = this._getItemElementByEventArgs(e);

      if (!$itemElement || this._isItemDisabled($itemElement)) return;
      e.stopPropagation();

      if (this._getShowSubmenuMode() === 'onHover') {
        clearTimeout(this._showSubmenusTimeout);
        this._showSubmenusTimeout = setTimeout(this._showSubmenu.bind(this, $itemElement), this._getSubmenuDelay('show'));
      }
    }
  }, {
    key: "_getAvailableItems",
    value: function _getAvailableItems($itemElements) {
      return _get(_getPrototypeOf(MenuBase.prototype), "_getAvailableItems", this).call(this, $itemElements).filter(function () {
        return (0, _renderer.default)(this).css('visibility') !== 'hidden';
      });
    }
  }, {
    key: "_isItemDisabled",
    value: function _isItemDisabled($item) {
      return this._disabledGetter($item.data(this._itemDataKey()));
    }
  }, {
    key: "_showSubmenu",
    value: function _showSubmenu($itemElement) {
      this._addExpandedClass($itemElement);
    }
  }, {
    key: "_addExpandedClass",
    value: function _addExpandedClass(itemElement) {
      (0, _renderer.default)(itemElement).addClass(DX_MENU_ITEM_EXPANDED_CLASS);
    }
  }, {
    key: "_getSubmenuDelay",
    value: function _getSubmenuDelay(action) {
      var _this$option = this.option('showSubmenuMode'),
          delay = _this$option.delay;

      if (!(0, _type.isDefined)(delay)) {
        return DEFAULT_DELAY[action];
      }

      return (0, _type.isObject)(delay) ? delay[action] : delay;
    } // TODO: try to simplify

  }, {
    key: "_getItemElementByEventArgs",
    value: function _getItemElementByEventArgs(eventArgs) {
      var $target = (0, _renderer.default)(eventArgs.target);

      if ($target.hasClass(this._itemClass()) || $target.get(0) === eventArgs.currentTarget) {
        return $target;
      } // TODO: move it to inheritors, menuBase don't know about dx-submenu


      while (!$target.hasClass(this._itemClass())) {
        $target = $target.parent();

        if ($target.hasClass('dx-submenu')) {
          return null;
        }
      }

      return $target;
    }
  }, {
    key: "_hoverEndHandler",
    value: function _hoverEndHandler() {
      clearTimeout(this._showSubmenusTimeout);
    }
  }, {
    key: "_hasSubmenu",
    value: function _hasSubmenu(node) {
      return node && node.internalFields.childrenKeys.length;
    }
  }, {
    key: "_renderContentImpl",
    value: function _renderContentImpl() {
      this._renderItems(this._dataAdapter.getRootNodes());
    }
  }, {
    key: "_renderItems",
    value: function _renderItems(nodes, submenuContainer) {
      var _this2 = this;

      if (nodes.length) {
        this.hasIcons = false;

        var $nodeContainer = this._renderContainer(this.$element(), submenuContainer);

        var firstVisibleIndex = -1;
        var nextGroupFirstIndex = -1;
        (0, _iterator.each)(nodes, function (index, node) {
          var isVisibleNode = node.visible !== false;

          if (isVisibleNode && firstVisibleIndex < 0) {
            firstVisibleIndex = index;
          }

          var isBeginGroup = firstVisibleIndex < index && (node.beginGroup || index === nextGroupFirstIndex);

          if (isBeginGroup) {
            nextGroupFirstIndex = isVisibleNode ? index : index + 1;
          }

          if (index === nextGroupFirstIndex && firstVisibleIndex < index) {
            _this2._renderSeparator($nodeContainer);
          }

          _this2._renderItem(index, node, $nodeContainer);
        });
        if (!this.hasIcons) $nodeContainer.addClass(DX_MENU_NO_ICONS_CLASS);
      }
    }
  }, {
    key: "_renderContainer",
    value: function _renderContainer($wrapper) {
      var $container = (0, _renderer.default)('<ul>');
      this.setAria('role', 'none', $container);
      return $container.appendTo($wrapper).addClass(DX_MENU_ITEMS_CONTAINER_CLASS);
    }
  }, {
    key: "_createDOMElement",
    value: function _createDOMElement($nodeContainer) {
      var $node = (0, _renderer.default)('<li>');
      this.setAria('role', 'none', $node);
      return $node.appendTo($nodeContainer).addClass(DX_MENU_ITEM_WRAPPER_CLASS);
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(index, node, $nodeContainer, $nodeElement) {
      var items = this.option('items');

      var $node = $nodeElement || this._createDOMElement($nodeContainer);

      if (items[index + 1] && items[index + 1].beginGroup) {
        $node.addClass(DX_MENU_ITEM_LAST_GROUP_ITEM);
      }

      var $itemFrame = _get(_getPrototypeOf(MenuBase.prototype), "_renderItem", this).call(this, index, node.internalFields.item, $node);

      if (node.internalFields.item === this.option('selectedItem')) {
        $itemFrame.addClass(DX_MENU_SELECTED_ITEM_CLASS);
      }

      $itemFrame.attr('tabIndex', -1);
      if (this._hasSubmenu(node)) this.setAria('haspopup', 'true', $itemFrame);
    }
  }, {
    key: "_renderItemFrame",
    value: function _renderItemFrame(index, itemData, $itemContainer) {
      var $itemFrame = $itemContainer.children(".".concat(ITEM_CLASS));
      return $itemFrame.length ? $itemFrame : _get(_getPrototypeOf(MenuBase.prototype), "_renderItemFrame", this).apply(this, arguments);
    }
  }, {
    key: "_refreshItem",
    value: function _refreshItem($item, item) {
      var node = this._dataAdapter.getNodeByItem(item);

      var index = $item.data(this._itemIndexKey());
      var $nodeContainer = $item.closest('ul');
      var $nodeElement = $item.closest('li');

      this._renderItem(index, node, $nodeContainer, $nodeElement);
    }
  }, {
    key: "_addContentClasses",
    value: function _addContentClasses(itemData, $itemFrame) {
      var hasText = itemData.text ? !!itemData.text.length : false;
      var hasIcon = !!itemData.icon;
      var hasSubmenu = itemData.items ? !!itemData.items.length : false;
      $itemFrame.toggleClass(DX_ITEM_HAS_TEXT, hasText);
      $itemFrame.toggleClass(DX_ITEM_HAS_ICON, hasIcon);

      if (!this.hasIcons) {
        this.hasIcons = hasIcon;
      }

      $itemFrame.toggleClass(DX_ITEM_HAS_SUBMENU, hasSubmenu);
    }
  }, {
    key: "_getItemContent",
    value: function _getItemContent($itemFrame) {
      var $itemContent = _get(_getPrototypeOf(MenuBase.prototype), "_getItemContent", this).call(this, $itemFrame);

      if (!$itemContent.length) {
        $itemContent = $itemFrame.children(".".concat(DX_ITEM_CONTENT_CLASS));
      }

      return $itemContent;
    }
  }, {
    key: "_postprocessRenderItem",
    value: function _postprocessRenderItem(args) {
      var $itemElement = (0, _renderer.default)(args.itemElement);

      var selectedIndex = this._dataAdapter.getSelectedNodesKeys();

      if (!selectedIndex.length || !this._selectedGetter(args.itemData) || !this._isItemSelectable(args.itemData)) {
        this._setAriaSelected($itemElement, 'false');

        return;
      }

      var node = this._dataAdapter.getNodeByItem(args.itemData);

      if (node.internalFields.key === selectedIndex[0]) {
        $itemElement.addClass(this._selectedItemClass());

        this._setAriaSelected($itemElement, 'true');
      } else {
        this._setAriaSelected($itemElement, 'false');
      }
    }
  }, {
    key: "_isItemSelectable",
    value: function _isItemSelectable(item) {
      return item.selectable !== false;
    }
  }, {
    key: "_renderSeparator",
    value: function _renderSeparator($itemsContainer) {
      (0, _renderer.default)('<li>').appendTo($itemsContainer).addClass(DX_MENU_SEPARATOR_CLASS);
    }
  }, {
    key: "_itemClickHandler",
    value: function _itemClickHandler(e) {
      if (e._skipHandling) return;

      var itemClickActionHandler = this._createAction(this._updateSubmenuVisibilityOnClick.bind(this));

      this._itemDXEventHandler(e, 'onItemClick', {}, {
        afterExecute: itemClickActionHandler.bind(this)
      });

      e._skipHandling = true;
    }
  }, {
    key: "_updateSubmenuVisibilityOnClick",
    value: function _updateSubmenuVisibilityOnClick(actionArgs) {
      this._updateSelectedItemOnClick(actionArgs);

      if (this._getShowSubmenuMode() === 'onClick') {
        this._addExpandedClass(actionArgs.args[0].itemElement);
      }
    }
  }, {
    key: "_updateSelectedItemOnClick",
    value: function _updateSelectedItemOnClick(actionArgs) {
      var args = actionArgs.args ? actionArgs.args[0] : actionArgs;

      if (!this._isItemSelectionAllowed(args.itemData)) {
        return;
      }

      var selectedItemKey = this._dataAdapter.getSelectedNodesKeys();

      var selectedNode = selectedItemKey.length && this._dataAdapter.getNodeByKey(selectedItemKey[0]);

      if (selectedNode) {
        this._toggleItemSelection(selectedNode, false);
      }

      if (!selectedNode || selectedNode.internalFields.item !== args.itemData) {
        this.selectItem(args.itemData);
      } else {
        this._fireSelectionChangeEvent(null, this.option('selectedItem'));

        this._setOptionWithoutOptionChange('selectedItem', null);
      }
    }
  }, {
    key: "_isItemSelectionAllowed",
    value: function _isItemSelectionAllowed(item) {
      var isSelectionByClickEnabled = this._isSelectionEnabled() && this.option('selectByClick');
      return !this._isContainerEmpty() && isSelectionByClickEnabled && this._isItemSelectable(item) && !this._itemsGetter(item);
    }
  }, {
    key: "_isContainerEmpty",
    value: function _isContainerEmpty() {
      return this._itemContainer().is(':empty');
    }
  }, {
    key: "_syncSelectionOptions",
    value: function _syncSelectionOptions() {
      return (0, _common.asyncNoop)();
    }
  }, {
    key: "_optionChanged",
    value: function _optionChanged(args) {
      switch (args.name) {
        case 'showSubmenuMode':
          break;

        case 'selectedItem':
          {
            var node = this._dataAdapter.getNodeByItem(args.value);

            var selectedKey = this._dataAdapter.getSelectedNodesKeys()[0];

            if (node && node.internalFields.key !== selectedKey) {
              if (node.selectable === false) break;

              if (selectedKey) {
                this._toggleItemSelection(this._dataAdapter.getNodeByKey(selectedKey), false);
              }

              this._toggleItemSelection(node, true);

              this._updateSelectedItems();
            }

            break;
          }

        case 'cssClass':
        case 'position':
        case 'selectByClick':
        case 'animation':
        case 'useInkRipple':
          this._invalidate();

          break;

        default:
          _get(_getPrototypeOf(MenuBase.prototype), "_optionChanged", this).call(this, args);

      }
    }
  }, {
    key: "_toggleItemSelection",
    value: function _toggleItemSelection(node, value) {
      var itemElement = this._getElementByItem(node.internalFields.item);

      itemElement && (0, _renderer.default)(itemElement).toggleClass(DX_MENU_SELECTED_ITEM_CLASS);

      this._dataAdapter.toggleSelection(node.internalFields.key, value);
    }
  }, {
    key: "_getElementByItem",
    value: function _getElementByItem(itemData) {
      var _this3 = this;

      var result;
      (0, _iterator.each)(this._itemElements(), function (_, itemElement) {
        if ((0, _renderer.default)(itemElement).data(_this3._itemDataKey()) !== itemData) {
          return true;
        }

        result = itemElement;
        return false;
      });
      return result;
    }
  }, {
    key: "_updateSelectedItems",
    value: function _updateSelectedItems(oldSelection, newSelection) {
      if (oldSelection || newSelection) {
        this._fireSelectionChangeEvent(newSelection, oldSelection);
      }
    }
  }, {
    key: "_fireSelectionChangeEvent",
    value: function _fireSelectionChangeEvent(addedSelection, removedSelection) {
      this._createActionByOption('onSelectionChanged', {
        excludeValidators: ['disabled', 'readOnly']
      })({
        addedItems: [addedSelection],
        removedItems: [removedSelection]
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(itemElement) {
      var itemData = itemElement.nodeType ? this._getItemData(itemElement) : itemElement;

      var selectedKey = this._dataAdapter.getSelectedNodesKeys()[0];

      var selectedItem = this.option('selectedItem');

      var node = this._dataAdapter.getNodeByItem(itemData);

      if (node.internalFields.key !== selectedKey) {
        if (selectedKey) {
          this._toggleItemSelection(this._dataAdapter.getNodeByKey(selectedKey), false);
        }

        this._toggleItemSelection(node, true);

        this._updateSelectedItems(selectedItem, itemData);

        this._setOptionWithoutOptionChange('selectedItem', itemData);
      }
    }
  }, {
    key: "unselectItem",
    value: function unselectItem(itemElement) {
      var itemData = itemElement.nodeType ? this._getItemData(itemElement) : itemElement;

      var node = this._dataAdapter.getNodeByItem(itemData);

      var selectedItem = this.option('selectedItem');

      if (node.internalFields.selected) {
        this._toggleItemSelection(node, false);

        this._updateSelectedItems(selectedItem, null);

        this._setOptionWithoutOptionChange('selectedItem', null);
      }
    }
  }]);

  return MenuBase;
}(_ui.default);

MenuBase.ItemClass = _item.default;
var _default = MenuBase;
exports.default = _default;
module.exports = exports.default;