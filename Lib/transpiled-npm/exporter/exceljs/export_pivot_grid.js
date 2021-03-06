"use strict";

exports.exportPivotGrid = exportPivotGrid;

var _type = require("../../core/utils/type");

var _export = require("./export");

var _common = require("../../core/utils/common");

var privateOptions = {
  _getWorksheetFrozenState: function _getWorksheetFrozenState(dataProvider, cellRange) {
    return {
      state: 'frozen',
      xSplit: cellRange.from.column + dataProvider.getFrozenArea().x - 1,
      ySplit: cellRange.from.row + dataProvider.getFrozenArea().y - 1
    };
  },
  _getCustomizeCellOptions: function _getCustomizeCellOptions(excelCell, pivotCell) {
    return {
      excelCell: excelCell,
      pivotCell: pivotCell
    };
  },
  _needMergeRange: function _needMergeRange() {
    return true;
  },
  _renderLoadPanel: function _renderLoadPanel(component) {
    component._renderLoadPanel(component._dataArea.groupElement(), component.$element());
  },
  _trySetAutoFilter: _common.noop,
  _trySetFont: _common.noop,
  _trySetOutlineLevel: _common.noop
};

function exportPivotGrid(options) {
  return _export.Export.export(_getFullOptions(options), privateOptions);
}

function _getFullOptions(options) {
  if (!((0, _type.isDefined)(options) && (0, _type.isObject)(options))) {
    throw Error('The "exportPivotGrid" method requires a configuration object.');
  }

  if (!((0, _type.isDefined)(options.component) && (0, _type.isObject)(options.component) && options.component.NAME === 'dxPivotGrid')) {
    throw Error('The "component" field must contain a PivotGrid instance.');
  }

  return _export.Export.getFullOptions(options);
}