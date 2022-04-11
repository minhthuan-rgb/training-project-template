/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_client */ "./src/scripts/utilities/_client.ts");
/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */


var renderGrid = function () {
  var client = new _utilities_client__WEBPACK_IMPORTED_MODULE_0__["default"]();
  client.getAllItem();
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */


Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/scripts/utilities/_base.model.ts":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/_base.model.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Base =
/** @class */
function () {
  function Base(id, name, createAt, createdBy, modifiedAt, modifiedBy) {
    this.id = id;
    this.name = name;
    this.createdAt = createAt;
    this.createdBy = createdBy;
    this.modifiedAt = modifiedAt;
    this.modifiedBy = modifiedBy;
  }

  return Base;
}();

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./src/scripts/utilities/_client.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_client.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_http.client */ "./src/scripts/utilities/_http.client.ts");


var Client =
/** @class */
function () {
  function Client() {
    var _this = this;

    this.getAllItem = function () {
      _this.httpClient.getAllItem().then(function (data) {
        _this.renderItemList(data);
      }).catch(function (error) {
        alert(error);
      });
    };

    this.renderItemList = function (itemList) {
      // const html = items.map ((item) => `html`).join('');
      var html = '';
      itemList.forEach(function (item) {
        var iconClass = item.hasOwnProperty('extension') ? 'fa-file-excel' : 'fa-folder-open';
        var recentHint = item.modifiedAt === 'A few seconds ago' ? '<i class="fab fa-yelp"></i>' : '';
        html += "<tr>\n                <td><i class=\"fas " + iconClass + "\"></i></td>\n                <td>" + recentHint + item.name + "</td>\n                <td>" + item.modifiedAt + "</td>\n                <td>" + item.modifiedBy + "</td>\n                <td>\n                  <button class=\"btn btn-edit\">Edit</button>\n                  <button class=\"btn btn-delete\">Delete</button>\n                </td>\n                <td></td>\n              </tr>";
      });
      document.querySelector('#item-list').innerHTML = html;
      var deleteBtns = document.querySelectorAll('.btn-delete');
      var editBtns = document.querySelectorAll('.btn-edit');

      var _loop_1 = function (i) {
        deleteBtns[i].addEventListener('click', function () {
          if (confirm('Are you sure to delete this item?')) {
            _this.httpClient.removeItem(itemList[i].id).then(function (message) {
              alert(message);
            }).catch(function (error) {
              alert(error);
            });

            _this.getAllItem();
          }
        });
        editBtns[i].addEventListener('click', function () {
          console.log('Edit');
        });
      };

      for (var i = 0; i < deleteBtns.length; i++) {
        _loop_1(i);
      }
    };

    this.httpClient = new _http_client__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.httpClient.initialItemList();
  }

  return Client;
}();

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "./src/scripts/utilities/_file.model.ts":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/_file.model.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base.model */ "./src/scripts/utilities/_base.model.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/* eslint-disable import/no-unresolved */




var CFile =
/** @class */
function (_super) {
  __extends(CFile, _super);

  function CFile(id, name, createAt, createdBy, modifiedAt, modifiedBy, extension) {
    var _this = _super.call(this, id, name, createAt, createdBy, modifiedAt, modifiedBy) || this;

    _this.extension = extension;
    return _this;
  }

  return CFile;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CFile);

/***/ }),

/***/ "./src/scripts/utilities/_folder.model.ts":
/*!************************************************!*\
  !*** ./src/scripts/utilities/_folder.model.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base.model */ "./src/scripts/utilities/_base.model.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/* eslint-disable import/no-unresolved */




var Folder =
/** @class */
function (_super) {
  __extends(Folder, _super);

  function Folder(id, name, createAt, createdBy, modifiedAt, modifiedBy, subFolders) {
    if (subFolders === void 0) {
      subFolders = [];
    }

    var _this = _super.call(this, id, name, createAt, createdBy, modifiedAt, modifiedBy) || this;

    _this.subFolders = subFolders;
    return _this;
  }

  return Folder;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Folder);

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ready = function (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/_http.client.ts":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/_http.client.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_file.model */ "./src/scripts/utilities/_file.model.ts");
/* harmony import */ var _folder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_folder.model */ "./src/scripts/utilities/_folder.model.ts");
/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable no-undef */

/* eslint-disable import/no-unresolved */



var HttpClient =
/** @class */
function () {
  function HttpClient() {
    this.getAllItem = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          if (result) resolve(Array.from(result));else reject('No Data');
        }, 1000);
      });
    };

    this.getItemById = function (id) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === id;
          });
          if (foundItem) resolve(foundItem);else reject('Not Found');
        }, 1000);
      });
    };

    this.addItem = function (addItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          if (result.find(function (item) {
            return item.name === addItem.name;
          })) reject('Item Already Exists!');else {
            result.push(addItem);
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Added!');
          }
        }, 1000);
      });
    };

    this.updateItem = function (upItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var _a;

          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === upItem.id;
          });

          if (foundItem) {
            var index = result.indexOf(foundItem);
            _a = [upItem.name, upItem.createdAt, upItem.createdBy, upItem.modifiedAt, upItem.modifiedBy], result[index].name = _a[0], result[index].createdAt = _a[1], result[index].createdBy = _a[2], result[index].modifiedAt = _a[3], result[index].modifiedBy = _a[4];
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Updated!');
          } else reject('Item Not Found!');
        }, 1000);
      });
    };

    this.removeItem = function (id) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === id;
          });

          if (foundItem) {
            result.splice(result.indexOf(foundItem), 1);
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Deleted!');
          } else reject('Item Not Found!');
        }, 1000);
      });
    };

    this.initialItemList = function () {
      var data = [];
      var item1 = new _folder_model__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'CAS', 'April 08', 'Minh Thuan', 'April 30', 'Megan Bowen');
      var item2 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'CoasterAndBargeLoading.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item3 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'RevenueByServices.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item4 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](4, 'RevenueByServices2016.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item5 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](5, 'RevenueByServices2017.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      data.push(item1);
      data.push(item2);
      data.push(item3);
      data.push(item4);
      data.push(item5);
      sessionStorage.setItem('data', JSON.stringify(data));
    };

    this.initialItemList();
  }

  return HttpClient;
}();

/* harmony default export */ __webpack_exports__["default"] = (HttpClient);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map