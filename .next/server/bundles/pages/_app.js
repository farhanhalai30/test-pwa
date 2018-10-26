module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(4);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(1);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loading: false
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      router__default.a.onRouteChangeStart = function () {
        _this2.setState({
          loading: true
        });
      };

      router__default.a.onRouteChangeComplete = function () {
        _this2.setState({
          loading: false
        });
      };

      router__default.a.onRouteChangeError = function () {
        _this2.setState({
          loading: false
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "header"
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
        charSet: "UTF-8"
      }), external__react__default.a.createElement("meta", {
        name: "description",
        content: "An example PWA"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external__react__default.a.createElement("meta", {
        name: "theme-color",
        content: "#302ecd"
      }), external__react__default.a.createElement("title", null, "Sentimeta PWA"), external__react__default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json"
      }), external__react__default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      })), external__react__default.a.createElement(Header_Loader, {
        loading: this.state.loading
      }));
    }
  }]);

  return Header;
}(external__react_["Component"]);

var Header_Loader = function Loader(_ref2) {
  var loading = _ref2.loading;
  return external__react__default.a.createElement("div", {
    className: loading ? "loading-show" : "",
    id: "loader-bar"
  });
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/OfflineSupport.js
function OfflineSupport__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OfflineSupport__typeof = function _typeof(obj) { return typeof obj; }; } else { OfflineSupport__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OfflineSupport__typeof(obj); }

function OfflineSupport__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OfflineSupport__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OfflineSupport__createClass(Constructor, protoProps, staticProps) { if (protoProps) OfflineSupport__defineProperties(Constructor.prototype, protoProps); if (staticProps) OfflineSupport__defineProperties(Constructor, staticProps); return Constructor; }

function OfflineSupport__possibleConstructorReturn(self, call) { if (call && (OfflineSupport__typeof(call) === "object" || typeof call === "function")) { return call; } return OfflineSupport__assertThisInitialized(self); }

function OfflineSupport__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OfflineSupport__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var OfflineSupport =
/*#__PURE__*/
function (_PureComponent) {
  OfflineSupport__inherits(OfflineSupport, _PureComponent);

  function OfflineSupport() {
    OfflineSupport__classCallCheck(this, OfflineSupport);

    return OfflineSupport__possibleConstructorReturn(this, (OfflineSupport.__proto__ || Object.getPrototypeOf(OfflineSupport)).apply(this, arguments));
  }

  OfflineSupport__createClass(OfflineSupport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function () {
          return console.log('service worker registered.');
        }).catch(function (err) {
          return console.dir(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return OfflineSupport;
}(external__react_["PureComponent"]);

/* harmony default export */ var components_OfflineSupport = (OfflineSupport);
// CONCATENATED MODULE: ./pages/_app.js
function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _app_CustomApp =
/*#__PURE__*/
function (_App) {
  _app__inherits(CustomApp, _App);

  function CustomApp() {
    _app__classCallCheck(this, CustomApp);

    return _app__possibleConstructorReturn(this, (CustomApp.__proto__ || Object.getPrototypeOf(CustomApp)).apply(this, arguments));
  }

  _app__createClass(CustomApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(components_Header, null), external__react__default.a.createElement(components_OfflineSupport, null), external__react__default.a.createElement(Component, pageProps));
    }
  }]);

  return CustomApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_CustomApp);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })
/******/ ]);