"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../core/renderer"));

var _ajax = _interopRequireDefault(require("../core/utils/ajax"));

var _common = require("../core/utils/common");

var _guid = _interopRequireDefault(require("../core/guid"));

var _window = require("../core/utils/window");

var _iterator = require("../core/utils/iterator");

var _deferred = require("../core/utils/deferred");

var _events_engine = _interopRequireDefault(require("../events/core/events_engine"));

var _provider_base = _interopRequireDefault(require("./provider_base"));

var _data = require("../core/utils/data");

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

var window = (0, _window.getWindow)();
var FILE_CHUNK_BLOB_NAME = 'chunk';

var RemoteFileSystemProvider = /*#__PURE__*/function (_FileSystemProviderBa) {
  _inherits(RemoteFileSystemProvider, _FileSystemProviderBa);

  var _super = _createSuper(RemoteFileSystemProvider);

  function RemoteFileSystemProvider(options) {
    var _this;

    _classCallCheck(this, RemoteFileSystemProvider);

    options = (0, _common.ensureDefined)(options, {});
    _this = _super.call(this, options);
    _this._endpointUrl = options.endpointUrl;
    _this._hasSubDirsGetter = (0, _data.compileGetter)(options.hasSubDirectoriesExpr || 'hasSubDirectories');
    return _this;
  }

  _createClass(RemoteFileSystemProvider, [{
    key: "getItems",
    value: function getItems(parentDir) {
      var _this2 = this;

      var pathInfo = parentDir.getFullPathInfo();
      return this._getEntriesByPath(pathInfo).then(function (result) {
        return _this2._convertDataObjectsToFileItems(result.result, pathInfo);
      });
    }
  }, {
    key: "renameItem",
    value: function renameItem(item, name) {
      return this._executeRequest('Rename', {
        pathInfo: item.getFullPathInfo(),
        isDirectory: item.isDirectory,
        name: name
      });
    }
  }, {
    key: "createDirectory",
    value: function createDirectory(parentDir, name) {
      return this._executeRequest('CreateDir', {
        pathInfo: parentDir.getFullPathInfo(),
        name: name
      }).done(function () {
        if (parentDir && !parentDir.isRoot()) {
          parentDir.hasSubDirectories = true;
        }
      });
    }
  }, {
    key: "deleteItems",
    value: function deleteItems(items) {
      var _this3 = this;

      return items.map(function (item) {
        return _this3._executeRequest('Remove', {
          pathInfo: item.getFullPathInfo(),
          isDirectory: item.isDirectory
        });
      });
    }
  }, {
    key: "moveItems",
    value: function moveItems(items, destinationDirectory) {
      var _this4 = this;

      return items.map(function (item) {
        return _this4._executeRequest('Move', {
          sourcePathInfo: item.getFullPathInfo(),
          sourceIsDirectory: item.isDirectory,
          destinationPathInfo: destinationDirectory.getFullPathInfo()
        });
      });
    }
  }, {
    key: "copyItems",
    value: function copyItems(items, destinationFolder) {
      var _this5 = this;

      return items.map(function (item) {
        return _this5._executeRequest('Copy', {
          sourcePathInfo: item.getFullPathInfo(),
          sourceIsDirectory: item.isDirectory,
          destinationPathInfo: destinationFolder.getFullPathInfo()
        });
      });
    }
  }, {
    key: "uploadFileChunk",
    value: function uploadFileChunk(fileData, chunksInfo, destinationDirectory) {
      if (chunksInfo.chunkIndex === 0) {
        chunksInfo.customData.uploadId = new _guid.default();
      }

      var args = {
        destinationPathInfo: destinationDirectory.getFullPathInfo(),
        chunkMetadata: JSON.stringify({
          UploadId: chunksInfo.customData.uploadId,
          FileName: fileData.name,
          Index: chunksInfo.chunkIndex,
          TotalCount: chunksInfo.chunkCount,
          FileSize: fileData.size
        })
      };
      var formData = new window.FormData();
      formData.append(FILE_CHUNK_BLOB_NAME, chunksInfo.chunkBlob);
      formData.append('arguments', JSON.stringify(args));
      formData.append('command', 'UploadChunk');
      var deferred = new _deferred.Deferred();

      _ajax.default.sendRequest({
        url: this._endpointUrl,
        method: 'POST',
        dataType: 'json',
        data: formData,
        upload: {
          onprogress: _common.noop,
          onloadstart: _common.noop,
          onabort: _common.noop
        },
        cache: false
      }).done(function (result) {
        !result.success && deferred.reject(result) || deferred.resolve();
      }).fail(deferred.reject);

      return deferred.promise();
    }
  }, {
    key: "abortFileUpload",
    value: function abortFileUpload(fileData, chunksInfo, destinationDirectory) {
      return this._executeRequest('AbortUpload', {
        uploadId: chunksInfo.customData.uploadId
      });
    }
  }, {
    key: "downloadItems",
    value: function downloadItems(items) {
      var args = this._getDownloadArgs(items);

      var $form = (0, _renderer.default)('<form>').css({
        display: 'none'
      }).attr({
        method: 'post',
        action: args.url
      });
      ['command', 'arguments'].forEach(function (name) {
        (0, _renderer.default)('<input>').attr({
          type: 'hidden',
          name: name,
          value: args[name]
        }).appendTo($form);
      });
      $form.appendTo('body');

      _events_engine.default.trigger($form, 'submit');

      setTimeout(function () {
        return $form.remove();
      });
    }
  }, {
    key: "getItemsContent",
    value: function getItemsContent(items) {
      var args = this._getDownloadArgs(items);

      var formData = new window.FormData();
      formData.append('command', args.command);
      formData.append('arguments', args.arguments);
      return _ajax.default.sendRequest({
        url: args.url,
        method: 'POST',
        responseType: 'arraybuffer',
        data: formData,
        upload: {
          onprogress: _common.noop,
          onloadstart: _common.noop,
          onabort: _common.noop
        },
        cache: false
      });
    }
  }, {
    key: "_getDownloadArgs",
    value: function _getDownloadArgs(items) {
      var pathInfoList = items.map(function (item) {
        return item.getFullPathInfo();
      });
      var args = {
        pathInfoList: pathInfoList
      };
      var argsStr = JSON.stringify(args);
      return {
        url: this._endpointUrl,
        arguments: argsStr,
        command: 'Download'
      };
    }
  }, {
    key: "_getItemsIds",
    value: function _getItemsIds(items) {
      return items.map(function (it) {
        return it.relativeName;
      });
    }
  }, {
    key: "_getEntriesByPath",
    value: function _getEntriesByPath(pathInfo) {
      return this._executeRequest('GetDirContents', {
        pathInfo: pathInfo
      });
    }
  }, {
    key: "_executeRequest",
    value: function _executeRequest(command, args) {
      var method = command === 'GetDirContents' ? 'GET' : 'POST';
      var deferred = new _deferred.Deferred();

      _ajax.default.sendRequest({
        url: this._getEndpointUrl(command, args),
        method: method,
        dataType: 'json',
        cache: false
      }).then(function (result) {
        !result.success && deferred.reject(result) || deferred.resolve(result);
      }, function (e) {
        return deferred.reject(e);
      });

      return deferred.promise();
    }
  }, {
    key: "_getEndpointUrl",
    value: function _getEndpointUrl(command, args) {
      var queryString = this._getQueryString({
        command: command,
        arguments: JSON.stringify(args)
      });

      var separator = this._endpointUrl && this._endpointUrl.indexOf('?') > 0 ? '&' : '?';
      return this._endpointUrl + separator + queryString;
    }
  }, {
    key: "_getQueryString",
    value: function _getQueryString(params) {
      var pairs = [];
      var keys = Object.keys(params);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = params[key];

        if (value === undefined) {
          continue;
        }

        if (value === null) {
          value = '';
        }

        if (Array.isArray(value)) {
          this._processQueryStringArrayParam(key, value, pairs);
        } else {
          var pair = this._getQueryStringPair(key, value);

          pairs.push(pair);
        }
      }

      return pairs.join('&');
    }
  }, {
    key: "_processQueryStringArrayParam",
    value: function _processQueryStringArrayParam(key, array, pairs) {
      var _this6 = this;

      (0, _iterator.each)(array, function (_, item) {
        var pair = _this6._getQueryStringPair(key, item);

        pairs.push(pair);
      });
    }
  }, {
    key: "_getQueryStringPair",
    value: function _getQueryStringPair(key, value) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
  }, {
    key: "_hasSubDirs",
    value: function _hasSubDirs(dataObj) {
      var hasSubDirs = this._hasSubDirsGetter(dataObj);

      return typeof hasSubDirs === 'boolean' ? hasSubDirs : true;
    }
  }, {
    key: "_getKeyExpr",
    value: function _getKeyExpr(options) {
      return options.keyExpr || 'key';
    }
  }]);

  return RemoteFileSystemProvider;
}(_provider_base.default);

var _default = RemoteFileSystemProvider;
exports.default = _default;
module.exports = exports.default;