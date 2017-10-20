(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-facebook-login-component"] = factory(require("react"));
	else
		root["react-facebook-login-component"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FacebookLogin = undefined;

	var _FacebookLogin = __webpack_require__(1);

	var _FacebookLogin2 = _interopRequireDefault(_FacebookLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FacebookLogin = _FacebookLogin2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FacebookLogin = function (_Component) {
	  _inherits(FacebookLogin, _Component);

	  function FacebookLogin(props) {
	    _classCallCheck(this, FacebookLogin);

	    var _this = _possibleConstructorReturn(this, (FacebookLogin.__proto__ || Object.getPrototypeOf(FacebookLogin)).call(this, props));

	    _this.checkLoginState = _this.checkLoginState.bind(_this);
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }

	  _createClass(FacebookLogin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      (function (d, s, id) {
	        var element = d.getElementsByTagName(s)[0];
	        var fjs = element;
	        var js = element;
	        if (d.getElementById(id)) {
	          return;
	        }
	        js = d.createElement(s);js.id = id;
	        js.src = '//connect.facebook.net/en_US/sdk.js';
	        fjs.parentNode.insertBefore(js, fjs);
	      })(document, 'script', 'facebook-jssdk');

	      window.fbAsyncInit = function () {
	        FB.init({
	          appId: _this2.props.socialId,
	          xfbml: _this2.props.xfbml,
	          cookie: _this2.props.cookie,
	          version: _this2.props.version
	        });
	      };
	    }
	  }, {
	    key: 'responseApi',
	    value: function responseApi(authResponse) {
	      var _this3 = this;

	      FB.api('/me', { fields: this.props.fields }, function (me) {
	        me.accessToken = authResponse.accessToken;
	        _this3.props.responseHandler(me);
	      });
	    }
	  }, {
	    key: 'checkLoginState',
	    value: function checkLoginState(response) {
	      if (response.authResponse) {
	        this.responseApi(response.authResponse);
	      } else {
	        if (this.props.responseHandler) {
	          this.props.responseHandler({ status: response.status });
	        }
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      FB.login(this.checkLoginState, { scope: this.props.scope });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          socialId = _props.socialId,
	          xfbml = _props.xfbml,
	          cookie = _props.cookie,
	          version = _props.version,
	          language = _props.language,
	          fields = _props.fields,
	          responseHandler = _props.responseHandler,
	          children = _props.children,
	          buttonText = _props.buttonText,
	          props = _objectWithoutProperties(_props, ['socialId', 'xfbml', 'cookie', 'version', 'language', 'fields', 'responseHandler', 'children', 'buttonText']);

	      return _react2.default.createElement(
	        'button',
	        _extends({}, props, { onClick: this.clickHandler }),
	        children,
	        buttonText
	      );
	    }
	  }]);

	  return FacebookLogin;
	}(_react.Component);

	exports.default = FacebookLogin;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;