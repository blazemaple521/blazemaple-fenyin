(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/main.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\n__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 37);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 46));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 68));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFBdUU7QUFDMUY7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdW5pLWNsb3VkL2Rpc3QvaW5kZXguanMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcblxuQXBwLm1wVHlwZSA9ICdhcHAnXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!******************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages.json ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/search/search', function () {
  return Vue.extend(__webpack_require__(/*! pages/search/search.vue?mpType=page */ 7).default);
});
__definePage('pages/qrcode/qrcode', function () {
  return Vue.extend(__webpack_require__(/*! pages/qrcode/qrcode.vue?mpType=page */ 13).default);
});
__definePage('pages/loginRegist/loginRegist', function () {
  return Vue.extend(__webpack_require__(/*! pages/loginRegist/loginRegist.vue?mpType=page */ 21).default);
});
__definePage('pages/me/myBackImg', function () {
  return Vue.extend(__webpack_require__(/*! pages/me/myBackImg.vue?mpType=page */ 27).default);
});
__definePage('pages/me/myFace', function () {
  return Vue.extend(__webpack_require__(/*! pages/me/myFace.vue?mpType=page */ 32).default);
});

/***/ }),
/* 7 */
/*!*******************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/search/search.vue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=6337d5d4&mpType=page */ 8);\n/* harmony import */ var _search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/search/search.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3NNO0FBQ3RNLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzM3ZDVkNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/search/search.vue?vue&type=template&id=6337d5d4&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=6337d5d4&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6337d5d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/search/search.vue?vue&type=template&id=6337d5d4&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c("view", {
        style: _vm._$s(1, "s", { height: _vm.statusBarHeight + "px" }),
        attrs: { _i: 1 },
      }),
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "big-search-wrapper"),
          attrs: { _i: 2 },
        },
        [
          _c("image", {
            staticClass: _vm._$s(3, "sc", "header-right-search icon-search"),
            attrs: { _i: 3 },
            on: {
              click: function ($event) {
                return _vm.back()
              },
            },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "search-box"), attrs: { _i: 4 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "search-box-left"),
                  attrs: { _i: 5 },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(
                      6,
                      "sc",
                      "header-right-search search-image"
                    ),
                    attrs: { _i: 6 },
                  }),
                ]
              ),
              _c("view", [
                _c("input", {
                  staticClass: _vm._$s(8, "sc", "search-input"),
                  attrs: {
                    model: _vm._$s(8, "a-model", _vm.searchContent),
                    value: _vm._$s(8, "a-value", _vm.searchContent),
                    _i: 8,
                  },
                  on: { input: _vm.typingContent },
                }),
              ]),
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "search-box-right"),
                  attrs: { _i: 9 },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(10, "sc", "scan-image"),
                    attrs: { _i: 10 },
                    on: {
                      click: function ($event) {
                        return _vm.scan()
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c("view", { attrs: { _i: 11 }, on: { click: _vm.doSearch } }, [
            _c("text", {
              staticClass: _vm._$s(12, "sc", "search-btn"),
              attrs: { _i: 12 },
            }),
          ]),
        ]
      ),
      _c(
        "view",
        [
          _vm._l(
            _vm._$s(14, "f", { forItems: _vm.historyList }),
            function (h, index, $20, $30) {
              return _c(
                "view",
                {
                  key: _vm._$s(14, "f", { forIndex: $20, key: index }),
                  staticClass: _vm._$s(
                    "14-" + $30,
                    "sc",
                    "history-item-wrapper"
                  ),
                  attrs: { _i: "14-" + $30 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("15-" + $30, "sc", "time-and-text"),
                      attrs: { _i: "15-" + $30 },
                      on: {
                        click: function ($event) {
                          return _vm.searchByHistory(h)
                        },
                      },
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s("16-" + $30, "sc", "time-image"),
                        attrs: { _i: "16-" + $30 },
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(
                            "17-" + $30,
                            "sc",
                            "history-text"
                          ),
                          attrs: { _i: "17-" + $30 },
                        },
                        [_vm._v(_vm._$s("17-" + $30, "t0-0", _vm._s(h)))]
                      ),
                    ]
                  ),
                  _c("image", {
                    staticClass: _vm._$s("18-" + $30, "sc", "delete-image"),
                    attrs: { _i: "18-" + $30 },
                    on: {
                      click: function ($event) {
                        return _vm.removeHistoryItem(index)
                      },
                    },
                  }),
                ]
              )
            }
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "clear-all-wrapper"),
              attrs: { _i: 19 },
              on: {
                click: function ($event) {
                  return _vm.removeAllHistory()
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(20, "sc", "clear-all"),
                attrs: { _i: 20 },
              }),
            ]
          ),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*******************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/search/search.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlyQixDQUFnQixtcUJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/search/search.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar _default = {\n  data: function data() {\n    return {\n      searchContent: \"\",\n      historyList: ['风间影月', '慕课网', 'imooc', '蝙蝠侠', '灌篮高手', '蜘蛛侠', '钢铁侠']\n    };\n  },\n  onLoad: function onLoad(option) {\n    this.statusBarHeight = system.statusBarHeight;\n\n    // 从本地缓存获得搜索的历史记录\n    var historyListJSON = uni.getStorageSync(\"historyList\");\n    if (historyListJSON == undefined || historyListJSON == \"\" || historyListJSON == null) {\n      this.historyList = [];\n      uni.setStorageSync(\"historyList\", JSON.stringify(this.historyList));\n    } else {\n      this.historyList = JSON.parse(historyListJSON);\n    }\n  },\n  methods: {\n    back: function back() {\n      uni.navigateBack({\n        delta: 1\n      });\n    },\n    scan: function scan() {\n      uni.scanCode({\n        success: function success(e) {\n          // url地址\n          var result = e.result;\n          var vlogId = JSON.parse(result).content;\n          // 跳转页面，把搜索条件携带过去\n          uni.navigateTo({\n            url: \"../vlog/vlog?vlogId=\" + vlogId\n          });\n        }\n      });\n    },\n    typingContent: function typingContent(e) {\n      this.searchContent = e.target.value;\n    },\n    searchByHistory: function searchByHistory(searchContent) {\n      this.searchContent = searchContent;\n      this.doSearch();\n    },\n    doSearch: function doSearch() {\n      var me = this;\n      var searchContent = this.searchContent;\n      if (searchContent == undefined || searchContent == \"\" || searchContent == null) {\n        return;\n      }\n      var tempList = this.historyList;\n      // 判断搜索内容是否已经存在，如果存在，则移除\n      for (var i = 0; i < tempList.length; i++) {\n        var old = tempList[i];\n        if (searchContent === old) {\n          tempList.splice(i, 1);\n          break;\n        }\n      }\n      tempList.unshift(searchContent);\n\n      // 如果超过10个，则删除最后一项\n      tempList.splice(10, 1);\n      this.historyList = tempList;\n      // 清空搜索框内容\n      this.searchContent = \"\";\n      // 保存到本地缓存\n      uni.setStorageSync(\"historyList\", JSON.stringify(this.historyList));\n\n      // 跳转页面，把搜索条件携带过去\n      uni.navigateTo({\n        url: \"searchList?search=\" + searchContent\n      });\n    },\n    removeHistoryItem: function removeHistoryItem(index) {\n      this.historyList.splice(index, 1);\n      uni.setStorageSync(\"historyList\", JSON.stringify(this.historyList));\n    },\n    removeAllHistory: function removeAllHistory() {\n      this.historyList = [];\n      uni.setStorageSync(\"historyList\", JSON.stringify(this.historyList));\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2VhcmNoL3NlYXJjaC52dWUiXSwibmFtZXMiOlsiZGF0YSIsInNlYXJjaENvbnRlbnQiLCJoaXN0b3J5TGlzdCIsIm9uTG9hZCIsInVuaSIsIm1ldGhvZHMiLCJiYWNrIiwiZGVsdGEiLCJzY2FuIiwic3VjY2VzcyIsInVybCIsInR5cGluZ0NvbnRlbnQiLCJzZWFyY2hCeUhpc3RvcnkiLCJkb1NlYXJjaCIsInRlbXBMaXN0IiwicmVtb3ZlSGlzdG9yeUl0ZW0iLCJyZW1vdmVBbGxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SkE7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO01BQ0E7TUFDQUM7SUFDQTtNQUNBO0lBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBRjtRQUNBRztNQUNBO0lBQ0E7SUFDQUM7TUFDQUo7UUFDQUs7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBTDtZQUNBTTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0E7UUFDQTtNQUNBO01BQ0FBOztNQUdBO01BQ0FBO01BR0E7TUFDQTtNQUNBO01BQ0E7TUFDQVY7O01BRUE7TUFDQUE7UUFDQU07TUFDQTtJQUNBO0lBQ0FLO01BQ0E7TUFDQVg7SUFDQTtJQUNBWTtNQUNBO01BQ0FaO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG4ucGFnZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYjI3O1xufVxuLmhlYWRlci1yaWdodC1zZWFyY2gge1xuXHRoZWlnaHQ6IDEwMHJweDtcblx0LyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICovXG59XG5cbi5iaWctc2VhcmNoLXdyYXBwZXIge1xuXHRwYWRkaW5nOiAzMHJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmljb24tc2VhcmNoIHtcblx0d2lkdGg6IDQwcnB4O1xuXHRoZWlnaHQ6IDQwcnB4O1xuXHRvcGFjaXR5OiAwLjg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5zZWFyY2gtYm94LWxlZnQge1xuXHRwYWRkaW5nOiAwIDEwcnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NjVlO1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7IFxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4uc2VhcmNoLWltYWdlIHtcblx0d2lkdGg6IDUwcnB4O1xuXHRoZWlnaHQ6IDUwcnB4O1xuXHRvcGFjaXR5OiAwLjg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5zZWFyY2gtaW5wdXQge1xuXHR3aWR0aDogMzYwcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NjVlO1xuXHRoZWlnaHQ6IDgwcnB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuLnNlYXJjaC1ib3gtcmlnaHQge1xuXHRwYWRkaW5nOiAwIDE2cnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NjVlO1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4OyBcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcdFxufVxuLnNjYW4taW1hZ2Uge1xuXHR3aWR0aDogNTBycHg7XG5cdGhlaWdodDogNTBycHg7XG5cdG9wYWNpdHk6IDAuODtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnNlYXJjaC1idG4ge1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udGltZS1pbWFnZSB7XG5cdHdpZHRoOiA0MHJweDtcblx0aGVpZ2h0OiA0MHJweDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmRlbGV0ZS1pbWFnZSB7XG5cdHdpZHRoOiAzMHJweDtcblx0aGVpZ2h0OiAzMHJweDtcblx0b3BhY2l0eTogMC45O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaGlzdG9yeS1pdGVtLXdyYXBwZXIge1xuXHRwYWRkaW5nOiAxNnJweCAyNnJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRpbWUtYW5kLXRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR3aWR0aDogNTAwcnB4O1xufVxuLmhpc3RvcnktdGV4dCB7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xufVxuLmNsZWFyLWFsbC13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IDQwcnB4O1xufVxuLmNsZWFyLWFsbCB7XG5cdGNvbG9yOiAjRjFGMUYxO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XG5cdFx0PCEtLSDov5nph4zmmK/nirbmgIHmoI8sIOavj+S4qumhtemdoumDvemcgOimgeacie+8jOebrueahOS4jeiuqemhtemdouimhueblueKtuaAgeagjyAtLT5cblx0XHQ8dmlldyA6c3R5bGU9XCJ7aGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQgKyAncHgnfVwiPjwvdmlldz5cblx0XHRcblx0XHQ8dmlldyBjbGFzcz1cImJpZy1zZWFyY2gtd3JhcHBlclwiPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyLXJpZ2h0LXNlYXJjaCBpY29uLXNlYXJjaFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tYmFjay5wbmdcIiBAY2xpY2s9XCJiYWNrKClcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoLWJveFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC1ib3gtbGVmdFwiPlxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2ggc2VhcmNoLWltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zZWFyY2gucG5nXCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIlwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0Om1vZGVsPVwic2VhcmNoQ29udGVudFwiIFxuXHRcdFx0XHRcdFx0OnZhbHVlPVwic2VhcmNoQ29udGVudFwiICBcblx0XHRcdFx0XHRcdEBpbnB1dD1cInR5cGluZ0NvbnRlbnRcIiBcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YaF5a65flwiIFxuXHRcdFx0XHRcdFx0bWF4bGVuZ3RoPVwiMTBcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJzZWFyY2gtaW5wdXRcIi8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2gtYm94LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2Nhbi1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tc2Nhbi1xcmNvZGUucG5nXCIgQGNsaWNrPVwic2NhbigpXCIvPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIiBAY2xpY2s9XCJkb1NlYXJjaFwiPjx0ZXh0IGNsYXNzPVwic2VhcmNoLWJ0blwiPuaQnOe0ojwvdGV4dD48L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3PlxuXHRcdFx0PHZpZXcgdi1mb3I9XCIoaCwgaW5kZXgpIGluIGhpc3RvcnlMaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJoaXN0b3J5LWl0ZW0td3JhcHBlclwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtYW5kLXRleHRcIiBAY2xpY2s9XCJzZWFyY2hCeUhpc3RvcnkoaClcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ0aW1lLWltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi10aW1lLnBuZ1wiLz5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhpc3RvcnktdGV4dFwiPnt7aH19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImRlbGV0ZS1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZGVsZXRlLnBuZ1wiIEBjbGljaz1cInJlbW92ZUhpc3RvcnlJdGVtKGluZGV4KVwiLz5cblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjbGVhci1hbGwtd3JhcHBlclwiIEBjbGljaz1cInJlbW92ZUFsbEhpc3RvcnkoKVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNsZWFyLWFsbFwiPua4hemZpOaJgOacieaQnOe0ouiusOW9lTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzZWFyY2hDb250ZW50OiBcIlwiLFxuXHRcdFx0XHRoaXN0b3J5TGlzdDogWyfpo47pl7TlvbHmnIgnLCAn5oWV6K++572RJywgJ2ltb29jJywgJ+idmeidoOS+oCcsICfngYznr67pq5jmiYsnLCAn6JyY6Jub5L6gJywgJ+mSoumTgeS+oCddXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQob3B0aW9uKSB7XG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHN5c3RlbS5zdGF0dXNCYXJIZWlnaHQ7XG5cdFx0XHRcblx0XHRcdC8vIOS7juacrOWcsOe8k+WtmOiOt+W+l+aQnOe0oueahOWOhuWPsuiusOW9lVxuXHRcdFx0dmFyIGhpc3RvcnlMaXN0SlNPTiA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImhpc3RvcnlMaXN0XCIpO1xuXHRcdFx0aWYgKGhpc3RvcnlMaXN0SlNPTiA9PSB1bmRlZmluZWQgfHwgaGlzdG9yeUxpc3RKU09OID09IFwiXCIgfHwgaGlzdG9yeUxpc3RKU09OID09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5oaXN0b3J5TGlzdCA9IFtdO1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJoaXN0b3J5TGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmhpc3RvcnlMaXN0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmhpc3RvcnlMaXN0ID0gSlNPTi5wYXJzZShoaXN0b3J5TGlzdEpTT04pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRiYWNrKCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRkZWx0YTogMVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHNjYW4oKSB7XG5cdFx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIHVybOWcsOWdgFxuXHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IGUucmVzdWx0O1xuXHRcdFx0XHRcdFx0dmFyIHZsb2dJZCA9IEpTT04ucGFyc2UocmVzdWx0KS5jb250ZW50O1xuXHRcdFx0XHRcdFx0Ly8g6Lez6L2s6aG16Z2i77yM5oqK5pCc57Si5p2h5Lu25pC65bim6L+H5Y67XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi92bG9nL3Zsb2c/dmxvZ0lkPVwiICsgdmxvZ0lkXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR0eXBpbmdDb250ZW50KGUpIHtcblx0XHRcdFx0dGhpcy5zZWFyY2hDb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0c2VhcmNoQnlIaXN0b3J5KHNlYXJjaENvbnRlbnQpIHtcblx0XHRcdFx0dGhpcy5zZWFyY2hDb250ZW50ID0gc2VhcmNoQ29udGVudDtcblx0XHRcdFx0dGhpcy5kb1NlYXJjaCgpO1xuXHRcdFx0fSxcblx0XHRcdGRvU2VhcmNoKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VhcmNoQ29udGVudCA9IHRoaXMuc2VhcmNoQ29udGVudDtcblx0XHRcdFx0aWYgKHNlYXJjaENvbnRlbnQgPT0gdW5kZWZpbmVkIHx8IHNlYXJjaENvbnRlbnQgPT0gXCJcIiB8fCBzZWFyY2hDb250ZW50ID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHZhciB0ZW1wTGlzdCA9IHRoaXMuaGlzdG9yeUxpc3Q7XG5cdFx0XHRcdC8vIOWIpOaWreaQnOe0ouWGheWuueaYr+WQpuW3sue7j+WtmOWcqO+8jOWmguaenOWtmOWcqO+8jOWImeenu+mZpFxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCB0ZW1wTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIG9sZCA9IHRlbXBMaXN0W2ldO1xuXHRcdFx0XHRcdGlmIChzZWFyY2hDb250ZW50ID09PSBvbGQpIHtcblx0XHRcdFx0XHRcdHRlbXBMaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0ZW1wTGlzdC51bnNoaWZ0KHNlYXJjaENvbnRlbnQpO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWmguaenOi2hei/hzEw5Liq77yM5YiZ5Yig6Zmk5pyA5ZCO5LiA6aG5XG5cdFx0XHRcdHRlbXBMaXN0LnNwbGljZSgxMCwgMSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5oaXN0b3J5TGlzdCA9IHRlbXBMaXN0O1xuXHRcdFx0XHQvLyDmuIXnqbrmkJzntKLmoYblhoXlrrlcblx0XHRcdFx0dGhpcy5zZWFyY2hDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0Ly8g5L+d5a2Y5Yiw5pys5Zyw57yT5a2YXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImhpc3RvcnlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeUxpc3QpKTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOi3s+i9rOmhtemdou+8jOaKiuaQnOe0ouadoeS7tuaQuuW4pui/h+WOu1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcInNlYXJjaExpc3Q/c2VhcmNoPVwiICsgc2VhcmNoQ29udGVudFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHJlbW92ZUhpc3RvcnlJdGVtKGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuaGlzdG9yeUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiaGlzdG9yeUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5oaXN0b3J5TGlzdCkpO1xuXHRcdFx0fSxcblx0XHRcdHJlbW92ZUFsbEhpc3RvcnkoKSB7XG5cdFx0XHRcdHRoaXMuaGlzdG9yeUxpc3QgPSBbXTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiaGlzdG9yeUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5oaXN0b3J5TGlzdCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!*******************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/qrcode/qrcode.vue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrcode.vue?vue&type=template&id=f9957354&mpType=page */ 14);\n/* harmony import */ var _qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrcode.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/qrcode/qrcode.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3NNO0FBQ3RNLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3FyY29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjk5NTczNTQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3FyY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcXJjb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcXJjb2RlL3FyY29kZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/qrcode/qrcode.vue?vue&type=template&id=f9957354&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./qrcode.vue?vue&type=template&id=f9957354&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_template_id_f9957354_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/qrcode/qrcode.vue?vue&type=template&id=f9957354&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c("image", {
        staticClass: _vm._$s(1, "sc", "bg-cover"),
        style: _vm._$s(1, "s", { height: _vm.screenHeight + "px" }),
        attrs: {
          src: _vm._$s(
            1,
            "a-src",
            __webpack_require__(/*! ../../static/images/bg-qrcode2.png */ 16)
          ),
          _i: 1,
        },
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "qrcode-box"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "user-box"), attrs: { _i: 3 } },
            [
              _c("image", {
                staticClass: _vm._$s(4, "sc", "bg-cover"),
                attrs: {
                  src: _vm._$s(
                    4,
                    "a-src",
                    __webpack_require__(/*! ../../static/face/face-arrow-2.jpg */ 17)
                  ),
                  _i: 4,
                },
              }),
              _c("text"),
              _c(
                "view",
                {
                  staticClass: _vm._$s(6, "sc", "canvas-qrcode-box"),
                  attrs: { _i: 6 },
                },
                [_c("canvas", { attrs: { id: "qrcode", _i: 7 } })]
              ),
              _c("text"),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/static/images/bg-qrcode2.png ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/bg-qrcode2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1hZ2VzL2JnLXFyY29kZTIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/static/face/face-arrow-2.jpg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/face/face-arrow-2.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvZmFjZS9mYWNlLWFycm93LTIuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/qrcode/qrcode.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./qrcode.vue?vue&type=script&lang=js&mpType=page */ 19);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlyQixDQUFnQixtcUJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcXJjb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3FyY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/qrcode/qrcode.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _uqrcode = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/Sansnn-uQRCode/components/uqrcode/common/uqrcode.js */ 20));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar _default = {\n  data: function data() {\n    return {\n      vlogId: \"\",\n      // screenHeight: system.screenHeight,\n      screenHeight: system.safeArea.bottom,\n      statusBarHeight: system.statusBarHeight\n    };\n  },\n  onReady: function onReady() {\n    var vlogId = this.vlogId;\n    var content = {\n      type: \"vlog\",\n      content: vlogId\n    };\n    var contentStr = JSON.stringify(content);\n    _uqrcode.default.make({\n      canvasId: 'qrcode',\n      componentInstance: this,\n      size: 170,\n      margin: 10,\n      text: contentStr,\n      backgroundColor: '#ffffff',\n      foregroundColor: '#0f0827',\n      fileType: 'png',\n      errorCorrectLevel: _uqrcode.default.errorCorrectLevel.H\n    }).then(function (res) {});\n  },\n  onLoad: function onLoad(params) {\n    var vlogId = params.vlogId;\n    this.vlogId = vlogId;\n  },\n  methods: {\n    close: function close() {\n      uni.navigateBack({\n        delta: 1,\n        animationType: \"slide-out-bottom\"\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcXJjb2RlL3FyY29kZS52dWUiXSwibmFtZXMiOlsiZGF0YSIsInZsb2dJZCIsInNjcmVlbkhlaWdodCIsInN0YXR1c0JhckhlaWdodCIsIm9uUmVhZHkiLCJ0eXBlIiwiY29udGVudCIsInVRUkNvZGUiLCJjYW52YXNJZCIsImNvbXBvbmVudEluc3RhbmNlIiwic2l6ZSIsIm1hcmdpbiIsInRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JlZ3JvdW5kQ29sb3IiLCJmaWxlVHlwZSIsImVycm9yQ29ycmVjdExldmVsIiwidGhlbiIsIm9uTG9hZCIsIm1ldGhvZHMiLCJjbG9zZSIsInVuaSIsImRlbHRhIiwiYW5pbWF0aW9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBQUEsZUFFQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBQztNQUNBQztJQUNBO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQSxHQUNBQyxxQkFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cbi5wYWdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnFyY29kZS1taWRkbGUtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IC0xMjBycHg7XG59XG5cbi5xcmNvZGUtYm94IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0XG5cdGJveC1zaGFkb3c6MCAxMHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSkgIWltcG9ydGFudDtcbn1cblxuLnVzZXItYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IC03MHJweDtcbn1cblxuLmNhbnZhcy1xcmNvZGUtYm94IHtcblx0bWFyZ2luLXRvcDogNTBycHg7XG59XG5cbi5iZy1jb3ZlciB7XG5cdHdpZHRoOiA3NTBycHg7XG59XG5cbi5idG4tY2xvc2Uge1xuXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG5cdC8qIHRvcDogMDtcblx0Ym90dG9tOiAwOyAqL1xuXHR3aWR0aDogNTBycHg7XG5cdGhlaWdodDogNTBycHg7XG5cdG1hcmdpbi10b3A6IDgwcnB4O1xuXHRtYXJnaW4tbGVmdDogMjBycHg7XG59XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdFxuXHRcdDxpbWFnZSBtb2RlPVwic2NhbGVUb0ZpbGxcIiA6c3R5bGU9XCJ7aGVpZ2h0OnNjcmVlbkhlaWdodCsncHgnfVwiIGNsYXNzPVwiYmctY292ZXJcIlxuXHRcdFx0c3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iZy1xcmNvZGUyLnBuZ1wiPjwvaW1hZ2U+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJxcmNvZGUtYm94XCIgc3R5bGU9XCJ3aWR0aDogNTUwcnB4O2hlaWdodDogNzAwcnB4O21hcmdpbi10b3A6IDMyMHJweDthbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItYm94XCI+XG5cdFx0XHRcdDxpbWFnZSBtb2RlPVwiYXNwZWN0RmlsbFwiIGNsYXNzPVwiYmctY292ZXJcIiBzdHlsZT1cIndpZHRoOiAxMzBycHg7aGVpZ2h0OiAxMzBycHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7YWxpZ24tc2VsZjogY2VudGVyO1wiXG5cdFx0XHRcdFx0c3JjPVwiLi4vLi4vc3RhdGljL2ZhY2UvZmFjZS1hcnJvdy0yLmpwZ1wiPjwvaW1hZ2U+XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHJweDtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDQwMDtcIj7po47pl7TlvbHmnIg8L3RleHQ+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbnZhcy1xcmNvZGUtYm94XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0PGNhbnZhcyBpZD1cInFyY29kZVwiIGNhbnZhcy1pZD1cInFyY29kZVwiIHN0eWxlPVwid2lkdGg6IDE3MHB4O2hlaWdodDogMTcwcHg7YWxpZ24tc2VsZjogY2VudGVyO1wiIC8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyOyBtYXJnaW4tdG9wOiAyMHJweDtjb2xvcjogIzgwODA4MDtmb250LXNpemU6IDExcHg7Zm9udC13ZWlnaHQ6IDMwMDtcIj7miavmj4/kuoznu7TnoIHvvIzlsLHog73nnIvmiJHnmoTkvZzlk4Hlk588L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0aW1wb3J0IHVRUkNvZGUgZnJvbSAnQC91bmlfbW9kdWxlcy9TYW5zbm4tdVFSQ29kZS9jb21wb25lbnRzL3VxcmNvZGUvY29tbW9uL3VxcmNvZGUuanMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmxvZ0lkOiBcIlwiLFxuXHRcdFx0XHQvLyBzY3JlZW5IZWlnaHQ6IHN5c3RlbS5zY3JlZW5IZWlnaHQsXG5cdFx0XHRcdHNjcmVlbkhlaWdodDogc3lzdGVtLnNhZmVBcmVhLmJvdHRvbSxcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblJlYWR5KCkge1xuXHRcdFx0dmFyIHZsb2dJZCA9IHRoaXMudmxvZ0lkO1xuXHRcdFx0dmFyIGNvbnRlbnQgPSB7XG5cdFx0XHRcdHR5cGU6IFwidmxvZ1wiLFxuXHRcdFx0XHRjb250ZW50OiB2bG9nSWRcblx0XHRcdH07XG5cdFx0XHR2YXIgY29udGVudFN0ciA9IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpO1xuXHRcdCAgICB1UVJDb2RlLm1ha2Uoe1xuXHRcdCAgICAgICAgY2FudmFzSWQ6ICdxcmNvZGUnLFxuXHRcdCAgICAgICAgY29tcG9uZW50SW5zdGFuY2U6IHRoaXMsXG5cdFx0ICAgICAgICBzaXplOiAxNzAsXG5cdFx0ICAgICAgICBtYXJnaW46IDEwLFxuXHRcdCAgICAgICAgdGV4dDogY29udGVudFN0cixcblx0XHQgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuXHRcdCAgICAgICAgZm9yZWdyb3VuZENvbG9yOiAnIzBmMDgyNycsXG5cdFx0ICAgICAgICBmaWxlVHlwZTogJ3BuZycsXG5cdFx0ICAgICAgICBlcnJvckNvcnJlY3RMZXZlbDogdVFSQ29kZS5lcnJvckNvcnJlY3RMZXZlbC5IXG5cdFx0ICAgIH0pXG5cdFx0ICAgIC50aGVuKHJlcyA9PiB7XG5cdFx0ICAgIH0pXG5cdFx0ICB9LFxuXHRcdG9uTG9hZChwYXJhbXMpIHtcblx0XHRcdHZhciB2bG9nSWQgPSBwYXJhbXMudmxvZ0lkO1xuXHRcdFx0dGhpcy52bG9nSWQgPSB2bG9nSWQ7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0ZGVsdGE6IDEsXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1vdXQtYm90dG9tXCJcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***********************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/uni_modules/Sansnn-uQRCode/components/uqrcode/common/uqrcode.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//---------------------------------------------------------------------\n// github https://github.com/Sansnn/uQRCode\n// version 2.0.23\n//---------------------------------------------------------------------\n\nvar uQRCode = {};\n(function () {\n  //---------------------------------------------------------------------\n  // QRCode for JavaScript\n  //\n  // Copyright (c) 2009 Kazuhiko Arase\n  //\n  // URL: http://www.d-project.com/\n  //\n  // Licensed under the MIT license:\n  //   http://www.opensource.org/licenses/mit-license.php\n  //\n  // The word \"QR Code\" is registered trademark of \n  // DENSO WAVE INCORPORATED\n  //   http://www.denso-wave.com/qrcode/faqpatent-e.html\n  //\n  //---------------------------------------------------------------------\n\n  //---------------------------------------------------------------------\n  // QR8bitByte\n  //---------------------------------------------------------------------\n\n  function QR8bitByte(data) {\n    this.mode = QRMode.MODE_8BIT_BYTE;\n    this.data = data;\n  }\n  QR8bitByte.prototype = {\n    getLength: function getLength(buffer) {\n      return this.data.length;\n    },\n    write: function write(buffer) {\n      for (var i = 0; i < this.data.length; i++) {\n        // not JIS ...\n        buffer.put(this.data.charCodeAt(i), 8);\n      }\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRCode\n  //---------------------------------------------------------------------\n\n  function QRCode(typeNumber, errorCorrectLevel) {\n    this.typeNumber = typeNumber;\n    this.errorCorrectLevel = errorCorrectLevel;\n    this.modules = null;\n    this.moduleCount = 0;\n    this.dataCache = null;\n    this.dataList = new Array();\n  }\n  QRCode.prototype = {\n    addData: function addData(data) {\n      var newData = new QR8bitByte(data);\n      this.dataList.push(newData);\n      this.dataCache = null;\n    },\n    isDark: function isDark(row, col) {\n      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {\n        throw new Error(row + \",\" + col);\n      }\n      return this.modules[row][col];\n    },\n    getModuleCount: function getModuleCount() {\n      return this.moduleCount;\n    },\n    make: function make() {\n      // Calculate automatically typeNumber if provided is < 1\n      if (this.typeNumber < 1) {\n        var typeNumber = 1;\n        for (typeNumber = 1; typeNumber < 40; typeNumber++) {\n          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);\n          var buffer = new QRBitBuffer();\n          var totalDataCount = 0;\n          for (var i = 0; i < rsBlocks.length; i++) {\n            totalDataCount += rsBlocks[i].dataCount;\n          }\n          for (var i = 0; i < this.dataList.length; i++) {\n            var data = this.dataList[i];\n            buffer.put(data.mode, 4);\n            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));\n            data.write(buffer);\n          }\n          if (buffer.getLengthInBits() <= totalDataCount * 8) break;\n        }\n        this.typeNumber = typeNumber;\n      }\n      this.makeImpl(false, this.getBestMaskPattern());\n    },\n    makeImpl: function makeImpl(test, maskPattern) {\n      this.moduleCount = this.typeNumber * 4 + 17;\n      this.modules = new Array(this.moduleCount);\n      for (var row = 0; row < this.moduleCount; row++) {\n        this.modules[row] = new Array(this.moduleCount);\n        for (var col = 0; col < this.moduleCount; col++) {\n          this.modules[row][col] = null; //(col + row) % 3;\n        }\n      }\n\n      this.setupPositionProbePattern(0, 0);\n      this.setupPositionProbePattern(this.moduleCount - 7, 0);\n      this.setupPositionProbePattern(0, this.moduleCount - 7);\n      this.setupPositionAdjustPattern();\n      this.setupTimingPattern();\n      this.setupTypeInfo(test, maskPattern);\n      if (this.typeNumber >= 7) {\n        this.setupTypeNumber(test);\n      }\n      if (this.dataCache == null) {\n        this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);\n      }\n      this.mapData(this.dataCache, maskPattern);\n    },\n    setupPositionProbePattern: function setupPositionProbePattern(row, col) {\n      for (var r = -1; r <= 7; r++) {\n        if (row + r <= -1 || this.moduleCount <= row + r) continue;\n        for (var c = -1; c <= 7; c++) {\n          if (col + c <= -1 || this.moduleCount <= col + c) continue;\n          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {\n            this.modules[row + r][col + c] = true;\n          } else {\n            this.modules[row + r][col + c] = false;\n          }\n        }\n      }\n    },\n    getBestMaskPattern: function getBestMaskPattern() {\n      var minLostPoint = 0;\n      var pattern = 0;\n      for (var i = 0; i < 8; i++) {\n        this.makeImpl(true, i);\n        var lostPoint = QRUtil.getLostPoint(this);\n        if (i == 0 || minLostPoint > lostPoint) {\n          minLostPoint = lostPoint;\n          pattern = i;\n        }\n      }\n      return pattern;\n    },\n    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {\n      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);\n      var cs = 1;\n      this.make();\n      for (var row = 0; row < this.modules.length; row++) {\n        var y = row * cs;\n        for (var col = 0; col < this.modules[row].length; col++) {\n          var x = col * cs;\n          var dark = this.modules[row][col];\n          if (dark) {\n            qr_mc.beginFill(0, 100);\n            qr_mc.moveTo(x, y);\n            qr_mc.lineTo(x + cs, y);\n            qr_mc.lineTo(x + cs, y + cs);\n            qr_mc.lineTo(x, y + cs);\n            qr_mc.endFill();\n          }\n        }\n      }\n      return qr_mc;\n    },\n    setupTimingPattern: function setupTimingPattern() {\n      for (var r = 8; r < this.moduleCount - 8; r++) {\n        if (this.modules[r][6] != null) {\n          continue;\n        }\n        this.modules[r][6] = r % 2 == 0;\n      }\n      for (var c = 8; c < this.moduleCount - 8; c++) {\n        if (this.modules[6][c] != null) {\n          continue;\n        }\n        this.modules[6][c] = c % 2 == 0;\n      }\n    },\n    setupPositionAdjustPattern: function setupPositionAdjustPattern() {\n      var pos = QRUtil.getPatternPosition(this.typeNumber);\n      for (var i = 0; i < pos.length; i++) {\n        for (var j = 0; j < pos.length; j++) {\n          var row = pos[i];\n          var col = pos[j];\n          if (this.modules[row][col] != null) {\n            continue;\n          }\n          for (var r = -2; r <= 2; r++) {\n            for (var c = -2; c <= 2; c++) {\n              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {\n                this.modules[row + r][col + c] = true;\n              } else {\n                this.modules[row + r][col + c] = false;\n              }\n            }\n          }\n        }\n      }\n    },\n    setupTypeNumber: function setupTypeNumber(test) {\n      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);\n      for (var i = 0; i < 18; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;\n      }\n      for (var i = 0; i < 18; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;\n      }\n    },\n    setupTypeInfo: function setupTypeInfo(test, maskPattern) {\n      var data = this.errorCorrectLevel << 3 | maskPattern;\n      var bits = QRUtil.getBCHTypeInfo(data);\n\n      // vertical\t\t\n      for (var i = 0; i < 15; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 6) {\n          this.modules[i][8] = mod;\n        } else if (i < 8) {\n          this.modules[i + 1][8] = mod;\n        } else {\n          this.modules[this.moduleCount - 15 + i][8] = mod;\n        }\n      }\n\n      // horizontal\n      for (var i = 0; i < 15; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 8) {\n          this.modules[8][this.moduleCount - i - 1] = mod;\n        } else if (i < 9) {\n          this.modules[8][15 - i - 1 + 1] = mod;\n        } else {\n          this.modules[8][15 - i - 1] = mod;\n        }\n      }\n\n      // fixed module\n      this.modules[this.moduleCount - 8][8] = !test;\n    },\n    mapData: function mapData(data, maskPattern) {\n      var inc = -1;\n      var row = this.moduleCount - 1;\n      var bitIndex = 7;\n      var byteIndex = 0;\n      for (var col = this.moduleCount - 1; col > 0; col -= 2) {\n        if (col == 6) col--;\n        while (true) {\n          for (var c = 0; c < 2; c++) {\n            if (this.modules[row][col - c] == null) {\n              var dark = false;\n              if (byteIndex < data.length) {\n                dark = (data[byteIndex] >>> bitIndex & 1) == 1;\n              }\n              var mask = QRUtil.getMask(maskPattern, row, col - c);\n              if (mask) {\n                dark = !dark;\n              }\n              this.modules[row][col - c] = dark;\n              bitIndex--;\n              if (bitIndex == -1) {\n                byteIndex++;\n                bitIndex = 7;\n              }\n            }\n          }\n          row += inc;\n          if (row < 0 || this.moduleCount <= row) {\n            row -= inc;\n            inc = -inc;\n            break;\n          }\n        }\n      }\n    }\n  };\n  QRCode.PAD0 = 0xEC;\n  QRCode.PAD1 = 0x11;\n  QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {\n    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);\n    var buffer = new QRBitBuffer();\n    for (var i = 0; i < dataList.length; i++) {\n      var data = dataList[i];\n      buffer.put(data.mode, 4);\n      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));\n      data.write(buffer);\n    }\n\n    // calc num max data.\n    var totalDataCount = 0;\n    for (var i = 0; i < rsBlocks.length; i++) {\n      totalDataCount += rsBlocks[i].dataCount;\n    }\n    if (buffer.getLengthInBits() > totalDataCount * 8) {\n      throw new Error(\"code length overflow. (\" + buffer.getLengthInBits() + \">\" + totalDataCount * 8 + \")\");\n    }\n\n    // end code\n    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {\n      buffer.put(0, 4);\n    }\n\n    // padding\n    while (buffer.getLengthInBits() % 8 != 0) {\n      buffer.putBit(false);\n    }\n\n    // padding\n    while (true) {\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(QRCode.PAD0, 8);\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(QRCode.PAD1, 8);\n    }\n    return QRCode.createBytes(buffer, rsBlocks);\n  };\n  QRCode.createBytes = function (buffer, rsBlocks) {\n    var offset = 0;\n    var maxDcCount = 0;\n    var maxEcCount = 0;\n    var dcdata = new Array(rsBlocks.length);\n    var ecdata = new Array(rsBlocks.length);\n    for (var r = 0; r < rsBlocks.length; r++) {\n      var dcCount = rsBlocks[r].dataCount;\n      var ecCount = rsBlocks[r].totalCount - dcCount;\n      maxDcCount = Math.max(maxDcCount, dcCount);\n      maxEcCount = Math.max(maxEcCount, ecCount);\n      dcdata[r] = new Array(dcCount);\n      for (var i = 0; i < dcdata[r].length; i++) {\n        dcdata[r][i] = 0xff & buffer.buffer[i + offset];\n      }\n      offset += dcCount;\n      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);\n      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);\n      var modPoly = rawPoly.mod(rsPoly);\n      ecdata[r] = new Array(rsPoly.getLength() - 1);\n      for (var i = 0; i < ecdata[r].length; i++) {\n        var modIndex = i + modPoly.getLength() - ecdata[r].length;\n        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;\n      }\n    }\n    var totalCodeCount = 0;\n    for (var i = 0; i < rsBlocks.length; i++) {\n      totalCodeCount += rsBlocks[i].totalCount;\n    }\n    var data = new Array(totalCodeCount);\n    var index = 0;\n    for (var i = 0; i < maxDcCount; i++) {\n      for (var r = 0; r < rsBlocks.length; r++) {\n        if (i < dcdata[r].length) {\n          data[index++] = dcdata[r][i];\n        }\n      }\n    }\n    for (var i = 0; i < maxEcCount; i++) {\n      for (var r = 0; r < rsBlocks.length; r++) {\n        if (i < ecdata[r].length) {\n          data[index++] = ecdata[r][i];\n        }\n      }\n    }\n    return data;\n  };\n\n  //---------------------------------------------------------------------\n  // QRMode\n  //---------------------------------------------------------------------\n\n  var QRMode = {\n    MODE_NUMBER: 1 << 0,\n    MODE_ALPHA_NUM: 1 << 1,\n    MODE_8BIT_BYTE: 1 << 2,\n    MODE_KANJI: 1 << 3\n  };\n\n  //---------------------------------------------------------------------\n  // QRErrorCorrectLevel\n  //---------------------------------------------------------------------\n\n  var QRErrorCorrectLevel = {\n    L: 1,\n    M: 0,\n    Q: 3,\n    H: 2\n  };\n\n  //---------------------------------------------------------------------\n  // QRMaskPattern\n  //---------------------------------------------------------------------\n\n  var QRMaskPattern = {\n    PATTERN000: 0,\n    PATTERN001: 1,\n    PATTERN010: 2,\n    PATTERN011: 3,\n    PATTERN100: 4,\n    PATTERN101: 5,\n    PATTERN110: 6,\n    PATTERN111: 7\n  };\n\n  //---------------------------------------------------------------------\n  // QRUtil\n  //---------------------------------------------------------------------\n\n  var QRUtil = {\n    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],\n    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,\n    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,\n    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,\n    getBCHTypeInfo: function getBCHTypeInfo(data) {\n      var d = data << 10;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {\n        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);\n      }\n      return (data << 10 | d) ^ QRUtil.G15_MASK;\n    },\n    getBCHTypeNumber: function getBCHTypeNumber(data) {\n      var d = data << 12;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {\n        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);\n      }\n      return data << 12 | d;\n    },\n    getBCHDigit: function getBCHDigit(data) {\n      var digit = 0;\n      while (data != 0) {\n        digit++;\n        data >>>= 1;\n      }\n      return digit;\n    },\n    getPatternPosition: function getPatternPosition(typeNumber) {\n      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];\n    },\n    getMask: function getMask(maskPattern, i, j) {\n      switch (maskPattern) {\n        case QRMaskPattern.PATTERN000:\n          return (i + j) % 2 == 0;\n        case QRMaskPattern.PATTERN001:\n          return i % 2 == 0;\n        case QRMaskPattern.PATTERN010:\n          return j % 3 == 0;\n        case QRMaskPattern.PATTERN011:\n          return (i + j) % 3 == 0;\n        case QRMaskPattern.PATTERN100:\n          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;\n        case QRMaskPattern.PATTERN101:\n          return i * j % 2 + i * j % 3 == 0;\n        case QRMaskPattern.PATTERN110:\n          return (i * j % 2 + i * j % 3) % 2 == 0;\n        case QRMaskPattern.PATTERN111:\n          return (i * j % 3 + (i + j) % 2) % 2 == 0;\n        default:\n          throw new Error(\"bad maskPattern:\" + maskPattern);\n      }\n    },\n    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {\n      var a = new QRPolynomial([1], 0);\n      for (var i = 0; i < errorCorrectLength; i++) {\n        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));\n      }\n      return a;\n    },\n    getLengthInBits: function getLengthInBits(mode, type) {\n      if (1 <= type && type < 10) {\n        // 1 - 9\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 10;\n          case QRMode.MODE_ALPHA_NUM:\n            return 9;\n          case QRMode.MODE_8BIT_BYTE:\n            return 8;\n          case QRMode.MODE_KANJI:\n            return 8;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else if (type < 27) {\n        // 10 - 26\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 12;\n          case QRMode.MODE_ALPHA_NUM:\n            return 11;\n          case QRMode.MODE_8BIT_BYTE:\n            return 16;\n          case QRMode.MODE_KANJI:\n            return 10;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else if (type < 41) {\n        // 27 - 40\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 14;\n          case QRMode.MODE_ALPHA_NUM:\n            return 13;\n          case QRMode.MODE_8BIT_BYTE:\n            return 16;\n          case QRMode.MODE_KANJI:\n            return 12;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else {\n        throw new Error(\"type:\" + type);\n      }\n    },\n    getLostPoint: function getLostPoint(qrCode) {\n      var moduleCount = qrCode.getModuleCount();\n      var lostPoint = 0;\n\n      // LEVEL1\n\n      for (var row = 0; row < moduleCount; row++) {\n        for (var col = 0; col < moduleCount; col++) {\n          var sameCount = 0;\n          var dark = qrCode.isDark(row, col);\n          for (var r = -1; r <= 1; r++) {\n            if (row + r < 0 || moduleCount <= row + r) {\n              continue;\n            }\n            for (var c = -1; c <= 1; c++) {\n              if (col + c < 0 || moduleCount <= col + c) {\n                continue;\n              }\n              if (r == 0 && c == 0) {\n                continue;\n              }\n              if (dark == qrCode.isDark(row + r, col + c)) {\n                sameCount++;\n              }\n            }\n          }\n          if (sameCount > 5) {\n            lostPoint += 3 + sameCount - 5;\n          }\n        }\n      }\n\n      // LEVEL2\n\n      for (var row = 0; row < moduleCount - 1; row++) {\n        for (var col = 0; col < moduleCount - 1; col++) {\n          var count = 0;\n          if (qrCode.isDark(row, col)) count++;\n          if (qrCode.isDark(row + 1, col)) count++;\n          if (qrCode.isDark(row, col + 1)) count++;\n          if (qrCode.isDark(row + 1, col + 1)) count++;\n          if (count == 0 || count == 4) {\n            lostPoint += 3;\n          }\n        }\n      }\n\n      // LEVEL3\n\n      for (var row = 0; row < moduleCount; row++) {\n        for (var col = 0; col < moduleCount - 6; col++) {\n          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {\n            lostPoint += 40;\n          }\n        }\n      }\n      for (var col = 0; col < moduleCount; col++) {\n        for (var row = 0; row < moduleCount - 6; row++) {\n          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {\n            lostPoint += 40;\n          }\n        }\n      }\n\n      // LEVEL4\n\n      var darkCount = 0;\n      for (var col = 0; col < moduleCount; col++) {\n        for (var row = 0; row < moduleCount; row++) {\n          if (qrCode.isDark(row, col)) {\n            darkCount++;\n          }\n        }\n      }\n      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;\n      lostPoint += ratio * 10;\n      return lostPoint;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRMath\n  //---------------------------------------------------------------------\n\n  var QRMath = {\n    glog: function glog(n) {\n      if (n < 1) {\n        throw new Error(\"glog(\" + n + \")\");\n      }\n      return QRMath.LOG_TABLE[n];\n    },\n    gexp: function gexp(n) {\n      while (n < 0) {\n        n += 255;\n      }\n      while (n >= 256) {\n        n -= 255;\n      }\n      return QRMath.EXP_TABLE[n];\n    },\n    EXP_TABLE: new Array(256),\n    LOG_TABLE: new Array(256)\n  };\n  for (var i = 0; i < 8; i++) {\n    QRMath.EXP_TABLE[i] = 1 << i;\n  }\n  for (var i = 8; i < 256; i++) {\n    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];\n  }\n  for (var i = 0; i < 255; i++) {\n    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;\n  }\n\n  //---------------------------------------------------------------------\n  // QRPolynomial\n  //---------------------------------------------------------------------\n\n  function QRPolynomial(num, shift) {\n    if (num.length == undefined) {\n      throw new Error(num.length + \"/\" + shift);\n    }\n    var offset = 0;\n    while (offset < num.length && num[offset] == 0) {\n      offset++;\n    }\n    this.num = new Array(num.length - offset + shift);\n    for (var i = 0; i < num.length - offset; i++) {\n      this.num[i] = num[i + offset];\n    }\n  }\n  QRPolynomial.prototype = {\n    get: function get(index) {\n      return this.num[index];\n    },\n    getLength: function getLength() {\n      return this.num.length;\n    },\n    multiply: function multiply(e) {\n      var num = new Array(this.getLength() + e.getLength() - 1);\n      for (var i = 0; i < this.getLength(); i++) {\n        for (var j = 0; j < e.getLength(); j++) {\n          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));\n        }\n      }\n      return new QRPolynomial(num, 0);\n    },\n    mod: function mod(e) {\n      if (this.getLength() - e.getLength() < 0) {\n        return this;\n      }\n      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));\n      var num = new Array(this.getLength());\n      for (var i = 0; i < this.getLength(); i++) {\n        num[i] = this.get(i);\n      }\n      for (var i = 0; i < e.getLength(); i++) {\n        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);\n      }\n\n      // recursive call\n      return new QRPolynomial(num, 0).mod(e);\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRRSBlock\n  //---------------------------------------------------------------------\n\n  function QRRSBlock(totalCount, dataCount) {\n    this.totalCount = totalCount;\n    this.dataCount = dataCount;\n  }\n  QRRSBlock.RS_BLOCK_TABLE = [\n  // L\n  // M\n  // Q\n  // H\n\n  // 1\n  [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],\n  // 2\n  [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],\n  // 3\n  [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],\n  // 4\t\t\n  [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],\n  // 5\n  [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],\n  // 6\n  [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],\n  // 7\t\t\n  [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],\n  // 8\n  [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],\n  // 9\n  [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],\n  // 10\t\t\n  [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],\n  // 11\n  [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],\n  // 12\n  [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],\n  // 13\n  [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],\n  // 14\n  [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],\n  // 15\n  [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],\n  // 16\n  [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],\n  // 17\n  [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],\n  // 18\n  [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],\n  // 19\n  [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],\n  // 20\n  [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],\n  // 21\n  [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],\n  // 22\n  [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],\n  // 23\n  [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],\n  // 24\n  [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],\n  // 25\n  [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],\n  // 26\n  [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],\n  // 27\n  [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],\n  // 28\n  [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],\n  // 29\n  [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],\n  // 30\n  [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],\n  // 31\n  [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],\n  // 32\n  [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],\n  // 33\n  [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],\n  // 34\n  [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],\n  // 35\n  [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],\n  // 36\n  [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],\n  // 37\n  [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],\n  // 38\n  [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],\n  // 39\n  [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],\n  // 40\n  [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];\n  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {\n    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);\n    if (rsBlock == undefined) {\n      throw new Error(\"bad rs block @ typeNumber:\" + typeNumber + \"/errorCorrectLevel:\" + errorCorrectLevel);\n    }\n    var length = rsBlock.length / 3;\n    var list = new Array();\n    for (var i = 0; i < length; i++) {\n      var count = rsBlock[i * 3 + 0];\n      var totalCount = rsBlock[i * 3 + 1];\n      var dataCount = rsBlock[i * 3 + 2];\n      for (var j = 0; j < count; j++) {\n        list.push(new QRRSBlock(totalCount, dataCount));\n      }\n    }\n    return list;\n  };\n  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {\n    switch (errorCorrectLevel) {\n      case QRErrorCorrectLevel.L:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];\n      case QRErrorCorrectLevel.M:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];\n      case QRErrorCorrectLevel.Q:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];\n      case QRErrorCorrectLevel.H:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];\n      default:\n        return undefined;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRBitBuffer\n  //---------------------------------------------------------------------\n\n  function QRBitBuffer() {\n    this.buffer = new Array();\n    this.length = 0;\n  }\n  QRBitBuffer.prototype = {\n    get: function get(index) {\n      var bufIndex = Math.floor(index / 8);\n      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;\n    },\n    put: function put(num, length) {\n      for (var i = 0; i < length; i++) {\n        this.putBit((num >>> length - i - 1 & 1) == 1);\n      }\n    },\n    getLengthInBits: function getLengthInBits() {\n      return this.length;\n    },\n    putBit: function putBit(bit) {\n      var bufIndex = Math.floor(this.length / 8);\n      if (this.buffer.length <= bufIndex) {\n        this.buffer.push(0);\n      }\n      if (bit) {\n        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;\n      }\n      this.length++;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // Support Chinese\n  //---------------------------------------------------------------------\n  function utf16To8(text) {\n    var result = '';\n    var c;\n    for (var i = 0; i < text.length; i++) {\n      c = text.charCodeAt(i);\n      if (c >= 0x0001 && c <= 0x007F) {\n        result += text.charAt(i);\n      } else if (c > 0x07FF) {\n        result += String.fromCharCode(0xE0 | c >> 12 & 0x0F);\n        result += String.fromCharCode(0x80 | c >> 6 & 0x3F);\n        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);\n      } else {\n        result += String.fromCharCode(0xC0 | c >> 6 & 0x1F);\n        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);\n      }\n    }\n    return result;\n  }\n  uQRCode = {\n    errorCorrectLevel: QRErrorCorrectLevel,\n    defaults: {\n      size: 354,\n      margin: 0,\n      backgroundColor: '#ffffff',\n      foregroundColor: '#000000',\n      fileType: 'png',\n      // 'jpg', 'png'\n      errorCorrectLevel: QRErrorCorrectLevel.H,\n      typeNumber: -1,\n      enableDelay: false // 启用延迟绘制\n    },\n\n    getModules: function getModules(options) {\n      options = Object.assign(this.defaults, options);\n      var qrcode = new QRCode(options.typeNumber, options.errorCorrectLevel);\n      qrcode.addData(utf16To8(options.text));\n      qrcode.make();\n      return qrcode.modules;\n    },\n    make: function make(options, componentInstance) {\n      var _this = this;\n      return new Promise(function (reslove, reject) {\n        options = Object.assign(_this.defaults, options);\n        if (!options.canvasId) {\n          throw new Error('uQRCode: Please set canvasId!');\n        }\n        var modules = _this.getModules(options);\n        var tileW = (options.size - options.margin * 2) / modules.length;\n        var tileH = tileW;\n        var delay = 0;\n\n        // 创建canvas上下文前增加一点延时，确保canvas组件已渲染\n        setTimeout(function () {\n          var ctx = uni.createCanvasContext(options.canvasId, componentInstance);\n          ctx.setFillStyle(options.backgroundColor);\n          ctx.fillRect(0, 0, options.size, options.size);\n          for (var row = 0; row < modules.length; row++) {\n            for (var col = 0; col < modules.length; col++) {\n              delay = options.enableDelay ? row * modules.length + col + 1 : 0;\n              setTimeout(function (row, col) {\n                // 计算每一个小块的位置\n                var x = Math.round(col * tileW) + options.margin;\n                var y = Math.round(row * tileH) + options.margin;\n                var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);\n                var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);\n                var style = modules[row][col] ? options.foregroundColor : options.backgroundColor;\n                ctx.setFillStyle(style);\n                ctx.fillRect(x, y, w, h);\n              }, delay, row, col);\n            }\n          }\n\n          // 耗时\n          var time = options.enableDelay ? delay + options.size * 2 + options.margin * 2 + options.text.length : 0;\n          setTimeout(function () {\n            ctx.draw(false, function () {\n              uni.canvasToTempFilePath({\n                canvasId: options.canvasId,\n                fileType: options.fileType,\n                width: options.size,\n                height: options.size,\n                destWidth: options.size,\n                destHeight: options.size,\n                success: function success(res) {\n                  reslove(Object.assign(res, {\n                    time: time + 50\n                  }));\n                },\n                fail: function fail(err) {\n                  reject(err);\n                }\n              }, componentInstance);\n            });\n          }, time);\n        }, 50);\n      });\n    }\n  };\n})();\nvar _default = uQRCode;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvU2Fuc25uLXVRUkNvZGUvY29tcG9uZW50cy91cXJjb2RlL2NvbW1vbi91cXJjb2RlLmpzIl0sIm5hbWVzIjpbInVRUkNvZGUiLCJRUjhiaXRCeXRlIiwiZGF0YSIsIm1vZGUiLCJRUk1vZGUiLCJNT0RFXzhCSVRfQllURSIsInByb3RvdHlwZSIsImdldExlbmd0aCIsImJ1ZmZlciIsImxlbmd0aCIsIndyaXRlIiwiaSIsInB1dCIsImNoYXJDb2RlQXQiLCJRUkNvZGUiLCJ0eXBlTnVtYmVyIiwiZXJyb3JDb3JyZWN0TGV2ZWwiLCJtb2R1bGVzIiwibW9kdWxlQ291bnQiLCJkYXRhQ2FjaGUiLCJkYXRhTGlzdCIsIkFycmF5IiwiYWRkRGF0YSIsIm5ld0RhdGEiLCJwdXNoIiwiaXNEYXJrIiwicm93IiwiY29sIiwiRXJyb3IiLCJnZXRNb2R1bGVDb3VudCIsIm1ha2UiLCJyc0Jsb2NrcyIsIlFSUlNCbG9jayIsImdldFJTQmxvY2tzIiwiUVJCaXRCdWZmZXIiLCJ0b3RhbERhdGFDb3VudCIsImRhdGFDb3VudCIsIlFSVXRpbCIsImdldExlbmd0aEluQml0cyIsIm1ha2VJbXBsIiwiZ2V0QmVzdE1hc2tQYXR0ZXJuIiwidGVzdCIsIm1hc2tQYXR0ZXJuIiwic2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiIsInNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuIiwic2V0dXBUaW1pbmdQYXR0ZXJuIiwic2V0dXBUeXBlSW5mbyIsInNldHVwVHlwZU51bWJlciIsImNyZWF0ZURhdGEiLCJtYXBEYXRhIiwiciIsImMiLCJtaW5Mb3N0UG9pbnQiLCJwYXR0ZXJuIiwibG9zdFBvaW50IiwiZ2V0TG9zdFBvaW50IiwiY3JlYXRlTW92aWVDbGlwIiwidGFyZ2V0X21jIiwiaW5zdGFuY2VfbmFtZSIsImRlcHRoIiwicXJfbWMiLCJjcmVhdGVFbXB0eU1vdmllQ2xpcCIsImNzIiwieSIsIngiLCJkYXJrIiwiYmVnaW5GaWxsIiwibW92ZVRvIiwibGluZVRvIiwiZW5kRmlsbCIsInBvcyIsImdldFBhdHRlcm5Qb3NpdGlvbiIsImoiLCJiaXRzIiwiZ2V0QkNIVHlwZU51bWJlciIsIm1vZCIsIk1hdGgiLCJmbG9vciIsImdldEJDSFR5cGVJbmZvIiwiaW5jIiwiYml0SW5kZXgiLCJieXRlSW5kZXgiLCJtYXNrIiwiZ2V0TWFzayIsIlBBRDAiLCJQQUQxIiwicHV0Qml0IiwiY3JlYXRlQnl0ZXMiLCJvZmZzZXQiLCJtYXhEY0NvdW50IiwibWF4RWNDb3VudCIsImRjZGF0YSIsImVjZGF0YSIsImRjQ291bnQiLCJlY0NvdW50IiwidG90YWxDb3VudCIsIm1heCIsInJzUG9seSIsImdldEVycm9yQ29ycmVjdFBvbHlub21pYWwiLCJyYXdQb2x5IiwiUVJQb2x5bm9taWFsIiwibW9kUG9seSIsIm1vZEluZGV4IiwiZ2V0IiwidG90YWxDb2RlQ291bnQiLCJpbmRleCIsIk1PREVfTlVNQkVSIiwiTU9ERV9BTFBIQV9OVU0iLCJNT0RFX0tBTkpJIiwiUVJFcnJvckNvcnJlY3RMZXZlbCIsIkwiLCJNIiwiUSIsIkgiLCJRUk1hc2tQYXR0ZXJuIiwiUEFUVEVSTjAwMCIsIlBBVFRFUk4wMDEiLCJQQVRURVJOMDEwIiwiUEFUVEVSTjAxMSIsIlBBVFRFUk4xMDAiLCJQQVRURVJOMTAxIiwiUEFUVEVSTjExMCIsIlBBVFRFUk4xMTEiLCJQQVRURVJOX1BPU0lUSU9OX1RBQkxFIiwiRzE1IiwiRzE4IiwiRzE1X01BU0siLCJkIiwiZ2V0QkNIRGlnaXQiLCJkaWdpdCIsImVycm9yQ29ycmVjdExlbmd0aCIsImEiLCJtdWx0aXBseSIsIlFSTWF0aCIsImdleHAiLCJ0eXBlIiwicXJDb2RlIiwic2FtZUNvdW50IiwiY291bnQiLCJkYXJrQ291bnQiLCJyYXRpbyIsImFicyIsImdsb2ciLCJuIiwiTE9HX1RBQkxFIiwiRVhQX1RBQkxFIiwibnVtIiwic2hpZnQiLCJ1bmRlZmluZWQiLCJlIiwiUlNfQkxPQ0tfVEFCTEUiLCJyc0Jsb2NrIiwiZ2V0UnNCbG9ja1RhYmxlIiwibGlzdCIsImJ1ZkluZGV4IiwiYml0IiwidXRmMTZUbzgiLCJ0ZXh0IiwicmVzdWx0IiwiY2hhckF0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVmYXVsdHMiLCJzaXplIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiZm9yZWdyb3VuZENvbG9yIiwiZmlsZVR5cGUiLCJlbmFibGVEZWxheSIsImdldE1vZHVsZXMiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicXJjb2RlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJQcm9taXNlIiwicmVzbG92ZSIsInJlamVjdCIsImNhbnZhc0lkIiwidGlsZVciLCJ0aWxlSCIsImRlbGF5Iiwic2V0VGltZW91dCIsImN0eCIsInVuaSIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRGaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwidyIsImNlaWwiLCJoIiwic3R5bGUiLCJ0aW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwid2lkdGgiLCJoZWlnaHQiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsQ0FBQyxZQUFXO0VBQ1g7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQSxTQUFTQyxVQUFVLENBQUNDLElBQUksRUFBRTtJQUN6QixJQUFJLENBQUNDLElBQUksR0FBR0MsTUFBTSxDQUFDQyxjQUFjO0lBQ2pDLElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJO0VBQ2pCO0VBRUFELFVBQVUsQ0FBQ0ssU0FBUyxHQUFHO0lBRXRCQyxTQUFTLEVBQUUsbUJBQVNDLE1BQU0sRUFBRTtNQUMzQixPQUFPLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxNQUFNO0lBQ3hCLENBQUM7SUFFREMsS0FBSyxFQUFFLGVBQVNGLE1BQU0sRUFBRTtNQUN2QixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNULElBQUksQ0FBQ08sTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtRQUMxQztRQUNBSCxNQUFNLENBQUNJLEdBQUcsQ0FBQyxJQUFJLENBQUNWLElBQUksQ0FBQ1csVUFBVSxDQUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdkM7SUFDRDtFQUNELENBQUM7O0VBRUQ7RUFDQTtFQUNBOztFQUVBLFNBQVNHLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRTtJQUM5QyxJQUFJLENBQUNELFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDMUMsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUk7SUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0VBQzVCO0VBRUFQLE1BQU0sQ0FBQ1IsU0FBUyxHQUFHO0lBRWxCZ0IsT0FBTyxFQUFFLGlCQUFTcEIsSUFBSSxFQUFFO01BQ3ZCLElBQUlxQixPQUFPLEdBQUcsSUFBSXRCLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDO01BQ2xDLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDRCxPQUFPLENBQUM7TUFDM0IsSUFBSSxDQUFDSixTQUFTLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBRURNLE1BQU0sRUFBRSxnQkFBU0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7TUFDMUIsSUFBSUQsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNSLFdBQVcsSUFBSVEsR0FBRyxJQUFJQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ1QsV0FBVyxJQUFJUyxHQUFHLEVBQUU7UUFDN0UsTUFBTSxJQUFJQyxLQUFLLENBQUNGLEdBQUcsR0FBRyxHQUFHLEdBQUdDLEdBQUcsQ0FBQztNQUNqQztNQUNBLE9BQU8sSUFBSSxDQUFDVixPQUFPLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVERSxjQUFjLEVBQUUsMEJBQVc7TUFDMUIsT0FBTyxJQUFJLENBQUNYLFdBQVc7SUFDeEIsQ0FBQztJQUVEWSxJQUFJLEVBQUUsZ0JBQVc7TUFDaEI7TUFDQSxJQUFJLElBQUksQ0FBQ2YsVUFBVSxHQUFHLENBQUMsRUFBRTtRQUN4QixJQUFJQSxVQUFVLEdBQUcsQ0FBQztRQUNsQixLQUFLQSxVQUFVLEdBQUcsQ0FBQyxFQUFFQSxVQUFVLEdBQUcsRUFBRSxFQUFFQSxVQUFVLEVBQUUsRUFBRTtVQUNuRCxJQUFJZ0IsUUFBUSxHQUFHQyxTQUFTLENBQUNDLFdBQVcsQ0FBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDO1VBRXhFLElBQUlSLE1BQU0sR0FBRyxJQUFJMEIsV0FBVyxFQUFFO1VBQzlCLElBQUlDLGNBQWMsR0FBRyxDQUFDO1VBQ3RCLEtBQUssSUFBSXhCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR29CLFFBQVEsQ0FBQ3RCLE1BQU0sRUFBRUUsQ0FBQyxFQUFFLEVBQUU7WUFDekN3QixjQUFjLElBQUlKLFFBQVEsQ0FBQ3BCLENBQUMsQ0FBQyxDQUFDeUIsU0FBUztVQUN4QztVQUVBLEtBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNTLFFBQVEsQ0FBQ1gsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJVCxJQUFJLEdBQUcsSUFBSSxDQUFDa0IsUUFBUSxDQUFDVCxDQUFDLENBQUM7WUFDM0JILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDVixJQUFJLENBQUNDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDeEJLLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDVixJQUFJLENBQUNLLFNBQVMsRUFBRSxFQUFFOEIsTUFBTSxDQUFDQyxlQUFlLENBQUNwQyxJQUFJLENBQUNDLElBQUksRUFBRVksVUFBVSxDQUFDLENBQUM7WUFDM0ViLElBQUksQ0FBQ1EsS0FBSyxDQUFDRixNQUFNLENBQUM7VUFDbkI7VUFDQSxJQUFJQSxNQUFNLENBQUM4QixlQUFlLEVBQUUsSUFBSUgsY0FBYyxHQUFHLENBQUMsRUFDakQ7UUFDRjtRQUNBLElBQUksQ0FBQ3BCLFVBQVUsR0FBR0EsVUFBVTtNQUM3QjtNQUNBLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFREQsUUFBUSxFQUFFLGtCQUFTRSxJQUFJLEVBQUVDLFdBQVcsRUFBRTtNQUVyQyxJQUFJLENBQUN4QixXQUFXLEdBQUcsSUFBSSxDQUFDSCxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUU7TUFDM0MsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSUksS0FBSyxDQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDO01BRTFDLEtBQUssSUFBSVEsR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxHQUFHLElBQUksQ0FBQ1IsV0FBVyxFQUFFUSxHQUFHLEVBQUUsRUFBRTtRQUVoRCxJQUFJLENBQUNULE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLEdBQUcsSUFBSUwsS0FBSyxDQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDO1FBRS9DLEtBQUssSUFBSVMsR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxHQUFHLElBQUksQ0FBQ1QsV0FBVyxFQUFFUyxHQUFHLEVBQUUsRUFBRTtVQUNoRCxJQUFJLENBQUNWLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hDO01BQ0Q7O01BRUEsSUFBSSxDQUFDZ0IseUJBQXlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNwQyxJQUFJLENBQUNBLHlCQUF5QixDQUFDLElBQUksQ0FBQ3pCLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3ZELElBQUksQ0FBQ3lCLHlCQUF5QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUN6QixXQUFXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZELElBQUksQ0FBQzBCLDBCQUEwQixFQUFFO01BQ2pDLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxhQUFhLENBQUNMLElBQUksRUFBRUMsV0FBVyxDQUFDO01BRXJDLElBQUksSUFBSSxDQUFDM0IsVUFBVSxJQUFJLENBQUMsRUFBRTtRQUN6QixJQUFJLENBQUNnQyxlQUFlLENBQUNOLElBQUksQ0FBQztNQUMzQjtNQUVBLElBQUksSUFBSSxDQUFDdEIsU0FBUyxJQUFJLElBQUksRUFBRTtRQUMzQixJQUFJLENBQUNBLFNBQVMsR0FBR0wsTUFBTSxDQUFDa0MsVUFBVSxDQUFDLElBQUksQ0FBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUNDLGlCQUFpQixFQUFFLElBQUksQ0FBQ0ksUUFBUSxDQUFDO01BQzNGO01BRUEsSUFBSSxDQUFDNkIsT0FBTyxDQUFDLElBQUksQ0FBQzlCLFNBQVMsRUFBRXVCLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBRURDLHlCQUF5QixFQUFFLG1DQUFTakIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7TUFFN0MsS0FBSyxJQUFJdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUU3QixJQUFJeEIsR0FBRyxHQUFHd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ2hDLFdBQVcsSUFBSVEsR0FBRyxHQUFHd0IsQ0FBQyxFQUFFO1FBRWxELEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtVQUU3QixJQUFJeEIsR0FBRyxHQUFHd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ2pDLFdBQVcsSUFBSVMsR0FBRyxHQUFHd0IsQ0FBQyxFQUFFO1VBRWxELElBQUssQ0FBQyxJQUFJRCxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLEtBQUtDLENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFDekMsQ0FBQyxJQUFJQSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLEtBQUtELENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLENBQUUsSUFDdkMsQ0FBQyxJQUFJQSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQyxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDbEMsT0FBTyxDQUFDUyxHQUFHLEdBQUd3QixDQUFDLENBQUMsQ0FBQ3ZCLEdBQUcsR0FBR3dCLENBQUMsQ0FBQyxHQUFHLElBQUk7VUFDdEMsQ0FBQyxNQUFNO1lBQ04sSUFBSSxDQUFDbEMsT0FBTyxDQUFDUyxHQUFHLEdBQUd3QixDQUFDLENBQUMsQ0FBQ3ZCLEdBQUcsR0FBR3dCLENBQUMsQ0FBQyxHQUFHLEtBQUs7VUFDdkM7UUFDRDtNQUNEO0lBQ0QsQ0FBQztJQUVEWCxrQkFBa0IsRUFBRSw4QkFBVztNQUU5QixJQUFJWSxZQUFZLEdBQUcsQ0FBQztNQUNwQixJQUFJQyxPQUFPLEdBQUcsQ0FBQztNQUVmLEtBQUssSUFBSTFDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBRTNCLElBQUksQ0FBQzRCLFFBQVEsQ0FBQyxJQUFJLEVBQUU1QixDQUFDLENBQUM7UUFFdEIsSUFBSTJDLFNBQVMsR0FBR2pCLE1BQU0sQ0FBQ2tCLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFekMsSUFBSTVDLENBQUMsSUFBSSxDQUFDLElBQUl5QyxZQUFZLEdBQUdFLFNBQVMsRUFBRTtVQUN2Q0YsWUFBWSxHQUFHRSxTQUFTO1VBQ3hCRCxPQUFPLEdBQUcxQyxDQUFDO1FBQ1o7TUFDRDtNQUVBLE9BQU8wQyxPQUFPO0lBQ2YsQ0FBQztJQUVERyxlQUFlLEVBQUUseUJBQVNDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUU7TUFFMUQsSUFBSUMsS0FBSyxHQUFHSCxTQUFTLENBQUNJLG9CQUFvQixDQUFDSCxhQUFhLEVBQUVDLEtBQUssQ0FBQztNQUNoRSxJQUFJRyxFQUFFLEdBQUcsQ0FBQztNQUVWLElBQUksQ0FBQ2hDLElBQUksRUFBRTtNQUVYLEtBQUssSUFBSUosR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxHQUFHLElBQUksQ0FBQ1QsT0FBTyxDQUFDUixNQUFNLEVBQUVpQixHQUFHLEVBQUUsRUFBRTtRQUVuRCxJQUFJcUMsQ0FBQyxHQUFHckMsR0FBRyxHQUFHb0MsRUFBRTtRQUVoQixLQUFLLElBQUluQyxHQUFHLEdBQUcsQ0FBQyxFQUFFQSxHQUFHLEdBQUcsSUFBSSxDQUFDVixPQUFPLENBQUNTLEdBQUcsQ0FBQyxDQUFDakIsTUFBTSxFQUFFa0IsR0FBRyxFQUFFLEVBQUU7VUFFeEQsSUFBSXFDLENBQUMsR0FBR3JDLEdBQUcsR0FBR21DLEVBQUU7VUFDaEIsSUFBSUcsSUFBSSxHQUFHLElBQUksQ0FBQ2hELE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQztVQUVqQyxJQUFJc0MsSUFBSSxFQUFFO1lBQ1RMLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkJOLEtBQUssQ0FBQ08sTUFBTSxDQUFDSCxDQUFDLEVBQUVELENBQUMsQ0FBQztZQUNsQkgsS0FBSyxDQUFDUSxNQUFNLENBQUNKLENBQUMsR0FBR0YsRUFBRSxFQUFFQyxDQUFDLENBQUM7WUFDdkJILEtBQUssQ0FBQ1EsTUFBTSxDQUFDSixDQUFDLEdBQUdGLEVBQUUsRUFBRUMsQ0FBQyxHQUFHRCxFQUFFLENBQUM7WUFDNUJGLEtBQUssQ0FBQ1EsTUFBTSxDQUFDSixDQUFDLEVBQUVELENBQUMsR0FBR0QsRUFBRSxDQUFDO1lBQ3ZCRixLQUFLLENBQUNTLE9BQU8sRUFBRTtVQUNoQjtRQUNEO01BQ0Q7TUFFQSxPQUFPVCxLQUFLO0lBQ2IsQ0FBQztJQUVEZixrQkFBa0IsRUFBRSw4QkFBVztNQUU5QixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNoQyxXQUFXLEdBQUcsQ0FBQyxFQUFFZ0MsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUNqQyxPQUFPLENBQUNpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7VUFDL0I7UUFDRDtRQUNBLElBQUksQ0FBQ2pDLE9BQU8sQ0FBQ2lDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUU7TUFDbEM7TUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNqQyxXQUFXLEdBQUcsQ0FBQyxFQUFFaUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNrQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7VUFDL0I7UUFDRDtRQUNBLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ2tDLENBQUMsQ0FBQyxHQUFJQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUU7TUFDbEM7SUFDRCxDQUFDO0lBRURQLDBCQUEwQixFQUFFLHNDQUFXO01BRXRDLElBQUkwQixHQUFHLEdBQUdqQyxNQUFNLENBQUNrQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUN4RCxVQUFVLENBQUM7TUFFcEQsS0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcyRCxHQUFHLENBQUM3RCxNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO1FBRXBDLEtBQUssSUFBSTZELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsR0FBRyxDQUFDN0QsTUFBTSxFQUFFK0QsQ0FBQyxFQUFFLEVBQUU7VUFFcEMsSUFBSTlDLEdBQUcsR0FBRzRDLEdBQUcsQ0FBQzNELENBQUMsQ0FBQztVQUNoQixJQUFJZ0IsR0FBRyxHQUFHMkMsR0FBRyxDQUFDRSxDQUFDLENBQUM7VUFFaEIsSUFBSSxJQUFJLENBQUN2RCxPQUFPLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbkM7VUFDRDtVQUVBLEtBQUssSUFBSXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7WUFFN0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO2NBRTdCLElBQUlELENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSUEsQ0FBQyxJQUFJLENBQUMsSUFBSUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJQSxDQUFDLElBQUksQ0FBQyxJQUN4Q0QsQ0FBQyxJQUFJLENBQUMsSUFBSUMsQ0FBQyxJQUFJLENBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDbEMsT0FBTyxDQUFDUyxHQUFHLEdBQUd3QixDQUFDLENBQUMsQ0FBQ3ZCLEdBQUcsR0FBR3dCLENBQUMsQ0FBQyxHQUFHLElBQUk7Y0FDdEMsQ0FBQyxNQUFNO2dCQUNOLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQ1MsR0FBRyxHQUFHd0IsQ0FBQyxDQUFDLENBQUN2QixHQUFHLEdBQUd3QixDQUFDLENBQUMsR0FBRyxLQUFLO2NBQ3ZDO1lBQ0Q7VUFDRDtRQUNEO01BQ0Q7SUFDRCxDQUFDO0lBRURKLGVBQWUsRUFBRSx5QkFBU04sSUFBSSxFQUFFO01BRS9CLElBQUlnQyxJQUFJLEdBQUdwQyxNQUFNLENBQUNxQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMzRCxVQUFVLENBQUM7TUFFbkQsS0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJZ0UsR0FBRyxHQUFJLENBQUNsQyxJQUFJLElBQUksQ0FBRWdDLElBQUksSUFBSTlELENBQUMsR0FBSSxDQUFDLEtBQUssQ0FBRTtRQUMzQyxJQUFJLENBQUNNLE9BQU8sQ0FBQzJELElBQUksQ0FBQ0MsS0FBSyxDQUFDbEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDTyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHeUQsR0FBRztNQUN4RTtNQUVBLEtBQUssSUFBSWhFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUlnRSxHQUFHLEdBQUksQ0FBQ2xDLElBQUksSUFBSSxDQUFFZ0MsSUFBSSxJQUFJOUQsQ0FBQyxHQUFJLENBQUMsS0FBSyxDQUFFO1FBQzNDLElBQUksQ0FBQ00sT0FBTyxDQUFDTixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ08sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzBELElBQUksQ0FBQ0MsS0FBSyxDQUFDbEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdnRSxHQUFHO01BQ3hFO0lBQ0QsQ0FBQztJQUVEN0IsYUFBYSxFQUFFLHVCQUFTTCxJQUFJLEVBQUVDLFdBQVcsRUFBRTtNQUUxQyxJQUFJeEMsSUFBSSxHQUFJLElBQUksQ0FBQ2MsaUJBQWlCLElBQUksQ0FBQyxHQUFJMEIsV0FBVztNQUN0RCxJQUFJK0IsSUFBSSxHQUFHcEMsTUFBTSxDQUFDeUMsY0FBYyxDQUFDNUUsSUFBSSxDQUFDOztNQUV0QztNQUNBLEtBQUssSUFBSVMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFFNUIsSUFBSWdFLEdBQUcsR0FBSSxDQUFDbEMsSUFBSSxJQUFJLENBQUVnQyxJQUFJLElBQUk5RCxDQUFDLEdBQUksQ0FBQyxLQUFLLENBQUU7UUFFM0MsSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUNWLElBQUksQ0FBQ00sT0FBTyxDQUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR2dFLEdBQUc7UUFDekIsQ0FBQyxNQUFNLElBQUloRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1VBQ2pCLElBQUksQ0FBQ00sT0FBTyxDQUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdnRSxHQUFHO1FBQzdCLENBQUMsTUFBTTtVQUNOLElBQUksQ0FBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFLEdBQUdQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHZ0UsR0FBRztRQUNqRDtNQUNEOztNQUVBO01BQ0EsS0FBSyxJQUFJaEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFFNUIsSUFBSWdFLEdBQUcsR0FBSSxDQUFDbEMsSUFBSSxJQUFJLENBQUVnQyxJQUFJLElBQUk5RCxDQUFDLEdBQUksQ0FBQyxLQUFLLENBQUU7UUFFM0MsSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUNWLElBQUksQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ0MsV0FBVyxHQUFHUCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdnRSxHQUFHO1FBQ2hELENBQUMsTUFBTSxJQUFJaEUsQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUNqQixJQUFJLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUdOLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdnRSxHQUFHO1FBQ3RDLENBQUMsTUFBTTtVQUNOLElBQUksQ0FBQzFELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUdOLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2dFLEdBQUc7UUFDbEM7TUFDRDs7TUFFQTtNQUNBLElBQUksQ0FBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDdUIsSUFBSztJQUVoRCxDQUFDO0lBRURRLE9BQU8sRUFBRSxpQkFBUy9DLElBQUksRUFBRXdDLFdBQVcsRUFBRTtNQUVwQyxJQUFJcUMsR0FBRyxHQUFHLENBQUMsQ0FBQztNQUNaLElBQUlyRCxHQUFHLEdBQUcsSUFBSSxDQUFDUixXQUFXLEdBQUcsQ0FBQztNQUM5QixJQUFJOEQsUUFBUSxHQUFHLENBQUM7TUFDaEIsSUFBSUMsU0FBUyxHQUFHLENBQUM7TUFFakIsS0FBSyxJQUFJdEQsR0FBRyxHQUFHLElBQUksQ0FBQ1QsV0FBVyxHQUFHLENBQUMsRUFBRVMsR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUV2RCxJQUFJQSxHQUFHLElBQUksQ0FBQyxFQUFFQSxHQUFHLEVBQUU7UUFFbkIsT0FBTyxJQUFJLEVBQUU7VUFFWixLQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtZQUUzQixJQUFJLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLEdBQUcsR0FBR3dCLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtjQUV2QyxJQUFJYyxJQUFJLEdBQUcsS0FBSztjQUVoQixJQUFJZ0IsU0FBUyxHQUFHL0UsSUFBSSxDQUFDTyxNQUFNLEVBQUU7Z0JBQzVCd0QsSUFBSSxHQUFJLENBQUUvRCxJQUFJLENBQUMrRSxTQUFTLENBQUMsS0FBS0QsUUFBUSxHQUFJLENBQUMsS0FBSyxDQUFFO2NBQ25EO2NBRUEsSUFBSUUsSUFBSSxHQUFHN0MsTUFBTSxDQUFDOEMsT0FBTyxDQUFDekMsV0FBVyxFQUFFaEIsR0FBRyxFQUFFQyxHQUFHLEdBQUd3QixDQUFDLENBQUM7Y0FFcEQsSUFBSStCLElBQUksRUFBRTtnQkFDVGpCLElBQUksR0FBRyxDQUFDQSxJQUFJO2NBQ2I7Y0FFQSxJQUFJLENBQUNoRCxPQUFPLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEdBQUd3QixDQUFDLENBQUMsR0FBR2MsSUFBSTtjQUNqQ2UsUUFBUSxFQUFFO2NBRVYsSUFBSUEsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNuQkMsU0FBUyxFQUFFO2dCQUNYRCxRQUFRLEdBQUcsQ0FBQztjQUNiO1lBQ0Q7VUFDRDtVQUVBdEQsR0FBRyxJQUFJcUQsR0FBRztVQUVWLElBQUlyRCxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ1IsV0FBVyxJQUFJUSxHQUFHLEVBQUU7WUFDdkNBLEdBQUcsSUFBSXFELEdBQUc7WUFDVkEsR0FBRyxHQUFHLENBQUNBLEdBQUc7WUFDVjtVQUNEO1FBQ0Q7TUFDRDtJQUVEO0VBRUQsQ0FBQztFQUVEakUsTUFBTSxDQUFDc0UsSUFBSSxHQUFHLElBQUk7RUFDbEJ0RSxNQUFNLENBQUN1RSxJQUFJLEdBQUcsSUFBSTtFQUVsQnZFLE1BQU0sQ0FBQ2tDLFVBQVUsR0FBRyxVQUFTakMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUksUUFBUSxFQUFFO0lBRXJFLElBQUlXLFFBQVEsR0FBR0MsU0FBUyxDQUFDQyxXQUFXLENBQUNsQixVQUFVLEVBQUVDLGlCQUFpQixDQUFDO0lBRW5FLElBQUlSLE1BQU0sR0FBRyxJQUFJMEIsV0FBVyxFQUFFO0lBRTlCLEtBQUssSUFBSXZCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1MsUUFBUSxDQUFDWCxNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO01BQ3pDLElBQUlULElBQUksR0FBR2tCLFFBQVEsQ0FBQ1QsQ0FBQyxDQUFDO01BQ3RCSCxNQUFNLENBQUNJLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ3hCSyxNQUFNLENBQUNJLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDSyxTQUFTLEVBQUUsRUFBRThCLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDcEMsSUFBSSxDQUFDQyxJQUFJLEVBQUVZLFVBQVUsQ0FBQyxDQUFDO01BQzNFYixJQUFJLENBQUNRLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO0lBQ25COztJQUVBO0lBQ0EsSUFBSTJCLGNBQWMsR0FBRyxDQUFDO0lBQ3RCLEtBQUssSUFBSXhCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR29CLFFBQVEsQ0FBQ3RCLE1BQU0sRUFBRUUsQ0FBQyxFQUFFLEVBQUU7TUFDekN3QixjQUFjLElBQUlKLFFBQVEsQ0FBQ3BCLENBQUMsQ0FBQyxDQUFDeUIsU0FBUztJQUN4QztJQUVBLElBQUk1QixNQUFNLENBQUM4QixlQUFlLEVBQUUsR0FBR0gsY0FBYyxHQUFHLENBQUMsRUFBRTtNQUNsRCxNQUFNLElBQUlQLEtBQUssQ0FBQyx5QkFBeUIsR0FDeENwQixNQUFNLENBQUM4QixlQUFlLEVBQUUsR0FDeEIsR0FBRyxHQUNISCxjQUFjLEdBQUcsQ0FBQyxHQUNsQixHQUFHLENBQUM7SUFDTjs7SUFFQTtJQUNBLElBQUkzQixNQUFNLENBQUM4QixlQUFlLEVBQUUsR0FBRyxDQUFDLElBQUlILGNBQWMsR0FBRyxDQUFDLEVBQUU7TUFDdkQzQixNQUFNLENBQUNJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCOztJQUVBO0lBQ0EsT0FBT0osTUFBTSxDQUFDOEIsZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUN6QzlCLE1BQU0sQ0FBQzhFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckI7O0lBRUE7SUFDQSxPQUFPLElBQUksRUFBRTtNQUVaLElBQUk5RSxNQUFNLENBQUM4QixlQUFlLEVBQUUsSUFBSUgsY0FBYyxHQUFHLENBQUMsRUFBRTtRQUNuRDtNQUNEO01BQ0EzQixNQUFNLENBQUNJLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDc0UsSUFBSSxFQUFFLENBQUMsQ0FBQztNQUUxQixJQUFJNUUsTUFBTSxDQUFDOEIsZUFBZSxFQUFFLElBQUlILGNBQWMsR0FBRyxDQUFDLEVBQUU7UUFDbkQ7TUFDRDtNQUNBM0IsTUFBTSxDQUFDSSxHQUFHLENBQUNFLE1BQU0sQ0FBQ3VFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0I7SUFFQSxPQUFPdkUsTUFBTSxDQUFDeUUsV0FBVyxDQUFDL0UsTUFBTSxFQUFFdUIsUUFBUSxDQUFDO0VBQzVDLENBQUM7RUFFRGpCLE1BQU0sQ0FBQ3lFLFdBQVcsR0FBRyxVQUFTL0UsTUFBTSxFQUFFdUIsUUFBUSxFQUFFO0lBRS9DLElBQUl5RCxNQUFNLEdBQUcsQ0FBQztJQUVkLElBQUlDLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQUlDLFVBQVUsR0FBRyxDQUFDO0lBRWxCLElBQUlDLE1BQU0sR0FBRyxJQUFJdEUsS0FBSyxDQUFDVSxRQUFRLENBQUN0QixNQUFNLENBQUM7SUFDdkMsSUFBSW1GLE1BQU0sR0FBRyxJQUFJdkUsS0FBSyxDQUFDVSxRQUFRLENBQUN0QixNQUFNLENBQUM7SUFFdkMsS0FBSyxJQUFJeUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbkIsUUFBUSxDQUFDdEIsTUFBTSxFQUFFeUMsQ0FBQyxFQUFFLEVBQUU7TUFFekMsSUFBSTJDLE9BQU8sR0FBRzlELFFBQVEsQ0FBQ21CLENBQUMsQ0FBQyxDQUFDZCxTQUFTO01BQ25DLElBQUkwRCxPQUFPLEdBQUcvRCxRQUFRLENBQUNtQixDQUFDLENBQUMsQ0FBQzZDLFVBQVUsR0FBR0YsT0FBTztNQUU5Q0osVUFBVSxHQUFHYixJQUFJLENBQUNvQixHQUFHLENBQUNQLFVBQVUsRUFBRUksT0FBTyxDQUFDO01BQzFDSCxVQUFVLEdBQUdkLElBQUksQ0FBQ29CLEdBQUcsQ0FBQ04sVUFBVSxFQUFFSSxPQUFPLENBQUM7TUFFMUNILE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQyxHQUFHLElBQUk3QixLQUFLLENBQUN3RSxPQUFPLENBQUM7TUFFOUIsS0FBSyxJQUFJbEYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZ0YsTUFBTSxDQUFDekMsQ0FBQyxDQUFDLENBQUN6QyxNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO1FBQzFDZ0YsTUFBTSxDQUFDekMsQ0FBQyxDQUFDLENBQUN2QyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0EsTUFBTSxDQUFDRyxDQUFDLEdBQUc2RSxNQUFNLENBQUM7TUFDaEQ7TUFDQUEsTUFBTSxJQUFJSyxPQUFPO01BRWpCLElBQUlJLE1BQU0sR0FBRzVELE1BQU0sQ0FBQzZELHlCQUF5QixDQUFDSixPQUFPLENBQUM7TUFDdEQsSUFBSUssT0FBTyxHQUFHLElBQUlDLFlBQVksQ0FBQ1QsTUFBTSxDQUFDekMsQ0FBQyxDQUFDLEVBQUUrQyxNQUFNLENBQUMxRixTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFFakUsSUFBSThGLE9BQU8sR0FBR0YsT0FBTyxDQUFDeEIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDO01BQ2pDTCxNQUFNLENBQUMxQyxDQUFDLENBQUMsR0FBRyxJQUFJN0IsS0FBSyxDQUFDNEUsTUFBTSxDQUFDMUYsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO01BQzdDLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaUYsTUFBTSxDQUFDMUMsQ0FBQyxDQUFDLENBQUN6QyxNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUkyRixRQUFRLEdBQUczRixDQUFDLEdBQUcwRixPQUFPLENBQUM5RixTQUFTLEVBQUUsR0FBR3FGLE1BQU0sQ0FBQzFDLENBQUMsQ0FBQyxDQUFDekMsTUFBTTtRQUN6RG1GLE1BQU0sQ0FBQzFDLENBQUMsQ0FBQyxDQUFDdkMsQ0FBQyxDQUFDLEdBQUkyRixRQUFRLElBQUksQ0FBQyxHQUFJRCxPQUFPLENBQUNFLEdBQUcsQ0FBQ0QsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUMzRDtJQUVEO0lBRUEsSUFBSUUsY0FBYyxHQUFHLENBQUM7SUFDdEIsS0FBSyxJQUFJN0YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb0IsUUFBUSxDQUFDdEIsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUN6QzZGLGNBQWMsSUFBSXpFLFFBQVEsQ0FBQ3BCLENBQUMsQ0FBQyxDQUFDb0YsVUFBVTtJQUN6QztJQUVBLElBQUk3RixJQUFJLEdBQUcsSUFBSW1CLEtBQUssQ0FBQ21GLGNBQWMsQ0FBQztJQUNwQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQztJQUViLEtBQUssSUFBSTlGLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzhFLFVBQVUsRUFBRTlFLENBQUMsRUFBRSxFQUFFO01BQ3BDLEtBQUssSUFBSXVDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR25CLFFBQVEsQ0FBQ3RCLE1BQU0sRUFBRXlDLENBQUMsRUFBRSxFQUFFO1FBQ3pDLElBQUl2QyxDQUFDLEdBQUdnRixNQUFNLENBQUN6QyxDQUFDLENBQUMsQ0FBQ3pDLE1BQU0sRUFBRTtVQUN6QlAsSUFBSSxDQUFDdUcsS0FBSyxFQUFFLENBQUMsR0FBR2QsTUFBTSxDQUFDekMsQ0FBQyxDQUFDLENBQUN2QyxDQUFDLENBQUM7UUFDN0I7TUFDRDtJQUNEO0lBRUEsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcrRSxVQUFVLEVBQUUvRSxDQUFDLEVBQUUsRUFBRTtNQUNwQyxLQUFLLElBQUl1QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUduQixRQUFRLENBQUN0QixNQUFNLEVBQUV5QyxDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJdkMsQ0FBQyxHQUFHaUYsTUFBTSxDQUFDMUMsQ0FBQyxDQUFDLENBQUN6QyxNQUFNLEVBQUU7VUFDekJQLElBQUksQ0FBQ3VHLEtBQUssRUFBRSxDQUFDLEdBQUdiLE1BQU0sQ0FBQzFDLENBQUMsQ0FBQyxDQUFDdkMsQ0FBQyxDQUFDO1FBQzdCO01BQ0Q7SUFDRDtJQUVBLE9BQU9ULElBQUk7RUFFWixDQUFDOztFQUVEO0VBQ0E7RUFDQTs7RUFFQSxJQUFJRSxNQUFNLEdBQUc7SUFDWnNHLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNuQkMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3RCdEcsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3RCdUcsVUFBVSxFQUFFLENBQUMsSUFBSTtFQUNsQixDQUFDOztFQUVEO0VBQ0E7RUFDQTs7RUFFQSxJQUFJQyxtQkFBbUIsR0FBRztJQUN6QkMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0osQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7O0VBRUEsSUFBSUMsYUFBYSxHQUFHO0lBQ25CQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxVQUFVLEVBQUU7RUFDYixDQUFDOztFQUVEO0VBQ0E7RUFDQTs7RUFFQSxJQUFJckYsTUFBTSxHQUFHO0lBRVpzRixzQkFBc0IsRUFBRSxDQUN2QixFQUFFLEVBQ0YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ25CLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNuQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFB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QUFjLEdBQUc7RUFFMUI7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRVY7RUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRVg7RUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRVg7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRVY7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFWDtFQUNBLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXRCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXRCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXRCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUVaO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFWjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDZCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVB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aWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZ2l0aHViIGh0dHBzOi8vZ2l0aHViLmNvbS9TYW5zbm4vdVFSQ29kZVxuLy8gdmVyc2lvbiAyLjAuMjNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmxldCB1UVJDb2RlID0ge307XG5cbihmdW5jdGlvbigpIHtcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUVJDb2RlIGZvciBKYXZhU2NyaXB0XG5cdC8vXG5cdC8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuXHQvL1xuXHQvLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cblx0Ly9cblx0Ly8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuXHQvLyAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdC8vXG5cdC8vIFRoZSB3b3JkIFwiUVIgQ29kZVwiIGlzIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mIFxuXHQvLyBERU5TTyBXQVZFIElOQ09SUE9SQVRFRFxuXHQvLyAgIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcblx0Ly9cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBRUjhiaXRCeXRlXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0ZnVuY3Rpb24gUVI4Yml0Qnl0ZShkYXRhKSB7XG5cdFx0dGhpcy5tb2RlID0gUVJNb2RlLk1PREVfOEJJVF9CWVRFO1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdH1cblxuXHRRUjhiaXRCeXRlLnByb3RvdHlwZSA9IHtcblxuXHRcdGdldExlbmd0aDogZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0d3JpdGU6IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly8gbm90IEpJUyAuLi5cblx0XHRcdFx0YnVmZmVyLnB1dCh0aGlzLmRhdGEuY2hhckNvZGVBdChpKSwgOCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFFSQ29kZVxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGZ1bmN0aW9uIFFSQ29kZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xuXHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG5cdFx0dGhpcy5lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xuXHRcdHRoaXMubW9kdWxlcyA9IG51bGw7XG5cdFx0dGhpcy5tb2R1bGVDb3VudCA9IDA7XG5cdFx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xuXHRcdHRoaXMuZGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdFFSQ29kZS5wcm90b3R5cGUgPSB7XG5cblx0XHRhZGREYXRhOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgbmV3RGF0YSA9IG5ldyBRUjhiaXRCeXRlKGRhdGEpO1xuXHRcdFx0dGhpcy5kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO1xuXHRcdFx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xuXHRcdH0sXG5cblx0XHRpc0Rhcms6IGZ1bmN0aW9uKHJvdywgY29sKSB7XG5cdFx0XHRpZiAocm93IDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyB8fCBjb2wgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyb3cgKyBcIixcIiArIGNvbCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcblx0XHR9LFxuXG5cdFx0Z2V0TW9kdWxlQ291bnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubW9kdWxlQ291bnQ7XG5cdFx0fSxcblxuXHRcdG1ha2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gQ2FsY3VsYXRlIGF1dG9tYXRpY2FsbHkgdHlwZU51bWJlciBpZiBwcm92aWRlZCBpcyA8IDFcblx0XHRcdGlmICh0aGlzLnR5cGVOdW1iZXIgPCAxKSB7XG5cdFx0XHRcdHZhciB0eXBlTnVtYmVyID0gMTtcblx0XHRcdFx0Zm9yICh0eXBlTnVtYmVyID0gMTsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcblx0XHRcdFx0XHR2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCk7XG5cblx0XHRcdFx0XHR2YXIgYnVmZmVyID0gbmV3IFFSQml0QnVmZmVyKCk7XG5cdFx0XHRcdFx0dmFyIHRvdGFsRGF0YUNvdW50ID0gMDtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XG5cdFx0XHRcdFx0XHRidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XG5cdFx0XHRcdFx0XHRidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLCB0eXBlTnVtYmVyKSk7XG5cdFx0XHRcdFx0XHRkYXRhLndyaXRlKGJ1ZmZlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcblx0XHRcdH1cblx0XHRcdHRoaXMubWFrZUltcGwoZmFsc2UsIHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO1xuXHRcdH0sXG5cblx0XHRtYWtlSW1wbDogZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcblxuXHRcdFx0dGhpcy5tb2R1bGVDb3VudCA9IHRoaXMudHlwZU51bWJlciAqIDQgKyAxNztcblx0XHRcdHRoaXMubW9kdWxlcyA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcblxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVDb3VudDsgcm93KyspIHtcblxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93XSA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcblxuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZUNvdW50OyBjb2wrKykge1xuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3ddW2NvbF0gPSBudWxsOyAvLyhjb2wgKyByb3cpICUgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xuXHRcdFx0dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIHRoaXMubW9kdWxlQ291bnQgLSA3KTtcblx0XHRcdHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcblx0XHRcdHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XG5cdFx0XHR0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xuXG5cdFx0XHRpZiAodGhpcy50eXBlTnVtYmVyID49IDcpIHtcblx0XHRcdFx0dGhpcy5zZXR1cFR5cGVOdW1iZXIodGVzdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmRhdGFDYWNoZSA9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuZGF0YUNhY2hlID0gUVJDb2RlLmNyZWF0ZURhdGEodGhpcy50eXBlTnVtYmVyLCB0aGlzLmVycm9yQ29ycmVjdExldmVsLCB0aGlzLmRhdGFMaXN0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5tYXBEYXRhKHRoaXMuZGF0YUNhY2hlLCBtYXNrUGF0dGVybik7XG5cdFx0fSxcblxuXHRcdHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm46IGZ1bmN0aW9uKHJvdywgY29sKSB7XG5cblx0XHRcdGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByKyspIHtcblxuXHRcdFx0XHRpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGZvciAodmFyIGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcblxuXHRcdFx0XHRcdGlmIChjb2wgKyBjIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XG5cblx0XHRcdFx0XHRpZiAoKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT0gMCB8fCBjID09IDYpKSB8fFxuXHRcdFx0XHRcdFx0KDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT0gMCB8fCByID09IDYpKSB8fFxuXHRcdFx0XHRcdFx0KDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkpIHtcblx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRnZXRCZXN0TWFza1BhdHRlcm46IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgbWluTG9zdFBvaW50ID0gMDtcblx0XHRcdHZhciBwYXR0ZXJuID0gMDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblxuXHRcdFx0XHR0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xuXG5cdFx0XHRcdHZhciBsb3N0UG9pbnQgPSBRUlV0aWwuZ2V0TG9zdFBvaW50KHRoaXMpO1xuXG5cdFx0XHRcdGlmIChpID09IDAgfHwgbWluTG9zdFBvaW50ID4gbG9zdFBvaW50KSB7XG5cdFx0XHRcdFx0bWluTG9zdFBvaW50ID0gbG9zdFBvaW50O1xuXHRcdFx0XHRcdHBhdHRlcm4gPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwYXR0ZXJuO1xuXHRcdH0sXG5cblx0XHRjcmVhdGVNb3ZpZUNsaXA6IGZ1bmN0aW9uKHRhcmdldF9tYywgaW5zdGFuY2VfbmFtZSwgZGVwdGgpIHtcblxuXHRcdFx0dmFyIHFyX21jID0gdGFyZ2V0X21jLmNyZWF0ZUVtcHR5TW92aWVDbGlwKGluc3RhbmNlX25hbWUsIGRlcHRoKTtcblx0XHRcdHZhciBjcyA9IDE7XG5cblx0XHRcdHRoaXMubWFrZSgpO1xuXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLm1vZHVsZXMubGVuZ3RoOyByb3crKykge1xuXG5cdFx0XHRcdHZhciB5ID0gcm93ICogY3M7XG5cblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgdGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuXG5cdFx0XHRcdFx0dmFyIHggPSBjb2wgKiBjcztcblx0XHRcdFx0XHR2YXIgZGFyayA9IHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XG5cblx0XHRcdFx0XHRpZiAoZGFyaykge1xuXHRcdFx0XHRcdFx0cXJfbWMuYmVnaW5GaWxsKDAsIDEwMCk7XG5cdFx0XHRcdFx0XHRxcl9tYy5tb3ZlVG8oeCwgeSk7XG5cdFx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5KTtcblx0XHRcdFx0XHRcdHFyX21jLmxpbmVUbyh4ICsgY3MsIHkgKyBjcyk7XG5cdFx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCwgeSArIGNzKTtcblx0XHRcdFx0XHRcdHFyX21jLmVuZEZpbGwoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHFyX21jO1xuXHRcdH0sXG5cblx0XHRzZXR1cFRpbWluZ1BhdHRlcm46IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRmb3IgKHZhciByID0gODsgciA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyByKyspIHtcblx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1tyXVs2XSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBjID0gODsgYyA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyBjKyspIHtcblx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1s2XVtjXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBwb3MgPSBRUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlcik7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcblxuXHRcdFx0XHRcdHZhciByb3cgPSBwb3NbaV07XG5cdFx0XHRcdFx0dmFyIGNvbCA9IHBvc1tqXTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLm1vZHVsZXNbcm93XVtjb2xdICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByKyspIHtcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xuXG5cdFx0XHRcdFx0XHRcdGlmIChyID09IC0yIHx8IHIgPT0gMiB8fCBjID09IC0yIHx8IGMgPT0gMiB8fFxuXHRcdFx0XHRcdFx0XHRcdChyID09IDAgJiYgYyA9PSAwKSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0dXBUeXBlTnVtYmVyOiBmdW5jdGlvbih0ZXN0KSB7XG5cblx0XHRcdHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cdFx0XHRcdHRoaXMubW9kdWxlc1tNYXRoLmZsb29yKGkgLyAzKV1baSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdID0gbW9kO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcblx0XHRcdFx0dmFyIG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblx0XHRcdFx0dGhpcy5tb2R1bGVzW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXVtNYXRoLmZsb29yKGkgLyAzKV0gPSBtb2Q7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldHVwVHlwZUluZm86IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XG5cblx0XHRcdHZhciBkYXRhID0gKHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcblx0XHRcdHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xuXG5cdFx0XHQvLyB2ZXJ0aWNhbFx0XHRcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cblx0XHRcdFx0aWYgKGkgPCA2KSB7XG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW2ldWzhdID0gbW9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGkgPCA4KSB7XG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudCAtIDE1ICsgaV1bOF0gPSBtb2Q7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaG9yaXpvbnRhbFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG5cblx0XHRcdFx0dmFyIG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblxuXHRcdFx0XHRpZiAoaSA8IDgpIHtcblx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbOF1bdGhpcy5tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcblx0XHRcdFx0fSBlbHNlIGlmIChpIDwgOSkge1xuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDFdID0gbW9kO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZpeGVkIG1vZHVsZVxuXHRcdFx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XG5cblx0XHR9LFxuXG5cdFx0bWFwRGF0YTogZnVuY3Rpb24oZGF0YSwgbWFza1BhdHRlcm4pIHtcblxuXHRcdFx0dmFyIGluYyA9IC0xO1xuXHRcdFx0dmFyIHJvdyA9IHRoaXMubW9kdWxlQ291bnQgLSAxO1xuXHRcdFx0dmFyIGJpdEluZGV4ID0gNztcblx0XHRcdHZhciBieXRlSW5kZXggPSAwO1xuXG5cdFx0XHRmb3IgKHZhciBjb2wgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcblxuXHRcdFx0XHRpZiAoY29sID09IDYpIGNvbC0tO1xuXG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cblx0XHRcdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IDI7IGMrKykge1xuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0XHRcdHZhciBkYXJrID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT0gMSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR2YXIgbWFzayA9IFFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLCByb3csIGNvbCAtIGMpO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChtYXNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGFyayA9ICFkYXJrO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xuXHRcdFx0XHRcdFx0XHRiaXRJbmRleC0tO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChiaXRJbmRleCA9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdGJ5dGVJbmRleCsrO1xuXHRcdFx0XHRcdFx0XHRcdGJpdEluZGV4ID0gNztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJvdyArPSBpbmM7XG5cblx0XHRcdFx0XHRpZiAocm93IDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdykge1xuXHRcdFx0XHRcdFx0cm93IC09IGluYztcblx0XHRcdFx0XHRcdGluYyA9IC1pbmM7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdFFSQ29kZS5QQUQwID0gMHhFQztcblx0UVJDb2RlLlBBRDEgPSAweDExO1xuXG5cdFFSQ29kZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwsIGRhdGFMaXN0KSB7XG5cblx0XHR2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXG5cdFx0dmFyIGJ1ZmZlciA9IG5ldyBRUkJpdEJ1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRhdGEgPSBkYXRhTGlzdFtpXTtcblx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5tb2RlLCA0KTtcblx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsIHR5cGVOdW1iZXIpKTtcblx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcblx0XHR9XG5cblx0XHQvLyBjYWxjIG51bSBtYXggZGF0YS5cblx0XHR2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcblx0XHR9XG5cblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjb2RlIGxlbmd0aCBvdmVyZmxvdy4gKFwiICtcblx0XHRcdFx0YnVmZmVyLmdldExlbmd0aEluQml0cygpICtcblx0XHRcdFx0XCI+XCIgK1xuXHRcdFx0XHR0b3RhbERhdGFDb3VudCAqIDggK1xuXHRcdFx0XHRcIilcIik7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kIGNvZGVcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcblx0XHRcdGJ1ZmZlci5wdXQoMCwgNCk7XG5cdFx0fVxuXG5cdFx0Ly8gcGFkZGluZ1xuXHRcdHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9IDApIHtcblx0XHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdC8vIHBhZGRpbmdcblx0XHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDAsIDgpO1xuXG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDEsIDgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBRUkNvZGUuY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XG5cdH1cblxuXHRRUkNvZGUuY3JlYXRlQnl0ZXMgPSBmdW5jdGlvbihidWZmZXIsIHJzQmxvY2tzKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gMDtcblxuXHRcdHZhciBtYXhEY0NvdW50ID0gMDtcblx0XHR2YXIgbWF4RWNDb3VudCA9IDA7XG5cblx0XHR2YXIgZGNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XG5cdFx0dmFyIGVjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xuXG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xuXG5cdFx0XHR2YXIgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmRhdGFDb3VudDtcblx0XHRcdHZhciBlY0NvdW50ID0gcnNCbG9ja3Nbcl0udG90YWxDb3VudCAtIGRjQ291bnQ7XG5cblx0XHRcdG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcblx0XHRcdG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcblxuXHRcdFx0ZGNkYXRhW3JdID0gbmV3IEFycmF5KGRjQ291bnQpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkY2RhdGFbcl1baV0gPSAweGZmICYgYnVmZmVyLmJ1ZmZlcltpICsgb2Zmc2V0XTtcblx0XHRcdH1cblx0XHRcdG9mZnNldCArPSBkY0NvdW50O1xuXG5cdFx0XHR2YXIgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XG5cdFx0XHR2YXIgcmF3UG9seSA9IG5ldyBRUlBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcblxuXHRcdFx0dmFyIG1vZFBvbHkgPSByYXdQb2x5Lm1vZChyc1BvbHkpO1xuXHRcdFx0ZWNkYXRhW3JdID0gbmV3IEFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xuXHRcdFx0XHRlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldChtb2RJbmRleCkgOiAwO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0dmFyIHRvdGFsQ29kZUNvdW50ID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS50b3RhbENvdW50O1xuXHRcdH1cblxuXHRcdHZhciBkYXRhID0gbmV3IEFycmF5KHRvdGFsQ29kZUNvdW50KTtcblx0XHR2YXIgaW5kZXggPSAwO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpKyspIHtcblx0XHRcdGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcblx0XHRcdFx0aWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZGF0YVtpbmRleCsrXSA9IGRjZGF0YVtyXVtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RWNDb3VudDsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XG5cdFx0XHRcdGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xuXHRcdFx0XHRcdGRhdGFbaW5kZXgrK10gPSBlY2RhdGFbcl1baV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblxuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUVJNb2RlXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0dmFyIFFSTW9kZSA9IHtcblx0XHRNT0RFX05VTUJFUjogMSA8PCAwLFxuXHRcdE1PREVfQUxQSEFfTlVNOiAxIDw8IDEsXG5cdFx0TU9ERV84QklUX0JZVEU6IDEgPDwgMixcblx0XHRNT0RFX0tBTkpJOiAxIDw8IDNcblx0fTtcblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBRUkVycm9yQ29ycmVjdExldmVsXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0dmFyIFFSRXJyb3JDb3JyZWN0TGV2ZWwgPSB7XG5cdFx0TDogMSxcblx0XHRNOiAwLFxuXHRcdFE6IDMsXG5cdFx0SDogMlxuXHR9O1xuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFFSTWFza1BhdHRlcm5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHR2YXIgUVJNYXNrUGF0dGVybiA9IHtcblx0XHRQQVRURVJOMDAwOiAwLFxuXHRcdFBBVFRFUk4wMDE6IDEsXG5cdFx0UEFUVEVSTjAxMDogMixcblx0XHRQQVRURVJOMDExOiAzLFxuXHRcdFBBVFRFUk4xMDA6IDQsXG5cdFx0UEFUVEVSTjEwMTogNSxcblx0XHRQQVRURVJOMTEwOiA2LFxuXHRcdFBBVFRFUk4xMTE6IDdcblx0fTtcblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBRUlV0aWxcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHR2YXIgUVJVdGlsID0ge1xuXG5cdFx0UEFUVEVSTl9QT1NJVElPTl9UQUJMRTogW1xuXHRcdFx0W10sXG5cdFx0XHRbNiwgMThdLFxuXHRcdFx0WzYsIDIyXSxcblx0XHRcdFs2LCAyNl0sXG5cdFx0XHRbNiwgMzBdLFxuXHRcdFx0WzYsIDM0XSxcblx0XHRcdFs2LCAyMiwgMzhdLFxuXHRcdFx0WzYsIDI0LCA0Ml0sXG5cdFx0XHRbNiwgMjYsIDQ2XSxcblx0XHRcdFs2LCAyOCwgNTBdLFxuXHRcdFx0WzYsIDMwLCA1NF0sXG5cdFx0XHRbNiwgMzIsIDU4XSxcblx0XHRcdFs2LCAzNCwgNjJdLFxuXHRcdFx0WzYsIDI2LCA0NiwgNjZdLFxuXHRcdFx0WzYsIDI2LCA0OCwgNzBdLFxuXHRcdFx0WzYsIDI2LCA1MCwgNzRdLFxuXHRcdFx0WzYsIDMwLCA1NCwgNzhdLFxuXHRcdFx0WzYsIDMwLCA1NiwgODJdLFxuXHRcdFx0WzYsIDMwLCA1OCwgODZdLFxuXHRcdFx0WzYsIDM0LCA2MiwgOTBdLFxuXHRcdFx0WzYsIDI4LCA1MCwgNzIsIDk0XSxcblx0XHRcdFs2LCAyNiwgNTAsIDc0LCA5OF0sXG5cdFx0XHRbNiwgMzAsIDU0LCA3OCwgMTAyXSxcblx0XHRcdFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxuXHRcdFx0WzYsIDMyLCA1OCwgODQsIDExMF0sXG5cdFx0XHRbNiwgMzAsIDU4LCA4NiwgMTE0XSxcblx0XHRcdFs2LCAzNCwgNjIsIDkwLCAxMThdLFxuXHRcdFx0WzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxuXHRcdFx0WzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2XSxcblx0XHRcdFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXG5cdFx0XHRbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxuXHRcdFx0WzYsIDM0LCA2MCwgODYsIDExMiwgMTM4XSxcblx0XHRcdFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXG5cdFx0XHRbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxuXHRcdFx0WzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2LCAxNTBdLFxuXHRcdFx0WzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxuXHRcdFx0WzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxuXHRcdFx0WzYsIDMyLCA1OCwgODQsIDExMCwgMTM2LCAxNjJdLFxuXHRcdFx0WzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxuXHRcdFx0WzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXG5cdFx0XSxcblxuXHRcdEcxNTogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxuXHRcdEcxODogKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKSxcblx0XHRHMTVfTUFTSzogKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKSxcblxuXHRcdGdldEJDSFR5cGVJbmZvOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgZCA9IGRhdGEgPDwgMTA7XG5cdFx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpID49IDApIHtcblx0XHRcdFx0ZCBePSAoUVJVdGlsLkcxNSA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gUVJVdGlsLkcxNV9NQVNLO1xuXHRcdH0sXG5cblx0XHRnZXRCQ0hUeXBlTnVtYmVyOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgZCA9IGRhdGEgPDwgMTI7XG5cdFx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpID49IDApIHtcblx0XHRcdFx0ZCBePSAoUVJVdGlsLkcxOCA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcblx0XHR9LFxuXG5cdFx0Z2V0QkNIRGlnaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblxuXHRcdFx0dmFyIGRpZ2l0ID0gMDtcblxuXHRcdFx0d2hpbGUgKGRhdGEgIT0gMCkge1xuXHRcdFx0XHRkaWdpdCsrO1xuXHRcdFx0XHRkYXRhID4+Pj0gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRpZ2l0O1xuXHRcdH0sXG5cblx0XHRnZXRQYXR0ZXJuUG9zaXRpb246IGZ1bmN0aW9uKHR5cGVOdW1iZXIpIHtcblx0XHRcdHJldHVybiBRUlV0aWwuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XG5cdFx0fSxcblxuXHRcdGdldE1hc2s6IGZ1bmN0aW9uKG1hc2tQYXR0ZXJuLCBpLCBqKSB7XG5cblx0XHRcdHN3aXRjaCAobWFza1BhdHRlcm4pIHtcblxuXHRcdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMDpcblx0XHRcdFx0XHRyZXR1cm4gKGkgKyBqKSAlIDIgPT0gMDtcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDE6XG5cdFx0XHRcdFx0cmV0dXJuIGkgJSAyID09IDA7XG5cdFx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOlxuXHRcdFx0XHRcdHJldHVybiBqICUgMyA9PSAwO1xuXHRcdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMTpcblx0XHRcdFx0XHRyZXR1cm4gKGkgKyBqKSAlIDMgPT0gMDtcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDA6XG5cdFx0XHRcdFx0cmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT0gMDtcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6XG5cdFx0XHRcdFx0cmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT0gMDtcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6XG5cdFx0XHRcdFx0cmV0dXJuICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT0gMDtcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTE6XG5cdFx0XHRcdFx0cmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT0gMDtcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImJhZCBtYXNrUGF0dGVybjpcIiArIG1hc2tQYXR0ZXJuKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Z2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbDogZnVuY3Rpb24oZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XG5cblx0XHRcdHZhciBhID0gbmV3IFFSUG9seW5vbWlhbChbMV0sIDApO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGEgPSBhLm11bHRpcGx5KG5ldyBRUlBvbHlub21pYWwoWzEsIFFSTWF0aC5nZXhwKGkpXSwgMCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9LFxuXG5cdFx0Z2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbihtb2RlLCB0eXBlKSB7XG5cblx0XHRcdGlmICgxIDw9IHR5cGUgJiYgdHlwZSA8IDEwKSB7XG5cblx0XHRcdFx0Ly8gMSAtIDlcblxuXHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX05VTUJFUjpcblx0XHRcdFx0XHRcdHJldHVybiAxMDtcblx0XHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTpcblx0XHRcdFx0XHRcdHJldHVybiA5O1xuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIDg7XG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpcblx0XHRcdFx0XHRcdHJldHVybiA4O1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICh0eXBlIDwgMjcpIHtcblxuXHRcdFx0XHQvLyAxMCAtIDI2XG5cblx0XHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTI7XG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTE7XG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTY7XG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpcblx0XHRcdFx0XHRcdHJldHVybiAxMDtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSBpZiAodHlwZSA8IDQxKSB7XG5cblx0XHRcdFx0Ly8gMjcgLSA0MFxuXG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOlxuXHRcdFx0XHRcdFx0cmV0dXJuIDE0O1xuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOlxuXHRcdFx0XHRcdFx0cmV0dXJuIDEzO1xuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIDE2O1xuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTI7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlOlwiICsgdHlwZSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGdldExvc3RQb2ludDogZnVuY3Rpb24ocXJDb2RlKSB7XG5cblx0XHRcdHZhciBtb2R1bGVDb3VudCA9IHFyQ29kZS5nZXRNb2R1bGVDb3VudCgpO1xuXG5cdFx0XHR2YXIgbG9zdFBvaW50ID0gMDtcblxuXHRcdFx0Ly8gTEVWRUwxXG5cblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xuXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xuXG5cdFx0XHRcdFx0dmFyIHNhbWVDb3VudCA9IDA7XG5cdFx0XHRcdFx0dmFyIGRhcmsgPSBxckNvZGUuaXNEYXJrKHJvdywgY29sKTtcblxuXHRcdFx0XHRcdGZvciAodmFyIHIgPSAtMTsgciA8PSAxOyByKyspIHtcblxuXHRcdFx0XHRcdFx0aWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGMgPSAtMTsgYyA8PSAxOyBjKyspIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHIgPT0gMCAmJiBjID09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChkYXJrID09IHFyQ29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykpIHtcblx0XHRcdFx0XHRcdFx0XHRzYW1lQ291bnQrKztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzYW1lQ291bnQgPiA1KSB7XG5cdFx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTEVWRUwyXG5cblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93KyspIHtcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xuXHRcdFx0XHRcdHZhciBjb3VudCA9IDA7XG5cdFx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpKSBjb3VudCsrO1xuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCkpIGNvdW50Kys7XG5cdFx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKSkgY291bnQrKztcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wgKyAxKSkgY291bnQrKztcblx0XHRcdFx0XHRpZiAoY291bnQgPT0gMCB8fCBjb3VudCA9PSA0KSB7XG5cdFx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gMztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTEVWRUwzXG5cblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCsrKSB7XG5cdFx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpICYmXG5cdFx0XHRcdFx0XHQhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDEpICYmXG5cdFx0XHRcdFx0XHRxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMikgJiZcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAzKSAmJlxuXHRcdFx0XHRcdFx0cXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDQpICYmXG5cdFx0XHRcdFx0XHQhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDUpICYmXG5cdFx0XHRcdFx0XHRxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNikpIHtcblx0XHRcdFx0XHRcdGxvc3RQb2ludCArPSA0MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XG5cdFx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gNjsgcm93KyspIHtcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkgJiZcblx0XHRcdFx0XHRcdCFxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCkgJiZcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93ICsgMiwgY29sKSAmJlxuXHRcdFx0XHRcdFx0cXJDb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpICYmXG5cdFx0XHRcdFx0XHRxckNvZGUuaXNEYXJrKHJvdyArIDQsIGNvbCkgJiZcblx0XHRcdFx0XHRcdCFxckNvZGUuaXNEYXJrKHJvdyArIDUsIGNvbCkgJiZcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93ICsgNiwgY29sKSkge1xuXHRcdFx0XHRcdFx0bG9zdFBvaW50ICs9IDQwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMRVZFTDRcblxuXHRcdFx0dmFyIGRhcmtDb3VudCA9IDA7XG5cblx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xuXHRcdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkpIHtcblx0XHRcdFx0XHRcdGRhcmtDb3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcblx0XHRcdGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xuXG5cdFx0XHRyZXR1cm4gbG9zdFBvaW50O1xuXHRcdH1cblxuXHR9O1xuXG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUVJNYXRoXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0dmFyIFFSTWF0aCA9IHtcblxuXHRcdGdsb2c6IGZ1bmN0aW9uKG4pIHtcblxuXHRcdFx0aWYgKG4gPCAxKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUVJNYXRoLkxPR19UQUJMRVtuXTtcblx0XHR9LFxuXG5cdFx0Z2V4cDogZnVuY3Rpb24obikge1xuXG5cdFx0XHR3aGlsZSAobiA8IDApIHtcblx0XHRcdFx0biArPSAyNTU7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlIChuID49IDI1Nikge1xuXHRcdFx0XHRuIC09IDI1NTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFFSTWF0aC5FWFBfVEFCTEVbbl07XG5cdFx0fSxcblxuXHRcdEVYUF9UQUJMRTogbmV3IEFycmF5KDI1NiksXG5cblx0XHRMT0dfVEFCTEU6IG5ldyBBcnJheSgyNTYpXG5cblx0fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSAxIDw8IGk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDg7IGkgPCAyNTY7IGkrKykge1xuXHRcdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSBRUk1hdGguRVhQX1RBQkxFW2kgLSA0XSBeXG5cdFx0XHRRUk1hdGguRVhQX1RBQkxFW2kgLSA1XSBeXG5cdFx0XHRRUk1hdGguRVhQX1RBQkxFW2kgLSA2XSBeXG5cdFx0XHRRUk1hdGguRVhQX1RBQkxFW2kgLSA4XTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG5cdFx0UVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldXSA9IGk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBRUlBvbHlub21pYWxcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRmdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLCBzaGlmdCkge1xuXG5cdFx0aWYgKG51bS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCArIFwiL1wiICsgc2hpZnQpO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXQgPSAwO1xuXG5cdFx0d2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT0gMCkge1xuXHRcdFx0b2Zmc2V0Kys7XG5cdFx0fVxuXG5cdFx0dGhpcy5udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGggLSBvZmZzZXQ7IGkrKykge1xuXHRcdFx0dGhpcy5udW1baV0gPSBudW1baSArIG9mZnNldF07XG5cdFx0fVxuXHR9XG5cblx0UVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcblxuXHRcdGdldDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdHJldHVybiB0aGlzLm51bVtpbmRleF07XG5cdFx0fSxcblxuXHRcdGdldExlbmd0aDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5udW0ubGVuZ3RoO1xuXHRcdH0sXG5cblx0XHRtdWx0aXBseTogZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgbnVtID0gbmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XG5cdFx0XHRcdFx0bnVtW2kgKyBqXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyh0aGlzLmdldChpKSkgKyBRUk1hdGguZ2xvZyhlLmdldChqKSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XG5cdFx0fSxcblxuXHRcdG1vZDogZnVuY3Rpb24oZSkge1xuXG5cdFx0XHRpZiAodGhpcy5nZXRMZW5ndGgoKSAtIGUuZ2V0TGVuZ3RoKCkgPCAwKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmF0aW8gPSBRUk1hdGguZ2xvZyh0aGlzLmdldCgwKSkgLSBRUk1hdGguZ2xvZyhlLmdldCgwKSk7XG5cblx0XHRcdHZhciBudW0gPSBuZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSk7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XG5cdFx0XHRcdG51bVtpXSA9IHRoaXMuZ2V0KGkpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xuXHRcdFx0XHRudW1baV0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkpICsgcmF0aW8pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyByZWN1cnNpdmUgY2FsbFxuXHRcdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFFSUlNCbG9ja1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGZ1bmN0aW9uIFFSUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcblx0XHR0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuXHRcdHRoaXMuZGF0YUNvdW50ID0gZGF0YUNvdW50O1xuXHR9XG5cblx0UVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xuXG5cdFx0Ly8gTFxuXHRcdC8vIE1cblx0XHQvLyBRXG5cdFx0Ly8gSFxuXG5cdFx0Ly8gMVxuXHRcdFsxLCAyNiwgMTldLFxuXHRcdFsxLCAyNiwgMTZdLFxuXHRcdFsxLCAyNiwgMTNdLFxuXHRcdFsxLCAyNiwgOV0sXG5cblx0XHQvLyAyXG5cdFx0WzEsIDQ0LCAzNF0sXG5cdFx0WzEsIDQ0LCAyOF0sXG5cdFx0WzEsIDQ0LCAyMl0sXG5cdFx0WzEsIDQ0LCAxNl0sXG5cblx0XHQvLyAzXG5cdFx0WzEsIDcwLCA1NV0sXG5cdFx0WzEsIDcwLCA0NF0sXG5cdFx0WzIsIDM1LCAxN10sXG5cdFx0WzIsIDM1LCAxM10sXG5cblx0XHQvLyA0XHRcdFxuXHRcdFsxLCAxMDAsIDgwXSxcblx0XHRbMiwgNTAsIDMyXSxcblx0XHRbMiwgNTAsIDI0XSxcblx0XHRbNCwgMjUsIDldLFxuXG5cdFx0Ly8gNVxuXHRcdFsxLCAxMzQsIDEwOF0sXG5cdFx0WzIsIDY3LCA0M10sXG5cdFx0WzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcblx0XHRbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxuXG5cdFx0Ly8gNlxuXHRcdFsyLCA4NiwgNjhdLFxuXHRcdFs0LCA0MywgMjddLFxuXHRcdFs0LCA0MywgMTldLFxuXHRcdFs0LCA0MywgMTVdLFxuXG5cdFx0Ly8gN1x0XHRcblx0XHRbMiwgOTgsIDc4XSxcblx0XHRbNCwgNDksIDMxXSxcblx0XHRbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxuXHRcdFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXG5cblx0XHQvLyA4XG5cdFx0WzIsIDEyMSwgOTddLFxuXHRcdFsyLCA2MCwgMzgsIDIsIDYxLCAzOV0sXG5cdFx0WzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcblx0XHRbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxuXG5cdFx0Ly8gOVxuXHRcdFsyLCAxNDYsIDExNl0sXG5cdFx0WzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcblx0XHRbNCwgMzYsIDE2LCA0LCAzNywgMTddLFxuXHRcdFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXG5cblx0XHQvLyAxMFx0XHRcblx0XHRbMiwgODYsIDY4LCAyLCA4NywgNjldLFxuXHRcdFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXG5cdFx0WzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcblx0XHRbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxuXG5cdFx0Ly8gMTFcblx0XHRbNCwgMTAxLCA4MV0sXG5cdFx0WzEsIDgwLCA1MCwgNCwgODEsIDUxXSxcblx0XHRbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxuXHRcdFszLCAzNiwgMTIsIDgsIDM3LCAxM10sXG5cblx0XHQvLyAxMlxuXHRcdFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcblx0XHRbNiwgNTgsIDM2LCAyLCA1OSwgMzddLFxuXHRcdFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXG5cdFx0WzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcblxuXHRcdC8vIDEzXG5cdFx0WzQsIDEzMywgMTA3XSxcblx0XHRbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxuXHRcdFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXG5cdFx0WzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXG5cblx0XHQvLyAxNFxuXHRcdFszLCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxuXHRcdFs0LCA2NCwgNDAsIDUsIDY1LCA0MV0sXG5cdFx0WzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXG5cdFx0WzExLCAzNiwgMTIsIDUsIDM3LCAxM10sXG5cblx0XHQvLyAxNVxuXHRcdFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcblx0XHRbNSwgNjUsIDQxLCA1LCA2NiwgNDJdLFxuXHRcdFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXG5cdFx0WzExLCAzNiwgMTJdLFxuXG5cdFx0Ly8gMTZcblx0XHRbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXG5cdFx0WzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcblx0XHRbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcblx0XHRbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuXHRcdC8vIDE3XG5cdFx0WzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXG5cdFx0WzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXG5cdFx0WzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXG5cdFx0WzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXG5cblx0XHQvLyAxOFxuXHRcdFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxuXHRcdFs5LCA2OSwgNDMsIDQsIDcwLCA0NF0sXG5cdFx0WzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXG5cdFx0WzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXG5cblx0XHQvLyAxOVxuXHRcdFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxuXHRcdFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxuXHRcdFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxuXHRcdFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxuXG5cdFx0Ly8gMjBcblx0XHRbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcblx0XHRbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcblx0XHRbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcblx0XHRbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXG5cblx0XHQvLyAyMVxuXHRcdFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxuXHRcdFsxNywgNjgsIDQyXSxcblx0XHRbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcblx0XHRbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcblxuXHRcdC8vIDIyXG5cdFx0WzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXG5cdFx0WzE3LCA3NCwgNDZdLFxuXHRcdFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuXHRcdFszNCwgMzcsIDEzXSxcblxuXHRcdC8vIDIzXG5cdFx0WzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXG5cdFx0WzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXG5cdFx0WzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuXHRcdFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcblxuXHRcdC8vIDI0XG5cdFx0WzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXG5cdFx0WzYsIDczLCA0NSwgMTQsIDc0LCA0Nl0sXG5cdFx0WzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuXHRcdFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxuXG5cdFx0Ly8gMjVcblx0XHRbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcblx0XHRbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcblx0XHRbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcblx0XHRbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXG5cblx0XHQvLyAyNlxuXHRcdFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcblx0XHRbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcblx0XHRbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcblx0XHRbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcblxuXHRcdC8vIDI3XG5cdFx0WzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG5cdFx0WzIyLCA3MywgNDUsIDMsIDc0LCA0Nl0sXG5cdFx0WzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXG5cdFx0WzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxuXG5cdFx0Ly8gMjhcblx0XHRbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXG5cdFx0WzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXG5cdFx0WzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXG5cdFx0WzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxuXG5cdFx0Ly8gMjlcblx0XHRbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcblx0XHRbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcblx0XHRbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcblx0XHRbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXG5cblx0XHQvLyAzMFxuXHRcdFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcblx0XHRbMTksIDc1LCA0NywgMTAsIDc2LCA0OF0sXG5cdFx0WzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxuXHRcdFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcblxuXHRcdC8vIDMxXG5cdFx0WzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxuXHRcdFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxuXHRcdFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxuXHRcdFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuXHRcdC8vIDMyXG5cdFx0WzE3LCAxNDUsIDExNV0sXG5cdFx0WzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxuXHRcdFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcblx0XHRbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXG5cblx0XHQvLyAzM1xuXHRcdFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcblx0XHRbMTQsIDc0LCA0NiwgMjEsIDc1LCA0N10sXG5cdFx0WzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxuXHRcdFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcblxuXHRcdC8vIDM0XG5cdFx0WzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxuXHRcdFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcblx0XHRbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcblx0XHRbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcblxuXHRcdC8vIDM1XG5cdFx0WzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxuXHRcdFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcblx0XHRbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXG5cdFx0WzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxuXG5cdFx0Ly8gMzZcblx0XHRbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXG5cdFx0WzYsIDc1LCA0NywgMzQsIDc2LCA0OF0sXG5cdFx0WzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxuXHRcdFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxuXG5cdFx0Ly8gMzdcblx0XHRbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG5cdFx0WzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxuXHRcdFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcblx0XHRbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cblx0XHQvLyAzOFxuXHRcdFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcblx0XHRbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXG5cdFx0WzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuXHRcdFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcblxuXHRcdC8vIDM5XG5cdFx0WzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxuXHRcdFs0MCwgNzUsIDQ3LCA3LCA3NiwgNDhdLFxuXHRcdFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcblx0XHRbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXG5cblx0XHQvLyA0MFxuXHRcdFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcblx0XHRbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXG5cdFx0WzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxuXHRcdFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxuXHRdO1xuXG5cdFFSUlNCbG9jay5nZXRSU0Jsb2NrcyA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XG5cblx0XHR2YXIgcnNCbG9jayA9IFFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXG5cdFx0aWYgKHJzQmxvY2sgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOlwiICsgdHlwZU51bWJlciArIFwiL2Vycm9yQ29ycmVjdExldmVsOlwiICtcblx0XHRcdFx0ZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXHRcdH1cblxuXHRcdHZhciBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XG5cblx0XHR2YXIgbGlzdCA9IG5ldyBBcnJheSgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXG5cdFx0XHR2YXIgY291bnQgPSByc0Jsb2NrW2kgKiAzICsgMF07XG5cdFx0XHR2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcblx0XHRcdHZhciBkYXRhQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMl07XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuXHRcdFx0XHRsaXN0LnB1c2gobmV3IFFSUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbGlzdDtcblx0fVxuXG5cdFFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xuXG5cdFx0c3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xuXHRcdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkw6XG5cdFx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcblx0XHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5NOlxuXHRcdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMV07XG5cdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuUTpcblx0XHRcdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xuXHRcdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkg6XG5cdFx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUVJCaXRCdWZmZXJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRmdW5jdGlvbiBRUkJpdEJ1ZmZlcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheSgpO1xuXHRcdHRoaXMubGVuZ3RoID0gMDtcblx0fVxuXG5cdFFSQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcblxuXHRcdGdldDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcblx0XHRcdHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09IDE7XG5cdFx0fSxcblxuXHRcdHB1dDogZnVuY3Rpb24obnVtLCBsZW5ndGgpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT0gMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGdldExlbmd0aEluQml0czogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdHB1dEJpdDogZnVuY3Rpb24oYml0KSB7XG5cblx0XHRcdHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyA4KTtcblx0XHRcdGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPD0gYnVmSW5kZXgpIHtcblx0XHRcdFx0dGhpcy5idWZmZXIucHVzaCgwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGJpdCkge1xuXHRcdFx0XHR0aGlzLmJ1ZmZlcltidWZJbmRleF0gfD0gKDB4ODAgPj4+ICh0aGlzLmxlbmd0aCAlIDgpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sZW5ndGgrKztcblx0XHR9XG5cdH07XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gU3VwcG9ydCBDaGluZXNlXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGZ1bmN0aW9uIHV0ZjE2VG84KHRleHQpIHtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0dmFyIGM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aWYgKGMgPj0gMHgwMDAxICYmIGMgPD0gMHgwMDdGKSB7XG5cdFx0XHRcdHJlc3VsdCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH0gZWxzZSBpZiAoYyA+IDB4MDdGRikge1xuXHRcdFx0XHRyZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweEUwIHwgYyA+PiAxMiAmIDB4MEYpO1xuXHRcdFx0XHRyZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDgwIHwgYyA+PiA2ICYgMHgzRik7XG5cdFx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjID4+IDAgJiAweDNGKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4QzAgfCBjID4+IDYgJiAweDFGKTtcblx0XHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGMgPj4gMCAmIDB4M0YpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dVFSQ29kZSA9IHtcblx0XHRlcnJvckNvcnJlY3RMZXZlbDogUVJFcnJvckNvcnJlY3RMZXZlbCxcblxuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRzaXplOiAzNTQsXG5cdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcblx0XHRcdGZvcmVncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuXHRcdFx0ZmlsZVR5cGU6ICdwbmcnLCAvLyAnanBnJywgJ3BuZydcblx0XHRcdGVycm9yQ29ycmVjdExldmVsOiBRUkVycm9yQ29ycmVjdExldmVsLkgsXG5cdFx0XHR0eXBlTnVtYmVyOiAtMSxcblx0XHRcdGVuYWJsZURlbGF5OiBmYWxzZSAvLyDlkK/nlKjlu7bov5/nu5jliLZcblx0XHR9LFxuXG5cdFx0Z2V0TW9kdWxlczogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0XHR2YXIgcXJjb2RlID0gbmV3IFFSQ29kZShvcHRpb25zLnR5cGVOdW1iZXIsIG9wdGlvbnMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXHRcdFx0cXJjb2RlLmFkZERhdGEodXRmMTZUbzgob3B0aW9ucy50ZXh0KSk7XG5cdFx0XHRxcmNvZGUubWFrZSgpO1xuXHRcdFx0cmV0dXJuIHFyY29kZS5tb2R1bGVzO1xuXHRcdH0sXG5cblx0XHRtYWtlOiBmdW5jdGlvbihvcHRpb25zLCBjb21wb25lbnRJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNsb3ZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0XHRcdGlmICghb3B0aW9ucy5jYW52YXNJZCkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigndVFSQ29kZTogUGxlYXNlIHNldCBjYW52YXNJZCEnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgbW9kdWxlcyA9IHRoaXMuZ2V0TW9kdWxlcyhvcHRpb25zKTtcblx0XHRcdFx0dmFyIHRpbGVXID0gKG9wdGlvbnMuc2l6ZSAtIG9wdGlvbnMubWFyZ2luICogMikgLyBtb2R1bGVzLmxlbmd0aDtcblx0XHRcdFx0dmFyIHRpbGVIID0gdGlsZVc7XG5cdFx0XHRcdHZhciBkZWxheSA9IDA7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDliJvlu7pjYW52YXPkuIrkuIvmlofliY3lop7liqDkuIDngrnlu7bml7bvvIznoa7kv51jYW52YXPnu4Tku7blt7LmuLLmn5Ncblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dmFyIGN0eCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KG9wdGlvbnMuY2FudmFzSWQsIGNvbXBvbmVudEluc3RhbmNlKTtcblx0XHRcdFx0XHRjdHguc2V0RmlsbFN0eWxlKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKTtcblx0XHRcdFx0XHRjdHguZmlsbFJlY3QoMCwgMCwgb3B0aW9ucy5zaXplLCBvcHRpb25zLnNpemUpO1xuXHRcdFx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZXMubGVuZ3RoOyByb3crKykge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlcy5sZW5ndGg7IGNvbCsrKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGF5ID0gb3B0aW9ucy5lbmFibGVEZWxheSA/IHJvdyAqIG1vZHVsZXMubGVuZ3RoICsgY29sICsgMSA6IDA7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24ocm93LCBjb2wpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyDorqHnrpfmr4/kuIDkuKrlsI/lnZfnmoTkvY3nva5cblx0XHRcdFx0XHRcdFx0XHR2YXIgeCA9IE1hdGgucm91bmQoY29sICogdGlsZVcpICsgb3B0aW9ucy5tYXJnaW47XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHkgPSBNYXRoLnJvdW5kKHJvdyAqIHRpbGVIKSArIG9wdGlvbnMubWFyZ2luO1xuXHRcdFx0XHRcdFx0XHRcdHZhciB3ID0gTWF0aC5jZWlsKChjb2wgKyAxKSAqIHRpbGVXKSAtIE1hdGguZmxvb3IoY29sICogdGlsZVcpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBoID0gTWF0aC5jZWlsKChyb3cgKyAxKSAqIHRpbGVXKSAtIE1hdGguZmxvb3Iocm93ICogdGlsZVcpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IG1vZHVsZXNbcm93XVtjb2xdID8gb3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3IgOlxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnNldEZpbGxTdHlsZShzdHlsZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xuXHRcdFx0XHRcdFx0XHR9LCBkZWxheSwgcm93LCBjb2wpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDogJfml7Zcblx0XHRcdFx0XHR2YXIgdGltZSA9IG9wdGlvbnMuZW5hYmxlRGVsYXkgPyBkZWxheSArIG9wdGlvbnMuc2l6ZSAqIDIgKyBvcHRpb25zLm1hcmdpbiAqIDIgKyBvcHRpb25zLnRleHQubGVuZ3RoIDogMDtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y3R4LmRyYXcoZmFsc2UsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuXHRcdFx0XHRcdFx0XHRcdGNhbnZhc0lkOiBvcHRpb25zLmNhbnZhc0lkLFxuXHRcdFx0XHRcdFx0XHRcdGZpbGVUeXBlOiBvcHRpb25zLmZpbGVUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBvcHRpb25zLnNpemUsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBvcHRpb25zLnNpemUsXG5cdFx0XHRcdFx0XHRcdFx0ZGVzdFdpZHRoOiBvcHRpb25zLnNpemUsXG5cdFx0XHRcdFx0XHRcdFx0ZGVzdEhlaWdodDogb3B0aW9ucy5zaXplLFxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzbG92ZShPYmplY3QuYXNzaWduKHJlcywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aW1lOiB0aW1lICsgNTBcblx0XHRcdFx0XHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LCBjb21wb25lbnRJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LCB0aW1lKTtcblx0XHRcdFx0fSwgNTApO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdVFSQ29kZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/loginRegist/loginRegist.vue?mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginRegist.vue?vue&type=template&id=7348b4d6&mpType=page */ 22);\n/* harmony import */ var _loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginRegist.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/loginRegist/loginRegist.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDs7O0FBR3JFO0FBQ3NNO0FBQ3RNLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvZ2luUmVnaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MzQ4YjRkNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW5SZWdpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luUmVnaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW5SZWdpc3QvbG9naW5SZWdpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/loginRegist/loginRegist.vue?vue&type=template&id=7348b4d6&mpType=page ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./loginRegist.vue?vue&type=template&id=7348b4d6&mpType=page */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_template_id_7348b4d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/loginRegist/loginRegist.vue?vue&type=template&id=7348b4d6&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c("view", {
        style: _vm._$s(1, "s", { height: _vm.statusBarHeight + "px" }),
        attrs: { _i: 1 },
      }),
      _c("image", {
        attrs: {
          src: _vm._$s(
            2,
            "a-src",
            __webpack_require__(/*! ../../static/images/icon-close-black.png */ 24)
          ),
          _i: 2,
        },
        on: {
          click: function ($event) {
            return _vm.close()
          },
        },
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "login-box"), attrs: { _i: 3 } },
        [
          _c("text", {
            staticClass: _vm._$s(4, "sc", "code-text"),
            attrs: { _i: 4 },
          }),
          _c("text", {
            staticClass: _vm._$s(5, "sc", "code-tips"),
            attrs: { _i: 5 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "mobile-box"), attrs: { _i: 6 } },
            [
              _c("text", {
                staticClass: _vm._$s(7, "sc", "mobile-prefix"),
                attrs: { _i: 7 },
              }),
              _c("view", {
                staticClass: _vm._$s(8, "sc", "middle"),
                attrs: { _i: 8 },
              }),
              _c("input", {
                staticClass: _vm._$s(9, "sc", "mobile"),
                attrs: {
                  value: _vm._$s(9, "a-value", _vm.mobile),
                  model: _vm._$s(9, "a-model", _vm.mobile),
                  _i: 9,
                },
                on: { input: _vm.typingMobile },
              }),
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(10, "sc", "line"),
            attrs: { _i: 10 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(11, "sc", "mobile-box"), attrs: { _i: 11 } },
            [
              _c("input", {
                staticClass: _vm._$s(12, "sc", "mobile"),
                attrs: {
                  value: _vm._$s(12, "a-value", _vm.verifyCode),
                  model: _vm._$s(12, "a-model", _vm.verifyCode),
                  _i: 12,
                },
                on: { input: _vm.typingVerifyCode },
              }),
              _c("view", {
                staticClass: _vm._$s(13, "sc", "middle"),
                attrs: { _i: 13 },
              }),
              _c(
                "view",
                {
                  class: _vm._$s(14, "c", {
                    "btn-code": !_vm.codeTouched,
                    "btn-code-touched": _vm.codeTouched,
                  }),
                  attrs: { _i: 14 },
                  on: {
                    touchstart: _vm.touchstartCode,
                    touchend: _vm.touchendCode,
                    click: function ($event) {
                      return _vm.getCode()
                    },
                  },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(15, "sc", "code-btn-text"),
                      attrs: { _i: 15 },
                    },
                    [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.codeBtnText)))]
                  ),
                ]
              ),
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(16, "sc", "line"),
            attrs: { _i: 16 },
          }),
          _c(
            "view",
            {
              class: _vm._$s(17, "c", {
                "btn-login": !_vm.loginTouched,
                "btn-login-touched": _vm.loginTouched,
              }),
              attrs: { _i: 17 },
              on: {
                touchstart: _vm.touchstartLogin,
                touchend: _vm.touchendLogin,
                click: function ($event) {
                  return _vm.loginOrRegist()
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(18, "sc", "login-btn-text"),
                attrs: { _i: 18 },
              }),
            ]
          ),
          _c("view", [
            _c("text"),
            _c("text"),
            _c("text"),
            _c("text"),
            _c("text"),
          ]),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!******************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/static/images/icon-close-black.png ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/icon-close-black.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2xvc2UtYmxhY2sucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/loginRegist/loginRegist.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./loginRegist.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loginRegist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThyQixDQUFnQix3cUJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW5SZWdpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW5SZWdpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/loginRegist/loginRegist.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\nvar _default = {\n  data: function data() {\n    return {\n      statusBarHeight: 0,\n      mobile: \"18120353389\",\n      verifyCode: \"\",\n      codeBtnText: \"获得验证码\",\n      codeTimes: 0,\n      loginTouched: false,\n      codeTouched: false\n    };\n  },\n  onLoad: function onLoad() {\n    this.statusBarHeight = system.statusBarHeight;\n  },\n  methods: {\n    touchstartLogin: function touchstartLogin() {\n      this.loginTouched = true;\n    },\n    touchendLogin: function touchendLogin() {\n      this.loginTouched = false;\n    },\n    touchstartCode: function touchstartCode() {\n      // timer在运行期间，禁止触摸\n      if (this.codeTimes > 0) {\n        return;\n      } else {\n        this.codeTouched = true;\n      }\n    },\n    touchendCode: function touchendCode() {\n      // timer在运行期间，禁止触摸\n      if (this.codeTimes > 0) {\n        return;\n      } else {\n        this.codeTouched = false;\n      }\n    },\n    close: function close() {\n      uni.navigateBack({\n        delta: 1,\n        animationType: \"slide-out-bottom\"\n      });\n    },\n    typingMobile: function typingMobile(e) {\n      var event = e;\n      this.mobile = e.detail.value;\n    },\n    typingVerifyCode: function typingVerifyCode(e) {\n      var event = e;\n      this.verifyCode = e.detail.value;\n    },\n    getCode: function getCode() {\n      var me = this;\n      if (me.codeTimes > 0) {\n        return;\n      }\n      me.codeTouched = true;\n      var mobile = me.mobile;\n      if (app.isStrEmpty(mobile) || mobile.length != 11) {\n        uni.showToast({\n          title: \"手机号不正确\",\n          icon: \"none\"\n        });\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      // 调用后端发送验证码\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/passport/getSMSCode?mobile=\" + mobile,\n        success: function success(result) {\n          var status = result.data.status;\n          if (status != 200) {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\"\n            });\n          }\n\n          // 开始倒数60秒限制\n          if (me.codeTimes == 0) {\n            me.doTimer(59);\n          }\n        }\n      });\n    },\n    // 发送验证码的倒计时方法\n    doTimer: function doTimer(times) {\n      var me = this;\n      // 倒计时定时器\n      var sendCodeBtnFunction = function sendCodeBtnFunction() {\n        var left = times--;\n        if (left <= 0) {\n          me.codeTouched = false;\n          me.codeBtnText = \"发送验证码\";\n          clearInterval(smsTimer);\n        } else {\n          me.codeBtnText = left + \"s\";\n        }\n        me.codeTimes = left;\n      };\n      var smsTimer = setInterval(sendCodeBtnFunction, 1000);\n    },\n    loginOrRegist: function loginOrRegist() {\n      var me = this;\n      var verifyCode = me.verifyCode;\n      var mobile = me.mobile;\n      if (app.isStrEmpty(verifyCode)) {\n        uni.showToast({\n          title: \"请填写验证码\",\n          icon: \"none\"\n        });\n        return;\n      }\n      if (app.isStrEmpty(mobile) || mobile.length != 11) {\n        uni.showToast({\n          title: \"手机号不正确\",\n          icon: \"none\"\n        });\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      // 调用后端登录注册\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/passport/login\",\n        data: {\n          \"mobile\": mobile,\n          \"smsCode\": verifyCode\n        },\n        success: function success(result) {\n          var status = result.data.status;\n          if (status == 200) {\n            var userInfo = result.data.data;\n            app.setUserInfoSession(userInfo);\n            app.setUserSessionToken(userInfo.userToken);\n            // 登录成功，关闭当前页\n            // me.close();\n            uni.reLaunch({\n              url: \"../me/me\"\n            });\n          } else if (status != 200) {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW5SZWdpc3QvbG9naW5SZWdpc3QudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJtb2JpbGUiLCJ2ZXJpZnlDb2RlIiwiY29kZUJ0blRleHQiLCJjb2RlVGltZXMiLCJsb2dpblRvdWNoZWQiLCJjb2RlVG91Y2hlZCIsIm9uTG9hZCIsIm1ldGhvZHMiLCJ0b3VjaHN0YXJ0TG9naW4iLCJ0b3VjaGVuZExvZ2luIiwidG91Y2hzdGFydENvZGUiLCJ0b3VjaGVuZENvZGUiLCJjbG9zZSIsInVuaSIsImRlbHRhIiwiYW5pbWF0aW9uVHlwZSIsInR5cGluZ01vYmlsZSIsInR5cGluZ1ZlcmlmeUNvZGUiLCJnZXRDb2RlIiwibWUiLCJ0aXRsZSIsImljb24iLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwiZG9UaW1lciIsImNsZWFySW50ZXJ2YWwiLCJsb2dpbk9yUmVnaXN0IiwiYXBwIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSkE7QUFDQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUVBQztNQUNBQztNQUNBQztNQUNBQztNQUVBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BRUE7UUFDQTtNQUNBO01BRUFDO01BRUE7TUFFQTtRQUNBTjtVQUNBTztVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQVI7UUFDQVM7UUFDQUM7UUFDQUM7VUFDQTtVQUNBO1lBQ0FYO2NBQ0FPO2NBQ0FDO1lBQ0E7VUFDQTs7VUFFQTtVQUNBO1lBQ0FGO1VBQ0E7UUFDQTtNQUNBO0lBRUE7SUFDQTtJQUNBTTtNQUNBO01BQ0E7TUFDQTtRQUNBO1FBRUE7VUFDQU47VUFDQUE7VUFDQU87UUFDQTtVQUNBUDtRQUNBO1FBQ0FBO01BQ0E7TUFDQTtJQUNBO0lBQ0FRO01BQ0E7TUFDQTtNQUNBO01BRUE7UUFDQWQ7VUFDQU87VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtRQUNBUjtVQUNBTztVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQVI7UUFDQVM7UUFDQUM7UUFDQXpCO1VBQ0E7VUFDQTtRQUNBO1FBQ0EwQjtVQUNBO1VBQ0E7WUFDQTtZQUNBSTtZQUNBQTtZQUNBO1lBQ0E7WUFDQWY7Y0FDQVU7WUFDQTtVQUNBO1lBQ0FWO2NBQ0FPO2NBQ0FDO2NBQ0FRO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cbi5wYWdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdHBhZGRpbmc6IDIwcnB4O1xuXHRcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2dpbi1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tdG9wOiAyMDBycHg7XG5cdHBhZGRpbmc6IDIwcnB4O1xufVxuLmNvZGUtdGV4dCB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc2l6ZTogNjBycHg7XG59XG4uY29kZS10aXBzIHtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0Zm9udC1zaXplOiAzNHJweDtcblx0Y29sb3I6ICM4MDgwODA7XG5cdG1hcmdpbi10b3A6IDIwcnB4O1xufVxuLm1vYmlsZS1ib3gge1xuXHRoZWlnaHQ6IDEwMHJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0cGFkZGluZzogMCAyMHJweDtcblx0Ym9yZGVyLWNvbG9yOiAjODA4MDgwO1xuXHRib3JkZXItd2lkdGg6IDFweDtcbn1cbi5tb2JpbGUtcHJlZml4IHtcblx0Y29sb3I6ICM4MDgwODA7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMzZycHg7XG59XG4ubW9iaWxlIHtcblx0Y29sb3I6ICMwQzBDMEM7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMzhycHg7XG59XG4ubWlkZGxlIHtcblx0d2lkdGg6IDFycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNhZmFmYjM7XG5cdGhlaWdodDogNjBycHg7XG5cdG1hcmdpbjogMCA0MHJweDtcbn1cbi5saW5lIHtcblx0aGVpZ2h0OiAxcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmIzO1xufVxuLmxvZ2luLWJ0bi10ZXh0IHtcblx0Zm9udC1zaXplOiA0MHJweDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29kZS1idG4tdGV4dCB7XG5cdGZvbnQtc2l6ZTogMzBycHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuLmJ0bi1sb2dpbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZjI3NGQ7XG5cdC8qIGJvcmRlci1jb2xvcjogIzM0MzQzODsgKi9cbn1cbi5idG4tbG9naW4tdG91Y2hlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlMjdjODI7XG5cdC8qIGJvcmRlci1jb2xvcjogIzAwMDAwMDsgKi9cbn1cbi5idG4tY29kZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYWJiMDM7XG59XG4uYnRuLWNvZGUtdG91Y2hlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2YmU4NjY7XG59XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDwhLS0g6L+Z6YeM5piv54q25oCB5qCPLCDmr4/kuKrpobXpnaLpg73pnIDopoHmnInvvIznm67nmoTkuI3orqnpobXpnaLopobnm5bnirbmgIHmoI8gLS0+XG5cdFx0PHZpZXcgOnN0eWxlPVwie2hlaWdodDogc3RhdHVzQmFySGVpZ2h0ICsgJ3B4J31cIj48L3ZpZXc+XG5cdFx0XG5cdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1jbG9zZS1ibGFjay5wbmdcIiBzdHlsZT1cIndpZHRoOiA1MHJweDtoZWlnaHQ6IDUwcnB4O1wiIEBjbGljaz1cImNsb3NlKClcIj48L2ltYWdlPlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwibG9naW4tYm94XCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImNvZGUtdGV4dFwiPumqjOivgeeggeeZu+W9lTwvdGV4dD5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiY29kZS10aXBzXCI+5rOo77ya5pyq5rOo5YaM55qE5omL5py65Y+36aqM6K+B6YCa6L+H5ZCO5bCG6Ieq5Yqo5rOo5YaMfjwvdGV4dD5cblx0XHRcdFxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtb2JpbGUtYm94XCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibW9iaWxlLXByZWZpeFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPis4NjwvdGV4dD5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWlkZGxlXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBcblx0XHRcdFx0XHRjbGFzcz1cIm1vYmlsZVwiIFxuXHRcdFx0XHRcdDp2YWx1ZT1cIm1vYmlsZVwiIFxuXHRcdFx0XHRcdDptb2RlbD1cIm1vYmlsZVwiIFxuXHRcdFx0XHRcdEBpbnB1dD1cInR5cGluZ01vYmlsZVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIiBcblx0XHRcdFx0XHRtYXhsZW5ndGg9XCIxMVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCIvPlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgc3R5bGU9XCJoZWlnaHQ6IDFycHg7YmFja2dyb3VuZC1jb2xvcjogI2FmYWZiMztcIj48L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwibW9iaWxlLWJveFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBycHg7XCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgXG5cdFx0XHRcdFx0Y2xhc3M9XCJtb2JpbGVcIiBcblx0XHRcdFx0XHQ6dmFsdWU9XCJ2ZXJpZnlDb2RlXCJcblx0XHRcdFx0XHQ6bW9kZWw9XCJ2ZXJpZnlDb2RlXCJcblx0XHRcdFx0XHRAaW5wdXQ9XCJ0eXBpbmdWZXJpZnlDb2RlXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiIFxuXHRcdFx0XHRcdG1heGxlbmd0aD1cIjZcIiBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAzNjBycHg7YWxpZ24tc2VsZjogY2VudGVyO1wiLz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWlkZGxlXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PHZpZXdcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7J2J0bi1jb2RlJzohY29kZVRvdWNoZWQsICdidG4tY29kZS10b3VjaGVkJzogY29kZVRvdWNoZWR9XCJcblx0XHRcdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRDb2RlXCJcblx0XHRcdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaGVuZENvZGVcIlxuXHRcdFx0XHRcdEBjbGljaz1cImdldENvZGUoKVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJib3JkZXItd2lkdGg6IDFweDtib3JkZXItY29sb3I6ICNGRkZGRkY7d2lkdGg6IDIyMHJweDtoZWlnaHQ6IDgwcnB4O2JvcmRlci1yYWRpdXM6IDYwcnB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb2RlLWJ0bi10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+e3tjb2RlQnRuVGV4dH19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IFxuXHRcdFx0XHQ6Y2xhc3M9XCJ7J2J0bi1sb2dpbic6IWxvZ2luVG91Y2hlZCwgJ2J0bi1sb2dpbi10b3VjaGVkJzogbG9naW5Ub3VjaGVkfVwiXG5cdFx0XHRcdEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydExvZ2luXCJcblx0XHRcdFx0QHRvdWNoZW5kPVwidG91Y2hlbmRMb2dpblwiXG5cdFx0XHRcdEBjbGljaz1cImxvZ2luT3JSZWdpc3QoKVwiXG5cdFx0XHRcdHN0eWxlPVwibWFyZ2luLXRvcDogNTBycHg7Ym9yZGVyLXdpZHRoOiAxcHg7Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO3dpZHRoOiA2NTBycHg7aGVpZ2h0OiAxMjBycHg7b3BhY2l0eTogMC44O2JvcmRlci1yYWRpdXM6IDEwMHJweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24tc2VsZjogY2VudGVyO1wiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9naW4tYnRuLXRleHRcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj7nmbvlvZUgLyDms6jlhow8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO21hcmdpbi10b3A6IDUwcnB4O1wiPlxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjODA4MDgwO2ZvbnQtc2l6ZTogMzBycHg7XCI+KuazqOaEj++8mjwvdGV4dD5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogIzgwODA4MDtmb250LXNpemU6IDMwcnB4O1wiPjEuIOS9k+mqjOeJiOWQr+WKqOWQjuiHquWKqOeZu+W9le+8jOmAgOWHuuWQjuWPr+S7peS9v+eUqOaJi+acuuWPt+i/m+ihjOeZu+W9leaIluazqOWGjOOAgjwvdGV4dD5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogIzgwODA4MDtmb250LXNpemU6IDMwcnB4O1wiPjIuIOS9k+mqjOeJiOeahOm7mOiupOa1i+ivlei0puWPt+S4reWMheWQq+S4gOS6m+WGhee9ruaVsOaNru+8jOWPr+eUqOS6jua1i+ivleaIluafpeeci+OAgjwvdGV4dD5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogIzgwODA4MDtmb250LXNpemU6IDMwcnB4O1wiPjMuIOS9k+mqjOeJiOS4jeiDveWPkeW4g+inhumikeOAgjwvdGV4dD5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogIzgwODA4MDtmb250LXNpemU6IDMwcnB4O1wiPjQuIOS9k+mqjOeJiOS4reeVmeiogOWSjOS/ruaUueeUqOaIt+S/oeaBr+etieaTjeS9nOS8muWumuaXtuiHquWKqOa4hemZpOOAgjwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcblx0XHRcdFx0XG5cdFx0XHRcdG1vYmlsZTogXCIxODEyMDM1MzM4OVwiLFxuXHRcdFx0XHR2ZXJpZnlDb2RlOiBcIlwiLFxuXHRcdFx0XHRjb2RlQnRuVGV4dDogXCLojrflvpfpqozor4HnoIFcIixcblx0XHRcdFx0Y29kZVRpbWVzOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0bG9naW5Ub3VjaGVkOiBmYWxzZSxcblx0XHRcdFx0Y29kZVRvdWNoZWQ6IGZhbHNlLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0O1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dG91Y2hzdGFydExvZ2luKCkge1xuXHRcdFx0XHR0aGlzLmxvZ2luVG91Y2hlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hlbmRMb2dpbigpIHtcblx0XHRcdFx0dGhpcy5sb2dpblRvdWNoZWQgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHR0b3VjaHN0YXJ0Q29kZSgpIHtcblx0XHRcdFx0Ly8gdGltZXLlnKjov5DooYzmnJ/pl7TvvIznpoHmraLop6bmkbhcblx0XHRcdFx0aWYodGhpcy5jb2RlVGltZXMgPiAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY29kZVRvdWNoZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hlbmRDb2RlKCkge1xuXHRcdFx0XHQvLyB0aW1lcuWcqOi/kOihjOacn+mXtO+8jOemgeatouinpuaRuFxuXHRcdFx0XHRpZih0aGlzLmNvZGVUaW1lcyA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jb2RlVG91Y2hlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRcdGRlbHRhOiAxLFxuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtb3V0LWJvdHRvbVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0dHlwaW5nTW9iaWxlKGUpIHtcblx0XHRcdFx0dmFyIGV2ZW50ID0gZTtcblx0XHRcdFx0dGhpcy5tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHR0eXBpbmdWZXJpZnlDb2RlKGUpIHtcblx0XHRcdFx0dmFyIGV2ZW50ID0gZTtcblx0XHRcdFx0dGhpcy52ZXJpZnlDb2RlID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0Q29kZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdGlmKG1lLmNvZGVUaW1lcyA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdG1lLmNvZGVUb3VjaGVkID0gdHJ1ZTtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBtb2JpbGUgPSBtZS5tb2JpbGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoYXBwLmlzU3RyRW1wdHkobW9iaWxlKSB8fCBtb2JpbGUubGVuZ3RoICE9IDExKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLmiYvmnLrlj7fkuI3mraPnoa5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHQvLyDosIPnlKjlkI7nq6/lj5HpgIHpqozor4HnoIFcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9wYXNzcG9ydC9nZXRTTVNDb2RlP21vYmlsZT1cIiArIG1vYmlsZSxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0dmFyIHN0YXR1cyA9IHJlc3VsdC5kYXRhLnN0YXR1cztcblx0XHRcdFx0XHRcdGlmIChzdGF0dXMgIT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIOW8gOWni+WAkuaVsDYw56eS6ZmQ5Yi2XG5cdFx0XHRcdFx0XHRpZihtZS5jb2RlVGltZXMgPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRtZS5kb1RpbWVyKDU5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdC8vIOWPkemAgemqjOivgeeggeeahOWAkuiuoeaXtuaWueazlVxuXHRcdFx0ZG9UaW1lcih0aW1lcykge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHQvLyDlgJLorqHml7blrprml7blmahcblx0XHRcdFx0dmFyIHNlbmRDb2RlQnRuRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBsZWZ0ID0gdGltZXMtLTtcblxuXHRcdFx0XHRcdGlmIChsZWZ0IDw9IDApIHtcblx0XHRcdFx0XHRcdG1lLmNvZGVUb3VjaGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRtZS5jb2RlQnRuVGV4dCA9IFwi5Y+R6YCB6aqM6K+B56CBXCI7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHNtc1RpbWVyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWUuY29kZUJ0blRleHQgPSBsZWZ0ICsgXCJzXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1lLmNvZGVUaW1lcyA9IGxlZnQ7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBzbXNUaW1lciA9IHNldEludGVydmFsKHNlbmRDb2RlQnRuRnVuY3Rpb24sIDEwMDApO1xuXHRcdFx0fSxcblx0XHRcdGxvZ2luT3JSZWdpc3QoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciB2ZXJpZnlDb2RlID0gbWUudmVyaWZ5Q29kZTtcblx0XHRcdFx0dmFyIG1vYmlsZSA9IG1lLm1vYmlsZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChhcHAuaXNTdHJFbXB0eSh2ZXJpZnlDb2RlKSkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35aGr5YaZ6aqM6K+B56CBXCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGFwcC5pc1N0ckVtcHR5KG1vYmlsZSkgfHwgbW9iaWxlLmxlbmd0aCAhPSAxMSkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IFwi5omL5py65Y+35LiN5q2j56GuXCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0Ly8g6LCD55So5ZCO56uv55m75b2V5rOo5YaMXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvcGFzc3BvcnQvbG9naW5cIixcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcIm1vYmlsZVwiOiBtb2JpbGUsXG5cdFx0XHRcdFx0XHRcInNtc0NvZGVcIjogdmVyaWZ5Q29kZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHZhciBzdGF0dXMgPSByZXN1bHQuZGF0YS5zdGF0dXM7XG5cdFx0XHRcdFx0XHRpZiAoc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0XHRhcHAuc2V0VXNlckluZm9TZXNzaW9uKHVzZXJJbmZvKTtcblx0XHRcdFx0XHRcdFx0YXBwLnNldFVzZXJTZXNzaW9uVG9rZW4odXNlckluZm8udXNlclRva2VuKTtcblx0XHRcdFx0XHRcdFx0Ly8g55m75b2V5oiQ5Yqf77yM5YWz6Zet5b2T5YmN6aG1XG5cdFx0XHRcdFx0XHRcdC8vIG1lLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL21lL21lXCJcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzICE9IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myBackImg.vue?mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myBackImg.vue?vue&type=template&id=a16175bc&mpType=page */ 28);\n/* harmony import */ var _myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myBackImg.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/me/myBackImg.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3NNO0FBQ3RNLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215QmFja0ltZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTE2MTc1YmMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL215QmFja0ltZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlCYWNrSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWUvbXlCYWNrSW1nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!************************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myBackImg.vue?vue&type=template&id=a16175bc&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myBackImg.vue?vue&type=template&id=a16175bc&mpType=page */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_template_id_a16175bc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myBackImg.vue?vue&type=template&id=a16175bc&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "bg-wrapper"),
          style: _vm._$s(1, "s", { height: _vm.screenHeight + "px" }),
          attrs: { _i: 1 },
        },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "bg-size"),
            attrs: { src: _vm._$s(2, "a-src", _vm.bgUrl), _i: 2 },
          }),
          _c(
            "view",
            {
              class: _vm._$s(3, "c", {
                "button-change-bg": !_vm.changeTouched,
                "button-change-bg-touched": _vm.changeTouched,
              }),
              attrs: { _i: 3 },
              on: {
                touchstart: _vm.touchstartChange,
                touchend: _vm.touchendChange,
                click: function ($event) {
                  return _vm.changeBg()
                },
              },
            },
            [_c("text")]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!******************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myBackImg.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myBackImg.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myBackImg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRyQixDQUFnQixzcUJBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXlCYWNrSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL215QmFja0ltZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myBackImg.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\nvar _default = {\n  data: function data() {\n    return {\n      // bgUrl: \"/static/face/face-arrow-1.png\",\n      bgUrl: getApp().getUserInfoSession().bgImg,\n      changeTouched: false,\n      screenHeight: system.safeArea.bottom\n    };\n  },\n  onShow: function onShow() {\n    var bgimg = app.getUserInfoSession().bgImg;\n    if (app.isStrEmpty(bgimg)) {\n      bgimg = \"/static/images/defaultBgImg.png\";\n    }\n    this.bgUrl = bgimg;\n    // this.bgUrl = \"../../static/face/face-arrow-1.png\";\n  },\n\n  methods: {\n    touchstartChange: function touchstartChange() {\n      this.changeTouched = true;\n    },\n    touchendChange: function touchendChange() {\n      this.changeTouched = false;\n    },\n    changeBg: function changeBg() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      uni.chooseImage({\n        count: 1,\n        sizeType: [\"compressed\"],\n        crop: {\n          quality: 60,\n          width: 400,\n          height: 400\n        },\n        success: function success(e) {\n          var newBg = e.tempFilePaths[0];\n          me.bgUrl = newBg;\n\n          // 上传\n          var serverUrl = app.globalData.serverUrl;\n          uni.uploadFile({\n            header: {\n              headerUserId: userId,\n              headerUserToken: app.getUserSessionToken()\n            },\n            url: serverUrl + \"/userInfo/modifyImage?userId=\" + userId + \"&type=1\",\n            name: \"file\",\n            filePath: newBg,\n            success: function success(result) {\n              if (result.statusCode == 200) {\n                var res = JSON.parse(result.data);\n                if (res.status = 200) {\n                  var userInfoUpdated = res.data;\n                  // 重置本地用户信息\n                  app.setUserInfoSession(userInfoUpdated);\n                  uni.navigateBack({\n                    delta: 1,\n                    animationType: \"fade-out\"\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.msg,\n                    icon: 'error'\n                  });\n                }\n              } else {\n                uni.showToast({\n                  title: \"上传失败\",\n                  icon: 'error'\n                });\n              }\n            }\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWUvbXlCYWNrSW1nLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiYmdVcmwiLCJjaGFuZ2VUb3VjaGVkIiwic2NyZWVuSGVpZ2h0Iiwib25TaG93IiwiYmdpbWciLCJtZXRob2RzIiwidG91Y2hzdGFydENoYW5nZSIsInRvdWNoZW5kQ2hhbmdlIiwiY2hhbmdlQmciLCJ1bmkiLCJjb3VudCIsInNpemVUeXBlIiwiY3JvcCIsInF1YWxpdHkiLCJ3aWR0aCIsImhlaWdodCIsInN1Y2Nlc3MiLCJtZSIsImhlYWRlciIsImhlYWRlclVzZXJJZCIsImhlYWRlclVzZXJUb2tlbiIsInVybCIsIm5hbWUiLCJmaWxlUGF0aCIsImFwcCIsImRlbHRhIiwiYW5pbWF0aW9uVHlwZSIsInRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBO0FBQ0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQTtNQUNBQztNQUVBQztNQUVBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO01BQ0FDO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BRUFDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQUM7VUFDQTtVQUNBQzs7VUFFQTtVQUNBO1VBQ0FSO1lBQ0FTO2NBQ0FDO2NBQ0FDO1lBQ0E7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVA7Y0FFQTtnQkFDQTtnQkFFQTtrQkFDQTtrQkFDQTtrQkFDQVE7a0JBRUFmO29CQUNBZ0I7b0JBQ0FDO2tCQUNBO2dCQUNBO2tCQUNBakI7b0JBQ0FrQjtvQkFDQUM7a0JBQ0E7Z0JBQ0E7Y0FDQTtnQkFDQW5CO2tCQUNBa0I7a0JBQ0FDO2dCQUNBO2NBQ0E7WUFFQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuLnBhZ2Uge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5iZy13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmctc2l6ZSB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogNzUwcnB4O1xufVxuLmJ1dHRvbi1jaGFuZ2UtYmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xufVxuLmJ1dHRvbi1jaGFuZ2UtYmctdG91Y2hlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2NDYyNjI7XG59XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdFxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiYmctd3JhcHBlclwiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XG5cdFx0XHQ8aW1hZ2UgOnNyYz1cImJnVXJsXCIgY2xhc3M9XCJiZy1zaXplXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+PC9pbWFnZT5cblx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdEJnSW1nLnBuZ1wiIGNsYXNzPVwiYmctc2l6ZVwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPjwvaW1hZ2U+IC0tPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBcblx0XHRcdFx0OmNsYXNzPVwieydidXR0b24tY2hhbmdlLWJnJzohY2hhbmdlVG91Y2hlZCwgJ2J1dHRvbi1jaGFuZ2UtYmctdG91Y2hlZCc6IGNoYW5nZVRvdWNoZWR9XCJcblx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0Q2hhbmdlXCJcblx0XHRcdFx0QHRvdWNoZW5kPVwidG91Y2hlbmRDaGFuZ2VcIlxuXHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2VCZygpXCJcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMjUwcnB4O2hlaWdodDogODBycHg7Ym9yZGVyLXJhZGl1czogNTBweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OiBjZW50ZXI7bWFyZ2luLXRvcDogMTUwcnB4O2FsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjthbGlnbi1zZWxmOiBjZW50ZXI7XCI+5pu05o2i6IOM5pmvPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0dmFyIHN5c3RlbSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly8gYmdVcmw6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtYXJyb3ctMS5wbmdcIixcblx0XHRcdFx0YmdVcmw6IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmJnSW1nLFxuXHRcdFx0XHRcblx0XHRcdFx0Y2hhbmdlVG91Y2hlZDogZmFsc2UsXG5cdFx0XHRcdFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6IHN5c3RlbS5zYWZlQXJlYS5ib3R0b20sXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblNob3coKSB7XG5cdFx0XHR2YXIgYmdpbWcgPSBhcHAuZ2V0VXNlckluZm9TZXNzaW9uKCkuYmdJbWc7XG5cdFx0XHRpZiAoYXBwLmlzU3RyRW1wdHkoYmdpbWcpKSB7XG5cdFx0XHRcdGJnaW1nID0gXCIvc3RhdGljL2ltYWdlcy9kZWZhdWx0QmdJbWcucG5nXCI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJnVXJsID0gYmdpbWc7XG5cdFx0XHQvLyB0aGlzLmJnVXJsID0gXCIuLi8uLi9zdGF0aWMvZmFjZS9mYWNlLWFycm93LTEucG5nXCI7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHR0b3VjaHN0YXJ0Q2hhbmdlKCkge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvdWNoZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdHRvdWNoZW5kQ2hhbmdlKCkge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvdWNoZWQgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VCZygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHRcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcblx0XHRcdFx0XHRjb3VudDogMSxcblx0XHRcdFx0XHRzaXplVHlwZTogW1wiY29tcHJlc3NlZFwiXSxcblx0XHRcdFx0XHRjcm9wOiB7XG5cdFx0XHRcdFx0XHRxdWFsaXR5OiA2MCxcblx0XHRcdFx0XHRcdHdpZHRoOiA0MDAsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcblx0XHRcdFx0XHRcdHZhciBuZXdCZyA9IGUudGVtcEZpbGVQYXRoc1swXTtcblx0XHRcdFx0XHRcdG1lLmJnVXJsID0gbmV3Qmc7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIOS4iuS8oFxuXHRcdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHRcdHVuaS51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdXNlckluZm8vbW9kaWZ5SW1hZ2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdHlwZT0xXCIsXG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwiZmlsZVwiLFxuXHRcdFx0XHRcdFx0XHRmaWxlUGF0aDogbmV3QmcsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5zdGF0dXNDb2RlID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJlcyA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1cyA9IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdXNlckluZm9VcGRhdGVkID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOmHjee9ruacrOWcsOeUqOaIt+S/oeaBr1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcHAuc2V0VXNlckluZm9TZXNzaW9uKHVzZXJJbmZvVXBkYXRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWx0YTogMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcImZhZGUtb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdlcnJvcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuS4iuS8oOWksei0pVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnZXJyb3InXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IFxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!***************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myFace.vue?mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myFace.vue?vue&type=template&id=30c31127&mpType=page */ 33);\n/* harmony import */ var _myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myFace.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/me/myFace.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3NNO0FBQ3RNLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215RmFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBjMzExMjcmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL215RmFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlGYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWUvbXlGYWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myFace.vue?vue&type=template&id=30c31127&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myFace.vue?vue&type=template&id=30c31127&mpType=page */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_template_id_30c31127_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myFace.vue?vue&type=template&id=30c31127&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "bg-wrapper"),
          style: _vm._$s(1, "s", { height: _vm.screenHeight + "px" }),
          attrs: { _i: 1 },
        },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "bg-size"),
            attrs: { src: _vm._$s(2, "a-src", _vm.faceUrl), _i: 2 },
          }),
          _c(
            "view",
            {
              class: _vm._$s(3, "c", {
                "button-change-bg": !_vm.changeTouched,
                "button-change-bg-touched": _vm.changeTouched,
              }),
              attrs: { _i: 3 },
              on: {
                touchstart: _vm.touchstartChange,
                touchend: _vm.touchendChange,
                click: function ($event) {
                  return _vm.changeFace()
                },
              },
            },
            [_c("text")]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!***************************************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myFace.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myFace.vue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myFace_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlyQixDQUFnQixtcUJBQUcsRUFBQyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXlGYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL215RmFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages/me/myFace.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\nvar _default = {\n  data: function data() {\n    return {\n      faceUrl: getApp().getUserInfoSession().face,\n      changeTouched: false,\n      screenHeight: system.safeArea.bottom\n    };\n  },\n  methods: {\n    touchstartChange: function touchstartChange() {\n      this.changeTouched = true;\n    },\n    touchendChange: function touchendChange() {\n      this.changeTouched = false;\n    },\n    changeFace: function changeFace() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      uni.chooseImage({\n        count: 1,\n        sizeType: [\"compressed\"],\n        crop: {\n          quality: 60,\n          width: 300,\n          height: 300\n        },\n        success: function success(e) {\n          var newFace = e.tempFilePaths[0];\n          me.faceUrl = newFace;\n\n          // 上传\n          var serverUrl = app.globalData.serverUrl;\n          uni.uploadFile({\n            header: {\n              headerUserId: userId,\n              headerUserToken: app.getUserSessionToken()\n            },\n            url: serverUrl + \"/userInfo/modifyImage?userId=\" + userId + \"&type=2\",\n            name: \"file\",\n            filePath: newFace,\n            success: function success(result) {\n              if (result.statusCode == 200) {\n                var res = JSON.parse(result.data);\n                if (res.status = 200) {\n                  var userInfoUpdated = res.data;\n                  // 重置本地用户信息\n                  app.setUserInfoSession(userInfoUpdated);\n                  uni.navigateBack({\n                    delta: 1,\n                    animationType: \"fade-out\"\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.msg,\n                    icon: 'error'\n                  });\n                }\n              } else {\n                uni.showToast({\n                  title: \"上传失败\",\n                  icon: 'error'\n                });\n              }\n            }\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWUvbXlGYWNlLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZmFjZVVybCIsImNoYW5nZVRvdWNoZWQiLCJzY3JlZW5IZWlnaHQiLCJtZXRob2RzIiwidG91Y2hzdGFydENoYW5nZSIsInRvdWNoZW5kQ2hhbmdlIiwiY2hhbmdlRmFjZSIsInVuaSIsImNvdW50Iiwic2l6ZVR5cGUiLCJjcm9wIiwicXVhbGl0eSIsIndpZHRoIiwiaGVpZ2h0Iiwic3VjY2VzcyIsIm1lIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwidXJsIiwibmFtZSIsImZpbGVQYXRoIiwiYXBwIiwiZGVsdGEiLCJhbmltYXRpb25UeXBlIiwidGl0bGUiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFFQUM7TUFFQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BRUFDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQUM7VUFDQTtVQUNBQzs7VUFFQTtVQUNBO1VBQ0FSO1lBQ0FTO2NBQ0FDO2NBQ0FDO1lBQ0E7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVA7Y0FFQTtnQkFDQTtnQkFFQTtrQkFDQTtrQkFDQTtrQkFDQVE7a0JBRUFmO29CQUNBZ0I7b0JBQ0FDO2tCQUNBO2dCQUNBO2tCQUNBakI7b0JBQ0FrQjtvQkFDQUM7a0JBQ0E7Z0JBQ0E7Y0FDQTtnQkFDQW5CO2tCQUNBa0I7a0JBQ0FDO2dCQUNBO2NBQ0E7WUFFQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuLnBhZ2Uge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5iZy13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmctc2l6ZSB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogNzUwcnB4O1xufVxuLmJ1dHRvbi1jaGFuZ2UtYmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xufVxuLmJ1dHRvbi1jaGFuZ2UtYmctdG91Y2hlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2NDYyNjI7XG59XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiYmctd3JhcHBlclwiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XG5cdFx0XHQ8aW1hZ2UgOnNyYz1cImZhY2VVcmxcIiBjbGFzcz1cImJnLXNpemVcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBcblx0XHRcdFx0OmNsYXNzPVwieydidXR0b24tY2hhbmdlLWJnJzohY2hhbmdlVG91Y2hlZCwgJ2J1dHRvbi1jaGFuZ2UtYmctdG91Y2hlZCc6IGNoYW5nZVRvdWNoZWR9XCJcblx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0Q2hhbmdlXCJcblx0XHRcdFx0QHRvdWNoZW5kPVwidG91Y2hlbmRDaGFuZ2VcIlxuXHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2VGYWNlKClcIlxuXHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyNTBycHg7aGVpZ2h0OiA4MHJweDtib3JkZXItcmFkaXVzOiA1MHB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjttYXJnaW4tdG9wOiAxNTBycHg7YWxpZ24tc2VsZjogY2VudGVyO1wiPlxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGO2FsaWduLXNlbGY6IGNlbnRlcjtcIj7mm7TmjaLlpLTlg488L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgc3lzdGVtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmYWNlVXJsOiBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5mYWNlLFxuXHRcdFx0XHRcblx0XHRcdFx0Y2hhbmdlVG91Y2hlZDogZmFsc2UsXG5cdFx0XHRcdFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6IHN5c3RlbS5zYWZlQXJlYS5ib3R0b20sXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHR0b3VjaHN0YXJ0Q2hhbmdlKCkge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvdWNoZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdHRvdWNoZW5kQ2hhbmdlKCkge1xuXHRcdFx0XHR0aGlzLmNoYW5nZVRvdWNoZWQgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VGYWNlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0XHRcdGNvdW50OiAxLFxuXHRcdFx0XHRcdHNpemVUeXBlOiBbXCJjb21wcmVzc2VkXCJdLFxuXHRcdFx0XHRcdGNyb3A6IHtcblx0XHRcdFx0XHRcdHF1YWxpdHk6IDYwLFxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwMCxcblx0XHRcdFx0XHRcdGhlaWdodDogMzAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdWNjZXNzOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dmFyIG5ld0ZhY2UgPSBlLnRlbXBGaWxlUGF0aHNbMF07XG5cdFx0XHRcdFx0XHRtZS5mYWNlVXJsID0gbmV3RmFjZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8g5LiK5LygXG5cdFx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdFx0dW5pLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi91c2VySW5mby9tb2RpZnlJbWFnZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ0eXBlPTJcIixcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJmaWxlXCIsXG5cdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiBuZXdGYWNlLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXMgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHVzZXJJbmZvVXBkYXRlZCA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDph43nva7mnKzlnLDnlKjmiLfkv6Hmga9cblx0XHRcdFx0XHRcdFx0XHRcdFx0YXBwLnNldFVzZXJJbmZvU2Vzc2lvbih1c2VySW5mb1VwZGF0ZWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJmYWRlLW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnZXJyb3InXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLkuIrkvKDlpLHotKVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2Vycm9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 47));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 40));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 49));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 53));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 54));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 55));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 56));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 58));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 60));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 61));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 65);
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 66));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e33) { throw _e33; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e34) { didErr = true; err = _e34; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var r = s(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) {
                this._doProcessBlock(s, l);
              }
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  i = r,
  o = (s(function (e, t) {
    var n;
    e.exports = (n = i, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            f = e[t + 2],
            p = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            S = e[t + 10],
            k = e[t + 11],
            I = e[t + 12],
            b = e[t + 13],
            T = e[t + 14],
            A = e[t + 15],
            C = i[0],
            P = i[1],
            E = i[2],
            O = i[3];
          C = u(C, P, E, O, o, 7, a[0]), O = u(O, C, P, E, c, 12, a[1]), E = u(E, O, C, P, f, 17, a[2]), P = u(P, E, O, C, p, 22, a[3]), C = u(C, P, E, O, g, 7, a[4]), O = u(O, C, P, E, m, 12, a[5]), E = u(E, O, C, P, y, 17, a[6]), P = u(P, E, O, C, _, 22, a[7]), C = u(C, P, E, O, w, 7, a[8]), O = u(O, C, P, E, v, 12, a[9]), E = u(E, O, C, P, S, 17, a[10]), P = u(P, E, O, C, k, 22, a[11]), C = u(C, P, E, O, I, 7, a[12]), O = u(O, C, P, E, b, 12, a[13]), E = u(E, O, C, P, T, 17, a[14]), C = l(C, P = u(P, E, O, C, A, 22, a[15]), E, O, c, 5, a[16]), O = l(O, C, P, E, y, 9, a[17]), E = l(E, O, C, P, k, 14, a[18]), P = l(P, E, O, C, o, 20, a[19]), C = l(C, P, E, O, m, 5, a[20]), O = l(O, C, P, E, S, 9, a[21]), E = l(E, O, C, P, A, 14, a[22]), P = l(P, E, O, C, g, 20, a[23]), C = l(C, P, E, O, v, 5, a[24]), O = l(O, C, P, E, T, 9, a[25]), E = l(E, O, C, P, p, 14, a[26]), P = l(P, E, O, C, w, 20, a[27]), C = l(C, P, E, O, b, 5, a[28]), O = l(O, C, P, E, f, 9, a[29]), E = l(E, O, C, P, _, 14, a[30]), C = h(C, P = l(P, E, O, C, I, 20, a[31]), E, O, m, 4, a[32]), O = h(O, C, P, E, w, 11, a[33]), E = h(E, O, C, P, k, 16, a[34]), P = h(P, E, O, C, T, 23, a[35]), C = h(C, P, E, O, c, 4, a[36]), O = h(O, C, P, E, g, 11, a[37]), E = h(E, O, C, P, _, 16, a[38]), P = h(P, E, O, C, S, 23, a[39]), C = h(C, P, E, O, b, 4, a[40]), O = h(O, C, P, E, o, 11, a[41]), E = h(E, O, C, P, p, 16, a[42]), P = h(P, E, O, C, y, 23, a[43]), C = h(C, P, E, O, v, 4, a[44]), O = h(O, C, P, E, I, 11, a[45]), E = h(E, O, C, P, A, 16, a[46]), C = d(C, P = h(P, E, O, C, f, 23, a[47]), E, O, o, 6, a[48]), O = d(O, C, P, E, _, 10, a[49]), E = d(E, O, C, P, T, 15, a[50]), P = d(P, E, O, C, m, 21, a[51]), C = d(C, P, E, O, I, 6, a[52]), O = d(O, C, P, E, p, 10, a[53]), E = d(E, O, C, P, S, 15, a[54]), P = d(P, E, O, C, c, 21, a[55]), C = d(C, P, E, O, w, 6, a[56]), O = d(O, C, P, E, A, 10, a[57]), E = d(E, O, C, P, y, 15, a[58]), P = d(P, E, O, C, b, 21, a[59]), C = d(C, P, E, O, g, 6, a[60]), O = d(O, C, P, E, k, 10, a[61]), E = d(E, O, C, P, f, 15, a[62]), P = d(P, E, O, C, v, 21, a[63]), i[0] = i[0] + C | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), s(function (e, t) {
    var n;
    e.exports = (n = i, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), s(function (e, t) {
    e.exports = i.HmacMD5;
  })),
  a = s(function (e, t) {
    e.exports = i.enc.Utf8;
  }),
  c = s(function (e, t) {
    var n;
    e.exports = (n = i, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var u = "FUNCTION",
  l = "OBJECT",
  h = "CLIENT_DB";
function d(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function f(e) {
  return "object" === d(e);
}
function p(e) {
  return "function" == typeof e;
}
function g(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
function m(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var y = "development" === "development",
  _ = "app-plus",
  w = "true" === false || !0 === false,
  v = m([]);
var S;
S = "h5" === _ ? "web" : "app-plus" === _ ? "app" : _;
var k = m({
    "address": [
        "127.0.0.1",
        "192.168.25.1",
        "192.168.5.1",
        "192.168.43.194"
    ],
    "debugPort": 9000,
    "initialLaunchType": "local",
    "servePort": 7000,
    "skipFiles": [
        "<node_internals>/**",
        "D:/JavaLearning/HBuilderX/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),
  I = m([{"provider":"aliyun","spaceName":"fengyin","spaceId":"mp-9492c720-c189-4d24-b97a-1c069b7e5a8f","clientSecret":"G1ZKCAVln4u3+i4frKPrag==","endpoint":"https://api.next.bspapp.com"}]) || [],
  b = true;
var T = "";
try {
  {
    var _e2 = __webpack_require__(/*! uni-stat-config */ 67).default || __webpack_require__(/*! uni-stat-config */ 67);
    T = _e2.appid;
  }
} catch (e) {}
var A = {};
function C(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = A, s = e, Object.prototype.hasOwnProperty.call(n, s) || (A[e] = t), A[e];
}
"app" === S && (A = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var P = ["invoke", "success", "fail", "complete"],
  E = C("_globalUniCloudInterceptor");
function O(e, t) {
  E[e] || (E[e] = {}), f(t) && Object.keys(t).forEach(function (n) {
    P.indexOf(n) > -1 && function (e, t, n) {
      var s = E[e][t];
      s || (s = E[e][t] = []), -1 === s.indexOf(n) && p(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function x(e, t) {
  E[e] || (E[e] = {}), f(t) ? Object.keys(t).forEach(function (n) {
    P.indexOf(n) > -1 && function (e, t, n) {
      var s = E[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete E[e];
}
function U(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function R(e, t) {
  return E[e] && E[e][t] || [];
}
function L(e) {
  O("callObject", e);
}
var N = C("_globalUniCloudListener"),
  D = "response",
  F = "needLogin",
  q = "refreshToken",
  K = "clientdb",
  M = "cloudfunction",
  j = "cloudobject";
function B(e) {
  return N[e] || (N[e] = []), N[e];
}
function $(e, t) {
  var n = B(e);
  n.includes(t) || n.push(t);
}
function W(e, t) {
  var n = B(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function z(e, t) {
  var n = B(e);
  for (var _e3 = 0; _e3 < n.length; _e3++) {
    (0, n[_e3])(t);
  }
}
var J,
  H = !1;
function G() {
  return J || (J = new Promise(function (e) {
    H && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (H = !0, e());
      }
      H || setTimeout(function () {
        t();
      }, 30);
    }();
  }), J);
}
function V(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    p(_s2) && (t[_n2] = g(_s2));
  }
  return t;
}
function Y(e, t) {
  return t ? function (n) {
    var _this = this;
    var s = !1;
    if ("callFunction" === t) {
      var _e4 = n && n.type || u;
      s = _e4 !== u;
    }
    var r = "callFunction" === t && !s;
    var i;
    i = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};
    var _V = V(n),
      o = _V.success,
      a = _V.fail,
      c = _V.complete,
      l = i.then(function () {
        return s ? Promise.resolve() : U(R(t, "invoke"), n);
      }).then(function () {
        return e.call(_this, n);
      }).then(function (e) {
        return s ? Promise.resolve(e) : U(R(t, "success"), e).then(function () {
          return U(R(t, "complete"), e);
        }).then(function () {
          return r && z(D, {
            type: M,
            content: e
          }), Promise.resolve(e);
        });
      }, function (e) {
        return s ? Promise.reject(e) : U(R(t, "fail"), e).then(function () {
          return U(R(t, "complete"), e);
        }).then(function () {
          return z(D, {
            type: M,
            content: e
          }), Promise.reject(e);
        });
      });
    if (!(o || a || c)) return l;
    l.then(function (e) {
      o && o(e), c && c(e), r && z(D, {
        type: M,
        content: e
      });
    }, function (e) {
      a && a(e), c && c(e), r && z(D, {
        type: M,
        content: e
      });
    });
  } : function (t) {
    t = t || {};
    var _V2 = V(t),
      n = _V2.success,
      s = _V2.fail,
      r = _V2.complete;
    if (!(n || s || r)) return e.call(this, t);
    e.call(this, t).then(function (e) {
      n && n(e), r && r(e);
    }, function (e) {
      s && s(e), r && r(e);
    });
  };
}
var Q = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(Q, _Error);
  var _super = _createSuper(Q);
  function Q(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, Q);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(Q, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return Q;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var X = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function Z() {
  return {
    token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"),
    tokenExpired: X.getStorageSync("uni_id_token_expired")
  };
}
function ee() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref.token,
    t = _ref.tokenExpired;
  e && X.setStorageSync("uni_id_token", e), t && X.setStorageSync("uni_id_token_expired", t);
}
function te() {
  if (!y || "web" !== S) return;
  uni.getStorageSync("__LAST_DCLOUD_APPID") !== T && (uni.setStorageSync("__LAST_DCLOUD_APPID", T), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), X.removeStorageSync("uni_id_token"), X.removeStorageSync("uniIdToken"), X.removeStorageSync("uni_id_token_expired"));
}
var ne, se;
function re() {
  return ne || (ne = uni.getSystemInfoSync()), ne;
}
function ie() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function oe() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (se) return _objectSpread(_objectSpread({}, se), {}, {
    locale: e,
    LOCALE: e
  });
  var t = re(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e5 = 0; _e5 < o.length; _e5++) {
    delete t[o[_e5]];
  }
  return se = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ie()), t), _objectSpread(_objectSpread({}, se), {}, {
    locale: e,
    LOCALE: e
  });
}
var ae = {
    sign: function sign(e, t) {
      var n = "";
      return Object.keys(e).sort().forEach(function (t) {
        e[t] && (n = n + "&" + t + "=" + e[t]);
      }), n = n.slice(1), o(n, t).toString();
    },
    wrappedRequest: function wrappedRequest(e, t) {
      return new Promise(function (n, s) {
        t(Object.assign(e, {
          complete: function complete(e) {
            e || (e = {}), y && "web" === S && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
            var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
            if (!e.statusCode || e.statusCode >= 400) return s(new Q({
              code: "SYS_ERR",
              message: e.errMsg || "request:fail",
              requestId: t
            }));
            var r = e.data;
            if (r.error) return s(new Q({
              code: r.error.code,
              message: r.error.message,
              requestId: t
            }));
            r.result = r.data, r.requestId = t, delete r.data, n(r);
          }
        }));
      });
    },
    toBase64: function toBase64(e) {
      return c.stringify(a.parse(e));
    }
  },
  ce = {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  };
var _e6 = (0, _uniI18n.initVueI18n)({
    "zh-Hans": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    "zh-Hant": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    en: ce,
    fr: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    es: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    ja: ce
  }, "zh-Hans"),
  ue = _e6.t;
var le = /*#__PURE__*/function () {
  function le(e) {
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(ue("uniCloud.init.paramRequired", {
        param: t
      }));
    }), this.config = Object.assign({}, {
      endpoint: "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return ae.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this3 = this;
      return Promise.resolve().then(function () {
        return _this3.hasAccessToken ? t ? _this3.requestWrapped(e) : _this3.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this3.getAccessToken();
          }).then(function () {
            var t = _this3.rebuildRequest(e);
            return _this3.request(t, !0);
          });
        }) : _this3.getAccessToken().then(function () {
          var t = _this3.rebuildRequest(e);
          return _this3.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = ae.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ae.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this4 = this;
      if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({
        method: "serverless.auth.user.anonymousAuthorize",
        params: "{}"
      }, "auth")).then(function (e) {
        return new Promise(function (t, n) {
          e.result && e.result.accessToken ? (_this4.setAccessToken(e.result.accessToken), _this4._getAccessTokenPromiseStatus = "fulfilled", t(_this4.accessToken)) : (_this4._getAccessTokenPromiseStatus = "rejected", n(new Q({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          })));
        });
      }, function (e) {
        return _this4._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);
      }), this._getAccessTokenPromise;
    }
  }, {
    key: "authorize",
    value: function authorize() {
      this.getAccessToken();
    }
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref2) {
      var _this5 = this;
      var e = _ref2.url,
        t = _ref2.formData,
        n = _ref2.name,
        s = _ref2.filePath,
        r = _ref2.fileType,
        i = _ref2.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new Q({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new Q({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref3) {
        var e, t, _ref3$fileType, n, s, r, i, o, a, c, u, l, h, f, p, g, m, y, _e7, _;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e = _ref3.filePath, t = _ref3.cloudPath, _ref3$fileType = _ref3.fileType, n = _ref3$fileType === void 0 ? "image" : _ref3$fileType, s = _ref3.onUploadProgress, r = _ref3.config;
                if (!("string" !== d(t))) {
                  _context.next = 3;
                  break;
                }
                throw new Q({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context.next = 5;
                  break;
                }
                throw new Q({
                  code: "CLOUDPATH_REQUIRED",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context.next = 7;
                  break;
                }
                throw new Q({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                i = r && r.envType || this.config.envType;
                _context.next = 10;
                return this.getOSSUploadOptionsFromPath({
                  env: i,
                  filename: t
                });
              case 10:
                o = _context.sent.result;
                a = "https://" + o.cdnDomain + "/" + o.ossPath;
                c = o.securityToken;
                u = o.accessKeyId;
                l = o.signature;
                h = o.host;
                f = o.ossPath;
                p = o.id;
                g = o.policy;
                m = o.ossCallbackUrl;
                y = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: u,
                  Signature: l,
                  host: h,
                  id: p,
                  key: f,
                  policy: g,
                  success_action_status: 200
                };
                if (c && (y["x-oss-security-token"] = c), m) {
                  _e7 = JSON.stringify({
                    callbackUrl: m,
                    callbackBody: JSON.stringify({
                      fileId: p,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  y.callback = ae.toBase64(_e7);
                }
                _ = {
                  url: "https://" + o.host,
                  formData: y,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context.next = 25;
                return this.uploadFileToOSS(Object.assign({}, _, {
                  onUploadProgress: s
                }));
              case 25:
                if (!m) {
                  _context.next = 27;
                  break;
                }
                return _context.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 27:
                _context.next = 29;
                return this.reportOSSUpload({
                  id: p
                });
              case 29:
                if (!_context.sent.success) {
                  _context.next = 31;
                  break;
                }
                return _context.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 31:
                throw new Q({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref4.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new Q({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _ref5,
          e,
          t,
          _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref5 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref5.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context2.next = 3;
                  break;
                }
                throw new Q({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context2.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context2.t0 = _context2.sent.result;
                return _context2.abrupt("return", {
                  fileList: _context2.t0
                });
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var he = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var de = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var pe = function pe() {};
var ge = function ge() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new Q({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e8, s) {
      return _e8 ? n(_e8) : t(s);
    };
  });
  return e.promise = t, e;
};
function me(e) {
  return void 0 === e;
}
function ye(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var _e;
function we(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e9 = _step.value;
      var _t4 = _e9.isMatch,
        _n4 = _e9.genAdapter,
        _s4 = _e9.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(_e || (_e = {}));
var ve = {
    adapter: null,
    runtime: void 0
  },
  Se = ["anonymousUuidKey"];
var ke = /*#__PURE__*/function (_pe) {
  (0, _inherits2.default)(ke, _pe);
  var _super2 = _createSuper(ke);
  function ke() {
    var _this6;
    (0, _classCallCheck2.default)(this, ke);
    _this6 = _super2.call(this), ve.adapter.root.tcbObject || (ve.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(ke, [{
    key: "setItem",
    value: function setItem(e, t) {
      ve.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ve.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ve.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ve.adapter.root.tcbObject;
    }
  }]);
  return ke;
}(pe);
function Ie(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new ke();
    case "none":
      return new ke();
    default:
      return t.sessionStorage || new ke();
  }
}
var be = /*#__PURE__*/function () {
  function be(e) {
    (0, _classCallCheck2.default)(this, be);
    if (!this._storage) {
      this._persistence = ve.adapter.primaryStorage || e.persistence, this._storage = Ie(this._persistence, ve.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(be, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ie(e, ve.adapter);
      for (var _e10 in this.keys) {
        var _s6 = this.keys[_e10];
        if (t && Se.includes(_e10)) continue;
        var _r2 = this._storage.getItem(_s6);
        me(_r2) || ye(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return be;
}();
var Te = {},
  Ae = {};
function Ce(e) {
  return Te[e];
}
var Pe = /*#__PURE__*/(0, _createClass2.default)(function Pe(e, t) {
  (0, _classCallCheck2.default)(this, Pe);
  this.data = t || null, this.name = e;
});
var Ee = /*#__PURE__*/function (_Pe) {
  (0, _inherits2.default)(Ee, _Pe);
  var _super3 = _createSuper(Ee);
  function Ee(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Ee);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Ee);
}(Pe);
var Oe = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Ee) return console.error(e.error), this;
      var n = "string" == typeof e ? new Pe(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e11 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e11),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function xe(e, t) {
  Oe.on(e, t);
}
function Ue(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Oe.fire(e, t);
}
function Re(e, t) {
  Oe.off(e, t);
}
var Le = "loginStateChanged",
  Ne = "loginStateExpire",
  De = "loginTypeChanged",
  Fe = "anonymousConverted",
  qe = "refreshAccessToken";
var Ke;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Ke || (Ke = {}));
var Me = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  je = {
    "X-SDK-Version": "1.3.5"
  };
function Be(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e12 in r) {
        o.append(_e12, r[_e12]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function $e() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, je), {}, {
      "x-seqid": e
    })
  };
}
var We = /*#__PURE__*/function () {
  function We() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, We);
    var t;
    this.config = e, this._reqClass = new ve.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ce(this.config.env), this._localCache = (t = this.config.env, Ae[t]), Be(this._reqClass, "post", [$e]), Be(this._reqClass, "upload", [$e]), Be(this._reqClass, "download", [$e]);
  }
  (0, _createClass2.default)(We, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var e, t;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context6.prev = 1;
                _context6.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context6.sent;
                _context6.next = 10;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                t = _context6.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context6.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context6.abrupt("return", e);
              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e13, _e14, _t7, _s8;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context7.next = 5;
                  break;
                }
                throw new Q({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context7.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context7.sent;
                if (!a.data.code) {
                  _context7.next = 21;
                  break;
                }
                _e13 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e13 || "REFRESH_TOKEN_EXPIRED" === _e13 || "INVALID_REFRESH_TOKEN" === _e13)) {
                  _context7.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Ke.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e13)) {
                  _context7.next = 19;
                  break;
                }
                _e14 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context7.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e14,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context7.sent;
                return _context7.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                Ue(Ne), this._cache.removeStore(n);
              case 20:
                throw new Q({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context7.next = 23;
                  break;
                }
                return _context7.abrupt("return", (Ue(qe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context8.next = 3;
                  break;
                }
                throw new Q({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context8.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context8.t0) {
                  _context8.next = 9;
                  break;
                }
                _context8.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context8.t0 = !_context8.sent;
              case 9:
                _context8.t1 = _context8.t0;
                if (!_context8.t1) {
                  _context8.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context8.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(e, t, n) {
        var s, r, i, _e15, o, _e16, _e17, a, c, u, l, h, d, f, p, g;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === Me.indexOf(e))) {
                  _context9.next = 10;
                  break;
                }
                _e15 = this._cache.keys.refreshTokenKey;
                _context9.t0 = this._cache.getStore(_e15);
                if (!_context9.t0) {
                  _context9.next = 10;
                  break;
                }
                _context9.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context9.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e16 in o) {
                    o.hasOwnProperty(_e16) && void 0 !== o[_e16] && o.append(_e16, i[_e16]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e17 in i) {
                    void 0 !== i[_e17] && (o[_e17] = i[_e17]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, l = t.inQuery, h = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));
                f = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e18 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e18, "=").concat(encodeURIComponent(n[_e18]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(de, "//tcb-api.tencentcloudapi.com/web", d);
                h && (f += h);
                _context9.next = 22;
                return this.post(_objectSpread({
                  url: f,
                  data: o
                }, a));
              case 22:
                p = _context9.sent;
                g = p.header && p.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {
                  _context9.next = 26;
                  break;
                }
                throw new Q({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context9.abrupt("return", p);
              case 27:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e) {
        var t,
          n,
          _n6,
          _args10 = arguments;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                t = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                _context10.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context10.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === Me.indexOf(e))) {
                  _context10.next = 13;
                  break;
                }
                _context10.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context10.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context10.sent;
                if (!_n6.data.code) {
                  _context10.next = 12;
                  break;
                }
                throw new Q({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context10.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context10.next = 15;
                  break;
                }
                throw new Q({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context10.abrupt("return", n.data);
              case 16:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return We;
}();
var ze = {};
function Je(e) {
  return ze[e];
}
var He = /*#__PURE__*/function () {
  function He(e) {
    (0, _classCallCheck2.default)(this, He);
    this.config = e, this._cache = Ce(e.env), this._request = Je(e.env);
  }
  (0, _createClass2.default)(He, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context11.sent;
                e = _yield$this$_request$.data;
                return _context11.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return He;
}();
var Ge = /*#__PURE__*/function () {
  function Ge(e) {
    (0, _classCallCheck2.default)(this, Ge);
    if (!e) throw new Q({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ce(this._envId), this._request = Je(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Ge, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new Q({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new Q({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context12.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context12.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context13.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context13.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context14.sent;
                e = _yield$this$_request$4.data;
                return _context14.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Ge;
}();
var Ve = /*#__PURE__*/function () {
  function Ve(e) {
    (0, _classCallCheck2.default)(this, Ve);
    if (!e) throw new Q({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ce(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Ge(e);
  }
  (0, _createClass2.default)(Ve, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Ke.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Ke.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Ke.WECHAT || this.loginType === Ke.WECHAT_OPEN || this.loginType === Ke.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ve;
}();
var Ye = /*#__PURE__*/function (_He) {
  (0, _inherits2.default)(Ye, _He);
  var _super4 = _createSuper(Ye);
  function Ye() {
    (0, _classCallCheck2.default)(this, Ye);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(Ye, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _this$_cache$keys7, e, t, n, s, r, _e19;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context15.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context15.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context15.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context15.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                Ue(Le);
                Ue(De, {
                  env: this.config.env,
                  loginType: Ke.ANONYMOUS,
                  persistence: "local"
                });
                _e19 = new Ve(this.config.env);
                _context15.next = 19;
                return _e19.user.refresh();
              case 19:
                return _context15.abrupt("return", _e19);
              case 20:
                throw new Q({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context16.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context16.sent;
                if (!i.refresh_token) {
                  _context16.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context16.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                Ue(Fe, {
                  env: this.config.env
                });
                Ue(De, {
                  loginType: Ke.CUSTOM,
                  persistence: "local"
                });
                return _context16.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new Q({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Ke.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return Ye;
}(He);
var Qe = /*#__PURE__*/function (_He2) {
  (0, _inherits2.default)(Qe, _He2);
  var _super5 = _createSuper(Qe);
  function Qe() {
    (0, _classCallCheck2.default)(this, Qe);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(Qe, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context17.next = 2;
                  break;
                }
                throw new Q({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context17.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context17.sent;
                if (!n.refresh_token) {
                  _context17.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context17.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                Ue(Le);
                Ue(De, {
                  env: this.config.env,
                  loginType: Ke.CUSTOM,
                  persistence: this.config.persistence
                });
                _context17.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context17.abrupt("return", new Ve(this.config.env));
              case 15:
                throw new Q({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return Qe;
}(He);
var Xe = /*#__PURE__*/function (_He3) {
  (0, _inherits2.default)(Xe, _He3);
  var _super6 = _createSuper(Xe);
  function Xe() {
    (0, _classCallCheck2.default)(this, Xe);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(Xe, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new Q({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context18.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context18.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context18.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context18.next = 17;
                break;
              case 15:
                _context18.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context18.next = 19;
                return this.refreshUserInfo();
              case 19:
                Ue(Le);
                Ue(De, {
                  env: this.config.env,
                  loginType: Ke.EMAIL,
                  persistence: this.config.persistence
                });
                return _context18.abrupt("return", new Ve(this.config.env));
              case 22:
                throw s.code ? new Q({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new Q({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e) {
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e, t) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return Xe;
}(He);
var Ze = /*#__PURE__*/function (_He4) {
  (0, _inherits2.default)(Ze, _He4);
  var _super7 = _createSuper(Ze);
  function Ze() {
    (0, _classCallCheck2.default)(this, Ze);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(Ze, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context21.next = 2;
                  break;
                }
                throw new Q({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context21.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Ke.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context21.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context21.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context21.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context21.next = 18;
                break;
              case 16:
                _context21.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context21.next = 20;
                return this.refreshUserInfo();
              case 20:
                Ue(Le);
                Ue(De, {
                  env: this.config.env,
                  loginType: Ke.USERNAME,
                  persistence: this.config.persistence
                });
                return _context21.abrupt("return", new Ve(this.config.env));
              case 23:
                throw s.code ? new Q({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new Q({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return Ze;
}(He);
var et = /*#__PURE__*/function () {
  function et(e) {
    (0, _classCallCheck2.default)(this, et);
    this.config = e, this._cache = Ce(e.env), this._request = Je(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), xe(De, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(et, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new Ye(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new Qe(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new Xe(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new Ze(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", new Ye(this.config).signIn());
              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(e, t) {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new Xe(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new Ze(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new Ye(this.config)), xe(Fe, this._onAnonymousConverted);
                _context24.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context24.abrupt("return", _context24.sent);
              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (!(this.loginType === Ke.ANONYMOUS)) {
                  _context25.next = 2;
                  break;
                }
                throw new Q({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context25.next = 5;
                  break;
                }
                return _context25.abrupt("return");
              case 5:
                _context25.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context25.sent;
                return _context25.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Ue(Le), Ue(De, {
                  env: this.config.env,
                  loginType: Ke.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26(e, t) {
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      xe(Le, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      xe(Ne, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      xe(qe, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      xe(Fe, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      xe(De, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28() {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context28.t0 = _context28.sent.accessToken;
                _context28.t1 = this.config.env;
                return _context28.abrupt("return", {
                  accessToken: _context28.t0,
                  env: _context28.t1
                });
              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ve(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context29.next = 2;
                  break;
                }
                throw new Q({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context29.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context29.sent;
                t = _yield$this$_request$5.data;
                return _context29.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                return _context30.abrupt("return", new Qe(this.config).signIn(e));
              case 1:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return et;
}();
var tt = function tt(e, t) {
    t = t || ge();
    var n = Je(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        f = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: f,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new Q({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  nt = function nt(e, t) {
    t = t || ge();
    var n = Je(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  st = function st(_ref6, t) {
    var e = _ref6.fileList;
    if (t = t || ge(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Je(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  rt = function rt(_ref7, t) {
    var e = _ref7.fileList;
    t = t || ge(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Je(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  it = /*#__PURE__*/function () {
    var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(_ref8, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              e = _ref8.fileID;
              _context31.next = 3;
              return rt.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context31.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context31.next = 6;
                break;
              }
              return _context31.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Je(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context31.next = 10;
                break;
              }
              return _context31.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context31.t0 = t;
              _context31.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context31.t1 = _context31.sent;
              (0, _context31.t0)(_context31.t1);
            case 15:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31, this);
    }));
    return function it(_x27, _x28) {
      return _ref9.apply(this, arguments);
    };
  }(),
  ot = function ot(_ref10, i) {
    var e = _ref10.name,
      t = _ref10.data,
      n = _ref10.query,
      s = _ref10.parse,
      r = _ref10.search;
    var o = i || ge();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new Q({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Je(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new Q({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  at = {
    timeout: 15e3,
    persistence: "session"
  },
  ct = {};
var ut = /*#__PURE__*/function () {
  function ut(e) {
    (0, _classCallCheck2.default)(this, ut);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(ut, [{
    key: "init",
    value: function init(e) {
      switch (ve.adapter || (this.requestClient = new ve.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, at), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ut(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref11.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ve.adapter.primaryStorage || at.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Te[t] = new be(e), Ae[t] = new be(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, ze[n.env] = new We(n), this.authObj = new et(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return xe.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Re.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return st.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return rt.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return tt.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return nt.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      ct[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                n = ct[e];
                if (n) {
                  _context32.next = 3;
                  break;
                }
                throw new Q({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context32.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context32.abrupt("return", _context32.sent);
              case 6:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref12 = we(e) || {},
        t = _ref12.adapter,
        n = _ref12.runtime;
      t && (ve.adapter = t), n && (ve.runtime = n);
    }
  }]);
  return ut;
}();
var lt = new ut();
function ht(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var dt = /*#__PURE__*/function () {
  function dt() {
    (0, _classCallCheck2.default)(this, dt);
  }
  (0, _createClass2.default)(dt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        X.request({
          url: ht("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = X.uploadFile({
            url: ht("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return dt;
}();
var ft = {
  setItem: function setItem(e, t) {
    X.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return X.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    X.removeStorageSync(e);
  },
  clear: function clear() {
    X.clearStorageSync();
  }
};
var pt = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: dt,
      localStorage: ft,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
lt.useAdapters(pt);
var gt = lt,
  mt = gt.init;
gt.init = function (e) {
  e.env = e.spaceId;
  var t = mt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      t[e] = Y(t[e]).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var yt = gt;
var _t = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(_t, _le);
  var _super8 = _createSuper(_t);
  function _t() {
    (0, _classCallCheck2.default)(this, _t);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(_t, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ae.sign(n, this.config.clientSecret);
      var r = oe();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _Z = Z(),
        i = _Z.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref13) {
      var _this12 = this;
      var e = _ref13.url,
        t = _ref13.formData,
        n = _ref13.name,
        s = _ref13.filePath,
        r = _ref13.fileType,
        i = _ref13.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new Q({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new Q({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref14) {
      var _this13 = this;
      var e = _ref14.filePath,
        t = _ref14.cloudPath,
        _ref14$fileType = _ref14.fileType,
        n = _ref14$fileType === void 0 ? "image" : _ref14$fileType,
        s = _ref14.onUploadProgress;
      if (!t) throw new Q({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new Q({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref15) {
      var e = _ref15.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new Q({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref16.fileList;
      if (!Array.isArray(e) || 0 === e.length) throw new Q({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var t = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new Q({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return _t;
}(le);
var wt = {
  init: function init(e) {
    var t = new _t(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
function vt(_ref17) {
  var e = _ref17.data;
  var t;
  t = oe();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _Z2 = Z(),
      _e20 = _Z2.token;
    _e20 && (n.uniIdToken = _e20);
  }
  return n;
}
function St() {
  var _this14 = this;
  var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref18.name,
    t = _ref18.data;
  var _this$__dev__ = this.__dev__,
    n = _this$__dev__.localAddress,
    s = _this$__dev__.localPort,
    r = {
      aliyun: "aliyun",
      tencent: "tcb"
    }[this.config.provider],
    i = this.config.spaceId,
    o = "http://".concat(n, ":").concat(s, "/system/check-function"),
    a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
  return new Promise(function (t, n) {
    X.request({
      method: "POST",
      url: o,
      data: {
        name: e,
        platform: S,
        provider: r,
        spaceId: i
      },
      timeout: 3e3,
      success: function success(e) {
        t(e);
      },
      fail: function fail() {
        t({
          data: {
            code: "NETWORK_ERROR",
            message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
          }
        });
      }
    });
  }).then(function () {
    var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref19.data;
    var _ref20 = e || {},
      t = _ref20.code,
      n = _ref20.message;
    return {
      code: 0 === t ? 0 : t || "SYS_ERR",
      message: n || "SYS_ERR"
    };
  }).then(function (_ref21) {
    var n = _ref21.code,
      s = _ref21.message;
    if (0 !== n) {
      switch (n) {
        case "MODULE_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;
        case "FUNCTION_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;
        case "ACTION_ENCRYPTED":
          console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
          break;
        case "NETWORK_ERROR":
          {
            var _e21 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(_e21), new Error(_e21);
          }
        case "SWITCH_TO_CLOUD":
          break;
        default:
          {
            var _e22 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
            throw console.error(_e22), new Error(_e22);
          }
      }
      return _this14._callCloudFunction({
        name: e,
        data: t
      });
    }
    return new Promise(function (e, n) {
      var s = vt.call(_this14, {
        data: t
      });
      X.request({
        method: "POST",
        url: a,
        data: {
          provider: r,
          platform: S,
          param: s
        },
        success: function success() {
          var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = _ref22.statusCode,
            s = _ref22.data;
          return !t || t >= 400 ? n(new Q({
            code: s.code || "SYS_ERR",
            message: s.message || "request:fail"
          })) : e({
            result: s
          });
        },
        fail: function fail(e) {
          n(new Q({
            code: e.code || e.errCode || "SYS_ERR",
            message: e.message || e.errMsg || "request:fail"
          }));
        }
      });
    });
  });
}
var kt = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var It = /[\\^$.*+?()[\]{}|]/g,
  bt = RegExp(It.source);
function Tt(e, t, n) {
  return e.replace(new RegExp((s = t) && bt.test(s) ? s.replace(It, "\\$&") : s, "g"), n);
  var s;
}
var At = "none",
  Ct = "request",
  Pt = "response",
  Et = "both";
var Ot = /*#__PURE__*/function () {
  function Ot() {
    var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref23.secretType,
      t = _ref23.uniCloudIns;
    (0, _classCallCheck2.default)(this, Ot);
    this.secretType = e || At, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(Ot, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = re()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e) {
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.secretType === At || this.secretType === At ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function encryptData(_x31) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(e) {
        var t;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (!(this.secretType === At)) {
                  _context34.next = 2;
                  break;
                }
                return _context34.abrupt("return", e);
              case 2:
                t = e.content;
                return _context34.abrupt("return", t ? this.secretType === Ct ? t : this.platformDecryptResult(e) : e);
              case 4:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function decryptResult(_x32) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35() {
        var _ref25,
          n,
          _ref25$data,
          s,
          _args35 = arguments;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _ref25 = _args35.length > 0 && _args35[0] !== undefined ? _args35[0] : {}, n = _ref25.name, _ref25$data = _ref25.data, s = _ref25$data === void 0 ? {} : _ref25$data;
                _context35.next = 3;
                return t.prepare();
              case 3:
                _context35.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context35.sent;
                _context35.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                return _context35.abrupt("return", _context35.sent);
              case 9:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36() {
        var _ref27,
          n,
          _ref27$data,
          s,
          r,
          i,
          _args36 = arguments;
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _ref27 = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {}, n = _ref27.name, _ref27$data = _ref27.data, s = _ref27$data === void 0 ? {} : _ref27$data;
                _context36.next = 3;
                return t.prepare();
              case 3:
                _context36.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context36.sent;
                _context36.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context36.sent;
                _context36.next = 11;
                return t.decryptResult(i.result);
              case 11:
                i.result = _context36.sent;
                return _context36.abrupt("return", i);
              case 13:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }));
    }
  }]);
  return Ot;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function xt(e) {
  return parseInt(e) === e;
}
function Ut(e) {
  if (!xt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!xt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Rt(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Ut(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (xt(e.length) && Ut(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Lt(e) {
  return new Uint8Array(e);
}
function Nt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Dt,
  Ft = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Rt(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  qt = (Dt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Dt[(240 & s) >> 4] + Dt[15 & s]);
      }
      return t.join("");
    }
  }),
  Kt = {
    16: 10,
    24: 12,
    32: 14
  },
  Mt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  jt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  Bt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  $t = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Wt = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  zt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Jt = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Ht = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Gt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Vt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  Yt = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  Qt = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  Xt = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  Zt = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  en = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function tn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var nn = /*#__PURE__*/function () {
  function nn(e) {
    (0, _classCallCheck2.default)(this, nn);
    if (!(this instanceof nn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Rt(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(nn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Kt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = tn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= jt[o >> 16 & 255] << 24 ^ jt[o >> 8 & 255] << 16 ^ jt[255 & o] << 8 ^ jt[o >> 24 & 255] ^ Mt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= jt[255 & o] ^ jt[o >> 8 & 255] << 8 ^ jt[o >> 16 & 255] << 16 ^ jt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var l = 0; l < 4; l++) {
          o = this._Kd[u][l], this._Kd[u][l] = Qt[o >> 24 & 255] ^ Xt[o >> 16 & 255] ^ Zt[o >> 8 & 255] ^ en[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = tn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = $t[s[r] >> 24 & 255] ^ Wt[s[(r + 1) % 4] >> 16 & 255] ^ zt[s[(r + 2) % 4] >> 8 & 255] ^ Jt[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Lt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (jt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (jt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (jt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (jt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = tn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Ht[s[r] >> 24 & 255] ^ Gt[s[(r + 3) % 4] >> 16 & 255] ^ Vt[s[(r + 2) % 4] >> 8 & 255] ^ Yt[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Lt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (Bt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Bt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Bt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Bt[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return nn;
}();
var sn = /*#__PURE__*/function () {
  function sn(e) {
    (0, _classCallCheck2.default)(this, sn);
    if (!(this instanceof sn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new nn(e);
  }
  (0, _createClass2.default)(sn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16), Nt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16), Nt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return sn;
}();
var rn = /*#__PURE__*/function () {
  function rn(e, t) {
    (0, _classCallCheck2.default)(this, rn);
    if (!(this instanceof rn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Lt(16);
    this._lastCipherblock = Rt(t, !0), this._aes = new nn(e);
  }
  (0, _createClass2.default)(rn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Nt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Nt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return rn;
}();
var on = /*#__PURE__*/function () {
  function on(e, t, n) {
    (0, _classCallCheck2.default)(this, on);
    if (!(this instanceof on)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Lt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Rt(t, !0), this._aes = new nn(e);
  }
  (0, _createClass2.default)(on, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Rt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Nt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Nt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Rt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Nt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Nt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return on;
}();
var an = /*#__PURE__*/function () {
  function an(e, t) {
    (0, _classCallCheck2.default)(this, an);
    if (!(this instanceof an)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Lt(16);
    this._lastPrecipher = Rt(t, !0), this._lastPrecipherIndex = 16, this._aes = new nn(e);
  }
  (0, _createClass2.default)(an, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Rt(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return an;
}();
var cn = /*#__PURE__*/function () {
  function cn(e) {
    (0, _classCallCheck2.default)(this, cn);
    if (!(this instanceof cn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Lt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(cn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Rt(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return cn;
}();
var un = /*#__PURE__*/function () {
  function un(e, t) {
    (0, _classCallCheck2.default)(this, un);
    if (!(this instanceof un)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof cn || (t = new cn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new nn(e);
  }
  (0, _createClass2.default)(un, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Rt(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return un;
}();
var ln = {
  AES: nn,
  Counter: cn,
  ModeOfOperation: {
    ecb: sn,
    cbc: rn,
    cfb: on,
    ofb: an,
    ctr: un
  },
  utils: {
    hex: qt,
    utf8: Ft
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Rt(e, !0)).length % 16,
          n = Lt(e.length + t);
        Nt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Rt(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = Lt(n);
        return Nt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Rt,
    createArray: Lt,
    copyArray: Nt
  }
};
function hn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = ln.utils.utf8.toBytes(n),
    i = ln.utils.utf8.toBytes(e),
    o = new ln.ModeOfOperation.cbc(s, r),
    a = ln.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var dn = {
    code: 2e4,
    message: "System error"
  },
  fn = {
    code: 20101,
    message: "Invalid client"
  },
  pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  gn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function mn(e) {
  var _ref28 = e || {},
    t = _ref28.errSubject,
    n = _ref28.subject,
    s = _ref28.errCode,
    r = _ref28.errMsg,
    i = _ref28.code,
    o = _ref28.message,
    a = _ref28.cause;
  return new Q({
    subject: t || n || "uni-secure-network",
    code: s || i || dn.code,
    message: r || o,
    cause: a
  });
}
var yn,
  _n,
  wn = null;
var vn = /*#__PURE__*/function (_Ot) {
  (0, _inherits2.default)(vn, _Ot);
  var _super9 = _createSuper(vn);
  function vn(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, vn);
    _this15 = _super9.call(this, e), _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(vn, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37() {
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (this.isLogin()) {
                  _context37.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context37.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context37.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.scopedGlobalCache.mpWeixinCode) {
                  _context37.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context38.next = 2;
                  break;
                }
                return _context38.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(wn && wn.expireTime)) {
                  _context38.next = 6;
                  break;
                }
                e = Date.now();
                if (!(wn.expireTime - e > 0)) {
                  _context38.next = 6;
                  break;
                }
                return _context38.abrupt("return", (this.userEncryptKey = wn, this.userEncryptKey));
              case 6:
                return _context38.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      wn = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(mn(_objectSpread(_objectSpread({}, pn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context39.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context39.abrupt("return", {
                  verifyClientSign: hn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === re().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode
                });
              case 7:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context40.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode
                };
                return _context40.abrupt("return", this.secretType === Pt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: hn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === re().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function platformEncryptData(_x33) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                t = e.content;
                _context41.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context41.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context41.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = ln.utils.utf8.toBytes(n),
                    o = new ln.ModeOfOperation.cbc(r, i),
                    a = ln.padding.pkcs7.strip(o.decrypt(s));
                  return ln.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function platformDecryptResult(_x34) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }]);
  return vn;
}(Ot);
function Sn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s10) {
    var r = t[_s10];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref29.type,
            t = _ref29.data,
            r = _ref29.errCode,
            i = _ref29.errMsg,
            o = _ref29.errSubject,
            a = _ref29.message;
          "success" === e ? n(t) : s(mn({
            errCode: r,
            errMsg: gn[r] || i || a,
            errSubject: o
          }));
        }])) : s(mn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s10 = 0; _s10 < t.length; _s10++) {
    _loop(_s10);
  }
  return n;
}
var kn = /*#__PURE__*/function (_Ot2) {
  (0, _inherits2.default)(kn, _Ot2);
  var _super10 = _createSuper(kn);
  function kn(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, kn);
    _this17 = _super10.call(this, e), _this17.appUtils = _objectSpread({}, Sn(uni.requireNativePlugin("plus"))), _this17.systemInfo = yn || (yn = re());
    return _this17;
  }
  (0, _createClass2.default)(kn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context42.sent;
                return _context42.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context43.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context43.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context43.t0 = _context43.sent.result;
                if (_context43.t0) {
                  _context43.next = 10;
                  break;
                }
                _context43.t0 = {};
              case 10:
                n = _context43.t0;
                if (!(0 !== n.errCode)) {
                  _context43.next = 13;
                  break;
                }
                throw function (e) {
                  return new Q({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || dn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context43.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44() {
        var _this18 = this;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.t0 = !0;
                _context44.next = 3;
                return this.hasClientKey();
              case 3:
                _context44.t1 = _context44.sent;
                if (!(_context44.t0 !== _context44.t1)) {
                  _context44.next = 6;
                  break;
                }
                return _context44.abrupt("return", (this.scopedGlobalCache.initPromise && "rejected" !== this.scopedGlobalCache.initStatus || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = "fullfilled";
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = "rejected", e;
                })), this.scopedGlobalCache.initPromise));
              case 6:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.ensureClientKey();
              case 2:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context46.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context46.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context47.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context47.abrupt("return", this.secretType === Pt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context48.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context48.sent;
                return _context48.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }]);
  return kn;
}(Ot);
function In() {
  var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref30.secretType;
  return e === Ct || e === Pt || e === Et;
}
function bn() {
  var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref31.name,
    _ref31$data = _ref31.data,
    t = _ref31$data === void 0 ? {} : _ref31$data;
  return "app" === S && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Tn() {
  var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref32.provider,
    t = _ref32.spaceId,
    n = _ref32.functionName;
  var _re = re(),
    s = _re.appId,
    r = _re.uniPlatform,
    i = _re.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref33.provider,
      t = _ref33.spaceId;
    var n = v;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), mn(fn);
}
function An(_ref34) {
  var e = _ref34.functionName,
    t = _ref34.result,
    n = _ref34.logPvd;
  if (this.__dev__.debugLog && t && t.requestId) {
    var _s11 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s11, "[/").concat(n, "-request]"));
  }
}
function Cn(e) {
  var t = e.callFunction,
    n = function n(_n7) {
      var _this19 = this;
      var s = _n7.name;
      _n7.data = vt.call(e, {
        data: _n7.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb"
        }[this.config.provider],
        i = In(_n7),
        o = bn(_n7),
        a = i || o;
      return t.call(this, _n7).then(function (e) {
        return e.errCode = 0, !a && An.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && An.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref35 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref35$message = _ref35.message,
            e = _ref35$message === void 0 ? "" : _ref35$message,
            _ref35$extraInfo = _ref35.extraInfo,
            t = _ref35$extraInfo === void 0 ? {} : _ref35$extraInfo,
            _ref35$formatter = _ref35.formatter,
            n = _ref35$formatter === void 0 ? [] : _ref35$formatter;
          for (var _s12 = 0; _s12 < n.length; _s12++) {
            var _n$_s = n[_s12],
              _r3 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r3);
            if (!_a) continue;
            var _c = _i3;
            for (var _e23 = 1; _e23 < _a.length; _e23++) {
              _c = Tt(_c, "{$".concat(_e23, "}"), _a[_e23]);
            }
            for (var _e24 in t) {
              _c = Tt(_c, "{".concat(_e24, "}"), t[_e24]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n7.name, "]: ").concat(e.message),
          formatter: kt,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, y && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && I ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = St), o = St) : o = n, o = o.bind(e), bn(t)) a = n.call(e, t);else if (function (_ref36) {
      var e = _ref36.name,
        _ref36$data = _ref36.data,
        t = _ref36$data === void 0 ? {} : _ref36$data;
      return "mp-weixin" === S && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (In(t)) {
      a = new _n({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Tn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new _n({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
_n = "mp-weixin" !== S && "app" !== S ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw mn({
      message: "Platform ".concat(S, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : w ? "mp-weixin" === S ? vn : kn : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw mn({
      message: "Platform ".concat(S, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Pn = Symbol("CLIENT_DB_INTERNAL");
function En(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Pn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t10 = e[n];
        return "function" == typeof _t10 ? _t10.bind(e) : _t10;
      }
      return t.get(e, n, s);
    }
  });
}
function On(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var xn = ["db.Geo", "db.command", "command.aggregate"];
function Un(e, t) {
  return xn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Rn(e) {
  switch (d(e)) {
    case "array":
      return e.map(function (e) {
        return Rn(e);
      });
    case "object":
      return e._internalType === Pn || Object.keys(e).forEach(function (t) {
        e[t] = Rn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function Ln(e) {
  return e && e.content && e.content.$method;
}
var Nn = /*#__PURE__*/function () {
  function Nn(e, t, n) {
    (0, _classCallCheck2.default)(this, Nn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Nn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Rn(e.$param)
          };
        })
      };
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Ln(e),
          _n8 = Ln(e.prevStage);
        if ("aggregate" === t && "collection" === _n8 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === Ln(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Ln(e),
          _n9 = Ln(e.prevStage);
        if ("aggregate" === t && "command" === _n9) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Dn({
          $method: e,
          $param: Rn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Rn(t)
      }), y) {
        var _e25 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t11 = _e25 && _e25.$param;
        _t11 && 1 === _t11.length && "string" == typeof _e25.$param[0] && _e25.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Nn;
}();
function Dn(e, t, n) {
  return En(new Nn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Un(s, t) ? Dn({
        $method: t
      }, e, n) : function () {
        return Dn({
          $method: t,
          $param: Rn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Fn(_ref37) {
  var e = _ref37.path,
    t = _ref37.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }]);
    return _class4;
  }();
}
function qn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return En(new e(t), {
    get: function get(e, t) {
      return Un("db", t) ? Dn({
        $method: t
      }, null, e) : function () {
        return Dn({
          $method: t,
          $param: Rn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Kn = /*#__PURE__*/function (_ref38) {
  (0, _inherits2.default)(Kn, _ref38);
  var _super11 = _createSuper(Kn);
  function Kn() {
    (0, _classCallCheck2.default)(this, Kn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Kn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref39) {
      var _this20 = this;
      var e = _ref39.action,
        t = _ref39.command,
        n = _ref39.multiCommand,
        s = _ref39.queryList;
      function r(e, t) {
        if (n && s) for (var _n10 = 0; _n10 < s.length; _n10++) {
          var _r4 = s[_n10];
          _r4.udb && "function" == typeof _r4.udb.setResult && (t ? _r4.udb.setResult(t) : _r4.udb.setResult(e.result.dataList[_n10]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), U(R(o, "fail"), e).then(function () {
          return U(R(o, "complete"), e);
        }).then(function () {
          return r(null, e), z(D, {
            type: K,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = U(R(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e26 = 0; _e26 < u.length; _e26++) {
          var _u$_e = u[_e26],
            _t12 = _u$_e.level,
            _n11 = _u$_e.message,
            _s13 = _u$_e.detail,
            _r5 = console["app" === S && "warn" === _t12 ? "error" : _t12] || console.log;
          var _i4 = "[System Info]" + _n11;
          _s13 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s13)), _r5(_i4);
        }
        if (t) {
          return a(new Q({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ee({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), z(q, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t13) {
          var _l$_t = l[_t13],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t14 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t14;
              }
            });
          }
        };
        for (var _t13 = 0; _t13 < l.length; _t13++) {
          _loop2(_t13);
        }
        return function (e) {
          return U(R(o, "success"), e).then(function () {
            return U(R(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return z(D, {
              type: K,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new Q({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Kn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref40$uniClient = _ref40.uniClient,
      e = _ref40$uniClient === void 0 ? {} : _ref40$uniClient,
      _ref40$isJQL = _ref40.isJQL,
      t = _ref40$isJQL === void 0 ? !1 : _ref40$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = C("_globalUniCloudDatabaseCallback")), t || (this.auth = On(this._authCallBacks)), this._isJQL = t, Object.assign(this, On(this._dbCallBacks)), this.env = En({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = En({}, {
      get: function get(e, t) {
        return Fn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Fn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Fn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Mn = "token无效，跳转登录页面",
  jn = "token过期，跳转登录页面",
  Bn = {
    TOKEN_INVALID_TOKEN_EXPIRED: jn,
    TOKEN_INVALID_INVALID_CLIENTID: Mn,
    TOKEN_INVALID: Mn,
    TOKEN_INVALID_WRONG_TOKEN: Mn,
    TOKEN_INVALID_ANONYMOUS_USER: Mn
  },
  $n = {
    "uni-id-token-expired": jn,
    "uni-id-check-token-failed": Mn,
    "uni-id-token-not-exist": Mn,
    "uni-id-check-device-feature-failed": Mn
  };
function Wn(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function zn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Wn(t, e.path)) : !1 === e.needLogin && s.push(Wn(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Jn(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Hn() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function Gn() {
  return Jn(Hn());
}
function Vn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Jn(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var Yn = !!_pages.default.uniIdRouter;
var _ref41 = function () {
    var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref24$pages = _ref24.pages,
      e = _ref24$pages === void 0 ? [] : _ref24$pages,
      _ref24$subPackages = _ref24.subPackages,
      n = _ref24$subPackages === void 0 ? [] : _ref24$subPackages,
      _ref24$uniIdRouter = _ref24.uniIdRouter,
      s = _ref24$uniIdRouter === void 0 ? {} : _ref24$uniIdRouter,
      _ref24$tabBar = _ref24.tabBar,
      r = _ref24$tabBar === void 0 ? {} : _ref24$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _zn = zn(e),
      c = _zn.needLoginPage,
      u = _zn.notNeedLoginPage,
      _ref26 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _zn2 = zn(r, s),
            i = _zn2.needLoginPage,
            o = _zn2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref26.needLoginPage,
      h = _ref26.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Vn(i, r)
    };
  }(),
  Qn = _ref41.loginPage,
  Xn = _ref41.routerNeedLogin,
  Zn = _ref41.resToLogin,
  es = _ref41.needLoginPage,
  ts = _ref41.notNeedLoginPage,
  ns = _ref41.loginPageInTabBar;
if (es.indexOf(Qn) > -1) throw new Error("Login page [".concat(Qn, "] should not be \"needLogin\", please check your pages.json"));
function ss(e) {
  var t = Gn();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e27 = 0; _e27 < r.length; _e27++) {
    var _t15 = r[_e27];
    ".." === _t15 ? i.pop() : "." !== _t15 && i.push(_t15);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function rs(e) {
  var t = Jn(ss(e));
  return !(ts.indexOf(t) > -1) && (es.indexOf(t) > -1 || Xn.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function is(_ref42) {
  var e = _ref42.redirect;
  var t = Jn(e),
    n = Jn(Qn);
  return Gn() !== n && t !== n;
}
function os() {
  var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref43.api,
    t = _ref43.redirect;
  if (!t || !is({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(Qn, t);
  ns ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function as() {
  var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref44.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _Z3 = Z(),
        e = _Z3.token,
        t = _Z3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e28 = "uni-id-token-expired";
          n = {
            errCode: _e28,
            errMsg: $n[_e28]
          };
        }
      } else {
        var _e29 = "uni-id-check-token-failed";
        n = {
          errCode: _e29,
          errMsg: $n[_e29]
        };
      }
      return n;
    }();
  if (rs(e) && n) {
    n.uniIdRedirectUrl = e;
    if (B(F).length > 0) return setTimeout(function () {
      z(F, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function cs() {
  !function () {
    var e = Hn(),
      _as = as({
        url: e
      }),
      t = _as.abortLoginPageJump,
      n = _as.autoToLoginPage;
    t || n && os({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t16) {
    var n = e[_t16];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _as2 = as({
            url: e.url
          }),
          t = _as2.abortLoginPageJump,
          s = _as2.autoToLoginPage;
        return t ? e : s ? (os({
          api: n,
          redirect: ss(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t16 = 0; _t16 < e.length; _t16++) {
    _loop3(_t16);
  }
}
function us() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          var t = e.errCode;
          return t in $n;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          var t = e.errCode;
          return t in Bn;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = B(F);
      G().then(function () {
        var n = Hn();
        if (n && is({
          redirect: n
        })) return t.length > 0 ? z(F, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (Qn && os({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function ls(e) {
  !function (e) {
    e.onResponse = function (e) {
      $(D, e);
    }, e.offResponse = function (e) {
      W(D, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      $(F, e);
    }, e.offNeedLogin = function (e) {
      W(F, e);
    }, Yn && (C("_globalUniCloudStatus").needLoginInit || (C("_globalUniCloudStatus").needLoginInit = !0, G().then(function () {
      cs.call(e);
    }), Zn && us.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      $(q, e);
    }, e.offRefreshToken = function (e) {
      W(q, e);
    };
  }(e);
}
var hs;
var ds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  fs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function ps() {
  var e = Z().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(hs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
hs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !fs.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ds.indexOf(e.charAt(i++)) << 18 | ds.indexOf(e.charAt(i++)) << 12 | (n = ds.indexOf(e.charAt(i++))) << 6 | (s = ds.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var gs = s(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref45) {
      var s = _ref45.onChooseFile,
        r = _ref45.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t17 = s(e);
          if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  ms = n(gs);
var ys = "manual";
function _s(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === ys) return;
        var n = !1;
        var s = [];
        for (var _r6 = 2; _r6 < e.length; _r6++) {
          e[_r6] !== t[_r6] && (s.push(e[_r6]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref46$getone = _ref46.getone,
          e = _ref46$getone === void 0 ? !1 : _ref46$getone,
          t = _ref46.success,
          n = _ref46.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n12;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n12 = n).collection.apply(_n12, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          f = void 0 !== t.getcount ? t.getcount : this.getcount,
          p = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: f
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ws(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n13 = n,
      s = _n13.customUI,
      r = _n13.loadingOptions,
      i = _n13.errorOptions,
      o = _n13.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        return function () {
          var _ref47 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref47.fn,
            t = _ref47.interceptorName,
            n = _ref47.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context49.prev = 2;
                    _context49.next = 5;
                    return U(R(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context49.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context49.sent;
                    _context49.next = 10;
                    return U(R(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context49.abrupt("return", i);
                  case 13:
                    _context49.prev = 13;
                    _context49.t0 = _context49["catch"](2);
                    o = _context49.t0;
                    _context49.next = 18;
                    return U(R(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context49.prev = 19;
                    _context49.next = 22;
                    return U(R(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context49.finish(19);
                  case 23:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51() {
              var h,
                _len3,
                u,
                _key3,
                d,
                f,
                _ref49,
                p,
                g,
                m,
                y,
                _e30,
                _yield,
                _t18,
                _n14,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, u = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        u[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: l,
                        data: {
                          method: c,
                          params: u
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      f = !1;
                      _context51.prev = 5;
                      _context51.next = 8;
                      return e.callFunction(d);
                    case 8:
                      h = _context51.sent;
                      _context51.next = 14;
                      break;
                    case 11:
                      _context51.prev = 11;
                      _context51.t0 = _context51["catch"](5);
                      f = !0, h = {
                        result: new Q(_context51.t0)
                      };
                    case 14:
                      _ref49 = h.result || {}, p = _ref49.errSubject, g = _ref49.errCode, m = _ref49.errMsg, y = _ref49.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ee(y), z(q, _objectSpread({}, y))), g)) {
                        _context51.next = 39;
                        break;
                      }
                      _e30 = m;
                      if (!(f && o)) {
                        _context51.next = 24;
                        break;
                      }
                      _context51.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: u,
                        errSubject: p,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context51.t1 = _context51.sent.errMsg;
                      if (_context51.t1) {
                        _context51.next = 23;
                        break;
                      }
                      _context51.t1 = m;
                    case 23:
                      _e30 = _context51.t1;
                    case 24:
                      if (!a) {
                        _context51.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context51.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e30,
                        icon: "none"
                      });
                      _context51.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context51.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context51.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50() {
                        var _ref51,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args3 = arguments;
                        return _regenerator.default.wrap(function _callee50$(_context50) {
                          while (1) {
                            switch (_context50.prev = _context50.next) {
                              case 0:
                                _ref51 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref51.title, t = _ref51.content, n = _ref51.showCancel, s = _ref51.cancelText, r = _ref51.confirmText;
                                return _context50.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context50.stop();
                            }
                          }
                        }, _callee50);
                      }))({
                        title: "提示",
                        content: _e30,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context51.sent;
                      _t18 = _yield.confirm;
                      if (!(i.retry && _t18)) {
                        _context51.next = 37;
                        break;
                      }
                      return _context51.abrupt("return", s.apply(void 0, u));
                    case 37:
                      _n14 = new Q({
                        subject: p,
                        code: g,
                        message: m,
                        requestId: h.requestId
                      });
                      throw _n14.detail = h.result, z(D, {
                        type: j,
                        content: _n14
                      }), _n14;
                    case 39:
                      return _context51.abrupt("return", (z(D, {
                        type: j,
                        content: h.result
                      }), h.result));
                    case 40:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, null, [[5, 11]]);
            }));
            function s() {
              return _s14.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref52 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref52.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function vs(e) {
  return C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ss() {
  return _Ss.apply(this, arguments);
}
function _Ss() {
  _Ss = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
    var _ref56,
      _ref56$callLoginByWei,
      e,
      t,
      n,
      s,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _ref56 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref56$callLoginByWei = _ref56.callLoginByWeixin, e = _ref56$callLoginByWei === void 0 ? !1 : _ref56$callLoginByWei;
            t = vs(this);
            if (!("mp-weixin" !== S)) {
              _context53.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(S, "`"));
          case 4:
            _context53.next = 6;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 6:
            n = _context53.sent;
            s = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context53.next = 10;
            return s.secureNetworkHandshakeByWeixin({
              code: n,
              callLoginByWeixin: e
            });
          case 10:
            t.mpWeixinCode = n;
            return _context53.abrupt("return", {
              code: n
            });
          case 12:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53, this);
  }));
  return _Ss.apply(this, arguments);
}
function ks(_x37) {
  return _ks.apply(this, arguments);
}
function _ks() {
  _ks = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54(e) {
    var t;
    return _regenerator.default.wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            t = vs(this);
            return _context54.abrupt("return", (t.initPromise || (t.initPromise = Ss.call(this, e)), t.initPromise));
          case 2:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54, this);
  }));
  return _ks.apply(this, arguments);
}
function Is(e) {
  return function () {
    var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref53$callLoginByWei = _ref53.callLoginByWeixin,
      t = _ref53$callLoginByWei === void 0 ? !1 : _ref53$callLoginByWei;
    return ks.call(e, {
      callLoginByWeixin: t
    });
  };
}
function bs(_x38, _x39) {
  return _bs.apply(this, arguments);
}
function _bs() {
  _bs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context55.prev = 1;
            _context55.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              X.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context55.sent;
            return _context55.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context55.prev = 8;
            _context55.t0 = _context55["catch"](1);
            return _context55.abrupt("return", !1);
          case 11:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55, null, [[1, 8]]);
  }));
  return _bs.apply(this, arguments);
}
function Ts(e) {
  if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;
  var t = Promise.resolve();
  var n;
  n = 1, t = new Promise(function (e) {
    setTimeout(function () {
      e();
    }, n);
  }), e.isReady = !1, e.isDefault = !1;
  var s = e.auth();
  e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {
    return s.getLoginState();
  }).then(function (e) {
    return e ? Promise.resolve() : s.signInAnonymously();
  }).then(function () {
    if (!y) return Promise.resolve();
    if ("app" === S) {
      var _re2 = re(),
        _e31 = _re2.osName,
        _t19 = _re2.osVersion;
      "ios" === _e31 && function (e) {
        if (!e || "string" != typeof e) return 0;
        var t = e.match(/^(\d+)./);
        return t && t[1] ? parseInt(t[1]) : 0;
      }(_t19) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    if (y && e.__dev__.debugInfo) {
      var _e$__dev__$debugInfo = e.__dev__.debugInfo,
        _t20 = _e$__dev__$debugInfo.address,
        _n15 = _e$__dev__$debugInfo.servePort;
      return function () {
        var _ref54 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52(e, t) {
          var n, _s15, _r7;
          return _regenerator.default.wrap(function _callee52$(_context52) {
            while (1) {
              switch (_context52.prev = _context52.next) {
                case 0:
                  _s15 = 0;
                case 1:
                  if (!(_s15 < e.length)) {
                    _context52.next = 11;
                    break;
                  }
                  _r7 = e[_s15];
                  _context52.next = 5;
                  return bs(_r7, t);
                case 5:
                  if (!_context52.sent) {
                    _context52.next = 8;
                    break;
                  }
                  n = _r7;
                  return _context52.abrupt("break", 11);
                case 8:
                  _s15++;
                  _context52.next = 1;
                  break;
                case 11:
                  return _context52.abrupt("return", {
                    address: n,
                    port: t
                  });
                case 12:
                case "end":
                  return _context52.stop();
              }
            }
          }, _callee52);
        }));
        return function (_x40, _x41) {
          return _ref54.apply(this, arguments);
        };
      }()(_t20, _n15);
    }
  }).then(function () {
    var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref55.address,
      n = _ref55.port;
    if (!y) return Promise.resolve();
    var s = console["app" === S ? "error" : "warn"];
    if (t) e.__dev__.localAddress = t, e.__dev__.localPort = n;else if (e.__dev__.debugInfo) {
      var _t21 = "";
      "remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = !0, _t21 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : _t21 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", _t21 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === S && (_t21 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === S.indexOf("mp-") && (_t21 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s(_t21);
    }
  }).then(function () {
    te(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";
  }).catch(function (t) {
    console.error(t), e.initUniCloudStatus = "rejected";
  });
}
var As = {
  tcb: yt,
  tencent: yt,
  aliyun: he,
  private: wt
};
var Cs = new ( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
  }
  (0, _createClass2.default)(_class6, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = As[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), t.__dev__ = {}, t.__dev__.debugLog = y && ("web" === S && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === S);
      var s = k;
      y && s && !s.code && (t.__dev__.debugInfo = s), Ts(t), t.reInit = function () {
        Ts(this);
      }, Cn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = qn(Kn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = qn(Kn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = ps, e.chooseAndUploadFile = ms.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return _s(e);
          }
        }), e.importObject = ws(e), e.initSecureNetworkByWeixin = Is(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return t.reInit(), n.apply(t, Array.from(arguments));
        }, t[e] = Y(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class6;
}())();
(function () {
  var e = I;
  var t = {};
  if (e && 1 === e.length) t = e[0], Cs = Cs.init(t), Cs.isDefault = !0;else {
    var _t22 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n16;
    _n16 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : b ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t22.forEach(function (e) {
      Cs[e] = function () {
        return console.error(_n16), Promise.reject(new Q({
          code: "SYS_ERR",
          message: _n16
        }));
      };
    });
  }
  Object.assign(Cs, {
    get mixinDatacom() {
      return _s(Cs);
    }
  }), ls(Cs), Cs.addInterceptor = O, Cs.removeInterceptor = x, Cs.interceptObject = L, y && "web" === S && (window.uniCloud = Cs);
})();
var Ps = Cs;
exports.default = Ps;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 38), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 39)["default"]))

/***/ }),
/* 38 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 39 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 40));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 46));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 38)))

/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 41);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 42);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 43);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 45);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 41 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 42 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 43 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 44);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 44 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 45 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 46 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 47 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 48)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 48 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 49 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 50);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 51);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 43);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 52);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 50 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 44);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 51 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 52 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 53 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 54 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 55 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 56 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 57);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 57 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 58 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 59);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 59 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 60 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 61 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 60);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 57);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 62);
var construct = __webpack_require__(/*! ./construct.js */ 63);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 62 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 63 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 57);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 64);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 64 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 65 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 40));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 54));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 55));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 38)))

/***/ }),
/* 66 */
/*!***********************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages.json?{"type":"origin-pages-json"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "app-plus": {
        "titleNView": false
      },
      "enablePullDownRefresh": true
    },
    "nvue": true
  }, {
    "path": "pages/friend/friend",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    },
    "nvue": true
  }, {
    "path": "pages/vlog/vlog",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    },
    "nvue": true
  }, {
    "path": "pages/publish/publish",
    "style": {
      "navigationBarTitleText": "发布视频"
    },
    "nvue": true
  }, {
    "path": "pages/me/me",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/vlogerInfo",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    },
    "nvue": true
  }, {
    "path": "pages/message/message",
    "style": {
      "navigationBarTitleText": "消息",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/publish/preview",
    "style": {
      "navigationBarTitleText": "预览视频",
      "enablePullDownRefresh": false
    },
    "nvue": true
  }, {
    "path": "pages/search/search",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    }
  }, {
    "path": "pages/search/searchList",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    },
    "nvue": true
  }, {
    "path": "pages/qrcode/qrcode",
    "style": {
      "app-plus": {
        "titleNView": false,
        "navigationBarTextStyle": "black"
      }
    }
  }, {
    "path": "pages/loginRegist/loginRegist",
    "style": {
      "app-plus": {
        "titleNView": false,
        "navigationBarTextStyle": "black"
      }
    }
  }, {
    "path": "pages/me/myBackImg",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    }
  }, {
    "path": "pages/me/myFace",
    "style": {
      "app-plus": {
        "titleNView": false
      }
    }
  }, {
    "path": "pages/me/myInfo",
    "style": {
      "navigationBarTitleText": "修改个人资料",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/me/modifyNickname",
    "style": {
      "navigationBarTitleText": "修改昵称",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/modifyIMoocNum",
    "style": {
      "navigationBarTitleText": "修改慕课号",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/modifyDesc",
    "style": {
      "navigationBarTitleText": "修改简介",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/modifySex",
    "style": {
      "navigationBarTitleText": "修改性别",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/modifyBirthday",
    "style": {
      "navigationBarTitleText": "修改生日",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/modifyLocation",
    "style": {
      "navigationBarTitleText": "修改所在地",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    },
    "nvue": true
  }, {
    "path": "pages/me/chooseProvince",
    "style": {
      "navigationBarTitleText": "选择省份",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/me/chooseCity",
    "style": {
      "navigationBarTitleText": "选择地区",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/me/settings",
    "style": {
      "navigationBarTitleText": "设置",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/me/myFans",
    "style": {
      "navigationBarTitleText": "我的粉丝",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }, {
    "path": "pages/me/myFollows",
    "style": {
      "navigationBarTitleText": "我的关注",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#181b27"
    },
    "nvue": true
  }],
  "globalStyle": {
    "navigationBarBackgroundColor": "#000000",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "uni-app",
    "backgroundColor": "#000000"
  },
  "tabBar": {
    "color": "#999696",
    "selectedColor": "#FFFFFF",
    "borderStyle": "#1c1b1b",
    "backgroundColor": "#0e0d0d",
    "fontSize": "16px",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/friend/friend",
      "text": "朋友"
    }, {
      "pagePath": "pages/message/message",
      "text": "消息"
    }, {
      "pagePath": "pages/me/me",
      "text": "我"
    }],
    "midButton": {
      "height": "38px",
      "iconWidth": "40px",
      "iconPath": "static/images/douyin.png"
    }
  },
  "nvue": {
    "pages": [{
      "path": "pages/me/myFollows.html",
      "style": {
        "navigationBarTitleText": "我的关注",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/myFans.html",
      "style": {
        "navigationBarTitleText": "我的粉丝",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/settings.html",
      "style": {
        "navigationBarTitleText": "设置",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/chooseCity.html",
      "style": {
        "navigationBarTitleText": "选择地区",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/chooseProvince.html",
      "style": {
        "navigationBarTitleText": "选择省份",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/modifyLocation.html",
      "style": {
        "navigationBarTitleText": "修改所在地",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/modifyBirthday.html",
      "style": {
        "navigationBarTitleText": "修改生日",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/modifySex.html",
      "style": {
        "navigationBarTitleText": "修改性别",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/modifyDesc.html",
      "style": {
        "navigationBarTitleText": "修改简介",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/modifyIMoocNum.html",
      "style": {
        "navigationBarTitleText": "修改慕课号",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/modifyNickname.html",
      "style": {
        "navigationBarTitleText": "修改昵称",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#181b27",
        "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "保存",
              "color": "#ef274d",
              "width": "60px",
              "fontSize": "15px",
              "fontWeight": "bold"
            }]
          }
        },
        "titleNView": {
          "buttons": [{
            "text": "保存",
            "color": "#ef274d",
            "width": "60px",
            "fontSize": "15px",
            "fontWeight": "bold"
          }]
        }
      }
    }, {
      "path": "pages/me/myInfo.html",
      "style": {
        "navigationBarTitleText": "修改个人资料",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/search/searchList.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "titleNView": false
      }
    }, {
      "path": "pages/publish/preview.html",
      "style": {
        "navigationBarTitleText": "预览视频",
        "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/message/message.html",
      "style": {
        "navigationBarTitleText": "消息",
        "navigationBarBackgroundColor": "#181b27"
      }
    }, {
      "path": "pages/me/vlogerInfo.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "titleNView": false
      }
    }, {
      "path": "pages/me/me.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "titleNView": false
      }
    }, {
      "path": "pages/publish/publish.html",
      "style": {
        "navigationBarTitleText": "发布视频"
      }
    }, {
      "path": "pages/vlog/vlog.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "titleNView": false
      }
    }, {
      "path": "pages/friend/friend.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "titleNView": false
      }
    }, {
      "path": "pages/index/index.html",
      "style": {
        "app-plus": {
          "titleNView": false
        },
        "enablePullDownRefresh": true,
        "titleNView": false
      }
    }],
    "entryPagePath": "pages/index/index"
  }
};
exports.default = _default;

/***/ }),
/* 67 */
/*!**********************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/pages.json?{"type":"stat"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__800FF13"
};
exports.default = _default;

/***/ }),
/* 68 */
/*!***************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/App.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 69);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ007QUFDaE0sZ0JBQWdCLG9NQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!****************************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../JavaLearning/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 70);\n/* harmony import */ var _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_JavaLearning_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1wQixDQUFnQixxcEJBQUcsRUFBQyIsImZpbGUiOiI2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9KYXZhTGVhcm5pbmcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0phdmFMZWFybmluZy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSmF2YUxlYXJuaW5nL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _area_province = _interopRequireDefault(__webpack_require__(/*! ./json/area_province.js */ 72));\nvar _area_city = _interopRequireDefault(__webpack_require__(/*! ./json/area_city.js */ 73));\nvar _area_district = _interopRequireDefault(__webpack_require__(/*! ./json/area_district.js */ 74));\nvar _default = {\n  globalData: {\n    serverUrl: \"http://192.168.43.194:8099\",\n    // 开发环境，不能使用localhost\n\n    provinceList: _area_province.default,\n    cityList: _area_city.default,\n    districtList: _area_district.default\n  },\n  onLaunch: function onLaunch() {\n    __f__(\"log\", \"onLaunch...测试调试信息的打印\", \" at App.vue:16\");\n    var me = this;\n    uni.onTabBarMidButtonTap(function () {\n      // 未登录不能发布视频\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          }\n        });\n        return;\n      }\n\n      // console.log('onTabBarMidButtonTap');\n      uni.switchTab({\n        url: \"../me/me\"\n      });\n      uni.chooseVideo({\n        sourceType: ['album'],\n        success: function success(e) {\n          uni.navigateTo({\n            url: \"/pages/publish/publish?fileObjectEvent=\" + JSON.stringify(e)\n          });\n\n          /**\n           * 或者采用uniCloud，在客户端完成上传，减少链路，因为文件大，通信链路和耗时是双倍的\n           */\n          var times = new Date().getTime();\n        }\n      });\n    });\n  },\n  onShow: function onShow() {},\n  onHide: function onHide() {},\n  methods: {\n    getDefaultVlogList: function getDefaultVlogList() {\n      var list = [{\n        vlogId: \"1001\",\n        vlogerId: \"1001\",\n        vlogerFace: \"/static/face/face-arrow-2.jpg\",\n        vlogerName: \"@风间影月\",\n        content: \"第1期 慕课网架构师Redis训练营免费啦~\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/7a604f54-c4a2-4eb3-81c5-67983502ea0b.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/46aebcb6-2f9a-4e50-8c0f-dbfcad4b3f2e.png',\n        isLike: 1,\n        play: false\n      }, {\n        vlogId: \"1002\",\n        vlogerId: \"1002\",\n        vlogerFace: \"/static/face/face-cat.png\",\n        vlogerName: \"@风间影月\",\n        content: \"第2期 Java架构师Redis训练营学习曲线~\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/97bb62b4-2437-40c1-8f8e-3391b2f4414e.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/8759ff92-e916-4a9c-8878-756b61b62d7e.png',\n        isLike: 1,\n        play: false\n      }, {\n        vlogId: \"1003\",\n        vlogerId: \"1003\",\n        vlogerFace: \"/static/face/face-arrow-1.png\",\n        vlogerName: \"@绿箭侠\",\n        content: \"第3期 程序员学习Redis的必要性\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/77e257bd-f334-4583-93f5-3bdcb7362792.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/21e86755-aa19-482d-bd24-ce8245cacb2e.png',\n        isLike: 0,\n        play: false\n      }, {\n        vlogId: \"1004\",\n        vlogerId: \"1004\",\n        vlogerFace: \"/static/face/face-lee.png\",\n        vlogerName: \"@蝙蝠侠\",\n        content: \"第4期 学习Redis主从哨兵集群必要性\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/306d7bbc-17c6-4ac5-809d-d9998f53052b.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/4e9bfd1f-fb19-4b38-8855-50c82565757c.png',\n        isLike: 0,\n        play: false\n      }, {\n        vlogId: \"1005\",\n        vlogerId: \"1005\",\n        vlogerFace: \"/static/face/face-cat.png\",\n        vlogerName: \"@钢铁侠\",\n        content: \"第5期 Redis训练营内容\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/b278b673-847b-41ca-a6bc-a80a5fa17dc9.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/e2877fe1-3b62-48e4-a571-db9d99cf8b11.png',\n        isLike: 0,\n        play: false\n      }, {\n        vlogId: \"1006\",\n        vlogerId: \"1006\",\n        vlogerFace: \"/static/face/face-cat.png\",\n        vlogerName: \"@蜘蛛侠\",\n        content: \"第6期 2021年7月程序员薪资出炉\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/49bf8d72-1d05-48d0-8f36-829c5605378c.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/06ae27c1-9d85-403b-bf58-850d4a647044.png',\n        isLike: 1,\n        play: false\n      }, {\n        vlogId: \"1007\",\n        vlogerId: \"1007\",\n        vlogerFace: \"/static/face/face-arrow-1.png\",\n        vlogerName: \"@闪电侠\",\n        content: \"第7期 什么是内卷？各行各业的卷中卷\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/7835c4ef-2c01-497b-aa61-adfd538a2d6a.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/be3f68af-821c-4276-a23b-045bb99ceb7c.png',\n        isLike: 0,\n        play: false\n      }, {\n        vlogId: \"1008\",\n        vlogerId: \"1008\",\n        vlogerFace: \"/static/face/face-lee.png\",\n        vlogerName: \"@风间影月\",\n        content: \"第8期 程序员如何选择鸿蒙OS的开发语言？\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/fce36874-1458-438f-97be-eef241c382fb.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/72739f46-eeb9-48b3-9f9c-e76f909a1ebe.png',\n        isLike: 0,\n        play: false\n      }, {\n        vlogId: \"1009\",\n        vlogerId: \"1009\",\n        vlogerFace: \"/static/face/face-lee.png\",\n        vlogerName: \"@风间影月\",\n        content: \"第9期 为什么你的云服务器总是被黑被攻击？\",\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/a478559d-b304-49f5-92fc-03ec4431ea88.mp4',\n        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a510f11a-afcf-48f9-bcff-848ce1501f2f/e491896d-d6dc-48c2-a27b-6f4bfa7a70cc.png',\n        isLike: 0,\n        play: false\n      }];\n      return list;\n    },\n    graceNumber: function graceNumber(number) {\n      if (number == 0) {\n        return \"0\";\n      } else if (number > 999 && number <= 9999) {\n        return (number / 1000).toFixed(1) + 'k';\n      } else if (number > 9999 && number <= 99999) {\n        return (number / 10000).toFixed(1) + 'w';\n      } else if (number > 99999) {\n        return \"10w+\";\n      }\n      return number;\n    },\n    // 时间格式化时间为：多少分钟前、多少天前\n    // time 2020-09-10 20:20:20\n    getDateBeforeNow: function getDateBeforeNow(stringTime) {\n      // console.log(stringTime);\n      stringTime = new Date(stringTime.replace(/-/g, '/'));\n      var minute = 1000 * 60;\n      var hour = minute * 60;\n      var day = hour * 24;\n      var week = day * 7;\n      var month = day * 30;\n      var time1 = new Date().getTime(); //当前的时间戳\n      // console.log(time1);\n      // console.log(new Date(stringTime));\n      var time2 = Date.parse(new Date(stringTime)); //指定时间的时间戳\n      // console.log(time2);\n      var time = time1 - time2;\n      var result = null;\n      if (time < 0) {\n        // alert(\"设置的时间不能早于当前时间！\");\n        result = stringTime;\n      } else if (time / month >= 1) {\n        result = parseInt(time / month) + \"月前\";\n      } else if (time / week >= 1) {\n        result = parseInt(time / week) + \"周前\";\n      } else if (time / day >= 1) {\n        result = parseInt(time / day) + \"天前\";\n      } else if (time / hour >= 1) {\n        result = parseInt(time / hour) + \"小时前\";\n      } else if (time / minute >= 1) {\n        result = parseInt(time / minute) + \"分钟前\";\n      } else {\n        result = \"刚刚\";\n      }\n      // console.log(result);\n      return result;\n    },\n    // 判断是否为空\n    isStrEmpty: function isStrEmpty(str) {\n      if (str == null || str == undefined || str == \"\") {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    // 判断用户是否登录\n    userIsLogin: function userIsLogin() {\n      var userToken = this.getUserSessionToken();\n      var userInfo = this.getUserInfoSession();\n      // console.log(\"userInfo=\" + userInfo);\n      // console.log(\"userToken=\" + userToken);\n      if (!this.isStrEmpty(userToken) && !this.isStrEmpty(userInfo)) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    // 用户登录以后的session存取，token和userInfo\n    setUserSessionToken: function setUserSessionToken(token) {\n      uni.setStorageSync(\"userToken\", token);\n    },\n    getUserSessionToken: function getUserSessionToken() {\n      var token = uni.getStorageSync(\"userToken\");\n      if (this.isStrEmpty(token)) {\n        return \"\";\n      }\n      return token;\n    },\n    setUserInfoSession: function setUserInfoSession(user) {\n      uni.setStorageSync(\"userInfo\", JSON.stringify(user));\n    },\n    getUserInfoSession: function getUserInfoSession() {\n      var user = uni.getStorageSync(\"userInfo\");\n      if (this.isStrEmpty(user)) {\n        return null;\n      }\n      return JSON.parse(user);\n    },\n    clearUserInfo: function clearUserInfo() {\n      uni.removeStorageSync(\"userInfo\");\n      uni.removeStorageSync(\"userToken\");\n    },\n    // let date = new Date()\n    // dateFormat(\"YYYY-mm-dd HH:MM\", date)\n    dateFormat: function dateFormat(fmt, date) {\n      var ret;\n      var opt = {\n        \"Y+\": date.getFullYear().toString(),\n        // 年\n        \"m+\": (date.getMonth() + 1).toString(),\n        // 月\n        \"d+\": date.getDate().toString(),\n        // 日\n        \"H+\": date.getHours().toString(),\n        // 时\n        \"M+\": date.getMinutes().toString(),\n        // 分\n        \"S+\": date.getSeconds().toString() // 秒\n        // 有其他格式化字符需求可以继续添加，必须转化成字符串\n      };\n\n      for (var k in opt) {\n        ret = new RegExp(\"(\" + k + \")\").exec(fmt);\n        if (ret) {\n          fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, \"0\"));\n        }\n        ;\n      }\n      ;\n      return fmt;\n    },\n    // 获得星座\n    getAstro: function getAstro(m, d) {\n      return \"魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯\".substr(m * 2 - (d < \"102223444433\".charAt(m - 1) - -19) * 2, 2);\n    },\n    //下面写一个测试函数\n    testAstro: function testAstro(month, day) {\n      __f__(\"log\", month + \"月\" + day + \"日: \" + this.getAstro(month, day), \" at App.vue:291\");\n    },\n    // 获得生肖\n    getAnimal: function getAnimal(year) {\n      year = year % 12;\n      var animal = \"\";\n      switch (year) {\n        case 1:\n          animal = '鸡';\n          break;\n        case 2:\n          animal = '狗';\n          break;\n        case 3:\n          animal = '猪';\n          break;\n        case 4:\n          animal = '鼠';\n          break;\n        case 5:\n          animal = '牛';\n          break;\n        case 6:\n          animal = '虎';\n          break;\n        case 7:\n          animal = '兔';\n          break;\n        case 8:\n          animal = '龙';\n          break;\n        case 9:\n          animal = '蛇';\n          break;\n        case 10:\n          animal = '马';\n          break;\n        case 11:\n          animal = '羊';\n          break;\n        case 0:\n          animal = '候';\n          break;\n      }\n      ;\n      return animal;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 71)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwic2VydmVyVXJsIiwicHJvdmluY2VMaXN0IiwiY2l0eUxpc3QiLCJkaXN0cmljdExpc3QiLCJvbkxhdW5jaCIsIm1lIiwidW5pIiwib25UYWJCYXJNaWRCdXR0b25UYXAiLCJteVVzZXJJbmZvIiwiZ2V0QXBwIiwiZ2V0VXNlckluZm9TZXNzaW9uIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJ0aXRsZSIsImljb24iLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYW5pbWF0aW9uVHlwZSIsInN1Y2Nlc3MiLCJsb2dpbldvcmRzIiwic3dpdGNoVGFiIiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwiZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aW1lcyIsIkRhdGUiLCJnZXRUaW1lIiwib25TaG93Iiwib25IaWRlIiwibWV0aG9kcyIsImdldERlZmF1bHRWbG9nTGlzdCIsImxpc3QiLCJ2bG9nSWQiLCJ2bG9nZXJJZCIsInZsb2dlckZhY2UiLCJ2bG9nZXJOYW1lIiwiY29udGVudCIsImNvdmVyIiwiaXNMaWtlIiwicGxheSIsImdyYWNlTnVtYmVyIiwibnVtYmVyIiwidG9GaXhlZCIsImdldERhdGVCZWZvcmVOb3ciLCJzdHJpbmdUaW1lIiwicmVwbGFjZSIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJ3ZWVrIiwibW9udGgiLCJ0aW1lMSIsInRpbWUyIiwicGFyc2UiLCJ0aW1lIiwicmVzdWx0IiwicGFyc2VJbnQiLCJpc1N0ckVtcHR5Iiwic3RyIiwidW5kZWZpbmVkIiwidXNlcklzTG9naW4iLCJ1c2VyVG9rZW4iLCJnZXRVc2VyU2Vzc2lvblRva2VuIiwidXNlckluZm8iLCJzZXRVc2VyU2Vzc2lvblRva2VuIiwidG9rZW4iLCJzZXRTdG9yYWdlU3luYyIsImdldFN0b3JhZ2VTeW5jIiwic2V0VXNlckluZm9TZXNzaW9uIiwidXNlciIsImNsZWFyVXNlckluZm8iLCJyZW1vdmVTdG9yYWdlU3luYyIsImRhdGVGb3JtYXQiLCJmbXQiLCJkYXRlIiwicmV0Iiwib3B0IiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJrIiwiUmVnRXhwIiwiZXhlYyIsImxlbmd0aCIsInBhZFN0YXJ0IiwiZ2V0QXN0cm8iLCJtIiwiZCIsInN1YnN0ciIsImNoYXJBdCIsInRlc3RBc3RybyIsImdldEFuaW1hbCIsInllYXIiLCJhbmltYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBbUQsZUFDcEM7RUFDZEEsVUFBVSxFQUFFO0lBQ1hDLFNBQVMsRUFBRSw0QkFBNEI7SUFBRzs7SUFFMUNDLFlBQVksRUFBRUEsc0JBQVk7SUFDMUJDLFFBQVEsRUFBRUEsa0JBQVE7SUFDbEJDLFlBQVksRUFBRUE7RUFDZixDQUFDO0VBRURDLFFBQVEsRUFBRSxvQkFBVztJQUVwQixhQUFZLHNCQUFzQjtJQUdsQyxJQUFJQyxFQUFFLEdBQUcsSUFBSTtJQUNiQyxHQUFHLENBQUNDLG9CQUFvQixDQUFDLFlBQUk7TUFFNUI7TUFDQSxJQUFJQyxVQUFVLEdBQUdDLE1BQU0sRUFBRSxDQUFDQyxrQkFBa0IsRUFBRTtNQUM5QyxJQUFJRixVQUFVLElBQUksSUFBSSxFQUFFO1FBQ3ZCRixHQUFHLENBQUNLLFNBQVMsQ0FBQztVQUNiQyxRQUFRLEVBQUUsSUFBSTtVQUNkQyxLQUFLLEVBQUUsTUFBTTtVQUNiQyxJQUFJLEVBQUU7UUFDUCxDQUFDLENBQUM7UUFDRlIsR0FBRyxDQUFDUyxVQUFVLENBQUM7VUFDZEMsR0FBRyxFQUFFLDRCQUE0QjtVQUNqQ0MsYUFBYSxFQUFFLGlCQUFpQjtVQUNoQ0MsT0FBTyxxQkFBRztZQUNUYixFQUFFLENBQUNjLFVBQVUsR0FBRyxLQUFLO1VBQ3RCO1FBQ0QsQ0FBQyxDQUFDO1FBQ0Y7TUFDRDs7TUFFQTtNQUNBYixHQUFHLENBQUNjLFNBQVMsQ0FBQztRQUNiSixH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dCBwcm92aW5jZUxpc3QgZnJvbSAnLi9qc29uL2FyZWFfcHJvdmluY2UuanMnO1xuaW1wb3J0IGNpdHlMaXN0IGZyb20gJy4vanNvbi9hcmVhX2NpdHkuanMnO1xuaW1wb3J0IGRpc3RyaWN0TGlzdCBmcm9tICcuL2pzb24vYXJlYV9kaXN0cmljdC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGdsb2JhbERhdGE6IHsgIFxuXHRcdHNlcnZlclVybDogXCJodHRwOi8vMTkyLjE2OC40My4xOTQ6ODA5OVwiLFx0XHQvLyDlvIDlj5Hnjq/looPvvIzkuI3og73kvb/nlKhsb2NhbGhvc3Rcblx0XHRcblx0XHRwcm92aW5jZUxpc3Q6IHByb3ZpbmNlTGlzdCxcdFxuXHRcdGNpdHlMaXN0OiBjaXR5TGlzdCxcblx0XHRkaXN0cmljdExpc3Q6IGRpc3RyaWN0TGlzdCxcblx0fSxcblx0XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhcIm9uTGF1bmNoLi4u5rWL6K+V6LCD6K+V5L+h5oGv55qE5omT5Y2wXCIpO1xuXHRcdFxuXHRcdFxuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0dW5pLm9uVGFiQmFyTWlkQnV0dG9uVGFwKCgpPT57XG5cdFx0XHRcblx0XHRcdC8vIOacqueZu+W9leS4jeiDveWPkeW4g+inhumikVxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdvblRhYkJhck1pZEJ1dHRvblRhcCcpO1xuXHRcdFx0dW5pLnN3aXRjaFRhYih7XG5cdFx0XHRcdHVybDogXCIuLi9tZS9tZVwiXG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0dW5pLmNob29zZVZpZGVvKHtcblx0XHRcdFx0c291cmNlVHlwZTogWydhbGJ1bSddLFxuXHRcdFx0XHRzdWNjZXNzKGUpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3B1Ymxpc2gvcHVibGlzaD9maWxlT2JqZWN0RXZlbnQ9XCIgKyBKU09OLnN0cmluZ2lmeShlKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICog5oiW6ICF6YeH55SodW5pQ2xvdWTvvIzlnKjlrqLmiLfnq6/lrozmiJDkuIrkvKDvvIzlh4/lsJHpk77ot6/vvIzlm6DkuLrmlofku7blpKfvvIzpgJrkv6Hpk77ot6/lkozogJfml7bmmK/lj4zlgI3nmoRcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHR2YXIgdGltZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdFxuXHRcdH0pO1xuXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXREZWZhdWx0VmxvZ0xpc3QoKSB7XG5cdFx0XHR2YXIgbGlzdCA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZsb2dJZDogXCIxMDAxXCIsXG5cdFx0XHRcdFx0dmxvZ2VySWQ6IFwiMTAwMVwiLFxuXHRcdFx0XHRcdHZsb2dlckZhY2U6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtYXJyb3ctMi5qcGdcIixcblx0XHRcdFx0XHR2bG9nZXJOYW1lOiBcIkDpo47pl7TlvbHmnIhcIixcblx0XHRcdFx0XHRjb250ZW50OiBcIuesrDHmnJ8g5oWV6K++572R5p625p6E5biIUmVkaXPorq3nu4PokKXlhY3otLnllaZ+XCIsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvN2E2MDRmNTQtYzRhMi00ZWIzLTgxYzUtNjc5ODM1MDJlYTBiLm1wNCcsXG5cdFx0XHRcdFx0Y292ZXI6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi80NmFlYmNiNi0yZjlhLTRlNTAtOGMwZi1kYmZjYWQ0YjNmMmUucG5nJyxcblx0XHRcdFx0XHRpc0xpa2U6IDEsXG5cdFx0XHRcdFx0cGxheTogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZsb2dJZDogXCIxMDAyXCIsXG5cdFx0XHRcdFx0dmxvZ2VySWQ6IFwiMTAwMlwiLFxuXHRcdFx0XHRcdHZsb2dlckZhY2U6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtY2F0LnBuZ1wiLFxuXHRcdFx0XHRcdHZsb2dlck5hbWU6IFwiQOmjjumXtOW9seaciFwiLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi56ysMuacnyBKYXZh5p625p6E5biIUmVkaXPorq3nu4PokKXlrabkuaDmm7Lnur9+XCIsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvOTdiYjYyYjQtMjQzNy00MGMxLThmOGUtMzM5MWIyZjQ0MTRlLm1wNCcsXG5cdFx0XHRcdFx0Y292ZXI6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi84NzU5ZmY5Mi1lOTE2LTRhOWMtODg3OC03NTZiNjFiNjJkN2UucG5nJyxcblx0XHRcdFx0XHRpc0xpa2U6IDEsXG5cdFx0XHRcdFx0cGxheTogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZsb2dJZDogXCIxMDAzXCIsXG5cdFx0XHRcdFx0dmxvZ2VySWQ6IFwiMTAwM1wiLFxuXHRcdFx0XHRcdHZsb2dlckZhY2U6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtYXJyb3ctMS5wbmdcIixcblx0XHRcdFx0XHR2bG9nZXJOYW1lOiBcIkDnu7/nrq3kvqBcIixcblx0XHRcdFx0XHRjb250ZW50OiBcIuesrDPmnJ8g56iL5bqP5ZGY5a2m5LmgUmVkaXPnmoTlv4XopoHmgKdcIixcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi83N2UyNTdiZC1mMzM0LTQ1ODMtOTNmNS0zYmRjYjczNjI3OTIubXA0Jyxcblx0XHRcdFx0XHRjb3ZlcjogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtYTUxMGYxMWEtYWZjZi00OGY5LWJjZmYtODQ4Y2UxNTAxZjJmLzIxZTg2NzU1LWFhMTktNDgyZC1iZDI0LWNlODI0NWNhY2IyZS5wbmcnLFxuXHRcdFx0XHRcdGlzTGlrZTogMCxcblx0XHRcdFx0XHRwbGF5OiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dmxvZ0lkOiBcIjEwMDRcIixcblx0XHRcdFx0XHR2bG9nZXJJZDogXCIxMDA0XCIsXG5cdFx0XHRcdFx0dmxvZ2VyRmFjZTogXCIvc3RhdGljL2ZhY2UvZmFjZS1sZWUucG5nXCIsXG5cdFx0XHRcdFx0dmxvZ2VyTmFtZTogXCJA6J2Z6J2g5L6gXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCLnrKw05pyfIOWtpuS5oFJlZGlz5Li75LuO5ZOo5YW16ZuG576k5b+F6KaB5oCnXCIsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvMzA2ZDdiYmMtMTdjNi00YWM1LTgwOWQtZDk5OThmNTMwNTJiLm1wNCcsXG5cdFx0XHRcdFx0Y292ZXI6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi80ZTliZmQxZi1mYjE5LTRiMzgtODg1NS01MGM4MjU2NTc1N2MucG5nJyxcblx0XHRcdFx0XHRpc0xpa2U6IDAsXG5cdFx0XHRcdFx0cGxheTogZmFsc2Vcblx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0dmxvZ0lkOiBcIjEwMDVcIixcblx0XHRcdFx0XHR2bG9nZXJJZDogXCIxMDA1XCIsXG5cdFx0XHRcdFx0dmxvZ2VyRmFjZTogXCIvc3RhdGljL2ZhY2UvZmFjZS1jYXQucG5nXCIsXG5cdFx0XHRcdFx0dmxvZ2VyTmFtZTogXCJA6ZKi6ZOB5L6gXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCLnrKw15pyfIFJlZGlz6K6t57uD6JCl5YaF5a65XCIsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvYjI3OGI2NzMtODQ3Yi00MWNhLWE2YmMtYTgwYTVmYTE3ZGM5Lm1wNCcsXG5cdFx0XHRcdFx0Y292ZXI6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi9lMjg3N2ZlMS0zYjYyLTQ4ZTQtYTU3MS1kYjlkOTljZjhiMTEucG5nJyxcblx0XHRcdFx0XHRpc0xpa2U6IDAsXG5cdFx0XHRcdFx0cGxheTogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZsb2dJZDogXCIxMDA2XCIsXG5cdFx0XHRcdFx0dmxvZ2VySWQ6IFwiMTAwNlwiLFxuXHRcdFx0XHRcdHZsb2dlckZhY2U6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtY2F0LnBuZ1wiLFxuXHRcdFx0XHRcdHZsb2dlck5hbWU6IFwiQOicmOibm+S+oFwiLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi56ysNuacnyAyMDIx5bm0N+aciOeoi+W6j+WRmOiWqui1hOWHuueCiVwiLFxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtYTUxMGYxMWEtYWZjZi00OGY5LWJjZmYtODQ4Y2UxNTAxZjJmLzQ5YmY4ZDcyLTFkMDUtNDhkMC04ZjM2LTgyOWM1NjA1Mzc4Yy5tcDQnLFxuXHRcdFx0XHRcdGNvdmVyOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvMDZhZTI3YzEtOWQ4NS00MDNiLWJmNTgtODUwZDRhNjQ3MDQ0LnBuZycsXG5cdFx0XHRcdFx0aXNMaWtlOiAxLFxuXHRcdFx0XHRcdHBsYXk6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR2bG9nSWQ6IFwiMTAwN1wiLFxuXHRcdFx0XHRcdHZsb2dlcklkOiBcIjEwMDdcIixcblx0XHRcdFx0XHR2bG9nZXJGYWNlOiBcIi9zdGF0aWMvZmFjZS9mYWNlLWFycm93LTEucG5nXCIsXG5cdFx0XHRcdFx0dmxvZ2VyTmFtZTogXCJA6Zeq55S15L6gXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCLnrKw35pyfIOS7gOS5iOaYr+WGheWNt++8n+WQhOihjOWQhOS4mueahOWNt+S4reWNt1wiLFxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtYTUxMGYxMWEtYWZjZi00OGY5LWJjZmYtODQ4Y2UxNTAxZjJmLzc4MzVjNGVmLTJjMDEtNDk3Yi1hYTYxLWFkZmQ1MzhhMmQ2YS5tcDQnLFxuXHRcdFx0XHRcdGNvdmVyOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvYmUzZjY4YWYtODIxYy00Mjc2LWEyM2ItMDQ1YmI5OWNlYjdjLnBuZycsXG5cdFx0XHRcdFx0aXNMaWtlOiAwLFxuXHRcdFx0XHRcdHBsYXk6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR2bG9nSWQ6IFwiMTAwOFwiLFxuXHRcdFx0XHRcdHZsb2dlcklkOiBcIjEwMDhcIixcblx0XHRcdFx0XHR2bG9nZXJGYWNlOiBcIi9zdGF0aWMvZmFjZS9mYWNlLWxlZS5wbmdcIixcblx0XHRcdFx0XHR2bG9nZXJOYW1lOiBcIkDpo47pl7TlvbHmnIhcIixcblx0XHRcdFx0XHRjb250ZW50OiBcIuesrDjmnJ8g56iL5bqP5ZGY5aaC5L2V6YCJ5oup6bi/6JKZT1PnmoTlvIDlj5Hor63oqIDvvJ9cIixcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWE1MTBmMTFhLWFmY2YtNDhmOS1iY2ZmLTg0OGNlMTUwMWYyZi9mY2UzNjg3NC0xNDU4LTQzOGYtOTdiZS1lZWYyNDFjMzgyZmIubXA0Jyxcblx0XHRcdFx0XHRjb3ZlcjogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtYTUxMGYxMWEtYWZjZi00OGY5LWJjZmYtODQ4Y2UxNTAxZjJmLzcyNzM5ZjQ2LWVlYjktNDhiMy05ZjljLWU3NmY5MDlhMWViZS5wbmcnLFxuXHRcdFx0XHRcdGlzTGlrZTogMCxcblx0XHRcdFx0XHRwbGF5OiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dmxvZ0lkOiBcIjEwMDlcIixcblx0XHRcdFx0XHR2bG9nZXJJZDogXCIxMDA5XCIsXG5cdFx0XHRcdFx0dmxvZ2VyRmFjZTogXCIvc3RhdGljL2ZhY2UvZmFjZS1sZWUucG5nXCIsXG5cdFx0XHRcdFx0dmxvZ2VyTmFtZTogXCJA6aOO6Ze05b2x5pyIXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCLnrKw55pyfIOS4uuS7gOS5iOS9oOeahOS6keacjeWKoeWZqOaAu+aYr+iiq+m7keiiq+aUu+WHu++8n1wiLFxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtYTUxMGYxMWEtYWZjZi00OGY5LWJjZmYtODQ4Y2UxNTAxZjJmL2E0Nzg1NTlkLWIzMDQtNDlmNS05MmZjLTAzZWM0NDMxZWE4OC5tcDQnLFxuXHRcdFx0XHRcdGNvdmVyOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1hNTEwZjExYS1hZmNmLTQ4ZjktYmNmZi04NDhjZTE1MDFmMmYvZTQ5MTg5NmQtZDZkYy00OGMyLWEyN2ItNmY0YmZhN2E3MGNjLnBuZycsXG5cdFx0XHRcdFx0aXNMaWtlOiAwLFxuXHRcdFx0XHRcdHBsYXk6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cdFx0XHRyZXR1cm4gbGlzdDtcblx0XHR9LFxuXHRcdGdyYWNlTnVtYmVyKG51bWJlcikge1xuXHRcdFx0aWYgKG51bWJlciA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiBcIjBcIjtcblx0XHRcdH0gZWxzZSBpZiAobnVtYmVyID4gOTk5ICYmIG51bWJlciA8PSA5OTk5KSB7XG5cdFx0XHRcdHJldHVybiAobnVtYmVyLzEwMDApLnRvRml4ZWQoMSkgKyAnayc7XG5cdFx0XHR9IGVsc2UgaWYgKG51bWJlciA+IDk5OTkgJiYgbnVtYmVyIDw9IDk5OTk5KSB7XG5cdFx0XHRcdHJldHVybiAobnVtYmVyLzEwMDAwKS50b0ZpeGVkKDEpICsgJ3cnO1xuXHRcdFx0fSBlbHNlIGlmIChudW1iZXIgPiA5OTk5OSkge1xuXHRcdFx0XHRyZXR1cm4gXCIxMHcrXCI7XG5cdFx0XHR9IFxuXHRcdFx0cmV0dXJuIG51bWJlcjtcblx0XHR9LFxuXHRcdC8vIOaXtumXtOagvOW8j+WMluaXtumXtOS4uu+8muWkmuWwkeWIhumSn+WJjeOAgeWkmuWwkeWkqeWJjVxuXHRcdC8vIHRpbWUgMjAyMC0wOS0xMCAyMDoyMDoyMFxuXHRcdGdldERhdGVCZWZvcmVOb3coc3RyaW5nVGltZSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coc3RyaW5nVGltZSk7XG5cdFx0XHRzdHJpbmdUaW1lID0gbmV3IERhdGUoc3RyaW5nVGltZS5yZXBsYWNlKC8tL2csJy8nKSlcblx0XHRcdFxuXHRcdFx0dmFyIG1pbnV0ZSA9IDEwMDAgKiA2MDtcblx0XHRcdHZhciBob3VyID0gbWludXRlICogNjA7XG5cdFx0XHR2YXIgZGF5ID0gaG91ciAqIDI0O1xuXHRcdFx0dmFyIHdlZWsgPSBkYXkgKiA3O1xuXHRcdFx0dmFyIG1vbnRoID0gZGF5ICogMzA7XG5cdFxuXHRcdFx0dmFyIHRpbWUxID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8v5b2T5YmN55qE5pe26Ze05oizXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aW1lMSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhuZXcgRGF0ZShzdHJpbmdUaW1lKSk7XG5cdFx0XHR2YXIgdGltZTIgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKHN0cmluZ1RpbWUpKTsgLy/mjIflrprml7bpl7TnmoTml7bpl7TmiLNcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRpbWUyKTtcblx0XHRcdHZhciB0aW1lID0gdGltZTEgLSB0aW1lMjtcblx0XG5cdFx0XHR2YXIgcmVzdWx0ID0gbnVsbDtcblx0XHRcdGlmKHRpbWUgPCAwKSB7XG5cdFx0XHRcdC8vIGFsZXJ0KFwi6K6+572u55qE5pe26Ze05LiN6IO95pep5LqO5b2T5YmN5pe26Ze077yBXCIpO1xuXHRcdFx0XHRyZXN1bHQgPSBzdHJpbmdUaW1lO1xuXHRcdFx0fWVsc2UgaWYodGltZS9tb250aCA+PSAxKXtcblx0XHRcdFx0cmVzdWx0ID0gcGFyc2VJbnQodGltZS9tb250aCkgKyBcIuaciOWJjVwiO1xuXHRcdFx0fWVsc2UgaWYodGltZS93ZWVrID49IDEpe1xuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUludCh0aW1lL3dlZWspICsgXCLlkajliY1cIjtcblx0XHRcdH1lbHNlIGlmKHRpbWUvZGF5ID49IDEpe1xuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUludCh0aW1lL2RheSkgKyBcIuWkqeWJjVwiO1xuXHRcdFx0fWVsc2UgaWYodGltZS9ob3VyID49IDEpe1xuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUludCh0aW1lL2hvdXIpICsgXCLlsI/ml7bliY1cIjtcblx0XHRcdH1lbHNlIGlmKHRpbWUvbWludXRlID49IDEpe1xuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUludCh0aW1lL21pbnV0ZSkgKyBcIuWIhumSn+WJjVwiO1xuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSBcIuWImuWImlwiO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDliKTmlq3mmK/lkKbkuLrnqbpcblx0XHRpc1N0ckVtcHR5IChzdHIpIHtcblx0XHRcdGlmIChzdHIgPT0gbnVsbCB8fCBzdHIgPT0gdW5kZWZpbmVkIHx8IHN0ciA9PSBcIlwiKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHQvLyDliKTmlq3nlKjmiLfmmK/lkKbnmbvlvZVcblx0XHR1c2VySXNMb2dpbigpIHtcblx0XHRcdHZhciB1c2VyVG9rZW4gPSB0aGlzLmdldFVzZXJTZXNzaW9uVG9rZW4oKTtcblx0XHRcdHZhciB1c2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcInVzZXJJbmZvPVwiICsgdXNlckluZm8pO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJ1c2VyVG9rZW49XCIgKyB1c2VyVG9rZW4pO1xuXHRcdFx0aWYgKCF0aGlzLmlzU3RyRW1wdHkodXNlclRva2VuKSAmJiAhdGhpcy5pc1N0ckVtcHR5KHVzZXJJbmZvKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOeUqOaIt+eZu+W9leS7peWQjueahHNlc3Npb27lrZjlj5bvvIx0b2tlbuWSjHVzZXJJbmZvXG5cdFx0c2V0VXNlclNlc3Npb25Ub2tlbih0b2tlbil7XG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyVG9rZW5cIiwgdG9rZW4pO1xuXHRcdH0sXG5cdFx0Z2V0VXNlclNlc3Npb25Ub2tlbigpIHtcblx0XHRcdHZhciB0b2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJUb2tlblwiKTtcblx0XHRcdGlmICh0aGlzLmlzU3RyRW1wdHkodG9rZW4pKSB7XG5cdFx0XHRcdHJldHVybiBcIlwiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRva2VuO1xuXHRcdH0sXG5cdFx0c2V0VXNlckluZm9TZXNzaW9uKHVzZXIpe1xuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXHRcdH0sXG5cdFx0Z2V0VXNlckluZm9TZXNzaW9uKCkge1xuXHRcdFx0dmFyIHVzZXIgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VySW5mb1wiKTtcblx0XHRcdGlmICh0aGlzLmlzU3RyRW1wdHkodXNlcikpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHR9LFxuXHRcdGNsZWFyVXNlckluZm8gKCkge1xuXHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoXCJ1c2VyVG9rZW5cIik7XG5cdFx0fSxcblx0XHRcblx0XHQvLyBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcblx0XHQvLyBkYXRlRm9ybWF0KFwiWVlZWS1tbS1kZCBISDpNTVwiLCBkYXRlKVxuXHRcdGRhdGVGb3JtYXQoZm10LCBkYXRlKSB7XG5cdFx0ICAgIGxldCByZXQ7XG5cdFx0ICAgIGNvbnN0IG9wdCA9IHtcblx0XHQgICAgICAgIFwiWStcIjogZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksICAgICAgICAvLyDlubRcblx0XHQgICAgICAgIFwibStcIjogKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCksICAgICAvLyDmnIhcblx0XHQgICAgICAgIFwiZCtcIjogZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSwgICAgICAgICAgICAvLyDml6Vcblx0XHQgICAgICAgIFwiSCtcIjogZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCksICAgICAgICAgICAvLyDml7Zcblx0XHQgICAgICAgIFwiTStcIjogZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSwgICAgICAgICAvLyDliIZcblx0XHQgICAgICAgIFwiUytcIjogZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKSAgICAgICAgICAvLyDnp5Jcblx0XHQgICAgICAgIC8vIOacieWFtuS7luagvOW8j+WMluWtl+espumcgOaxguWPr+S7pee7p+e7rea3u+WKoO+8jOW/hemhu+i9rOWMluaIkOWtl+espuS4slxuXHRcdCAgICB9O1xuXHRcdCAgICBmb3IgKGxldCBrIGluIG9wdCkge1xuXHRcdCAgICAgICAgcmV0ID0gbmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikuZXhlYyhmbXQpO1xuXHRcdCAgICAgICAgaWYgKHJldCkge1xuXHRcdCAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKHJldFsxXSwgKHJldFsxXS5sZW5ndGggPT0gMSkgPyAob3B0W2tdKSA6IChvcHRba10ucGFkU3RhcnQocmV0WzFdLmxlbmd0aCwgXCIwXCIpKSlcblx0XHQgICAgICAgIH07XG5cdFx0ICAgIH07XG5cdFx0ICAgIHJldHVybiBmbXQ7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDojrflvpfmmJ/luqdcblx0XHRnZXRBc3RybyhtLCBkKXtcblx0XHRcdHJldHVybiBcIumtlOe+r+awtOeTtuWPjOmxvOeJoee+iumHkeeJm+WPjOWtkOW3qOifueeLruWtkOWkhOWls+WkqeenpOWkqeidjuWwhOaJi+mtlOe+r1wiLnN1YnN0cihtKjItKGQ8XCIxMDIyMjM0NDQ0MzNcIi5jaGFyQXQobS0xKS0gLTE5KSoyLDIpO1xuXHRcdH0sXG5cdFx0Ly/kuIvpnaLlhpnkuIDkuKrmtYvor5Xlh73mlbBcblx0XHR0ZXN0QXN0cm8obW9udGgsIGRheSl7XG5cdFx0XHRjb25zb2xlLmxvZyhtb250aCArIFwi5pyIXCIgKyBkYXkgKyBcIuaXpTogXCIgKyB0aGlzLmdldEFzdHJvKG1vbnRoLCBkYXkpKTtcblx0XHR9LFxuXHRcdC8vIOiOt+W+l+eUn+iCllxuXHRcdGdldEFuaW1hbCh5ZWFyKXtcblx0XHRcdHllYXIgPSB5ZWFyICUgMTI7XG5cdFx0XHR2YXIgYW5pbWFsID0gXCJcIjtcblx0XHRcdHN3aXRjaCh5ZWFyKXtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRhbmltYWwgPSAn6bihJzticmVhaztcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRhbmltYWwgPSAn54uXJzticmVhaztcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRhbmltYWwgPSAn54yqJzticmVhaztcblx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRhbmltYWwgPSAn6bygJzticmVhaztcblx0XHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRhbmltYWwgPSAn54mbJzticmVhaztcblx0XHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHRhbmltYWwgPSAn6JmOJzticmVhaztcblx0XHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHRhbmltYWwgPSAn5YWUJzticmVhaztcblx0XHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHRhbmltYWwgPSAn6b6ZJzticmVhaztcblx0XHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHRhbmltYWwgPSAn6JuHJzticmVhaztcblx0XHRcdFx0Y2FzZSAxMDpcblx0XHRcdFx0YW5pbWFsID0gJ+mprCc7YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTE6XG5cdFx0XHRcdGFuaW1hbCA9ICfnvoonO2JyZWFrO1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGFuaW1hbCA9ICflgJknO2JyZWFrO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBhbmltYWw7XG5cdFx0fVxuXHR9XG5cdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///70\n");

/***/ }),
/* 71 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 72 */
/*!*****************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/json/area_province.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var data = [{\n  \"province_id\": \"1\",\n  \"province_name\": \"北京市\",\n  \"spell\": \"beijingshi\",\n  \"easy_spell\": \"bjs\"\n}, {\n  \"province_id\": \"2\",\n  \"province_name\": \"天津市\",\n  \"spell\": \"tianjinshi\",\n  \"easy_spell\": \"tjs\"\n}, {\n  \"province_id\": \"3\",\n  \"province_name\": \"河北省\",\n  \"spell\": \"hebeisheng\",\n  \"easy_spell\": \"hbs\"\n}, {\n  \"province_id\": \"4\",\n  \"province_name\": \"山西省\",\n  \"spell\": \"shanxisheng\",\n  \"easy_spell\": \"sxs\"\n}, {\n  \"province_id\": \"5\",\n  \"province_name\": \"内蒙古自治区\",\n  \"spell\": \"neimengguzizhiqu\",\n  \"easy_spell\": \"nmgzzq\"\n}, {\n  \"province_id\": \"6\",\n  \"province_name\": \"辽宁省\",\n  \"spell\": \"liaoningsheng\",\n  \"easy_spell\": \"lns\"\n}, {\n  \"province_id\": \"7\",\n  \"province_name\": \"吉林省\",\n  \"spell\": \"jilinsheng\",\n  \"easy_spell\": \"jls\"\n}, {\n  \"province_id\": \"8\",\n  \"province_name\": \"黑龙江省\",\n  \"spell\": \"heilongjiangsheng\",\n  \"easy_spell\": \"hljs\"\n}, {\n  \"province_id\": \"9\",\n  \"province_name\": \"上海市\",\n  \"spell\": \"shanghaishi\",\n  \"easy_spell\": \"shs\"\n}, {\n  \"province_id\": \"10\",\n  \"province_name\": \"江苏省\",\n  \"spell\": \"jiangsusheng\",\n  \"easy_spell\": \"jss\"\n}, {\n  \"province_id\": \"11\",\n  \"province_name\": \"浙江省\",\n  \"spell\": \"zhejiangsheng\",\n  \"easy_spell\": \"zjs\"\n}, {\n  \"province_id\": \"12\",\n  \"province_name\": \"安徽省\",\n  \"spell\": \"anhuisheng\",\n  \"easy_spell\": \"ahs\"\n}, {\n  \"province_id\": \"13\",\n  \"province_name\": \"福建省\",\n  \"spell\": \"fujiansheng\",\n  \"easy_spell\": \"fjs\"\n}, {\n  \"province_id\": \"14\",\n  \"province_name\": \"江西省\",\n  \"spell\": \"jiangxisheng\",\n  \"easy_spell\": \"jxs\"\n}, {\n  \"province_id\": \"15\",\n  \"province_name\": \"山东省\",\n  \"spell\": \"shandongsheng\",\n  \"easy_spell\": \"sds\"\n}, {\n  \"province_id\": \"16\",\n  \"province_name\": \"河南省\",\n  \"spell\": \"henansheng\",\n  \"easy_spell\": \"hns\"\n}, {\n  \"province_id\": \"17\",\n  \"province_name\": \"湖北省\",\n  \"spell\": \"hubeisheng\",\n  \"easy_spell\": \"hbs\"\n}, {\n  \"province_id\": \"18\",\n  \"province_name\": \"湖南省\",\n  \"spell\": \"hunansheng\",\n  \"easy_spell\": \"hns\"\n}, {\n  \"province_id\": \"19\",\n  \"province_name\": \"广东省\",\n  \"spell\": \"guangdongsheng\",\n  \"easy_spell\": \"gds\"\n}, {\n  \"province_id\": \"20\",\n  \"province_name\": \"广西壮族自治区\",\n  \"spell\": \"guangxizhuangzuzizhiqu\",\n  \"easy_spell\": \"gxzzzzq\"\n}, {\n  \"province_id\": \"21\",\n  \"province_name\": \"海南省\",\n  \"spell\": \"hainansheng\",\n  \"easy_spell\": \"hns\"\n}, {\n  \"province_id\": \"22\",\n  \"province_name\": \"重庆市\",\n  \"spell\": \"zhongqingshi\",\n  \"easy_spell\": \"zqs\"\n}, {\n  \"province_id\": \"23\",\n  \"province_name\": \"四川省\",\n  \"spell\": \"sichuansheng\",\n  \"easy_spell\": \"scs\"\n}, {\n  \"province_id\": \"24\",\n  \"province_name\": \"贵州省\",\n  \"spell\": \"guizhousheng\",\n  \"easy_spell\": \"gzs\"\n}, {\n  \"province_id\": \"25\",\n  \"province_name\": \"云南省\",\n  \"spell\": \"yunnansheng\",\n  \"easy_spell\": \"yns\"\n}, {\n  \"province_id\": \"26\",\n  \"province_name\": \"西藏自治区\",\n  \"spell\": \"xicangzizhiqu\",\n  \"easy_spell\": \"xczzq\"\n}, {\n  \"province_id\": \"27\",\n  \"province_name\": \"陕西省\",\n  \"spell\": \"shanxisheng\",\n  \"easy_spell\": \"sxs\"\n}, {\n  \"province_id\": \"28\",\n  \"province_name\": \"甘肃省\",\n  \"spell\": \"gansusheng\",\n  \"easy_spell\": \"gss\"\n}, {\n  \"province_id\": \"29\",\n  \"province_name\": \"青海省\",\n  \"spell\": \"qinghaisheng\",\n  \"easy_spell\": \"qhs\"\n}, {\n  \"province_id\": \"30\",\n  \"province_name\": \"宁夏回族自治区\",\n  \"spell\": \"ningxiahuizuzizhiqu\",\n  \"easy_spell\": \"nxhzzzq\"\n}, {\n  \"province_id\": \"31\",\n  \"province_name\": \"新疆维吾尔自治区\",\n  \"spell\": \"xinjiangweiwuerzizhiqu\",\n  \"easy_spell\": \"xjwwezzq\"\n}, {\n  \"province_id\": \"32\",\n  \"province_name\": \"香港特别行政区\",\n  \"spell\": \"xianggangtebiexingzhengqu\",\n  \"easy_spell\": \"xgtbxzq\"\n}, {\n  \"province_id\": \"33\",\n  \"province_name\": \"澳门特别行政区\",\n  \"spell\": \"aomentebiexingzhengqu\",\n  \"easy_spell\": \"amtbxzq\"\n}, {\n  \"province_id\": \"34\",\n  \"province_name\": \"台湾省\",\n  \"spell\": \"taiwansheng\",\n  \"easy_spell\": \"tws\"\n}];\nmodule.exports = data;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNvbi9hcmVhX3Byb3ZpbmNlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxJQUFJLEdBQUcsQ0FDVjtFQUNDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCLGVBQWUsRUFBRSxLQUFLO0VBQ3RCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCLGVBQWUsRUFBRSxLQUFLO0VBQ3RCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCLGVBQWUsRUFBRSxLQUFLO0VBQ3RCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCLGVBQWUsRUFBRSxLQUFLO0VBQ3RCLE9BQU8sRUFBRSxhQUFhO0VBQ3RCLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0IsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLEdBQUc7RUFDbEIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGVBQWU7RUFDeEIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLEdBQUc7RUFDbEIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLEdBQUc7RUFDbEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsT0FBTyxFQUFFLG1CQUFtQjtFQUM1QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsR0FBRztFQUNsQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsY0FBYztFQUN2QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsZUFBZTtFQUN4QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsY0FBYztFQUN2QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsZUFBZTtFQUN4QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsZ0JBQWdCO0VBQ3pCLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxJQUFJO0VBQ25CLGVBQWUsRUFBRSxTQUFTO0VBQzFCLE9BQU8sRUFBRSx3QkFBd0I7RUFDakMsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGNBQWM7RUFDdkIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGNBQWM7RUFDdkIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGNBQWM7RUFDdkIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLE9BQU87RUFDeEIsT0FBTyxFQUFFLGVBQWU7RUFDeEIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLEtBQUs7RUFDdEIsT0FBTyxFQUFFLGNBQWM7RUFDdkIsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLFNBQVM7RUFDMUIsT0FBTyxFQUFFLHFCQUFxQjtFQUM5QixZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsVUFBVTtFQUMzQixPQUFPLEVBQUUsd0JBQXdCO0VBQ2pDLFlBQVksRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNDLGFBQWEsRUFBRSxJQUFJO0VBQ25CLGVBQWUsRUFBRSxTQUFTO0VBQzFCLE9BQU8sRUFBRSwyQkFBMkI7RUFDcEMsWUFBWSxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0MsYUFBYSxFQUFFLElBQUk7RUFDbkIsZUFBZSxFQUFFLFNBQVM7RUFDMUIsT0FBTyxFQUFFLHVCQUF1QjtFQUNoQyxZQUFZLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDQyxhQUFhLEVBQUUsSUFBSTtFQUNuQixlQUFlLEVBQUUsS0FBSztFQUN0QixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUU7QUFDZixDQUFDLENBQ0Q7QUFDREMsTUFBTSxDQUFDQyxPQUFPLEdBQUdGLElBQUkiLCJmaWxlIjoiNzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YSA9IFtcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxXCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi5YyX5Lqs5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcImJlaWppbmdzaGlcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJianNcIlxuXHR9LFxuXHR7XG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjJcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLlpKnmtKXluIJcIixcblx0XHRcInNwZWxsXCI6IFwidGlhbmppbnNoaVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInRqc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiM1wiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuays+WMl+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJoZWJlaXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaGJzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCI0XCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi5bGx6KW/55yBXCIsXG5cdFx0XCJzcGVsbFwiOiBcInNoYW54aXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwic3hzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCI1XCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi5YaF6JKZ5Y+k6Ieq5rK75Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIm5laW1lbmdndXppemhpcXVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJubWd6enFcIlxuXHR9LFxuXHR7XG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjZcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLovr3lroHnnIFcIixcblx0XHRcInNwZWxsXCI6IFwibGlhb25pbmdzaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcImxuc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiN1wiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuWQieael+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJqaWxpbnNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiamxzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi6buR6b6Z5rGf55yBXCIsXG5cdFx0XCJzcGVsbFwiOiBcImhlaWxvbmdqaWFuZ3NoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaGxqc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiOVwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuS4iua1t+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJzaGFuZ2hhaXNoaVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInNoc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTBcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLmsZ/oi4/nnIFcIixcblx0XHRcInNwZWxsXCI6IFwiamlhbmdzdXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwianNzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIua1meaxn+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJ6aGVqaWFuZ3NoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiempzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuWuieW+veecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJhbmh1aXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiYWhzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxM1wiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuemj+W7uuecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJmdWppYW5zaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcImZqc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTRcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLmsZ/opb/nnIFcIixcblx0XHRcInNwZWxsXCI6IFwiamlhbmd4aXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwianhzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNVwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuWxseS4nOecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJzaGFuZG9uZ3NoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwic2RzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuays+WNl+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJoZW5hbnNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaG5zXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIua5luWMl+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJodWJlaXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaGJzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOFwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIua5luWNl+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJodW5hbnNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaG5zXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuW5v+S4nOecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJndWFuZ2RvbmdzaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcImdkc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjBcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLlub/opb/lo67ml4/oh6rmsrvljLpcIixcblx0XHRcInNwZWxsXCI6IFwiZ3Vhbmd4aXpodWFuZ3p1eml6aGlxdVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcImd4enp6enFcIlxuXHR9LFxuXHR7XG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIxXCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi5rW35Y2X55yBXCIsXG5cdFx0XCJzcGVsbFwiOiBcImhhaW5hbnNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiaG5zXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMlwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIumHjeW6huW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJ6aG9uZ3FpbmdzaGlcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJ6cXNcIlxuXHR9LFxuXHR7XG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCIsXG5cdFx0XCJwcm92aW5jZV9uYW1lXCI6IFwi5Zub5bed55yBXCIsXG5cdFx0XCJzcGVsbFwiOiBcInNpY2h1YW5zaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInNjc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjRcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLotLXlt57nnIFcIixcblx0XHRcInNwZWxsXCI6IFwiZ3VpemhvdXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiZ3pzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNVwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuS6keWNl+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJ5dW5uYW5zaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInluc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjZcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLopb/ol4/oh6rmsrvljLpcIixcblx0XHRcInNwZWxsXCI6IFwieGljYW5neml6aGlxdVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInhjenpxXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyN1wiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIumZleilv+ecgVwiLFxuXHRcdFwic3BlbGxcIjogXCJzaGFueGlzaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInN4c1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLnlJjogoPnnIFcIixcblx0XHRcInNwZWxsXCI6IFwiZ2Fuc3VzaGVuZ1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcImdzc1wiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjlcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLpnZLmtbfnnIFcIixcblx0XHRcInNwZWxsXCI6IFwicWluZ2hhaXNoZW5nXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwicWhzXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMFwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIuWugeWkj+WbnuaXj+iHquayu+WMulwiLFxuXHRcdFwic3BlbGxcIjogXCJuaW5neGlhaHVpenV6aXpoaXF1XCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwibnhoenp6cVwiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLmlrDnlobnu7TlkL7lsJToh6rmsrvljLpcIixcblx0XHRcInNwZWxsXCI6IFwieGluamlhbmd3ZWl3dWVyeml6aGlxdVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcInhqd3dlenpxXCJcblx0fSxcblx0e1xuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMlwiLFxuXHRcdFwicHJvdmluY2VfbmFtZVwiOiBcIummmea4r+eJueWIq+ihjOaUv+WMulwiLFxuXHRcdFwic3BlbGxcIjogXCJ4aWFuZ2dhbmd0ZWJpZXhpbmd6aGVuZ3F1XCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwieGd0Ynh6cVwiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzNcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLmvrPpl6jnibnliKvooYzmlL/ljLpcIixcblx0XHRcInNwZWxsXCI6IFwiYW9tZW50ZWJpZXhpbmd6aGVuZ3F1XCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiYW10Ynh6cVwiXG5cdH0sXG5cdHtcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzRcIixcblx0XHRcInByb3ZpbmNlX25hbWVcIjogXCLlj7Dmub7nnIFcIixcblx0XHRcInNwZWxsXCI6IFwidGFpd2Fuc2hlbmdcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJ0d3NcIlxuXHR9XG5dXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!*************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/json/area_city.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var data = [{\n  \"city_id\": \"1\",\n  \"city_name\": \"北京市\",\n  \"spell\": \"BEIJINGSHI\",\n  \"easy_spell\": \"BJS\",\n  \"zipcode\": \"100000\",\n  \"province_id\": \"1\"\n}, {\n  \"city_id\": \"2\",\n  \"city_name\": \"天津市\",\n  \"spell\": \"TIANJINSHI\",\n  \"easy_spell\": \"TJS\",\n  \"zipcode\": \"100000\",\n  \"province_id\": \"2\"\n}, {\n  \"city_id\": \"3\",\n  \"city_name\": \"石家庄市\",\n  \"spell\": \"SHIJIAZHUANGSHI\",\n  \"easy_spell\": \"SJZS\",\n  \"zipcode\": \"050000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"4\",\n  \"city_name\": \"唐山市\",\n  \"spell\": \"TANGSHANSHI\",\n  \"easy_spell\": \"TSS\",\n  \"zipcode\": \"063000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"5\",\n  \"city_name\": \"秦皇岛市\",\n  \"spell\": \"QINHUANGDAOSHI\",\n  \"easy_spell\": \"QHDS\",\n  \"zipcode\": \"066000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"6\",\n  \"city_name\": \"邯郸市\",\n  \"spell\": \"HANDANSHI\",\n  \"easy_spell\": \"HDS\",\n  \"zipcode\": \"056000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"7\",\n  \"city_name\": \"邢台市\",\n  \"spell\": \"XINGTAISHI\",\n  \"easy_spell\": \"XTS\",\n  \"zipcode\": \"054000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"8\",\n  \"city_name\": \"保定市\",\n  \"spell\": \"BAODINGSHI\",\n  \"easy_spell\": \"BDS\",\n  \"zipcode\": \"071000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"9\",\n  \"city_name\": \"张家口市\",\n  \"spell\": \"ZHANGJIAKOUSHI\",\n  \"easy_spell\": \"ZJKS\",\n  \"zipcode\": \"075000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"10\",\n  \"city_name\": \"承德市\",\n  \"spell\": \"CHENGDESHI\",\n  \"easy_spell\": \"CDS\",\n  \"zipcode\": \"067000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"11\",\n  \"city_name\": \"沧州市\",\n  \"spell\": \"CANGZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"061000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"12\",\n  \"city_name\": \"廊坊市\",\n  \"spell\": \"LANGFANGSHI\",\n  \"easy_spell\": \"LFS\",\n  \"zipcode\": \"065000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"13\",\n  \"city_name\": \"衡水市\",\n  \"spell\": \"HENGSHUISHI\",\n  \"easy_spell\": \"HSS\",\n  \"zipcode\": \"053000\",\n  \"province_id\": \"3\"\n}, {\n  \"city_id\": \"14\",\n  \"city_name\": \"太原市\",\n  \"spell\": \"TAIYUANSHI\",\n  \"easy_spell\": \"TYS\",\n  \"zipcode\": \"030000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"15\",\n  \"city_name\": \"大同市\",\n  \"spell\": \"DATONGSHI\",\n  \"easy_spell\": \"DTS\",\n  \"zipcode\": \"037000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"16\",\n  \"city_name\": \"阳泉市\",\n  \"spell\": \"YANGQUANSHI\",\n  \"easy_spell\": \"YQS\",\n  \"zipcode\": \"045000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"17\",\n  \"city_name\": \"长治市\",\n  \"spell\": \"CHANGZHISHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"046000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"18\",\n  \"city_name\": \"晋城市\",\n  \"spell\": \"JINCHENGSHI\",\n  \"easy_spell\": \"JCS\",\n  \"zipcode\": \"048000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"19\",\n  \"city_name\": \"朔州市\",\n  \"spell\": \"SHUOZHOUSHI\",\n  \"easy_spell\": \"SZS\",\n  \"zipcode\": \"036000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"20\",\n  \"city_name\": \"晋中市\",\n  \"spell\": \"JINZHONGSHI\",\n  \"easy_spell\": \"JZS\",\n  \"zipcode\": \"030600\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"21\",\n  \"city_name\": \"运城市\",\n  \"spell\": \"YUNCHENGSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"044000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"22\",\n  \"city_name\": \"忻州市\",\n  \"spell\": \"XINZHOUSHI\",\n  \"easy_spell\": \"XZS\",\n  \"zipcode\": \"034000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"23\",\n  \"city_name\": \"临汾市\",\n  \"spell\": \"LINFENSHI\",\n  \"easy_spell\": \"LFS\",\n  \"zipcode\": \"041000\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"24\",\n  \"city_name\": \"吕梁市\",\n  \"spell\": \"LVLIANGSHI\",\n  \"easy_spell\": \"LLS\",\n  \"zipcode\": \"030500\",\n  \"province_id\": \"4\"\n}, {\n  \"city_id\": \"25\",\n  \"city_name\": \"呼和浩特市\",\n  \"spell\": \"HUHEHAOTESHI\",\n  \"easy_spell\": \"HHHTS\",\n  \"zipcode\": \"010000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"26\",\n  \"city_name\": \"包头市\",\n  \"spell\": \"BAOTOUSHI\",\n  \"easy_spell\": \"BTS\",\n  \"zipcode\": \"014000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"27\",\n  \"city_name\": \"乌海市\",\n  \"spell\": \"WUHAISHI\",\n  \"easy_spell\": \"WHS\",\n  \"zipcode\": \"016000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"28\",\n  \"city_name\": \"赤峰市\",\n  \"spell\": \"CHIFENGSHI\",\n  \"easy_spell\": \"CFS\",\n  \"zipcode\": \"024000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"29\",\n  \"city_name\": \"通辽市\",\n  \"spell\": \"TONGLIAOSHI\",\n  \"easy_spell\": \"TLS\",\n  \"zipcode\": \"028000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"30\",\n  \"city_name\": \"鄂尔多斯市\",\n  \"spell\": \"EERDUOSISHI\",\n  \"easy_spell\": \"EEDSS\",\n  \"zipcode\": \"010300\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"31\",\n  \"city_name\": \"呼伦贝尔市\",\n  \"spell\": \"HULUNBEIERSHI\",\n  \"easy_spell\": \"HLBES\",\n  \"zipcode\": \"021000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"32\",\n  \"city_name\": \"巴彦淖尔市\",\n  \"spell\": \"BAYANNAOERSHI\",\n  \"easy_spell\": \"BYNES\",\n  \"zipcode\": \"014400\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"33\",\n  \"city_name\": \"乌兰察布市\",\n  \"spell\": \"WULANCHABUSHI\",\n  \"easy_spell\": \"WLCBS\",\n  \"zipcode\": \"011800\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"34\",\n  \"city_name\": \"兴安盟\",\n  \"spell\": \"XINGANMENG\",\n  \"easy_spell\": \"XAM\",\n  \"zipcode\": \"137500\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"35\",\n  \"city_name\": \"锡林郭勒盟\",\n  \"spell\": \"XILINGUOLEMENG\",\n  \"easy_spell\": \"XLGLM\",\n  \"zipcode\": \"011100\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"36\",\n  \"city_name\": \"阿拉善盟\",\n  \"spell\": \"ALASHANMENG\",\n  \"easy_spell\": \"ALSM\",\n  \"zipcode\": \"016000\",\n  \"province_id\": \"5\"\n}, {\n  \"city_id\": \"37\",\n  \"city_name\": \"沈阳市\",\n  \"spell\": \"SHENYANGSHI\",\n  \"easy_spell\": \"SYS\",\n  \"zipcode\": \"110000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"38\",\n  \"city_name\": \"大连市\",\n  \"spell\": \"DALIANSHI\",\n  \"easy_spell\": \"DLS\",\n  \"zipcode\": \"116000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"39\",\n  \"city_name\": \"鞍山市\",\n  \"spell\": \"ANSHANSHI\",\n  \"easy_spell\": \"ASS\",\n  \"zipcode\": \"114000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"40\",\n  \"city_name\": \"抚顺市\",\n  \"spell\": \"FUSHUNSHI\",\n  \"easy_spell\": \"FSS\",\n  \"zipcode\": \"113000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"41\",\n  \"city_name\": \"本溪市\",\n  \"spell\": \"BENXISHI\",\n  \"easy_spell\": \"BXS\",\n  \"zipcode\": \"117000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"42\",\n  \"city_name\": \"丹东市\",\n  \"spell\": \"DANDONGSHI\",\n  \"easy_spell\": \"DDS\",\n  \"zipcode\": \"118000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"43\",\n  \"city_name\": \"锦州市\",\n  \"spell\": \"JINZHOUSHI\",\n  \"easy_spell\": \"JZS\",\n  \"zipcode\": \"121000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"44\",\n  \"city_name\": \"营口市\",\n  \"spell\": \"YINGKOUSHI\",\n  \"easy_spell\": \"YKS\",\n  \"zipcode\": \"115000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"45\",\n  \"city_name\": \"阜新市\",\n  \"spell\": \"FUXINSHI\",\n  \"easy_spell\": \"FXS\",\n  \"zipcode\": \"123000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"46\",\n  \"city_name\": \"辽阳市\",\n  \"spell\": \"LIAOYANGSHI\",\n  \"easy_spell\": \"LYS\",\n  \"zipcode\": \"111000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"47\",\n  \"city_name\": \"盘锦市\",\n  \"spell\": \"PANJINSHI\",\n  \"easy_spell\": \"PJS\",\n  \"zipcode\": \"124000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"48\",\n  \"city_name\": \"铁岭市\",\n  \"spell\": \"TIELINGSHI\",\n  \"easy_spell\": \"TLS\",\n  \"zipcode\": \"112000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"49\",\n  \"city_name\": \"朝阳市\",\n  \"spell\": \"CHAOYANGSHI\",\n  \"easy_spell\": \"CYS\",\n  \"zipcode\": \"122000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"50\",\n  \"city_name\": \"葫芦岛市\",\n  \"spell\": \"HULUDAOSHI\",\n  \"easy_spell\": \"HLDS\",\n  \"zipcode\": \"125000\",\n  \"province_id\": \"6\"\n}, {\n  \"city_id\": \"51\",\n  \"city_name\": \"长春市\",\n  \"spell\": \"CHANGCHUNSHI\",\n  \"easy_spell\": \"CCS\",\n  \"zipcode\": \"130000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"52\",\n  \"city_name\": \"吉林市\",\n  \"spell\": \"JILINSHI\",\n  \"easy_spell\": \"JLS\",\n  \"zipcode\": \"132000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"53\",\n  \"city_name\": \"四平市\",\n  \"spell\": \"SIPINGSHI\",\n  \"easy_spell\": \"SPS\",\n  \"zipcode\": \"136000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"54\",\n  \"city_name\": \"辽源市\",\n  \"spell\": \"LIAOYUANSHI\",\n  \"easy_spell\": \"LYS\",\n  \"zipcode\": \"136200\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"55\",\n  \"city_name\": \"通化市\",\n  \"spell\": \"TONGHUASHI\",\n  \"easy_spell\": \"THS\",\n  \"zipcode\": \"134000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"56\",\n  \"city_name\": \"白山市\",\n  \"spell\": \"BAISHANSHI\",\n  \"easy_spell\": \"BSS\",\n  \"zipcode\": \"134300\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"57\",\n  \"city_name\": \"松原市\",\n  \"spell\": \"SONGYUANSHI\",\n  \"easy_spell\": \"SYS\",\n  \"zipcode\": \"131100\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"58\",\n  \"city_name\": \"白城市\",\n  \"spell\": \"BAICHENGSHI\",\n  \"easy_spell\": \"BCS\",\n  \"zipcode\": \"137000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"59\",\n  \"city_name\": \"延边朝鲜族自治州\",\n  \"spell\": \"YANBIANCHAOXIANZUZIZHIZHOU\",\n  \"easy_spell\": \"YBCXZZZZ\",\n  \"zipcode\": \"133000\",\n  \"province_id\": \"7\"\n}, {\n  \"city_id\": \"60\",\n  \"city_name\": \"哈尔滨市\",\n  \"spell\": \"HAERBINSHI\",\n  \"easy_spell\": \"HEBS\",\n  \"zipcode\": \"150000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"61\",\n  \"city_name\": \"齐齐哈尔市\",\n  \"spell\": \"QIQIHAERSHI\",\n  \"easy_spell\": \"QQHES\",\n  \"zipcode\": \"161000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"62\",\n  \"city_name\": \"鸡西市\",\n  \"spell\": \"JIXISHI\",\n  \"easy_spell\": \"JXS\",\n  \"zipcode\": \"158100\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"63\",\n  \"city_name\": \"鹤岗市\",\n  \"spell\": \"HEGANGSHI\",\n  \"easy_spell\": \"HGS\",\n  \"zipcode\": \"154100\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"64\",\n  \"city_name\": \"双鸭山市\",\n  \"spell\": \"SHUANGYASHANSHI\",\n  \"easy_spell\": \"SYSS\",\n  \"zipcode\": \"155100\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"65\",\n  \"city_name\": \"大庆市\",\n  \"spell\": \"DAQINGSHI\",\n  \"easy_spell\": \"DQS\",\n  \"zipcode\": \"163000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"66\",\n  \"city_name\": \"伊春市\",\n  \"spell\": \"YICHUNSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"152300\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"67\",\n  \"city_name\": \"佳木斯市\",\n  \"spell\": \"JIAMUSISHI\",\n  \"easy_spell\": \"JMSS\",\n  \"zipcode\": \"154000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"68\",\n  \"city_name\": \"七台河市\",\n  \"spell\": \"QITAIHESHI\",\n  \"easy_spell\": \"QTHS\",\n  \"zipcode\": \"154600\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"69\",\n  \"city_name\": \"牡丹江市\",\n  \"spell\": \"MUDANJIANGSHI\",\n  \"easy_spell\": \"MDJS\",\n  \"zipcode\": \"157000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"70\",\n  \"city_name\": \"黑河市\",\n  \"spell\": \"HEIHESHI\",\n  \"easy_spell\": \"HHS\",\n  \"zipcode\": \"164300\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"71\",\n  \"city_name\": \"绥化市\",\n  \"spell\": \"SUIHUASHI\",\n  \"easy_spell\": \"SHS\",\n  \"zipcode\": \"152000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"72\",\n  \"city_name\": \"大兴安岭地区\",\n  \"spell\": \"DAXINGANLINGDIQU\",\n  \"easy_spell\": \"DXALDQ\",\n  \"zipcode\": \"165000\",\n  \"province_id\": \"8\"\n}, {\n  \"city_id\": \"73\",\n  \"city_name\": \"上海市\",\n  \"spell\": \"SHANGHAISHI\",\n  \"easy_spell\": \"SHS\",\n  \"zipcode\": \"200000\",\n  \"province_id\": \"9\"\n}, {\n  \"city_id\": \"74\",\n  \"city_name\": \"南京市\",\n  \"spell\": \"NANJINGSHI\",\n  \"easy_spell\": \"NJS\",\n  \"zipcode\": \"210000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"75\",\n  \"city_name\": \"无锡市\",\n  \"spell\": \"WUXISHI\",\n  \"easy_spell\": \"WXS\",\n  \"zipcode\": \"214000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"76\",\n  \"city_name\": \"徐州市\",\n  \"spell\": \"XUZHOUSHI\",\n  \"easy_spell\": \"XZS\",\n  \"zipcode\": \"221000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"77\",\n  \"city_name\": \"常州市\",\n  \"spell\": \"CHANGZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"213000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"78\",\n  \"city_name\": \"苏州市\",\n  \"spell\": \"SUZHOUSHI\",\n  \"easy_spell\": \"SZS\",\n  \"zipcode\": \"215000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"79\",\n  \"city_name\": \"南通市\",\n  \"spell\": \"NANTONGSHI\",\n  \"easy_spell\": \"NTS\",\n  \"zipcode\": \"226000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"80\",\n  \"city_name\": \"连云港市\",\n  \"spell\": \"LIANYUNGANGSHI\",\n  \"easy_spell\": \"LYGS\",\n  \"zipcode\": \"222000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"81\",\n  \"city_name\": \"淮安市\",\n  \"spell\": \"HUAIANSHI\",\n  \"easy_spell\": \"HAS\",\n  \"zipcode\": \"223200\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"82\",\n  \"city_name\": \"盐城市\",\n  \"spell\": \"YANCHENGSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"224000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"83\",\n  \"city_name\": \"扬州市\",\n  \"spell\": \"YANGZHOUSHI\",\n  \"easy_spell\": \"YZS\",\n  \"zipcode\": \"225000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"84\",\n  \"city_name\": \"镇江市\",\n  \"spell\": \"ZHENJIANGSHI\",\n  \"easy_spell\": \"ZJS\",\n  \"zipcode\": \"212000\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"85\",\n  \"city_name\": \"泰州市\",\n  \"spell\": \"TAIZHOUSHI\",\n  \"easy_spell\": \"TZS\",\n  \"zipcode\": \"225300\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"86\",\n  \"city_name\": \"宿迁市\",\n  \"spell\": \"SUQIANSHI\",\n  \"easy_spell\": \"SQS\",\n  \"zipcode\": \"223800\",\n  \"province_id\": \"10\"\n}, {\n  \"city_id\": \"87\",\n  \"city_name\": \"杭州市\",\n  \"spell\": \"HANGZHOUSHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"310000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"88\",\n  \"city_name\": \"宁波市\",\n  \"spell\": \"NINGBOSHI\",\n  \"easy_spell\": \"NBS\",\n  \"zipcode\": \"315000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"89\",\n  \"city_name\": \"温州市\",\n  \"spell\": \"WENZHOUSHI\",\n  \"easy_spell\": \"WZS\",\n  \"zipcode\": \"325000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"90\",\n  \"city_name\": \"嘉兴市\",\n  \"spell\": \"JIAXINGSHI\",\n  \"easy_spell\": \"JXS\",\n  \"zipcode\": \"314000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"91\",\n  \"city_name\": \"湖州市\",\n  \"spell\": \"HUZHOUSHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"313000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"92\",\n  \"city_name\": \"绍兴市\",\n  \"spell\": \"SHAOXINGSHI\",\n  \"easy_spell\": \"SXS\",\n  \"zipcode\": \"312000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"93\",\n  \"city_name\": \"金华市\",\n  \"spell\": \"JINHUASHI\",\n  \"easy_spell\": \"JHS\",\n  \"zipcode\": \"321000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"94\",\n  \"city_name\": \"衢州市\",\n  \"spell\": \"ZUOZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"324000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"95\",\n  \"city_name\": \"舟山市\",\n  \"spell\": \"ZHOUSHANSHI\",\n  \"easy_spell\": \"ZSS\",\n  \"zipcode\": \"316000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"96\",\n  \"city_name\": \"台州市\",\n  \"spell\": \"TAIZHOUSHI\",\n  \"easy_spell\": \"TZS\",\n  \"zipcode\": \"318000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"97\",\n  \"city_name\": \"丽水市\",\n  \"spell\": \"LISHUISHI\",\n  \"easy_spell\": \"LSS\",\n  \"zipcode\": \"323000\",\n  \"province_id\": \"11\"\n}, {\n  \"city_id\": \"98\",\n  \"city_name\": \"合肥市\",\n  \"spell\": \"HEFEISHI\",\n  \"easy_spell\": \"HFS\",\n  \"zipcode\": \"230000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"99\",\n  \"city_name\": \"芜湖市\",\n  \"spell\": \"WUHUSHI\",\n  \"easy_spell\": \"WHS\",\n  \"zipcode\": \"241000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"100\",\n  \"city_name\": \"蚌埠市\",\n  \"spell\": \"BANGBUSHI\",\n  \"easy_spell\": \"BBS\",\n  \"zipcode\": \"233000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"101\",\n  \"city_name\": \"淮南市\",\n  \"spell\": \"HUAINANSHI\",\n  \"easy_spell\": \"HNS\",\n  \"zipcode\": \"232000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"102\",\n  \"city_name\": \"马鞍山市\",\n  \"spell\": \"MAANSHANSHI\",\n  \"easy_spell\": \"MASS\",\n  \"zipcode\": \"243000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"103\",\n  \"city_name\": \"淮北市\",\n  \"spell\": \"HUAIBEISHI\",\n  \"easy_spell\": \"HBS\",\n  \"zipcode\": \"235000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"104\",\n  \"city_name\": \"铜陵市\",\n  \"spell\": \"TONGLINGSHI\",\n  \"easy_spell\": \"TLS\",\n  \"zipcode\": \"244000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"105\",\n  \"city_name\": \"安庆市\",\n  \"spell\": \"ANQINGSHI\",\n  \"easy_spell\": \"AQS\",\n  \"zipcode\": \"246000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"106\",\n  \"city_name\": \"黄山市\",\n  \"spell\": \"HUANGSHANSHI\",\n  \"easy_spell\": \"HSS\",\n  \"zipcode\": \"242700\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"107\",\n  \"city_name\": \"滁州市\",\n  \"spell\": \"CHUZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"239000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"108\",\n  \"city_name\": \"阜阳市\",\n  \"spell\": \"FUYANGSHI\",\n  \"easy_spell\": \"FYS\",\n  \"zipcode\": \"236100\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"109\",\n  \"city_name\": \"宿州市\",\n  \"spell\": \"SUZHOUSHI\",\n  \"easy_spell\": \"SZS\",\n  \"zipcode\": \"234100\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"110\",\n  \"city_name\": \"巢湖市\",\n  \"spell\": \"CHAOHUSHI\",\n  \"easy_spell\": \"CHS\",\n  \"zipcode\": \"238000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"111\",\n  \"city_name\": \"六安市\",\n  \"spell\": \"LIUANSHI\",\n  \"easy_spell\": \"LAS\",\n  \"zipcode\": \"237000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"112\",\n  \"city_name\": \"亳州市\",\n  \"spell\": \"ZUOZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"236800\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"113\",\n  \"city_name\": \"池州市\",\n  \"spell\": \"CHIZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"247100\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"114\",\n  \"city_name\": \"宣城市\",\n  \"spell\": \"XUANCHENGSHI\",\n  \"easy_spell\": \"XCS\",\n  \"zipcode\": \"366000\",\n  \"province_id\": \"12\"\n}, {\n  \"city_id\": \"115\",\n  \"city_name\": \"福州市\",\n  \"spell\": \"FUZHOUSHI\",\n  \"easy_spell\": \"FZS\",\n  \"zipcode\": \"350000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"116\",\n  \"city_name\": \"厦门市\",\n  \"spell\": \"XIAMENSHI\",\n  \"easy_spell\": \"XMS\",\n  \"zipcode\": \"361000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"117\",\n  \"city_name\": \"莆田市\",\n  \"spell\": \"PUTIANSHI\",\n  \"easy_spell\": \"PTS\",\n  \"zipcode\": \"351100\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"118\",\n  \"city_name\": \"三明市\",\n  \"spell\": \"SANMINGSHI\",\n  \"easy_spell\": \"SMS\",\n  \"zipcode\": \"365000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"119\",\n  \"city_name\": \"泉州市\",\n  \"spell\": \"QUANZHOUSHI\",\n  \"easy_spell\": \"QZS\",\n  \"zipcode\": \"362000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"120\",\n  \"city_name\": \"漳州市\",\n  \"spell\": \"ZHANGZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"363000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"121\",\n  \"city_name\": \"南平市\",\n  \"spell\": \"NANPINGSHI\",\n  \"easy_spell\": \"NPS\",\n  \"zipcode\": \"353000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"122\",\n  \"city_name\": \"龙岩市\",\n  \"spell\": \"LONGYANSHI\",\n  \"easy_spell\": \"LYS\",\n  \"zipcode\": \"364000\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"123\",\n  \"city_name\": \"宁德市\",\n  \"spell\": \"NINGDESHI\",\n  \"easy_spell\": \"NDS\",\n  \"zipcode\": \"352100\",\n  \"province_id\": \"13\"\n}, {\n  \"city_id\": \"124\",\n  \"city_name\": \"南昌市\",\n  \"spell\": \"NANCHANGSHI\",\n  \"easy_spell\": \"NCS\",\n  \"zipcode\": \"330000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"125\",\n  \"city_name\": \"景德镇市\",\n  \"spell\": \"JINGDEZHENSHI\",\n  \"easy_spell\": \"JDZS\",\n  \"zipcode\": \"333000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"126\",\n  \"city_name\": \"萍乡市\",\n  \"spell\": \"PINGXIANGSHI\",\n  \"easy_spell\": \"PXS\",\n  \"zipcode\": \"337000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"127\",\n  \"city_name\": \"九江市\",\n  \"spell\": \"JIUJIANGSHI\",\n  \"easy_spell\": \"JJS\",\n  \"zipcode\": \"332000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"128\",\n  \"city_name\": \"新余市\",\n  \"spell\": \"XINYUSHI\",\n  \"easy_spell\": \"XYS\",\n  \"zipcode\": \"338000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"129\",\n  \"city_name\": \"鹰潭市\",\n  \"spell\": \"YINGTANSHI\",\n  \"easy_spell\": \"YTS\",\n  \"zipcode\": \"335000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"130\",\n  \"city_name\": \"赣州市\",\n  \"spell\": \"GANZHOUSHI\",\n  \"easy_spell\": \"GZS\",\n  \"zipcode\": \"341000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"131\",\n  \"city_name\": \"吉安市\",\n  \"spell\": \"JIANSHI\",\n  \"easy_spell\": \"JAS\",\n  \"zipcode\": \"343000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"132\",\n  \"city_name\": \"宜春市\",\n  \"spell\": \"YICHUNSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"336000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"133\",\n  \"city_name\": \"抚州市\",\n  \"spell\": \"FUZHOUSHI\",\n  \"easy_spell\": \"FZS\",\n  \"zipcode\": \"332900\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"134\",\n  \"city_name\": \"上饶市\",\n  \"spell\": \"SHANGRAOSHI\",\n  \"easy_spell\": \"SRS\",\n  \"zipcode\": \"334000\",\n  \"province_id\": \"14\"\n}, {\n  \"city_id\": \"135\",\n  \"city_name\": \"济南市\",\n  \"spell\": \"JINANSHI\",\n  \"easy_spell\": \"JNS\",\n  \"zipcode\": \"250000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"136\",\n  \"city_name\": \"青岛市\",\n  \"spell\": \"QINGDAOSHI\",\n  \"easy_spell\": \"QDS\",\n  \"zipcode\": \"266000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"137\",\n  \"city_name\": \"淄博市\",\n  \"spell\": \"ZIBOSHI\",\n  \"easy_spell\": \"ZBS\",\n  \"zipcode\": \"255000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"138\",\n  \"city_name\": \"枣庄市\",\n  \"spell\": \"ZAOZHUANGSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"277100\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"139\",\n  \"city_name\": \"东营市\",\n  \"spell\": \"DONGYINGSHI\",\n  \"easy_spell\": \"DYS\",\n  \"zipcode\": \"257000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"140\",\n  \"city_name\": \"烟台市\",\n  \"spell\": \"YANTAISHI\",\n  \"easy_spell\": \"YTS\",\n  \"zipcode\": \"264000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"141\",\n  \"city_name\": \"潍坊市\",\n  \"spell\": \"WEIFANGSHI\",\n  \"easy_spell\": \"WFS\",\n  \"zipcode\": \"261000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"142\",\n  \"city_name\": \"济宁市\",\n  \"spell\": \"JININGSHI\",\n  \"easy_spell\": \"JNS\",\n  \"zipcode\": \"272100\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"143\",\n  \"city_name\": \"泰安市\",\n  \"spell\": \"TAIANSHI\",\n  \"easy_spell\": \"TAS\",\n  \"zipcode\": \"271000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"144\",\n  \"city_name\": \"威海市\",\n  \"spell\": \"WEIHAISHI\",\n  \"easy_spell\": \"WHS\",\n  \"zipcode\": \"265700\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"145\",\n  \"city_name\": \"日照市\",\n  \"spell\": \"RIZHAOSHI\",\n  \"easy_spell\": \"RZS\",\n  \"zipcode\": \"276800\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"146\",\n  \"city_name\": \"莱芜市\",\n  \"spell\": \"LAIWUSHI\",\n  \"easy_spell\": \"LWS\",\n  \"zipcode\": \"271100\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"147\",\n  \"city_name\": \"临沂市\",\n  \"spell\": \"LINYISHI\",\n  \"easy_spell\": \"LYS\",\n  \"zipcode\": \"276000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"148\",\n  \"city_name\": \"德州市\",\n  \"spell\": \"DEZHOUSHI\",\n  \"easy_spell\": \"DZS\",\n  \"zipcode\": \"253000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"149\",\n  \"city_name\": \"聊城市\",\n  \"spell\": \"LIAOCHENGSHI\",\n  \"easy_spell\": \"LCS\",\n  \"zipcode\": \"252000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"150\",\n  \"city_name\": \"滨州市\",\n  \"spell\": \"BINZHOUSHI\",\n  \"easy_spell\": \"BZS\",\n  \"zipcode\": \"256600\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"151\",\n  \"city_name\": \"荷泽市\",\n  \"spell\": \"HEZESHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"255000\",\n  \"province_id\": \"15\"\n}, {\n  \"city_id\": \"152\",\n  \"city_name\": \"郑州市\",\n  \"spell\": \"ZHENGZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"450000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"153\",\n  \"city_name\": \"开封市\",\n  \"spell\": \"KAIFENGSHI\",\n  \"easy_spell\": \"KFS\",\n  \"zipcode\": \"475000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"154\",\n  \"city_name\": \"洛阳市\",\n  \"spell\": \"LUOYANGSHI\",\n  \"easy_spell\": \"LYS\",\n  \"zipcode\": \"471000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"155\",\n  \"city_name\": \"平顶山市\",\n  \"spell\": \"PINGDINGSHANSHI\",\n  \"easy_spell\": \"PDSS\",\n  \"zipcode\": \"467000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"156\",\n  \"city_name\": \"安阳市\",\n  \"spell\": \"ANYANGSHI\",\n  \"easy_spell\": \"AYS\",\n  \"zipcode\": \"454900\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"157\",\n  \"city_name\": \"鹤壁市\",\n  \"spell\": \"HEBISHI\",\n  \"easy_spell\": \"HBS\",\n  \"zipcode\": \"456600\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"158\",\n  \"city_name\": \"新乡市\",\n  \"spell\": \"XINXIANGSHI\",\n  \"easy_spell\": \"XXS\",\n  \"zipcode\": \"453000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"159\",\n  \"city_name\": \"焦作市\",\n  \"spell\": \"JIAOZUOSHI\",\n  \"easy_spell\": \"JZS\",\n  \"zipcode\": \"454100\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"160\",\n  \"city_name\": \"濮阳市\",\n  \"spell\": \"ZUOYANGSHI\",\n  \"easy_spell\": \"ZYS\",\n  \"zipcode\": \"457000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"161\",\n  \"city_name\": \"许昌市\",\n  \"spell\": \"XUCHANGSHI\",\n  \"easy_spell\": \"XCS\",\n  \"zipcode\": \"461000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"162\",\n  \"city_name\": \"漯河市\",\n  \"spell\": \"ZUOHESHI\",\n  \"easy_spell\": \"ZHS\",\n  \"zipcode\": \"462000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"163\",\n  \"city_name\": \"三门峡市\",\n  \"spell\": \"SANMENXIASHI\",\n  \"easy_spell\": \"SMXS\",\n  \"zipcode\": \"472000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"164\",\n  \"city_name\": \"南阳市\",\n  \"spell\": \"NANYANGSHI\",\n  \"easy_spell\": \"NYS\",\n  \"zipcode\": \"473000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"165\",\n  \"city_name\": \"商丘市\",\n  \"spell\": \"SHANGQIUSHI\",\n  \"easy_spell\": \"SQS\",\n  \"zipcode\": \"476000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"166\",\n  \"city_name\": \"信阳市\",\n  \"spell\": \"XINYANGSHI\",\n  \"easy_spell\": \"XYS\",\n  \"zipcode\": \"464000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"167\",\n  \"city_name\": \"周口市\",\n  \"spell\": \"ZHOUKOUSHI\",\n  \"easy_spell\": \"ZKS\",\n  \"zipcode\": \"466000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"168\",\n  \"city_name\": \"驻马店市\",\n  \"spell\": \"ZHUMADIANSHI\",\n  \"easy_spell\": \"ZMDS\",\n  \"zipcode\": \"463000\",\n  \"province_id\": \"16\"\n}, {\n  \"city_id\": \"169\",\n  \"city_name\": \"武汉市\",\n  \"spell\": \"WUHANSHI\",\n  \"easy_spell\": \"WHS\",\n  \"zipcode\": \"430000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"170\",\n  \"city_name\": \"黄石市\",\n  \"spell\": \"HUANGSHISHI\",\n  \"easy_spell\": \"HSS\",\n  \"zipcode\": \"435000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"171\",\n  \"city_name\": \"十堰市\",\n  \"spell\": \"SHIYANSHI\",\n  \"easy_spell\": \"SYS\",\n  \"zipcode\": \"442000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"172\",\n  \"city_name\": \"宜昌市\",\n  \"spell\": \"YICHANGSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"443000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"173\",\n  \"city_name\": \"襄樊市\",\n  \"spell\": \"XIANGFANSHI\",\n  \"easy_spell\": \"XFS\",\n  \"zipcode\": \"441000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"174\",\n  \"city_name\": \"鄂州市\",\n  \"spell\": \"EZHOUSHI\",\n  \"easy_spell\": \"EZS\",\n  \"zipcode\": \"436000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"175\",\n  \"city_name\": \"荆门市\",\n  \"spell\": \"JINGMENSHI\",\n  \"easy_spell\": \"JMS\",\n  \"zipcode\": \"448000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"176\",\n  \"city_name\": \"孝感市\",\n  \"spell\": \"XIAOGANSHI\",\n  \"easy_spell\": \"XGS\",\n  \"zipcode\": \"432100\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"177\",\n  \"city_name\": \"荆州市\",\n  \"spell\": \"JINGZHOUSHI\",\n  \"easy_spell\": \"JZS\",\n  \"zipcode\": \"434000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"178\",\n  \"city_name\": \"黄冈市\",\n  \"spell\": \"HUANGGANGSHI\",\n  \"easy_spell\": \"HGS\",\n  \"zipcode\": \"438000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"179\",\n  \"city_name\": \"咸宁市\",\n  \"spell\": \"XIANNINGSHI\",\n  \"easy_spell\": \"XNS\",\n  \"zipcode\": \"437000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"180\",\n  \"city_name\": \"随州市\",\n  \"spell\": \"SUIZHOUSHI\",\n  \"easy_spell\": \"SZS\",\n  \"zipcode\": \"441300\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"181\",\n  \"city_name\": \"恩施土家族苗族自治州\",\n  \"spell\": \"ENSHITUJIAZUMIAOZUZIZHIZHOU\",\n  \"easy_spell\": \"ESTJZMZZZZ\",\n  \"zipcode\": \"445000\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"182\",\n  \"city_name\": \"神农架\",\n  \"spell\": \"SHENNONGJIA\",\n  \"easy_spell\": \"SNJ\",\n  \"zipcode\": \"442400\",\n  \"province_id\": \"17\"\n}, {\n  \"city_id\": \"183\",\n  \"city_name\": \"长沙市\",\n  \"spell\": \"CHANGSHASHI\",\n  \"easy_spell\": \"CSS\",\n  \"zipcode\": \"410000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"184\",\n  \"city_name\": \"株洲市\",\n  \"spell\": \"ZHUZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"412000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"185\",\n  \"city_name\": \"湘潭市\",\n  \"spell\": \"XIANGTANSHI\",\n  \"easy_spell\": \"XTS\",\n  \"zipcode\": \"411100\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"186\",\n  \"city_name\": \"衡阳市\",\n  \"spell\": \"HENGYANGSHI\",\n  \"easy_spell\": \"HYS\",\n  \"zipcode\": \"421000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"187\",\n  \"city_name\": \"邵阳市\",\n  \"spell\": \"SHAOYANGSHI\",\n  \"easy_spell\": \"SYS\",\n  \"zipcode\": \"422000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"188\",\n  \"city_name\": \"岳阳市\",\n  \"spell\": \"YUEYANGSHI\",\n  \"easy_spell\": \"YYS\",\n  \"zipcode\": \"414000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"189\",\n  \"city_name\": \"常德市\",\n  \"spell\": \"CHANGDESHI\",\n  \"easy_spell\": \"CDS\",\n  \"zipcode\": \"415000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"190\",\n  \"city_name\": \"张家界市\",\n  \"spell\": \"ZHANGJIAJIESHI\",\n  \"easy_spell\": \"ZJJS\",\n  \"zipcode\": \"427000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"191\",\n  \"city_name\": \"益阳市\",\n  \"spell\": \"YIYANGSHI\",\n  \"easy_spell\": \"YYS\",\n  \"zipcode\": \"413000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"192\",\n  \"city_name\": \"郴州市\",\n  \"spell\": \"CHENZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"423000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"193\",\n  \"city_name\": \"永州市\",\n  \"spell\": \"YONGZHOUSHI\",\n  \"easy_spell\": \"YZS\",\n  \"zipcode\": \"425000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"194\",\n  \"city_name\": \"怀化市\",\n  \"spell\": \"HUAIHUASHI\",\n  \"easy_spell\": \"HHS\",\n  \"zipcode\": \"418000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"195\",\n  \"city_name\": \"娄底市\",\n  \"spell\": \"LOUDISHI\",\n  \"easy_spell\": \"LDS\",\n  \"zipcode\": \"417000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"196\",\n  \"city_name\": \"湘西土家族苗族自治州\",\n  \"spell\": \"XIANGXITUJIAZUMIAOZUZIZHIZHOU\",\n  \"easy_spell\": \"XXTJZMZZZZ\",\n  \"zipcode\": \"416000\",\n  \"province_id\": \"18\"\n}, {\n  \"city_id\": \"197\",\n  \"city_name\": \"广州市\",\n  \"spell\": \"GUANGZHOUSHI\",\n  \"easy_spell\": \"GZS\",\n  \"zipcode\": \"510000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"198\",\n  \"city_name\": \"韶关市\",\n  \"spell\": \"SHAOGUANSHI\",\n  \"easy_spell\": \"SGS\",\n  \"zipcode\": \"521000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"199\",\n  \"city_name\": \"深圳市\",\n  \"spell\": \"SHENZUOSHI\",\n  \"easy_spell\": \"SZS\",\n  \"zipcode\": \"518000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"200\",\n  \"city_name\": \"珠海市\",\n  \"spell\": \"ZHUHAISHI\",\n  \"easy_spell\": \"ZHS\",\n  \"zipcode\": \"519000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"201\",\n  \"city_name\": \"汕头市\",\n  \"spell\": \"SHANTOUSHI\",\n  \"easy_spell\": \"STS\",\n  \"zipcode\": \"515000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"202\",\n  \"city_name\": \"佛山市\",\n  \"spell\": \"FOSHANSHI\",\n  \"easy_spell\": \"FSS\",\n  \"zipcode\": \"528000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"203\",\n  \"city_name\": \"江门市\",\n  \"spell\": \"JIANGMENSHI\",\n  \"easy_spell\": \"JMS\",\n  \"zipcode\": \"529000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"204\",\n  \"city_name\": \"湛江市\",\n  \"spell\": \"ZHANJIANGSHI\",\n  \"easy_spell\": \"ZJS\",\n  \"zipcode\": \"524000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"205\",\n  \"city_name\": \"茂名市\",\n  \"spell\": \"MAOMINGSHI\",\n  \"easy_spell\": \"MMS\",\n  \"zipcode\": \"525000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"206\",\n  \"city_name\": \"肇庆市\",\n  \"spell\": \"ZHAOQINGSHI\",\n  \"easy_spell\": \"ZQS\",\n  \"zipcode\": \"526000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"207\",\n  \"city_name\": \"惠州市\",\n  \"spell\": \"HUIZHOUSHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"516000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"208\",\n  \"city_name\": \"梅州市\",\n  \"spell\": \"MEIZHOUSHI\",\n  \"easy_spell\": \"MZS\",\n  \"zipcode\": \"514000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"209\",\n  \"city_name\": \"汕尾市\",\n  \"spell\": \"SHANWEISHI\",\n  \"easy_spell\": \"SWS\",\n  \"zipcode\": \"516600\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"210\",\n  \"city_name\": \"河源市\",\n  \"spell\": \"HEYUANSHI\",\n  \"easy_spell\": \"HYS\",\n  \"zipcode\": \"517000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"211\",\n  \"city_name\": \"阳江市\",\n  \"spell\": \"YANGJIANGSHI\",\n  \"easy_spell\": \"YJS\",\n  \"zipcode\": \"529500\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"212\",\n  \"city_name\": \"清远市\",\n  \"spell\": \"QINGYUANSHI\",\n  \"easy_spell\": \"QYS\",\n  \"zipcode\": \"511500\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"213\",\n  \"city_name\": \"东莞市\",\n  \"spell\": \"DONGZUOSHI\",\n  \"easy_spell\": \"DZS\",\n  \"zipcode\": \"511700\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"214\",\n  \"city_name\": \"中山市\",\n  \"spell\": \"ZHONGSHANSHI\",\n  \"easy_spell\": \"ZSS\",\n  \"zipcode\": \"528400\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"215\",\n  \"city_name\": \"潮州市\",\n  \"spell\": \"CHAOZHOUSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"515600\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"216\",\n  \"city_name\": \"揭阳市\",\n  \"spell\": \"JIEYANGSHI\",\n  \"easy_spell\": \"JYS\",\n  \"zipcode\": \"522000\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"217\",\n  \"city_name\": \"云浮市\",\n  \"spell\": \"YUNFUSHI\",\n  \"easy_spell\": \"YFS\",\n  \"zipcode\": \"527300\",\n  \"province_id\": \"19\"\n}, {\n  \"city_id\": \"218\",\n  \"city_name\": \"南宁市\",\n  \"spell\": \"NANNINGSHI\",\n  \"easy_spell\": \"NNS\",\n  \"zipcode\": \"530000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"219\",\n  \"city_name\": \"柳州市\",\n  \"spell\": \"LIUZHOUSHI\",\n  \"easy_spell\": \"LZS\",\n  \"zipcode\": \"545000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"220\",\n  \"city_name\": \"桂林市\",\n  \"spell\": \"GUILINSHI\",\n  \"easy_spell\": \"GLS\",\n  \"zipcode\": \"541000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"221\",\n  \"city_name\": \"梧州市\",\n  \"spell\": \"WUZHOUSHI\",\n  \"easy_spell\": \"WZS\",\n  \"zipcode\": \"543000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"222\",\n  \"city_name\": \"北海市\",\n  \"spell\": \"BEIHAISHI\",\n  \"easy_spell\": \"BHS\",\n  \"zipcode\": \"536000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"223\",\n  \"city_name\": \"防城港市\",\n  \"spell\": \"FANGCHENGGANGSHI\",\n  \"easy_spell\": \"FCGS\",\n  \"zipcode\": \"538000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"224\",\n  \"city_name\": \"钦州市\",\n  \"spell\": \"QINZHOUSHI\",\n  \"easy_spell\": \"QZS\",\n  \"zipcode\": \"535000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"225\",\n  \"city_name\": \"贵港市\",\n  \"spell\": \"GUIGANGSHI\",\n  \"easy_spell\": \"GGS\",\n  \"zipcode\": \"537100\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"226\",\n  \"city_name\": \"玉林市\",\n  \"spell\": \"YULINSHI\",\n  \"easy_spell\": \"YLS\",\n  \"zipcode\": \"537000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"227\",\n  \"city_name\": \"百色市\",\n  \"spell\": \"BAISESHI\",\n  \"easy_spell\": \"BSS\",\n  \"zipcode\": \"533000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"228\",\n  \"city_name\": \"贺州市\",\n  \"spell\": \"HEZHOUSHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"542800\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"229\",\n  \"city_name\": \"河池市\",\n  \"spell\": \"HECHISHI\",\n  \"easy_spell\": \"HCS\",\n  \"zipcode\": \"547000\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"230\",\n  \"city_name\": \"来宾市\",\n  \"spell\": \"LAIBINSHI\",\n  \"easy_spell\": \"LBS\",\n  \"zipcode\": \"546100\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"231\",\n  \"city_name\": \"崇左市\",\n  \"spell\": \"CHONGZUOSHI\",\n  \"easy_spell\": \"CZS\",\n  \"zipcode\": \"532200\",\n  \"province_id\": \"20\"\n}, {\n  \"city_id\": \"232\",\n  \"city_name\": \"海口市\",\n  \"spell\": \"HAIKOUSHI\",\n  \"easy_spell\": \"HKS\",\n  \"zipcode\": \"570000\",\n  \"province_id\": \"21\"\n}, {\n  \"city_id\": \"233\",\n  \"city_name\": \"三亚市\",\n  \"spell\": \"SANYASHI\",\n  \"easy_spell\": \"SYS\",\n  \"zipcode\": \"572000\",\n  \"province_id\": \"21\"\n}, {\n  \"city_id\": \"234\",\n  \"city_name\": \"重庆市\",\n  \"spell\": \"ZHONGQINGSHI\",\n  \"easy_spell\": \"ZQS\",\n  \"zipcode\": \"400000\",\n  \"province_id\": \"22\"\n}, {\n  \"city_id\": \"235\",\n  \"city_name\": \"成都市\",\n  \"spell\": \"CHENGDUSHI\",\n  \"easy_spell\": \"CDS\",\n  \"zipcode\": \"610000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"236\",\n  \"city_name\": \"自贡市\",\n  \"spell\": \"ZIGONGSHI\",\n  \"easy_spell\": \"ZGS\",\n  \"zipcode\": \"643000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"237\",\n  \"city_name\": \"攀枝花市\",\n  \"spell\": \"PANZHIHUASHI\",\n  \"easy_spell\": \"PZHS\",\n  \"zipcode\": \"617000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"238\",\n  \"city_name\": \"泸州市\",\n  \"spell\": \"ZUOZHOUSHI\",\n  \"easy_spell\": \"ZZS\",\n  \"zipcode\": \"646100\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"239\",\n  \"city_name\": \"德阳市\",\n  \"spell\": \"DEYANGSHI\",\n  \"easy_spell\": \"DYS\",\n  \"zipcode\": \"618000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"240\",\n  \"city_name\": \"绵阳市\",\n  \"spell\": \"MIANYANGSHI\",\n  \"easy_spell\": \"MYS\",\n  \"zipcode\": \"621000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"241\",\n  \"city_name\": \"广元市\",\n  \"spell\": \"GUANGYUANSHI\",\n  \"easy_spell\": \"GYS\",\n  \"zipcode\": \"628000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"242\",\n  \"city_name\": \"遂宁市\",\n  \"spell\": \"SUININGSHI\",\n  \"easy_spell\": \"SNS\",\n  \"zipcode\": \"629000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"243\",\n  \"city_name\": \"内江市\",\n  \"spell\": \"NEIJIANGSHI\",\n  \"easy_spell\": \"NJS\",\n  \"zipcode\": \"641000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"244\",\n  \"city_name\": \"乐山市\",\n  \"spell\": \"LESHANSHI\",\n  \"easy_spell\": \"LSS\",\n  \"zipcode\": \"614000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"245\",\n  \"city_name\": \"南充市\",\n  \"spell\": \"NANCHONGSHI\",\n  \"easy_spell\": \"NCS\",\n  \"zipcode\": \"637000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"246\",\n  \"city_name\": \"眉山市\",\n  \"spell\": \"MEISHANSHI\",\n  \"easy_spell\": \"MSS\",\n  \"zipcode\": \"612100\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"247\",\n  \"city_name\": \"宜宾市\",\n  \"spell\": \"YIBINSHI\",\n  \"easy_spell\": \"YBS\",\n  \"zipcode\": \"644000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"248\",\n  \"city_name\": \"广安市\",\n  \"spell\": \"GUANGANSHI\",\n  \"easy_spell\": \"GAS\",\n  \"zipcode\": \"638000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"249\",\n  \"city_name\": \"达州市\",\n  \"spell\": \"DAZHOUSHI\",\n  \"easy_spell\": \"DZS\",\n  \"zipcode\": \"635000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"250\",\n  \"city_name\": \"雅安市\",\n  \"spell\": \"YAANSHI\",\n  \"easy_spell\": \"YAS\",\n  \"zipcode\": \"625000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"251\",\n  \"city_name\": \"巴中市\",\n  \"spell\": \"BAZHONGSHI\",\n  \"easy_spell\": \"BZS\",\n  \"zipcode\": \"635500\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"252\",\n  \"city_name\": \"资阳市\",\n  \"spell\": \"ZIYANGSHI\",\n  \"easy_spell\": \"ZYS\",\n  \"zipcode\": \"641300\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"253\",\n  \"city_name\": \"阿坝藏族羌族自治州\",\n  \"spell\": \"ABACANGZUQIANGZUZIZHIZHOU\",\n  \"easy_spell\": \"ABCZQZZZZ\",\n  \"zipcode\": \"624600\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"254\",\n  \"city_name\": \"甘孜藏族自治州\",\n  \"spell\": \"GANZICANGZUZIZHIZHOU\",\n  \"easy_spell\": \"GZCZZZZ\",\n  \"zipcode\": \"626000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"255\",\n  \"city_name\": \"凉山彝族自治州\",\n  \"spell\": \"LIANGSHANYIZUZIZHIZHOU\",\n  \"easy_spell\": \"LSYZZZZ\",\n  \"zipcode\": \"615000\",\n  \"province_id\": \"23\"\n}, {\n  \"city_id\": \"256\",\n  \"city_name\": \"贵阳市\",\n  \"spell\": \"GUIYANGSHI\",\n  \"easy_spell\": \"GYS\",\n  \"zipcode\": \"55000\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"257\",\n  \"city_name\": \"六盘水市\",\n  \"spell\": \"LIUPANSHUISHI\",\n  \"easy_spell\": \"LPSS\",\n  \"zipcode\": \"553000\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"258\",\n  \"city_name\": \"遵义市\",\n  \"spell\": \"ZUNYISHI\",\n  \"easy_spell\": \"ZYS\",\n  \"zipcode\": \"563000\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"259\",\n  \"city_name\": \"安顺市\",\n  \"spell\": \"ANSHUNSHI\",\n  \"easy_spell\": \"ASS\",\n  \"zipcode\": \"561000\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"260\",\n  \"city_name\": \"铜仁地区\",\n  \"spell\": \"TONGRENDIQU\",\n  \"easy_spell\": \"TRDQ\",\n  \"zipcode\": \"554300\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"261\",\n  \"city_name\": \"黔西南布依族苗族自治州\",\n  \"spell\": \"QIANXINANBUYIZUMIAOZUZIZHIZHOU\",\n  \"easy_spell\": \"QXNBYZMZZZZ\",\n  \"zipcode\": \"551500\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"262\",\n  \"city_name\": \"毕节地区\",\n  \"spell\": \"BIJIEDIQU\",\n  \"easy_spell\": \"BJDQ\",\n  \"zipcode\": \"551700\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"263\",\n  \"city_name\": \"黔东南苗族侗族自治州\",\n  \"spell\": \"QIANDONGNANMIAOZUDONGZUZIZHIZHOU\",\n  \"easy_spell\": \"QDNMZDZZZZ\",\n  \"zipcode\": \"551500\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"264\",\n  \"city_name\": \"黔南布依族苗族自治州\",\n  \"spell\": \"QIANNANBUYIZUMIAOZUZIZHIZHOU\",\n  \"easy_spell\": \"QNBYZMZZZZ\",\n  \"zipcode\": \"550100\",\n  \"province_id\": \"24\"\n}, {\n  \"city_id\": \"265\",\n  \"city_name\": \"昆明市\",\n  \"spell\": \"KUNMINGSHI\",\n  \"easy_spell\": \"KMS\",\n  \"zipcode\": \"650000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"266\",\n  \"city_name\": \"曲靖市\",\n  \"spell\": \"QUJINGSHI\",\n  \"easy_spell\": \"QJS\",\n  \"zipcode\": \"655000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"267\",\n  \"city_name\": \"玉溪市\",\n  \"spell\": \"YUXISHI\",\n  \"easy_spell\": \"YXS\",\n  \"zipcode\": \"653100\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"268\",\n  \"city_name\": \"保山市\",\n  \"spell\": \"BAOSHANSHI\",\n  \"easy_spell\": \"BSS\",\n  \"zipcode\": \"678000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"269\",\n  \"city_name\": \"昭通市\",\n  \"spell\": \"ZHAOTONGSHI\",\n  \"easy_spell\": \"ZTS\",\n  \"zipcode\": \"657000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"270\",\n  \"city_name\": \"丽江市\",\n  \"spell\": \"LIJIANGSHI\",\n  \"easy_spell\": \"LJS\",\n  \"zipcode\": \"674100\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"271\",\n  \"city_name\": \"思茅市\",\n  \"spell\": \"SIMAOSHI\",\n  \"easy_spell\": \"SMS\",\n  \"zipcode\": \"665000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"272\",\n  \"city_name\": \"临沧市\",\n  \"spell\": \"LINCANGSHI\",\n  \"easy_spell\": \"LCS\",\n  \"zipcode\": \"677000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"273\",\n  \"city_name\": \"楚雄彝族自治州\",\n  \"spell\": \"CHUXIONGYIZUZIZHIZHOU\",\n  \"easy_spell\": \"CXYZZZZ\",\n  \"zipcode\": \"675000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"274\",\n  \"city_name\": \"红河哈尼族彝族自治州\",\n  \"spell\": \"HONGHEHANIZUYIZUZIZHIZHOU\",\n  \"easy_spell\": \"HHHNZYZZZZ\",\n  \"zipcode\": \"654400\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"275\",\n  \"city_name\": \"文山壮族苗族自治州\",\n  \"spell\": \"WENSHANZHUANGZUMIAOZUZIZHIZHOU\",\n  \"easy_spell\": \"WSZZMZZZZ\",\n  \"zipcode\": \"663000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"276\",\n  \"city_name\": \"西双版纳傣族自治州\",\n  \"spell\": \"XISHUANGBANNADAIZUZIZHIZHOU\",\n  \"easy_spell\": \"XSBNDZZZZ\",\n  \"zipcode\": \"666200\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"277\",\n  \"city_name\": \"大理白族自治州\",\n  \"spell\": \"DALIBAIZUZIZHIZHOU\",\n  \"easy_spell\": \"DLBZZZZ\",\n  \"zipcode\": \"671000\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"278\",\n  \"city_name\": \"德宏傣族景颇族自治州\",\n  \"spell\": \"DEHONGDAIZUJINGPOZUZIZHIZHOU\",\n  \"easy_spell\": \"DHDZJPZZZZ\",\n  \"zipcode\": \"678400\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"279\",\n  \"city_name\": \"怒江傈僳族自治州\",\n  \"spell\": \"NUJIANGLISUZUZIZHIZHOU\",\n  \"easy_spell\": \"NJLSZZZZ\",\n  \"zipcode\": \"671400\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"280\",\n  \"city_name\": \"迪庆藏族自治州\",\n  \"spell\": \"DIQINGCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"DQCZZZZ\",\n  \"zipcode\": \"674400\",\n  \"province_id\": \"25\"\n}, {\n  \"city_id\": \"281\",\n  \"city_name\": \"拉萨市\",\n  \"spell\": \"LASASHI\",\n  \"easy_spell\": \"LSS\",\n  \"zipcode\": \"850000\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"282\",\n  \"city_name\": \"昌都地区\",\n  \"spell\": \"CHANGDUDIQU\",\n  \"easy_spell\": \"CDDQ\",\n  \"zipcode\": \"854000\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"283\",\n  \"city_name\": \"山南地区\",\n  \"spell\": \"SHANNANDIQU\",\n  \"easy_spell\": \"SNDQ\",\n  \"zipcode\": \"856000\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"284\",\n  \"city_name\": \"日喀则地区\",\n  \"spell\": \"RIKAZEDIQU\",\n  \"easy_spell\": \"RKZDQ\",\n  \"zipcode\": \"857000\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"285\",\n  \"city_name\": \"那曲地区\",\n  \"spell\": \"NAQUDIQU\",\n  \"easy_spell\": \"NQDQ\",\n  \"zipcode\": \"852000\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"286\",\n  \"city_name\": \"阿里地区\",\n  \"spell\": \"ALIDIQU\",\n  \"easy_spell\": \"ALDQ\",\n  \"zipcode\": \"859100\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"287\",\n  \"city_name\": \"林芝地区\",\n  \"spell\": \"LINZHIDIQU\",\n  \"easy_spell\": \"LZDQ\",\n  \"zipcode\": \"860100\",\n  \"province_id\": \"26\"\n}, {\n  \"city_id\": \"288\",\n  \"city_name\": \"西安市\",\n  \"spell\": \"XIANSHI\",\n  \"easy_spell\": \"XAS\",\n  \"zipcode\": \"710000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"289\",\n  \"city_name\": \"铜川市\",\n  \"spell\": \"TONGCHUANSHI\",\n  \"easy_spell\": \"TCS\",\n  \"zipcode\": \"727000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"290\",\n  \"city_name\": \"宝鸡市\",\n  \"spell\": \"BAOJISHI\",\n  \"easy_spell\": \"BJS\",\n  \"zipcode\": \"721000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"291\",\n  \"city_name\": \"咸阳市\",\n  \"spell\": \"XIANYANGSHI\",\n  \"easy_spell\": \"XYS\",\n  \"zipcode\": \"712000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"292\",\n  \"city_name\": \"渭南市\",\n  \"spell\": \"WEINANSHI\",\n  \"easy_spell\": \"WNS\",\n  \"zipcode\": \"714000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"293\",\n  \"city_name\": \"延安市\",\n  \"spell\": \"YANANSHI\",\n  \"easy_spell\": \"YAS\",\n  \"zipcode\": \"716000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"294\",\n  \"city_name\": \"汉中市\",\n  \"spell\": \"HANZHONGSHI\",\n  \"easy_spell\": \"HZS\",\n  \"zipcode\": \"723000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"295\",\n  \"city_name\": \"榆林市\",\n  \"spell\": \"YULINSHI\",\n  \"easy_spell\": \"YLS\",\n  \"zipcode\": \"719000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"296\",\n  \"city_name\": \"安康市\",\n  \"spell\": \"ANKANGSHI\",\n  \"easy_spell\": \"AKS\",\n  \"zipcode\": \"725000\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"297\",\n  \"city_name\": \"商洛市\",\n  \"spell\": \"SHANGLUOSHI\",\n  \"easy_spell\": \"SLS\",\n  \"zipcode\": \"711500\",\n  \"province_id\": \"27\"\n}, {\n  \"city_id\": \"298\",\n  \"city_name\": \"兰州市\",\n  \"spell\": \"LANZHOUSHI\",\n  \"easy_spell\": \"LZS\",\n  \"zipcode\": \"730000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"299\",\n  \"city_name\": \"嘉峪关市\",\n  \"spell\": \"JIAYUGUANSHI\",\n  \"easy_spell\": \"JYGS\",\n  \"zipcode\": \"735100\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"300\",\n  \"city_name\": \"金昌市\",\n  \"spell\": \"JINCHANGSHI\",\n  \"easy_spell\": \"JCS\",\n  \"zipcode\": \"737100\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"301\",\n  \"city_name\": \"白银市\",\n  \"spell\": \"BAIYINSHI\",\n  \"easy_spell\": \"BYS\",\n  \"zipcode\": \"730900\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"302\",\n  \"city_name\": \"天水市\",\n  \"spell\": \"TIANSHUISHI\",\n  \"easy_spell\": \"TSS\",\n  \"zipcode\": \"741000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"303\",\n  \"city_name\": \"武威市\",\n  \"spell\": \"WUWEISHI\",\n  \"easy_spell\": \"WWS\",\n  \"zipcode\": \"733000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"304\",\n  \"city_name\": \"张掖市\",\n  \"spell\": \"ZHANGYESHI\",\n  \"easy_spell\": \"ZYS\",\n  \"zipcode\": \"734000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"305\",\n  \"city_name\": \"平凉市\",\n  \"spell\": \"PINGLIANGSHI\",\n  \"easy_spell\": \"PLS\",\n  \"zipcode\": \"744000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"306\",\n  \"city_name\": \"酒泉市\",\n  \"spell\": \"JIUQUANSHI\",\n  \"easy_spell\": \"JQS\",\n  \"zipcode\": \"735000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"307\",\n  \"city_name\": \"庆阳市\",\n  \"spell\": \"QINGYANGSHI\",\n  \"easy_spell\": \"QYS\",\n  \"zipcode\": \"744500\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"308\",\n  \"city_name\": \"定西市\",\n  \"spell\": \"DINGXISHI\",\n  \"easy_spell\": \"DXS\",\n  \"zipcode\": \"743000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"309\",\n  \"city_name\": \"陇南市\",\n  \"spell\": \"LONGNANSHI\",\n  \"easy_spell\": \"LNS\",\n  \"zipcode\": \"742100\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"310\",\n  \"city_name\": \"临夏回族自治州\",\n  \"spell\": \"LINXIAHUIZUZIZHIZHOU\",\n  \"easy_spell\": \"LXHZZZZ\",\n  \"zipcode\": \"731100\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"311\",\n  \"city_name\": \"甘南藏族自治州\",\n  \"spell\": \"GANNANCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"GNCZZZZ\",\n  \"zipcode\": \"747000\",\n  \"province_id\": \"28\"\n}, {\n  \"city_id\": \"312\",\n  \"city_name\": \"西宁市\",\n  \"spell\": \"XININGSHI\",\n  \"easy_spell\": \"XNS\",\n  \"zipcode\": \"810000\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"313\",\n  \"city_name\": \"海东地区\",\n  \"spell\": \"HAIDONGDIQU\",\n  \"easy_spell\": \"HDDQ\",\n  \"zipcode\": \"810600\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"314\",\n  \"city_name\": \"海北藏族自治州\",\n  \"spell\": \"HAIBEICANGZUZIZHIZHOU\",\n  \"easy_spell\": \"HBCZZZZ\",\n  \"zipcode\": \"810300\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"315\",\n  \"city_name\": \"黄南藏族自治州\",\n  \"spell\": \"HUANGNANCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"HNCZZZZ\",\n  \"zipcode\": \"811300\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"316\",\n  \"city_name\": \"海南藏族自治州\",\n  \"spell\": \"HAINANCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"HNCZZZZ\",\n  \"zipcode\": \"813000\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"317\",\n  \"city_name\": \"果洛藏族自治州\",\n  \"spell\": \"GUOLUOCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"GLCZZZZ\",\n  \"zipcode\": \"814000\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"318\",\n  \"city_name\": \"玉树藏族自治州\",\n  \"spell\": \"YUSHUCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"YSCZZZZ\",\n  \"zipcode\": \"815000\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"319\",\n  \"city_name\": \"海西蒙古族藏族自治州\",\n  \"spell\": \"HAIXIMENGGUZUCANGZUZIZHIZHOU\",\n  \"easy_spell\": \"HXMGZCZZZZ\",\n  \"zipcode\": \"817000\",\n  \"province_id\": \"29\"\n}, {\n  \"city_id\": \"320\",\n  \"city_name\": \"银川市\",\n  \"spell\": \"YINCHUANSHI\",\n  \"easy_spell\": \"YCS\",\n  \"zipcode\": \"750000\",\n  \"province_id\": \"30\"\n}, {\n  \"city_id\": \"321\",\n  \"city_name\": \"石嘴山市\",\n  \"spell\": \"SHIZUISHANSHI\",\n  \"easy_spell\": \"SZSS\",\n  \"zipcode\": \"753000\",\n  \"province_id\": \"30\"\n}, {\n  \"city_id\": \"322\",\n  \"city_name\": \"吴忠市\",\n  \"spell\": \"WUZHONGSHI\",\n  \"easy_spell\": \"WZS\",\n  \"zipcode\": \"751100\",\n  \"province_id\": \"30\"\n}, {\n  \"city_id\": \"323\",\n  \"city_name\": \"固原市\",\n  \"spell\": \"GUYUANSHI\",\n  \"easy_spell\": \"GYS\",\n  \"zipcode\": \"756000\",\n  \"province_id\": \"30\"\n}, {\n  \"city_id\": \"324\",\n  \"city_name\": \"中卫市\",\n  \"spell\": \"ZHONGWEISHI\",\n  \"easy_spell\": \"ZWS\",\n  \"zipcode\": \"751700\",\n  \"province_id\": \"30\"\n}, {\n  \"city_id\": \"325\",\n  \"city_name\": \"乌鲁木齐市\",\n  \"spell\": \"WULUMUQISHI\",\n  \"easy_spell\": \"WLMQS\",\n  \"zipcode\": \"830000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"326\",\n  \"city_name\": \"克拉玛依市\",\n  \"spell\": \"KELAMAYISHI\",\n  \"easy_spell\": \"KLMYS\",\n  \"zipcode\": \"834000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"327\",\n  \"city_name\": \"吐鲁番地区\",\n  \"spell\": \"TULUFANDIQU\",\n  \"easy_spell\": \"TLFDQ\",\n  \"zipcode\": \"838000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"328\",\n  \"city_name\": \"哈密地区\",\n  \"spell\": \"HAMIDIQU\",\n  \"easy_spell\": \"HMDQ\",\n  \"zipcode\": \"839000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"329\",\n  \"city_name\": \"昌吉回族自治州\",\n  \"spell\": \"CHANGJIHUIZUZIZHIZHOU\",\n  \"easy_spell\": \"CJHZZZZ\",\n  \"zipcode\": \"831100\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"330\",\n  \"city_name\": \"博尔塔拉蒙古自治州\",\n  \"spell\": \"BOERTALAMENGGUZIZHIZHOU\",\n  \"easy_spell\": \"BETLMGZZZ\",\n  \"zipcode\": \"833400\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"331\",\n  \"city_name\": \"巴音郭楞蒙古自治州\",\n  \"spell\": \"BAYINGUOLENGMENGGUZIZHIZHOU\",\n  \"easy_spell\": \"BYGLMGZZZ\",\n  \"zipcode\": \"841000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"332\",\n  \"city_name\": \"阿克苏地区\",\n  \"spell\": \"AKESUDIQU\",\n  \"easy_spell\": \"AKSDQ\",\n  \"zipcode\": \"843000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"333\",\n  \"city_name\": \"克孜勒苏柯尔克孜自治州\",\n  \"spell\": \"KEZILESUKEERKEZIZIZHIZHOU\",\n  \"easy_spell\": \"KZLSKEKZZZZ\",\n  \"zipcode\": \"835600\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"334\",\n  \"city_name\": \"喀什地区\",\n  \"spell\": \"KASHIDIQU\",\n  \"easy_spell\": \"KSDQ\",\n  \"zipcode\": \"844000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"335\",\n  \"city_name\": \"和田地区\",\n  \"spell\": \"HETIANDIQU\",\n  \"easy_spell\": \"HTDQ\",\n  \"zipcode\": \"848000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"336\",\n  \"city_name\": \"伊犁哈萨克自治州\",\n  \"spell\": \"YILIHASAKEZIZHIZHOU\",\n  \"easy_spell\": \"YLHSKZZZ\",\n  \"zipcode\": \"833200\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"337\",\n  \"city_name\": \"塔城地区\",\n  \"spell\": \"TACHENGDIQU\",\n  \"easy_spell\": \"TCDQ\",\n  \"zipcode\": \"834700\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"338\",\n  \"city_name\": \"阿勒泰地区\",\n  \"spell\": \"ALETAIDIQU\",\n  \"easy_spell\": \"ALTDQ\",\n  \"zipcode\": \"836500\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"339\",\n  \"city_name\": \"石河子市\",\n  \"spell\": \"SHIHEZISHI\",\n  \"easy_spell\": \"SHZS\",\n  \"zipcode\": \"832000\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"340\",\n  \"city_name\": \"阿拉尔市\",\n  \"spell\": \"ALAERSHI\",\n  \"easy_spell\": \"ALES\",\n  \"zipcode\": \"843300\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"341\",\n  \"city_name\": \"图木舒克市\",\n  \"spell\": \"TUMUSHUKESHI\",\n  \"easy_spell\": \"TMSKS\",\n  \"zipcode\": \"843900\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"342\",\n  \"city_name\": \"五家渠市\",\n  \"spell\": \"WUJIAQUSHI\",\n  \"easy_spell\": \"WJQS\",\n  \"zipcode\": \"831300\",\n  \"province_id\": \"31\"\n}, {\n  \"city_id\": \"343\",\n  \"city_name\": \"香港\",\n  \"spell\": \"XIANGGANGTEBIEXINGZHENGQU\",\n  \"easy_spell\": \"XGTBXZQ\",\n  \"zipcode\": \"000000\",\n  \"province_id\": \"32\"\n}, {\n  \"city_id\": \"344\",\n  \"city_name\": \"澳门\",\n  \"spell\": \"AOMENTEBIEXINGZHENGQU\",\n  \"easy_spell\": \"AMTBXZQ\",\n  \"zipcode\": \"000000\",\n  \"province_id\": \"33\"\n}, {\n  \"city_id\": \"345\",\n  \"city_name\": \"台湾\",\n  \"spell\": \"TAIWANSHENG\",\n  \"easy_spell\": \"TWS\",\n  \"zipcode\": \"000000\",\n  \"province_id\": \"34\"\n}];\nmodule.exports = data;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNvbi9hcmVhX2NpdHkuanMiXSwibmFtZXMiOlsiZGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLElBQUksR0FBRyxDQUNWO0VBQ0MsU0FBUyxFQUFFLEdBQUc7RUFDZCxXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLEdBQUc7RUFDZCxXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLEdBQUc7RUFDZCxXQUFXLEVBQUUsTUFBTTtFQUNuQixPQUFPLEVBQUUsaUJBQWlCO0VBQzFCLFlBQVksRUFBRSxNQUFNO0VBQ3BCLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsR0FBRztFQUNkLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxhQUFhO0VBQ3RCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsR0FBRztFQUNkLFdBQVcsRUFBRSxNQUFNO0VBQ25CLE9BQU8sRUFBRSxnQkFBZ0I7RUFDekIsWUFBWSxFQUFFLE1BQU07RUFDcEIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxHQUFHO0VBQ2QsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxHQUFHO0VBQ2QsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxHQUFHO0VBQ2QsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxHQUFHO0VBQ2QsV0FBVyxFQUFFLE1BQU07RUFDbkIsT0FBTyxFQUFFLGdCQUFnQjtFQUN6QixZQUFZLEVBQUUsTUFBTTtFQUNwQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsV0FBVztFQUNwQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsV0FBVztFQUNwQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsY0FBYztFQUN2QixZQUFZLEVBQUUsT0FBTztFQUNyQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsV0FBVztFQUNwQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsVUFBVTtFQUNuQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsT0FBTztFQUNyQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsZUFBZTtFQUN4QixZQUFZLEVBQUUsT0FBTztFQUNyQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsZUFBZTtFQUN4QixZQUFZLEVBQUUsT0FBTztFQUNyQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsZUFBZTtFQUN4QixZQUFZLEVBQUUsT0FBTztFQUNyQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsS0FBSztFQUNsQixPQUFPLEVBQUUsWUFBWTtFQUNyQixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxFQUNEO0VBQ0MsU0FBUyxFQUFFLElBQUk7RUFDZixXQUFXLEVBQUUsT0FBTztFQUNwQixPQUFPLEVBQUUsZ0JBQWdCO0VBQ3pCLFlBQVksRUFBRSxPQUFPO0VBQ3JCLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxNQUFNO0VBQ25CLE9BQU8sRUFBRSxhQUFhO0VBQ3RCLFlBQVksRUFBRSxNQUFNO0VBQ3BCLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxhQUFhO0VBQ3RCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxXQUFXO0VBQ3BCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxXQUFXO0VBQ3BCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxXQUFXO0VBQ3BCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxVQUFVO0VBQ25CLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxVQUFVO0VBQ25CLFlBQVksRUFBRSxLQUFLO0VBQ25CLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsSUFBSTtFQUNmLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE9BQU8sRUFBRSxhQUFhO0VBQ3RCLFlBQVksRUFBRSxLQUFLO0VBQ25C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QUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLGFBQWE7RUFDdEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFVBQVU7RUFDbkIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hCLENBQUMsRUFDRDtFQUNDLFNBQVMsRUFBRSxJQUFJO0VBQ2YsV0FBVyxFQUFFLEtBQUs7RUFDbEIsT0FBTyxFQUFFLFNBQVM7RUFDbEIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsYUFBYSxFQUFFO0FBQ2hC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STtFQUNqQixPQUFPLEVBQUUsdUJBQXVCO0VBQ2hDLFlBQVksRUFBRSxTQUFTO0VBQ3ZCLFNBQVMsRUFBRSxRQUFRO0VBQ25CLGFBQWEsRUFBRTtBQUNoQixDQUFDLEVBQ0Q7RUFDQyxTQUFTLEVBQUUsS0FBSztFQUNoQixXQUFXLEVBQUUsSUFBSTtFQUNqQixPQUFPLEVBQUUsYUFBYTtFQUN0QixZQUFZLEVBQUUsS0FBSztFQUNuQixTQUFTLEVBQUUsUUFBUTtFQUNuQixhQUFhLEVBQUU7QUFDaEIsQ0FBQyxDQUNEO0FBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHRixJQUFJIiwiZmlsZSI6IjczLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhdGEgPSBbXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljJfkuqzluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkVJSklOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJKU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEwMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWkqea0peW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJUSUFOSklOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVEpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTAwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi55+z5a625bqE5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNISUpJQVpIVUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNKWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIwNTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLllJDlsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiVEFOR1NIQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJUU1NcIixcblx0XHRcInppcGNvZGVcIjogXCIwNjMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnp6bnmoflspvluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUUlOSFVBTkdEQU9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRSERTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDY2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6YKv6YO45biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBTkRBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhEU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjA1NjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumCouWPsOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJYSU5HVEFJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFRTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDU0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiOFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5L+d5a6a5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBT0RJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJCRFNcIixcblx0XHRcInppcGNvZGVcIjogXCIwNzEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlvKDlrrblj6PluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWkhBTkdKSUFLT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaSktTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDc1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaJv+W+t+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEVOR0RFU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ0RTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDY3MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuayp+W3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDQU5HWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjA2MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlu4rlnYrluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTEFOR0ZBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMRlNcIixcblx0XHRcInppcGNvZGVcIjogXCIwNjUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6KGh5rC05biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhFTkdTSFVJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDUzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWkquWOn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJUQUlZVUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVFlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDMwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWkp+WQjOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJEQVRPTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJEVFNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMzcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Ziz5rOJ5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllBTkdRVUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWVFTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDQ1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumVv+ayu+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEFOR1pISVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjA0NjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmmYvln47luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOQ0hFTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCIwNDgwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5pyU5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNIVU9aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDM2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaZi+S4reW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJKSU5aSE9OR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAzMDYwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLov5Dln47luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWVVOQ0hFTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCIwNDQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5b+75bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhJTlpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJYWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMzQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Li05rG+5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJTkZFTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxGU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjA0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlkJXmooHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTFZMSUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAzMDUwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlkbzlkozmtannibnluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSFVIRUhBT1RFU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEhIVFNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5YyF5aS05biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBT1RPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJUU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAxNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuYzmtbfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiV1VIQUlTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJXSFNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMTYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyOFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6LWk5bOw5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNISUZFTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJDRlNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMjQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6YCa6L695biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlRPTkdMSUFPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVExTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDI4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumEguWwlOWkmuaWr+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJFRVJEVU9TSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkVFRFNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDEwMzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWRvOS8pui0neWwlOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIVUxVTkJFSUVSU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSExCRVNcIixcblx0XHRcInppcGNvZGVcIjogXCIwMjEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5be05b2m5reW5bCU5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBWUFOTkFPRVJTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJCWU5FU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAxNDQwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuYzlhbDlr5/luIPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiV1VMQU5DSEFCVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIldMQ0JTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDExODAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWFtOWuieebn1wiLFxuXHRcdFwic3BlbGxcIjogXCJYSU5HQU5NRU5HXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWEFNXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTM3NTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumUoeael+mDreWLkuebn1wiLFxuXHRcdFwic3BlbGxcIjogXCJYSUxJTkdVT0xFTUVOR1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhMR0xNXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMDExMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumYv+aLieWWhOebn1wiLFxuXHRcdFwic3BlbGxcIjogXCJBTEFTSEFOTUVOR1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFMU01cIixcblx0XHRcInppcGNvZGVcIjogXCIwMTYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzN1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rKI6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNIRU5ZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1lTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTEwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWkp+i/nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJEQUxJQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJETFNcIixcblx0XHRcInppcGNvZGVcIjogXCIxMTYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Z6N5bGx5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkFOU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjExNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjQwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmiprpobrluIJcIixcblx0XHRcInNwZWxsXCI6IFwiRlVTSFVOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRlNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTEzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNDFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuacrOa6quW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJCRU5YSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJYU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjExNzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjQyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuLnkuJzluIJcIixcblx0XHRcInNwZWxsXCI6IFwiREFORE9OR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkREU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjExODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjQzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLplKblt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEyMTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjQ0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLokKXlj6PluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUlOR0tPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllLU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjExNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjQ1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpmJzmlrDluIJcIixcblx0XHRcInNwZWxsXCI6IFwiRlVYSU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJGWFNcIixcblx0XHRcInppcGNvZGVcIjogXCIxMjMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI0NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6L696Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJQU9ZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTFlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTExMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNDdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuebmOmUpuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJQQU5KSU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJQSlNcIixcblx0XHRcInppcGNvZGVcIjogXCIxMjQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI0OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6ZOB5bKt5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlRJRUxJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJUTFNcIixcblx0XHRcInppcGNvZGVcIjogXCIxMTIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI0OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5pyd6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNIQU9ZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1lTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTIyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiRq+iKpuWym+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIVUxVREFPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSExEU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEyNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjUxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLplb/mmKXluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQ0hBTkdDSFVOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ0NTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTMwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNTJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWQieael+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJKSUxJTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEzMjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjUzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlm5vlubPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiU0lQSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1BTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTM2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNTRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIui+vea6kOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMSUFPWVVBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEzNjIwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjU1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpgJrljJbluIJcIixcblx0XHRcInNwZWxsXCI6IFwiVE9OR0hVQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlRIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEzNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjU2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnmb3lsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkFJU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjEzNDMwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjU3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmnb7ljp/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiU09OR1lVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTWVNcIixcblx0XHRcInppcGNvZGVcIjogXCIxMzExMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI1OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi55m95Z+O5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBSUNIRU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQkNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTM3MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNTlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW7tui+ueacnemynOaXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJZQU5CSUFOQ0hBT1hJQU5aVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllCQ1haWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTMzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNjBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWTiOWwlOa7qOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIQUVSQklOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEVCU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE1MDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjYxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpvZDpvZDlk4jlsJTluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUUlRSUhBRVJTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRUUhFU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE2MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjYyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpuKHopb/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklYSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpYU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE1ODEwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjYzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpuaTlspfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSEVHQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEdTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTU0MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNjRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWPjOm4reWxseW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSFVBTkdZQVNIQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTWVNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTU1MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNjVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWkp+W6huW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJEQVFJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJEUVNcIixcblx0XHRcInppcGNvZGVcIjogXCIxNjMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiOFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI2NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5LyK5pil5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllJQ0hVTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllDU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE1MjMwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjY3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkvbPmnKjmlq/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklBTVVTSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpNU1NcIixcblx0XHRcInppcGNvZGVcIjogXCIxNTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiOFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI2OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5LiD5Y+w5rKz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJVEFJSEVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRVEhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMTU0NjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNjlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIueJoeS4ueaxn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJNVURBTkpJQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTURKU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE1NzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjcwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpu5HmsrPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSEVJSEVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJISFNcIixcblx0XHRcInppcGNvZGVcIjogXCIxNjQzMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiOFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI3MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi57ul5YyW5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNVSUhVQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE1MjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjcyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlpKflhbTlronlsq3lnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiREFYSU5HQU5MSU5HRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRYQUxEUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjE2NTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjczXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuIrmtbfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiU0hBTkdIQUlTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTSFNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMDAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI3NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Y2X5Lqs5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIk5BTkpJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJOSlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiNzVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaXoOmUoeW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJXVVhJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiV1hTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjE0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjc2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlvpDlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWFVaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjIxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjc3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLluLjlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiQ0hBTkdaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjEzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjc4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLoi4/lt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiU1VaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjE1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjc5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljZfpgJrluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTkFOVE9OR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5UU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIyNjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI4MFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6L+e5LqR5riv5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJQU5ZVU5HQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTFlHU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIyMjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI4MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5reu5a6J5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhVQUlBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhBU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIyMzIwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI4MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi55uQ5Z+O5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllBTkNIRU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjI0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjgzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmiazlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUFOR1pIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMjUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiODRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumVh+axn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSEVOSklBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaSlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMTIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiODVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuazsOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJUQUlaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjI1MzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjg2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlrr/ov4HluIJcIixcblx0XHRcInNwZWxsXCI6IFwiU1VRSUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1FTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjIzODAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjg3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmna3lt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSEFOR1pIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIzMTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiODhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWugeazouW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJOSU5HQk9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJOQlNcIixcblx0XHRcInppcGNvZGVcIjogXCIzMTUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiODlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua4qeW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJXRU5aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiV1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzI1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjExXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjkwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlmInlhbTluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklBWElOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpYU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMxNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rmW5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhVWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMxMzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi57uN5YW05biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNIQU9YSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1hTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzEyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjExXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjkzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLph5HljY7luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOSFVBU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSkhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzIxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjExXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjk0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLooaLlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWlVPWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMyNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5NVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Iif5bGx5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIT1VTSEFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWlNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzE2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjExXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjk2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlj7Dlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiVEFJWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlRaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMxODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Li95rC05biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJU0hVSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMyMzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCI5OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZCI6IKl5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhFRkVJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEZTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjMwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEyXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjk5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLoipzmuZbluIJcIixcblx0XHRcInNwZWxsXCI6IFwiV1VIVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIldIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjI0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMDBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiajOWfoOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJCQU5HQlVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJCQlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMzMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTAxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmt67ljZfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSFVBSU5BTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhOU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIzMjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMDJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumprOmejeWxseW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJNQUFOU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk1BU1NcIixcblx0XHRcInppcGNvZGVcIjogXCIyNDMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTAzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmt67ljJfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSFVBSUJFSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhCU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIzNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMDRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumTnOmZteW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJUT05HTElOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlRMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjI0NDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMDVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWuieW6huW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJBTlFJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJBUVNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNDYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTA2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpu4TlsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSFVBTkdTSEFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjQyNzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEyXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEwN1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ruB5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNIVVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJDWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMzkwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTA4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpmJzpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiRlVZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRllTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjM2MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEyXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEwOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5a6/5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNVWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIzNDEwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW3oua5luW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEFPSFVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJDSFNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMzgwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTExXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlha3lronluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTElVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMQVNcIixcblx0XHRcInppcGNvZGVcIjogXCIyMzcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTEyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkurPlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWlVPWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjIzNjgwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMTNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaxoOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDSElaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjQ3MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEyXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjExNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5a6j5Z+O5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhVQU5DSEVOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhDU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjM2NjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxMlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMTVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuemj+W3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJGVVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJGWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIzNTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTE2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljqbpl6jluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWElBTUVOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWE1TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzYxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjExN1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6I6G55Sw5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlBVVElBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlBUU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjM1MTEwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMThcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS4ieaYjuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTQU5NSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU01TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzY1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjExOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rOJ5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFVQU5aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiUVpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzYyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ryz5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIQU5HWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjM2MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMjFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWNl+W5s+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJOQU5QSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTlBTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzUzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6b6Z5bKp5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxPTkdZQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMWVNcIixcblx0XHRcInppcGNvZGVcIjogXCIzNjQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTIzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlroHlvrfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTklOR0RFU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTkRTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzUyMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjEzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Y2X5piM5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIk5BTkNIQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTkNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzMwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyNVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5pmv5b636ZWH5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJTkdERVpIRU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKRFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzMzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEyNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6JCN5Lmh5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlBJTkdYSUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlBYU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMzNzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMjdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS5neaxn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJKSVVKSUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpKU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMzMjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMjhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaWsOS9meW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJYSU5ZVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjMzODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMjlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIum5sOa9reW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJZSU5HVEFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWVRTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzM1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEzMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6LWj5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdBTlpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJHWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIzNDEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTMxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlkInlronluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpBU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjM0MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMzJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWunOaYpeW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJZSUNIVU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCIzMzYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTMzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmiprlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiRlVaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRlpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzMyOTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEzNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5LiK6aW25biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNIQU5HUkFPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1JTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMzM0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEzNVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rWO5Y2X5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJTkFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSk5TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjUwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjEzNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Z2S5bKb5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJTkdEQU9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRRFNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNjYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTM3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmt4TljZrluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWklCT1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpCU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjI1NTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxMzhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaeo+W6hOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaQU9aSFVBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNzcxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTM5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuJzokKXluIJcIixcblx0XHRcInNwZWxsXCI6IFwiRE9OR1lJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJEWVNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNTcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTQwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLng5/lj7DluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUFOVEFJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWVRTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjY0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE0MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5r2N5Z2K5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIldFSUZBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJXRlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNjEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTQyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmtY7lroHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSk5TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjcyMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE0M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rOw5a6J5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlRBSUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVEFTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjcxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE0NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5aiB5rW35biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIldFSUhBSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIldIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjI2NTcwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNDVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaXpeeFp+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJSSVpIQU9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJSWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNzY4MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTQ2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLojrHoipzluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTEFJV1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMV1NcIixcblx0XHRcInppcGNvZGVcIjogXCIyNzExMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTQ3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuLTmsoLluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTElOWUlTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMWVNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNzYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTQ4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlvrflt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiREVaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjUzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE0OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6IGK5Z+O5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJQU9DSEVOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxDU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjI1MjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua7qOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJCSU5aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQlpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiMjU2NjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE1MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6I235rO95biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhFWkVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIWlNcIixcblx0XHRcInppcGNvZGVcIjogXCIyNTUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTUyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpg5Hlt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWkhFTkdaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWlpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDUwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE1M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5byA5bCB5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIktBSUZFTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJLRlNcIixcblx0XHRcInppcGNvZGVcIjogXCI0NzUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTU0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmtJvpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTFVPWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ3MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNTVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW5s+mhtuWxseW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJQSU5HRElOR1NIQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJQRFNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDY3MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE1NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5a6J6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkFOWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ1NDkwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNTdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIum5pOWjgeW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIRUJJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEJTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDU2NjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE1OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5paw5Lmh5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhJTlhJQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDUzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE1OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi54Sm5L2c5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJQU9aVU9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI0NTQxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTYwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmv67pmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWlVPWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ1NzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNjFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiuuOaYjOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJYVUNIQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWENTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDYxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE2MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ryv5rKz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpVT0hFU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWkhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDYyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE2M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5LiJ6Zeo5bOh5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNBTk1FTlhJQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNNWFNcIixcblx0XHRcInppcGNvZGVcIjogXCI0NzIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTY0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljZfpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTkFOWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5ZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ3MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNjVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWVhuS4mOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEFOR1FJVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNRU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ3NjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNjZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS/oemYs+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJYSU5ZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDY0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE2N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZGo5Y+j5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIT1VLT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaS1NcIixcblx0XHRcInppcGNvZGVcIjogXCI0NjYwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTY4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpqbvpqazlupfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWkhVTUFESUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWk1EU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ2MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNjlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuatpuaxieW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJXVUhBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIldIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQzMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNzBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIum7hOefs+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIVUFOR1NISVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQzNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNzFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWNgeWgsOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSElZQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI0NDIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTcyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlrpzmmIzluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUlDSEFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllDU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ0MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNzNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuilhOaoiuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJYSUFOR0ZBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhGU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNzRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumEguW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJFWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkVaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQzNjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxNzVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiNhumXqOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJKSU5HTUVOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSk1TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDQ4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE3NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5a2d5oSf5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhJQU9HQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJYR1NcIixcblx0XHRcInppcGNvZGVcIjogXCI0MzIxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTc3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLojYblt57luIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOR1pIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MzQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTc4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpu4TlhojluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSFVBTkdHQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEdTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDM4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE3OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZK45a6B5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhJQU5OSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWE5TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDM3MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4MFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6ZqP5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNVSVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI0NDEzMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTgxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmganmlr3lnJ/lrrbml4/oi5fml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiRU5TSElUVUpJQVpVTUlBT1pVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRVNUSlpNWlpaWlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ0NTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxODJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuelnuWGnOaetlwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEVOTk9OR0pJQVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNOSlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQ0MjQwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxODNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumVv+aymeW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEFOR1NIQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQxMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxODRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuagqua0suW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSFVaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWlpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDEyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4NVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rmY5r2t5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlhJQU5HVEFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFRTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDExMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6KGh6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhFTkdZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDIxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6YK16Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNIQU9ZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1lTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDIyMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE4OFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5bKz6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllVRVlBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMThcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTg5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLluLjlvrfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQ0hBTkdERVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNEU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjQxNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxOTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW8oOWutueVjOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSEFOR0pJQUpJRVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpKSlNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MjcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMThcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTkxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnm4rpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUlZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWVlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDEzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE5MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6YO05bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNIRU5aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDIzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE5M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rC45bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllPTkdaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWVpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDI1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE5NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5oCA5YyW5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhVQUlIVUFTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJISFNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MTgwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMThcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTk1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlqITlupXluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTE9VRElTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMRFNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MTcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMThcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMTk2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmuZjopb/lnJ/lrrbml4/oi5fml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiWElBTkdYSVRVSklBWlVNSUFPWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJYWFRKWk1aWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNDE2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjE5N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5bm/5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdVQU5HWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkdaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUxMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxOThcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumftuWFs+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEFPR1VBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNHU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUyMTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIxOTlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua3seWcs+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEVOWlVPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTE4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIwMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi54+g5rW35biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIVUhBSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUxOTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMDFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaxleWktOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEFOVE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU1RTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTE1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIwMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5L2b5bGx5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkZPU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkZTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUyODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMDNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaxn+mXqOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJKSUFOR01FTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpNU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUyOTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMDRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua5m+axn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSEFOSklBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaSlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MjQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjA1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLojILlkI3luIJcIixcblx0XHRcInNwZWxsXCI6IFwiTUFPTUlOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk1NU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUyNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMDZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiCh+W6huW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSEFPUUlOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpRU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUyNjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMDdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaDoOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIVUlaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTE2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIwOFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5qKF5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIk1FSVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJNWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjA5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmsZXlsL7luIJcIixcblx0XHRcInNwZWxsXCI6IFwiU0hBTldFSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNXU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUxNjYwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIxOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuays+a6kOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIRVlVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MTcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjExXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpmLPmsZ/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWUFOR0pJQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTI5NTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIxMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5riF6L+c5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJTkdZVUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiUVlTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTExNTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIxM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Lic6I6e5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkRPTkdaVU9TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJEWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MTE3MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjE0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuK3lsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWkhPTkdTSEFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWlNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTI4NDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIxNVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5r2u5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNIQU9aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTE1NjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjE5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIxNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5o+t6Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJRVlBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MjIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjE3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkupHmta7luIJcIixcblx0XHRcInNwZWxsXCI6IFwiWVVORlVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZRlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MjczMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMTlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjE4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljZflroHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTkFOTklOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5OU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUzMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMTlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuafs+W3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMSVVaSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTQ1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIyMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5qGC5p6X5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdVSUxJTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkdMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjU0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMjFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaip+W3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJXVVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJXWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1NDMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjIyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljJfmtbfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkVJSEFJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQkhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTM2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIyM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Ziy5Z+O5riv5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkZBTkdDSEVOR0dBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJGQ0dTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTM4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIyNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6ZKm5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJTlpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1MzUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjI1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLotLXmuK/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiR1VJR0FOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkdHU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUzNzEwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMjZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIueOieael+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJZVUxJTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUzNzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMjdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIueZvuiJsuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJCQUlTRVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjUzMzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMjhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIui0uuW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJIRVpIT1VTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI1NDI4MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjI5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmsrPmsaDluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSEVDSElTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCI1NDcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjMwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmnaXlrr7luIJcIixcblx0XHRcInNwZWxsXCI6IFwiTEFJQklOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTEJTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTQ2MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIzMVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5bSH5bem5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkNIT05HWlVPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1pTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTMyMjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIzMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rW35Y+j5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBSUtPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkhLU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjU3MDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMzNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS4ieS6muW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTQU5ZQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjU3MjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMzRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumHjeW6huW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSE9OR1FJTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaUVNcIixcblx0XHRcInppcGNvZGVcIjogXCI0MDAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjM1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmiJDpg73luIJcIixcblx0XHRcInNwZWxsXCI6IFwiQ0hFTkdEVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNEU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYxMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMzZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuiHqui0oeW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSUdPTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaR1NcIixcblx0XHRcInppcGNvZGVcIjogXCI2NDMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjM3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmlIDmnp3oirHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUEFOWkhJSFVBU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiUFpIU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYxNzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyMzhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuazuOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaVU9aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWlpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjQ2MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjIzOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5b636Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkRFWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYxODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIue7temYs+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJNSUFOWUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk1ZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYyMTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDFcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW5v+WFg+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJHVUFOR1lVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJHWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI2MjgwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjQyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpgYLlroHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiU1VJTklOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNOU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYyOTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWGheaxn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJORUlKSUFOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5KU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS5kOWxseW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMRVNIQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMU1NcIixcblx0XHRcInppcGNvZGVcIjogXCI2MTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjQ1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLljZflhYXluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTkFOQ0hPTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJOQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCI2MzcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjQ2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnnInlsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTUVJU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk1TU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYxMjEwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWunOWuvuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJZSUJJTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIllCU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY0NDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNDhcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuW5v+WuieW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJHVUFOR0FOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiR0FTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjM4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI0OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6L6+5bee5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkRBWkhPVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRaU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjYzNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNTBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumbheWuieW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJZQUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUFTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjI1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI1MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5be05Lit5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBWkhPTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJCWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI2MzU1MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjUyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLotYTpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWklZQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWllTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjQxMzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI1M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Zi/5Z2d6JeP5peP576M5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkFCQUNBTkdaVVFJQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJBQkNaUVpaWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI2MjQ2MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjNcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjU0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnlJjlrZzol4/ml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiR0FOWklDQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJHWkNaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjI2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI1NVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5YeJ5bGx5b2d5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJQU5HU0hBTllJWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMU1laWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjE1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjIzXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI1NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6LS16Ziz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdVSVlBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJHWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI1NTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNTdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWFreebmOawtOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMSVVQQU5TSFVJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTFBTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjU1MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNThcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumBteS5ieW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaVU5ZSVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjU2MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNFwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNTlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWuiemhuuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJBTlNIVU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJBU1NcIixcblx0XHRcInppcGNvZGVcIjogXCI1NjEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjYwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpk5zku4HlnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiVE9OR1JFTkRJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJUUkRRXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTU0MzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI2MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6buU6KW/5Y2X5biD5L6d5peP6IuX5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJQU5YSU5BTkJVWUlaVU1JQU9aVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlFYTkJZWk1aWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTUxNTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI2MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5q+V6IqC5Zyw5Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJJSklFRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJKRFFcIixcblx0XHRcInppcGNvZGVcIjogXCI1NTE3MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjRcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjYzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpu5TkuJzljZfoi5fml4/kvpfml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiUUlBTkRPTkdOQU5NSUFPWlVET05HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRRE5NWkRaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTUxNTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI2NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6buU5Y2X5biD5L6d5peP6IuX5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlFJQU5OQU5CVVlJWlVNSUFPWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRTkJZWk1aWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNTUwMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI0XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI2NVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5piG5piO5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIktVTk1JTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJLTVNcIixcblx0XHRcInppcGNvZGVcIjogXCI2NTAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjY2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmm7LpnZbluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUVVKSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiUUpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjU1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI2N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi546J5rqq5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllVWElTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZWFNcIixcblx0XHRcInppcGNvZGVcIjogXCI2NTMxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjY4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkv53lsbHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkFPU0hBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY3ODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNjlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaYremAmuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJaSEFPVE9OR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlpUU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY1NzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNzBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS4veaxn+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMSUpJQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTEpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjc0MTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI3MVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5oCd6IyF5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNJTUFPU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU01TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjY1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI3MlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Li05rKn5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxJTkNBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCI2NzcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjczXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmpZrpm4TlvZ3ml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiQ0hVWElPTkdZSVpVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQ1hZWlpaWlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY3NTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNzRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIue6ouays+WTiOWwvOaXj+W9neaXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJIT05HSEVIQU5JWlVZSVpVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEhITlpZWlpaWlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjY1NDQwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyNzVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaWh+WxseWjruaXj+iLl+aXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJXRU5TSEFOWkhVQU5HWlVNSUFPWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJXU1paTVpaWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI2NjMwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjc2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLopb/lj4zniYjnurPlgqPml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiWElTSFVBTkdCQU5OQURBSVpVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWFNCTkRaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjY2MjAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI3N1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5aSn55CG55m95peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkRBTElCQUlaVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRMQlpaWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI2NzEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjc4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlvrflro/lgqPml4/mma/poofml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiREVIT05HREFJWlVKSU5HUE9aVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRIRFpKUFpaWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI2Nzg0MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjc5XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmgJLmsZ/lgojlg7Pml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiTlVKSUFOR0xJU1VaVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5KTFNaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNjcxNDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI1XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI4MFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6L+q5bqG6JeP5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkRJUUlOR0NBTkdaVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkRRQ1paWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI2NzQ0MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjVcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjgxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmi4nokKjluIJcIixcblx0XHRcInNwZWxsXCI6IFwiTEFTQVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxTU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg1MDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyODJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaYjOmDveWcsOWMulwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEFOR0RVRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkNERFFcIixcblx0XHRcInppcGNvZGVcIjogXCI4NTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjgzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlsbHljZflnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiU0hBTk5BTkRJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTTkRRXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODU2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI2XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI4NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5pel5ZaA5YiZ5Zyw5Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIlJJS0FaRURJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJSS1pEUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg1NzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyNlwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyODVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumCo+absuWcsOWMulwiLFxuXHRcdFwic3BlbGxcIjogXCJOQVFVRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIk5RRFFcIixcblx0XHRcInppcGNvZGVcIjogXCI4NTIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjg2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpmL/ph4zlnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiQUxJRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFMRFFcIixcblx0XHRcInppcGNvZGVcIjogXCI4NTkxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjg3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmnpfoip3lnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiTElOWkhJRElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkxaRFFcIixcblx0XHRcInppcGNvZGVcIjogXCI4NjAxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjZcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjg4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLopb/lronluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWElBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhBU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjcxMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyODlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumTnOW3neW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJUT05HQ0hVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJUQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCI3MjcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjkwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlrp3puKHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkFPSklTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJCSlNcIixcblx0XHRcInppcGNvZGVcIjogXCI3MjEwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjkxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlkrjpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWElBTllBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJYWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI3MTIwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjdcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMjkyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmuK3ljZfluIJcIixcblx0XHRcInNwZWxsXCI6IFwiV0VJTkFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiV05TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzE0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI5M1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5bu25a6J5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllBTkFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUFTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzE2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI5NFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rGJ5Lit5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBTlpIT05HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzIzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI5NVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5qaG5p6X5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllVTElOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUxTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzE5MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI3XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI5NlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5a6J5bq35biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkFOS0FOR1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFLU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjcyNTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyOTdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWVhua0m+W4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSEFOR0xVT1NISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlNMU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjcxMTUwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyN1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIyOThcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWFsOW3nuW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJMQU5aSE9VU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiTFpTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzMwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjI5OVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZiJ5bOq5YWz5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJQVlVR1VBTlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkpZR1NcIixcblx0XHRcInppcGNvZGVcIjogXCI3MzUxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzAwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLph5HmmIzluIJcIixcblx0XHRcInNwZWxsXCI6IFwiSklOQ0hBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKQ1NcIixcblx0XHRcInppcGNvZGVcIjogXCI3MzcxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzAxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnmb3pk7bluIJcIixcblx0XHRcInNwZWxsXCI6IFwiQkFJWUlOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQllTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzMwOTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMwMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5aSp5rC05biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlRJQU5TSFVJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVFNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzQxMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMwM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5q2m5aiB5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIldVV0VJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiV1dTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzMzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMwNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5byg5o6W5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIQU5HWUVTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJaWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI3MzQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzA1XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlubPlh4nluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUElOR0xJQU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiUExTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzQ0MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMwNlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6YWS5rOJ5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkpJVVFVQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJKUVNcIixcblx0XHRcInppcGNvZGVcIjogXCI3MzUwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzA3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLluobpmLPluIJcIixcblx0XHRcInNwZWxsXCI6IFwiUUlOR1lBTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJRWVNcIixcblx0XHRcInppcGNvZGVcIjogXCI3NDQ1MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzA4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlrpropb/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiRElOR1hJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiRFhTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzQzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMwOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6ZmH5Y2X5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkxPTkdOQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMTlNcIixcblx0XHRcInppcGNvZGVcIjogXCI3NDIxMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzEwXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkuLTlpI/lm57ml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiTElOWElBSFVJWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJMWEhaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzMxMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI4XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMxMVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi55SY5Y2X6JeP5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdBTk5BTkNBTkdaVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkdOQ1paWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI3NDcwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjhcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzEyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLopb/lroHluIJcIixcblx0XHRcInNwZWxsXCI6IFwiWElOSU5HU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWE5TXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODEwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMxM1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rW35Lic5Zyw5Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBSURPTkdESVFVXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSEREUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgxMDYwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMTRcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua1t+WMl+iXj+aXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJIQUlCRUlDQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIQkNaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODEwMzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMxNVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6buE5Y2X6JeP5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhVQU5HTkFOQ0FOR1pVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSE5DWlpaWlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgxMTMwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIyOVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMTZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIua1t+WNl+iXj+aXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJIQUlOQU5DQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJITkNaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODEzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMxN1wiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5p6c5rSb6JeP5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkdVT0xVT0NBTkdaVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkdMQ1paWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI4MTQwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMjlcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzE4XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLnjonmoJHol4/ml4/oh6rmsrvlt55cIixcblx0XHRcInNwZWxsXCI6IFwiWVVTSFVDQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJZU0NaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODE1MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMxOVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5rW36KW/6JKZ5Y+k5peP6JeP5peP6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBSVhJTUVOR0dVWlVDQU5HWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJIWE1HWkNaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODE3MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjI5XCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6ZO25bed5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIllJTkNIVUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzUwMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyMVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi55+z5Zi05bGx5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlNISVpVSVNIQU5TSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJTWlNTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzUzMDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyMlwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZC05b+g5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIldVWkhPTkdTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJXWlNcIixcblx0XHRcInppcGNvZGVcIjogXCI3NTExMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzBcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzIzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlm7rljp/luIJcIixcblx0XHRcInNwZWxsXCI6IFwiR1VZVUFOU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiR1lTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzU2MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyNFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Lit5Y2r5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIlpIT05HV0VJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWldTXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiNzUxNzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMwXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyNVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5LmM6bKB5pyo6b2Q5biCXCIsXG5cdFx0XCJzcGVsbFwiOiBcIldVTFVNVVFJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiV0xNUVNcIixcblx0XHRcInppcGNvZGVcIjogXCI4MzAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzI2XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlhYvmi4nnjpvkvp3luIJcIixcblx0XHRcInNwZWxsXCI6IFwiS0VMQU1BWUlTSElcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJLTE1ZU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgzNDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMjdcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWQkOmygeeVquWcsOWMulwiLFxuXHRcdFwic3BlbGxcIjogXCJUVUxVRkFORElRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlRMRkRRXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODM4MDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMxXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMyOFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5ZOI5a+G5Zyw5Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIkhBTUlESVFVXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSE1EUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgzOTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMjlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuaYjOWQieWbnuaXj+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJDSEFOR0pJSFVJWlVaSVpISVpIT1VcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJDSkhaWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODMxMTAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMxXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMzMFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5Y2a5bCU5aGU5ouJ6JKZ5Y+k6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJPRVJUQUxBTUVOR0dVWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQkVUTE1HWlpaXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODMzNDAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMxXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMzMVwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi5be06Z+z6YOt5qWe6JKZ5Y+k6Ieq5rK75beeXCIsXG5cdFx0XCJzcGVsbFwiOiBcIkJBWUlOR1VPTEVOR01FTkdHVVpJWkhJWkhPVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkJZR0xNR1paWlwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg0MTAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMzJcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumYv+WFi+iLj+WcsOWMulwiLFxuXHRcdFwic3BlbGxcIjogXCJBS0VTVURJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJBS1NEUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg0MzAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMzNcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWFi+WtnOWLkuiLj+afr+WwlOWFi+WtnOiHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJLRVpJTEVTVUtFRVJLRVpJWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiS1pMU0tFS1paWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI4MzU2MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzM0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlloDku4DlnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiS0FTSElESVFVXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiS1NEUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg0NDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMzVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWSjOeUsOWcsOWMulwiLFxuXHRcdFwic3BlbGxcIjogXCJIRVRJQU5ESVFVXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiSFREUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjg0ODAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMzZcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuS8iueKgeWTiOiQqOWFi+iHquayu+W3nlwiLFxuXHRcdFwic3BlbGxcIjogXCJZSUxJSEFTQUtFWklaSElaSE9VXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiWUxIU0taWlpcIixcblx0XHRcInppcGNvZGVcIjogXCI4MzMyMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzM3XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLloZTln47lnLDljLpcIixcblx0XHRcInNwZWxsXCI6IFwiVEFDSEVOR0RJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJUQ0RRXCIsXG5cdFx0XCJ6aXBjb2RlXCI6IFwiODM0NzAwXCIsXG5cdFx0XCJwcm92aW5jZV9pZFwiOiBcIjMxXCJcblx0fSxcblx0e1xuXHRcdFwiY2l0eV9pZFwiOiBcIjMzOFwiLFxuXHRcdFwiY2l0eV9uYW1lXCI6IFwi6Zi/5YuS5rOw5Zyw5Yy6XCIsXG5cdFx0XCJzcGVsbFwiOiBcIkFMRVRBSURJUVVcIixcblx0XHRcImVhc3lfc3BlbGxcIjogXCJBTFREUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgzNjUwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzMzlcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuefs+ays+WtkOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJTSElIRVpJU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiU0haU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjgzMjAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzMVwiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzNDBcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIumYv+aLieWwlOW4glwiLFxuXHRcdFwic3BlbGxcIjogXCJBTEFFUlNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIkFMRVNcIixcblx0XHRcInppcGNvZGVcIjogXCI4NDMzMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzQxXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLlm77mnKjoiJLlhYvluIJcIixcblx0XHRcInNwZWxsXCI6IFwiVFVNVVNIVUtFU0hJXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiVE1TS1NcIixcblx0XHRcInppcGNvZGVcIjogXCI4NDM5MDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzQyXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLkupTlrrbmuKDluIJcIixcblx0XHRcInNwZWxsXCI6IFwiV1VKSUFRVVNISVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIldKUVNcIixcblx0XHRcInppcGNvZGVcIjogXCI4MzEzMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzFcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzQzXCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLpppnmuK9cIixcblx0XHRcInNwZWxsXCI6IFwiWElBTkdHQU5HVEVCSUVYSU5HWkhFTkdRVVwiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlhHVEJYWlFcIixcblx0XHRcInppcGNvZGVcIjogXCIwMDAwMDBcIixcblx0XHRcInByb3ZpbmNlX2lkXCI6IFwiMzJcIlxuXHR9LFxuXHR7XG5cdFx0XCJjaXR5X2lkXCI6IFwiMzQ0XCIsXG5cdFx0XCJjaXR5X25hbWVcIjogXCLmvrPpl6hcIixcblx0XHRcInNwZWxsXCI6IFwiQU9NRU5URUJJRVhJTkdaSEVOR1FVXCIsXG5cdFx0XCJlYXN5X3NwZWxsXCI6IFwiQU1UQlhaUVwiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAwMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzM1wiXG5cdH0sXG5cdHtcblx0XHRcImNpdHlfaWRcIjogXCIzNDVcIixcblx0XHRcImNpdHlfbmFtZVwiOiBcIuWPsOa5vlwiLFxuXHRcdFwic3BlbGxcIjogXCJUQUlXQU5TSEVOR1wiLFxuXHRcdFwiZWFzeV9zcGVsbFwiOiBcIlRXU1wiLFxuXHRcdFwiemlwY29kZVwiOiBcIjAwMDAwMFwiLFxuXHRcdFwicHJvdmluY2VfaWRcIjogXCIzNFwiXG5cdH1cbl1cbm1vZHVsZS5leHBvcnRzID0gZGF0YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n");

/***/ }),
/* 74 */
/*!*****************************************************************************************!*\
  !*** D:/WebLearning/fengyin/资料代码/imooc-red-book/前端源码/RedBook-Dev/json/area_district.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ })
],[[0,"app-config"]]]);