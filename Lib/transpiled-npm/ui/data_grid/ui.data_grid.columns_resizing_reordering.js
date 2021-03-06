"use strict";

exports.TrackerView = exports.ColumnsResizerViewController = exports.TablePositionViewController = exports.ColumnsSeparatorView = exports.DraggingHeaderViewController = exports.DraggingHeaderView = void 0;

var _uiData_grid = _interopRequireDefault(require("./ui.data_grid.core"));

var _uiGrid_core = _interopRequireDefault(require("../grid_core/ui.grid_core.columns_resizing_reordering"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DraggingHeaderView = _uiGrid_core.default.views.draggingHeaderView;
exports.DraggingHeaderView = DraggingHeaderView;
var DraggingHeaderViewController = _uiGrid_core.default.controllers.draggingHeader;
exports.DraggingHeaderViewController = DraggingHeaderViewController;
var ColumnsSeparatorView = _uiGrid_core.default.views.columnsSeparatorView;
exports.ColumnsSeparatorView = ColumnsSeparatorView;
var TablePositionViewController = _uiGrid_core.default.controllers.tablePosition;
exports.TablePositionViewController = TablePositionViewController;
var ColumnsResizerViewController = _uiGrid_core.default.controllers.columnsResizer;
exports.ColumnsResizerViewController = ColumnsResizerViewController;
var TrackerView = _uiGrid_core.default.views.trackerView;
exports.TrackerView = TrackerView;

_uiData_grid.default.registerModule('columnsResizingReordering', _uiGrid_core.default);