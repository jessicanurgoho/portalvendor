"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.TimePanelTableLayout = TimePanelTableLayout;
exports.TimePanelTableLayoutProps = exports.viewFunction = void 0;

var _row = require("../row");

var _cell = require("./cell");

var _cell2 = require("../cell");

var _utils = require("../../utils");

var _table = require("../table");

var _layout_props = require("../layout_props");

var _title = require("../date_table/all_day_panel/title");

var Preact = _interopRequireWildcard(require("preact"));

var _hooks = require("preact/hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(viewModel) {
  return Preact.h(_table.Table, _extends({}, viewModel.restAttributes, {
    isVirtual: viewModel.isVirtual,
    topVirtualRowHeight: viewModel.topVirtualRowHeight,
    bottomVirtualRowHeight: viewModel.bottomVirtualRowHeight,
    className: "dx-scheduler-time-panel"
  }), viewModel.props.viewData.groupedData.map(function (_ref, index) {
    var dateTable = _ref.dateTable,
        groupIndex = _ref.groupIndex;
    return Preact.h(Preact.Fragment, {
      key: (0, _utils.getKeyByGroup)(groupIndex)
    }, (0, _utils.getIsGroupedAllDayPanel)(viewModel.props.viewData, index) && Preact.h(_row.Row, null, Preact.h(_cell2.CellBase, {
      className: "dx-scheduler-time-panel-title-cell"
    }, Preact.h(_title.AllDayPanelTitle, null))), dateTable.map(function (cellsRow) {
      var cellCountInGroupRow = viewModel.props.viewData.cellCountInGroupRow;
      var _cellsRow$ = cellsRow[0],
          groups = _cellsRow$.groups,
          cellIndex = _cellsRow$.index,
          isFirstGroupCell = _cellsRow$.isFirstGroupCell,
          isLastGroupCell = _cellsRow$.isLastGroupCell,
          key = _cellsRow$.key,
          startDate = _cellsRow$.startDate,
          text = _cellsRow$.text;
      return Preact.h(_row.Row, {
        className: "dx-scheduler-time-panel-row",
        key: key
      }, Preact.h(_cell.TimePanelCell, {
        startDate: startDate,
        text: text,
        groups: viewModel.isVerticalGroupOrientation ? groups : undefined,
        groupIndex: viewModel.isVerticalGroupOrientation ? groupIndex : undefined,
        isFirstGroupCell: viewModel.isVerticalGroupOrientation && isFirstGroupCell,
        isLastGroupCell: viewModel.isVerticalGroupOrientation && isLastGroupCell,
        index: Math.floor(cellIndex / cellCountInGroupRow),
        timeCellTemplate: viewModel.props.timeCellTemplate
      }));
    }));
  }));
};

exports.viewFunction = viewFunction;

var TimePanelTableLayoutProps = _objectSpread(_objectSpread({}, _layout_props.LayoutProps), {}, {
  className: "",
  allDayPanelVisible: false
});

exports.TimePanelTableLayoutProps = TimePanelTableLayoutProps;

var getTemplate = function getTemplate(TemplateProp) {
  return TemplateProp && (TemplateProp.defaultProps ? function (props) {
    return Preact.h(TemplateProp, _extends({}, props));
  } : TemplateProp);
};

function TimePanelTableLayout(props) {
  var __isVirtual = (0, _hooks.useCallback)(function __isVirtual() {
    var viewData = props.viewData;
    return !!viewData.isVirtual;
  }, [props.viewData]);

  var __topVirtualRowHeight = (0, _hooks.useCallback)(function __topVirtualRowHeight() {
    return props.viewData.topVirtualRowHeight || 0;
  }, [props.viewData]);

  var __bottomVirtualRowHeight = (0, _hooks.useCallback)(function __bottomVirtualRowHeight() {
    return props.viewData.bottomVirtualRowHeight || 0;
  }, [props.viewData]);

  var __isVerticalGroupOrientation = (0, _hooks.useCallback)(function __isVerticalGroupOrientation() {
    var groupOrientation = props.groupOrientation;
    return (0, _utils.isVerticalGroupOrientation)(groupOrientation);
  }, [props.groupOrientation]);

  var __restAttributes = (0, _hooks.useCallback)(function __restAttributes() {
    var allDayPanelVisible = props.allDayPanelVisible,
        className = props.className,
        dataCellTemplate = props.dataCellTemplate,
        groupOrientation = props.groupOrientation,
        timeCellTemplate = props.timeCellTemplate,
        viewData = props.viewData,
        restProps = _objectWithoutProperties(props, ["allDayPanelVisible", "className", "dataCellTemplate", "groupOrientation", "timeCellTemplate", "viewData"]);

    return restProps;
  }, [props]);

  return viewFunction({
    props: _objectSpread(_objectSpread({}, props), {}, {
      timeCellTemplate: getTemplate(props.timeCellTemplate),
      dataCellTemplate: getTemplate(props.dataCellTemplate)
    }),
    isVirtual: __isVirtual(),
    topVirtualRowHeight: __topVirtualRowHeight(),
    bottomVirtualRowHeight: __bottomVirtualRowHeight(),
    isVerticalGroupOrientation: __isVerticalGroupOrientation(),
    restAttributes: __restAttributes()
  });
}

TimePanelTableLayout.defaultProps = _objectSpread({}, TimePanelTableLayoutProps);