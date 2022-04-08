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
var renderGrid = function () {// TODO: implement code to Render grid
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
/* harmony import */ var _utilities_folder_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_folder.model */ "./src/scripts/utilities/_folder.model.ts");
/* harmony import */ var _utilities_file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/_file.model */ "./src/scripts/utilities/_file.model.ts");
/* harmony import */ var _utilities_item_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/_item.list */ "./src/scripts/utilities/_item.list.ts");
/* eslint-disable no-console */

/* eslint-disable no-undef */

/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */





Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var initialItemList = function (list) {
    var item1 = new _utilities_folder_model__WEBPACK_IMPORTED_MODULE_2__["default"](1, 'CAS', 'April 08', 'Minh Thuan', 'April 30', 'Megan Bowen');
    var item2 = new _utilities_file_model__WEBPACK_IMPORTED_MODULE_3__["default"](2, 'CoasterAndBargeLoading.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
    var item3 = new _utilities_file_model__WEBPACK_IMPORTED_MODULE_3__["default"](3, 'RevenueByServices.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
    var item4 = new _utilities_file_model__WEBPACK_IMPORTED_MODULE_3__["default"](4, 'RevenueByServices2016.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
    var item5 = new _utilities_file_model__WEBPACK_IMPORTED_MODULE_3__["default"](5, 'RevenueByServices2017.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
    list.addItem(item1);
    list.addItem(item2);
    list.addItem(item3);
    list.addItem(item4);
    list.addItem(item5);
  };

  var baseItemList = new _utilities_item_list__WEBPACK_IMPORTED_MODULE_4__["default"]();
  initialItemList(baseItemList);
  sessionStorage.setItem('ItemList', JSON.stringify(baseItemList.itemList));
  console.log(JSON.parse(sessionStorage.getItem('ItemList')));
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




var File =
/** @class */
function (_super) {
  __extends(File, _super);

  function File(id, name, createAt, createdBy, modifiedAt, modifiedBy, extension) {
    var _this = _super.call(this, id, name, createAt, createdBy, modifiedAt, modifiedBy) || this;

    _this.extension = extension;
    return _this;
  }

  return File;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (File);

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

/***/ "./src/scripts/utilities/_item.list.ts":
/*!*********************************************!*\
  !*** ./src/scripts/utilities/_item.list.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ItemList =
/** @class */
function () {
  function ItemList() {
    var _this = this;

    this.addItem = function (item) {
      _this.itemList.push(item);
    };

    this.removeItem = function (id) {
      for (var i = 0; i < _this.itemList.length; ++i) {
        if (_this.itemList[i].id === id) {
          _this.itemList.splice(i, 1);
        }
      }
    };

    this.updateItem = function (upItem) {
      _this.itemList.forEach(function (item) {
        if (item.id === upItem.id) {
          item.name = upItem.name;
          item.createdAt = upItem.createdAt;
          item.createdBy = upItem.createdBy;
          item.modifiedAt = upItem.modifiedAt;
          item.modifiedBy = upItem.modifiedBy;
        }
      });
    };

    this.itemList = [];
  }

  ItemList.prototype.getAllItem = function () {
    return this.itemList;
  };

  ItemList.prototype.getItemById = function (id) {
    this.itemList.forEach(function (item) {
      if (item.id === id) {
        return item;
      }
    });
    return null;
  };

  return ItemList;
}();

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

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