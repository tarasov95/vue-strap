/*!
 * vue-strap 2.0.2
 * http://wffranco.github.io/vue-strap/
 * Compiled using Vue 2.5.13
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStrap"] = factory();
	else
		root["VueStrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _utils = __webpack_require__(65);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	var _Scroll = __webpack_require__(68);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Alert = __webpack_require__(69);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Datepicker = __webpack_require__(76);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(81);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _FormValidator = __webpack_require__(84);
	
	var _FormValidator2 = _interopRequireDefault(_FormValidator);
	
	var _Input = __webpack_require__(87);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Modal = __webpack_require__(92);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Popover = __webpack_require__(101);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(107);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _Spinner = __webpack_require__(110);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _Tab = __webpack_require__(115);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabGroup = __webpack_require__(118);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tabs = __webpack_require__(123);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Tooltip = __webpack_require__(128);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(133);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import toggleButton from './ToggleButton.vue'
	
	//import radio from './Radio.vue'
	//import select from './Select.vue'
	//import slider from './Slider.vue'
	
	//import navbar from './Navbar.vue'
	//import option from './Option.vue'
	//import panel from './Panel.vue'
	
	// Components
	//import accordion from './Accordion.vue'
	//import affix from './Affix.vue'
	
	// Directives
	// Utils
	var VueStrap = {
	  directives: {
	    ClickOutside: _ClickOutside2.default,
	    Scroll: _Scroll2.default
	  },
	  utils: {
	    $: _NodeList2.default,
	    coerce: _utils.coerce
	  },
	  //components
	  //accordion,
	  //affix,
	  alert: _Alert2.default,
	  //aside,
	  //buttonGroup,
	  //carousel,
	  //checkbox,
	  datepicker: _Datepicker2.default,
	  dropdown: _Dropdown2.default,
	  //formGroup,
	  formValidator: _FormValidator2.default,
	  input: _Input2.default,
	  modal: _Modal2.default,
	  //navbar,
	  //option,
	  //panel,
	  //popover,
	  progressbar: _Progressbar2.default,
	  //radio,
	  //select,
	  //slider,
	  spinner: _Spinner2.default,
	  tab: _Tab2.default,
	  tabGroup: _TabGroup2.default,
	  tabs: _Tabs2.default,
	  //toggleButton,
	  tooltip: _Tooltip2.default,
	  typeahead: _Typeahead2.default
	};
	//import formGroup from './FormGroup.vue'
	
	//import aside from './Aside.vue'
	//import buttonGroup from './buttonGroup.vue'
	//import carousel from './Carousel.vue'
	//import checkbox from './Checkbox.vue'
	
	
	module.exports = VueStrap;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(56);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(62);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(63);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(64);
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent;
	var blurList = [];
	var Events = [];
	
	function isNode(val) {
	  return val instanceof window.Node;
	}
	function isNodeList(val) {
	  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	}
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var i in nodes) {
	        this[i] = nodes[i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	    window.prueba = this;
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        ArrayProto.forEach.call(arr, function (el) {
	          if (isNode(el)) {
	            if (!~nodes.indexOf(el)) nodes.push(el);
	          } else if (isNodeList(el)) {
	            flatten(el);
	          }
	        });
	      }
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      });
	      return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var notRemoved = flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
	      return notRemoved;
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return NodeListJS(ArrayProto.filter.apply(this, args), this);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      if (typeof element === 'string') flatten(this).forEach(function (node) {
	        nodes.push(node.querySelectorAll(element));
	      });
	      if (isNode(element)) flatten(this).forEach(function (node) {
	        if (node !== element && node.contains(element)) nodes.push(element);
	      });
	      if (isNodeList(element)) {
	        var els = flatten(element);
	        flatten(this).forEach(function (node) {
	          els.forEach(function (el) {
	            if (node !== el && node.contains(el)) nodes.push(el);
	          });
	        });
	      }
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      var mapped = ArrayProto.map.apply(this, args);
	      return mapped.some(function (el) {
	        return isNode(el) || isNodeList(el);
	      }) ? flatten(mapped, this) : mapped;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return flatten(this.map(function (el) {
	        return el.parentNode;
	      }), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _this = this;
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this.indexOf(arg)) ArrayProto.push.call(_this, arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      while (amount--) {
	        nodes.push(ArrayProto.shift.call(this));
	      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      ArrayProto.splice.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var _this2 = this;
	
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	        args[_key9] = arguments[_key9];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this2.indexOf(arg)) unshift(arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes) {
	      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      return this.each(function (el) {
	        return classes.forEach(function (c) {
	          return el.classList[method](c);
	        });
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      this.each(function (el) {
	        if (el !== null) {
	          el = el[prop];
	        }
	        arr.push(el);
	      });
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        this.each(function (el) {
	          if (el) {
	            for (var key in prop) {
	              if (key in el) {
	                el[key] = prop[key];
	              }
	            }
	          }
	        });
	      } else {
	        this.each(function (el) {
	          if (prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	        args[_key10] = arguments[_key10];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      this.each(function (el) {
	        if (el && el[method] instanceof Function) {
	          el = el[method].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      });
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return NodeListJS([this[index]], this);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = NodeListJS(selector, this);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      this.each(function (el) {
	        events.forEach(function (event) {
	          if (el === window || isNode(el)) {
	            el.addEventListener(event, callback, false);
	            Events.push({
	              el: el,
	              event: event,
	              callback: callback
	            });
	          }
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      events = events instanceof Array ? events : typeof events === 'string' ? events.trim().replace(/\s+/, ' ').split(' ') : null;
	      this.each(function (el) {
	        Events = Events.filter(function (e) {
	          if (e && e.el === el && (!callback || callback === e.callback) && (!events || ~events.indexOf(e.event))) {
	            e.el.removeEventListener(e.event, e.callback);
	            return false;
	          }
	          return true;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({ el: el, callback: callback });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          blurList.forEach(function (item) {
	            var target = item.el.contains(e.target) || item.el === e.target;
	            if (!target) item.callback.call(item.el, e, item.el);
	          });
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        blurList = blurList.filter(function (blur) {
	          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
	            return false;
	          }
	          return el;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  ArrayProto.forEach.call(arr, function (el) {
	    if (isNode(el)) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (isNodeList(el)) {
	      for (var id in el) {
	        if (!~list.indexOf(el[id])) list.push(el[id]);
	      }
	    } else if (el !== null) {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  });
	  return NodeListJS(list, owner);
	}
	
	var exceptions = ['join', 'copyWithin', 'fill', 'find', 'forEach'];
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (!~exceptions.indexOf(key) && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator2.default) {
	  NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this3 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	        args[_key11] = arguments[_key11];
	      }
	
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? _this3 : flatten(arr, _this3);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        this.each(function (el) {
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        });
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        this.each(function (el) {
	          if (el && prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	    args[_key12] = arguments[_key12];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var ctx = __webpack_require__(8);
	var hide = __webpack_require__(10);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(18);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(6).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(23)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24);
	var defined = __webpack_require__(25);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(27);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(28);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(29);
	var Iterators = __webpack_require__(30);
	var $iterCreate = __webpack_require__(31);
	var setToStringTag = __webpack_require__(47);
	var getPrototypeOf = __webpack_require__(49);
	var ITERATOR = __webpack_require__(48)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(32);
	var descriptor = __webpack_require__(19);
	var setToStringTag = __webpack_require__(47);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(48)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(33);
	var enumBugKeys = __webpack_require__(45);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(34);
	
	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(35);
	var enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(29);
	var toIObject = __webpack_require__(36);
	var arrayIndexOf = __webpack_require__(39)(false);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37);
	var defined = __webpack_require__(25);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36);
	var toLength = __webpack_require__(40);
	var toAbsoluteIndex = __webpack_require__(41);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(24);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys');
	var uid = __webpack_require__(44);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(6).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(29);
	var TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(43)('wks');
	var uid = __webpack_require__(44);
	var Symbol = __webpack_require__(6).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(29);
	var toObject = __webpack_require__(50);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(25);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global = __webpack_require__(6);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(30);
	var TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53);
	var step = __webpack_require__(54);
	var Iterators = __webpack_require__(30);
	var toIObject = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(7).Object;
	module.exports = function getOwnPropertyNames(it) {
	  return $Object.getOwnPropertyNames(it);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(59)('getOwnPropertyNames', function () {
	  return __webpack_require__(60).f;
	});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5);
	var core = __webpack_require__(7);
	var fails = __webpack_require__(16);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36);
	var gOPN = __webpack_require__(61).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(35);
	var hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Array.find
	 */
	if (!Array.prototype.find) {
	  Array.prototype.find = function (predicate) {
	    'use strict';
	
	    if (this == null) {
	      throw new TypeError('Array.prototype.find called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;
	
	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return value;
	      }
	    }
	    return undefined;
	  };
	}
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	/*global self, document, DOMException */
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	if ("document" in self) {
	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
	    (function (view) {
	
	      "use strict";
	
	      if (!('Element' in view)) return;
	
	      var classListProp = "classList",
	          protoProp = "prototype",
	          elemCtrProto = view.Element[protoProp],
	          objCtr = Object,
	          strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      },
	          arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var i = 0,
	            len = this.length;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      ,
	          DOMEx = function DOMEx(type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      },
	          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
	        if (token === "") {
	          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
	        }
	        return arrIndexOf.call(classList, token);
	      },
	          ClassList = function ClassList(elem) {
	        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
	            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
	            i = 0,
	            len = classes.length;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      },
	          classListProto = ClassList[protoProp] = [],
	          classListGetter = function classListGetter() {
	        return new ClassList(this);
	      };
	      // Most DOMException implementations don't allow calling DOMException's toString()
	      // on non-DOMExceptions. Error's toString() is sufficient here.
	      DOMEx[protoProp] = Error[protoProp];
	      classListProto.item = function (i) {
	        return this[i] || null;
	      };
	      classListProto.contains = function (token) {
	        token += "";
	        return checkTokenAndGetIndex(this, token) !== -1;
	      };
	      classListProto.add = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false;
	        do {
	          token = tokens[i] + "";
	          if (checkTokenAndGetIndex(this, token) === -1) {
	            this.push(token);
	            updated = true;
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.remove = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false,
	            index;
	        do {
	          token = tokens[i] + "";
	          index = checkTokenAndGetIndex(this, token);
	          while (index !== -1) {
	            this.splice(index, 1);
	            updated = true;
	            index = checkTokenAndGetIndex(this, token);
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.toggle = function (token, force) {
	        token += "";
	
	        var result = this.contains(token),
	            method = result ? force !== true && "remove" : force !== false && "add";
	
	        if (method) {
	          this[method](token);
	        }
	
	        if (force === true || force === false) {
	          return force;
	        } else {
	          return !result;
	        }
	      };
	      classListProto.toString = function () {
	        return this.join(" ");
	      };
	
	      if (objCtr.defineProperty) {
	        var classListPropDesc = {
	          get: classListGetter,
	          enumerable: true,
	          configurable: true
	        };
	        try {
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        } catch (ex) {
	          // IE 8 doesn't support enumerable:true
	          if (ex.number === -0x7FF5EC54) {
	            classListPropDesc.enumerable = false;
	            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	          }
	        }
	      } else if (objCtr[protoProp].__defineGetter__) {
	        elemCtrProto.__defineGetter__(classListProp, classListGetter);
	      }
	    })(self);
	  } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.
	
	    (function () {
	      "use strict";
	
	      var testElement = document.createElement("_");
	
	      testElement.classList.add("c1", "c2");
	
	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function createMethod(method) {
	          var original = DOMTokenList.prototype[method];
	
	          DOMTokenList.prototype[method] = function (token) {
	            var i,
	                len = arguments.length;
	
	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }
	
	      testElement.classList.toggle("c3", false);
	
	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;
	
	        DOMTokenList.prototype.toggle = function (token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };
	      }
	
	      testElement = null;
	    })();
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getJSON = getJSON;
	exports.getScrollBarWidth = getScrollBarWidth;
	exports.translations = translations;
	exports.delayer = delayer;
	exports.VueFixer = VueFixer;
	// coerce convert som types of data into another type
	var coerce = exports.coerce = {
	  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	  boolean: function boolean(val) {
	    return typeof val === 'string' ? val === '' || val === 'true' ? true : val === 'false' || val === 'null' || val === 'undefined' ? false : val : val;
	  },
	  // Attempt to convert a string value to a Number. Otherwise, return 0.
	  number: function number(val) {
	    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
	  },
	  // Attempt to convert to string any value, except for null or undefined.
	  string: function string(val) {
	    return val === undefined || val === null ? '' : val + '';
	  },
	  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
	  pattern: function pattern(val) {
	    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
	  }
	};
	
	function getJSON(url) {
	  var request = new window.XMLHttpRequest();
	  var data = {};
	  // p (-simulated- promise)
	  var p = {
	    then: function then(fn1, fn2) {
	      return p.done(fn1).fail(fn2);
	    },
	    catch: function _catch(fn) {
	      return p.fail(fn);
	    },
	    always: function always(fn) {
	      return p.done(fn).fail(fn);
	    }
	  };
	  ['done', 'fail'].forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      var e = { status: request.status };
	      if (request.status === 200) {
	        try {
	          var response = request.responseText;
	          for (var i in data.done) {
	            var value = data.done[i](response);
	            if (value !== undefined) {
	              response = value;
	            }
	          }
	        } catch (err) {
	          data.fail.forEach(function (fail) {
	            return fail(err);
	          });
	        }
	      } else {
	        data.fail.forEach(function (fail) {
	          return fail(e);
	        });
	      }
	    }
	  };
	  request.open('GET', url);
	  request.setRequestHeader('Accept', 'application/json');
	  request.send();
	  return p;
	}
	
	function getScrollBarWidth() {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	}
	
	// return all the translations or the default language (english)
	function translations() {
	  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
	
	  var text = {
	    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    limit: 'Limit reached ({{limit}} items max).',
	    loading: 'Loading...',
	    minLength: 'Min. Length',
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    notSelected: 'Nothing Selected',
	    required: 'Required',
	    search: 'Search',
	    selected: '{{count}} selected'
	  };
	  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
	}
	
	// delayer: set a function that execute after a delay
	// @params (function, delay_prop or value, default_value)
	function delayer(fn, varTimer) {
	  var ifNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
	  function toInt(el) {
	    return (/^[0-9]+$/.test(el) ? Number(el) || 1 : null
	    );
	  }
	  var timerId;
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timerId) clearTimeout(timerId);
	    timerId = setTimeout(function () {
	      fn.apply(_this, args);
	    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN);
	  };
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
	// (Waiting for testing)
	function VueFixer(vue) {
	  var vue2 = !window.Vue || !window.Vue.partial;
	  var mixin = {
	    computed: {
	      vue2: function vue2() {
	        return !this.$dispatch;
	      }
	    }
	  };
	  if (!vue2) {
	    //translate vue2 attributes to vue1
	    if (vue.beforeCreate) {
	      mixin.create = vue.beforeCreate;
	      delete vue.beforeCreate;
	    }
	    if (vue.beforeMount) {
	      vue.beforeCompile = vue.beforeMount;
	      delete vue.beforeMount;
	    }
	    if (vue.mounted) {
	      vue.ready = vue.mounted;
	      delete vue.mounted;
	    }
	  } else {
	    //translate vue1 attributes to vue2
	    if (vue.beforeCompile) {
	      vue.beforeMount = vue.beforeCompile;
	      delete vue.beforeCompile;
	    }
	    if (vue.compiled) {
	      mixin.compiled = vue.compiled;
	      delete vue.compiled;
	    }
	    if (vue.ready) {
	      vue.mounted = vue.ready;
	      delete vue.ready;
	    }
	  }
	  if (!vue.mixins) {
	    vue.mixins = [];
	  }
	  vue.mixins.unshift(mixin);
	  return vue;
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var binded = [];
	
	function handler(e) {
	  binded.forEach(function (el) {
	    if (!el.node.contains(e.target)) el.callback(e);
	  });
	}
	
	function addListener(node, callback) {
	  if (!binded.length) document.addEventListener('click', handler, false);
	  binded.push({ node: node, callback: callback });
	}
	
	function removeListener(node, callback) {
	  binded = binded.filter(function (el) {
	    return el.node !== node ? true : !callback ? false : el.callback !== callback;
	  });
	  if (!binded.length) document.removeEventListener('click', handler, false);
	}
	
	exports.default = {
	  bind: function bind(el, binding) {
	    removeListener(el, binding.value);
	    if (typeof binding.value !== 'function') {
	      if (process.env.NODE_ENV !== 'production') {
	        Vue.util.warn('ClickOutside only work with a function, received: v-' + binding.name + '="' + binding.expression + '"');
	      }
	    } else {
	      addListener(el, binding.value);
	    }
	  },
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) {
	      removeListener(el, binding.oldValue);
	      addListener(el, binding.value);
	    }
	  },
	  unbind: function unbind(el, binding) {
	    removeListener(el, binding.value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var HANDLER = '_vue_scroll_handler';
	var events = ['resize', 'scroll'];
	
	function bind(el, binding) {
	  unbind(el);
	
	  var callback = binding.value;
	  if (typeof callback !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"');
	    }
	  } else {
	    el[HANDLER] = function (e) {
	      callback(e);
	    };
	    events.forEach(function (e) {
	      window.addEventListener(e, el[HANDLER], false);
	    });
	    document.addEventListener('load', el[HANDLER], false);
	    setTimeout(function () {
	      el[HANDLER]();
	    }, 0);
	  }
	}
	
	function unbind(el) {
	  events.forEach(function (e) {
	    window.removeEventListener(e, el[HANDLER], false);
	  });
	  document.removeEventListener('load', el[HANDLER], false);
	  delete el[HANDLER];
	}
	
	exports.default = {
	  bind: bind,
	  unbind: unbind,
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) bind(el, binding);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(70)
	
	/* script */
	__vue_exports__ = __webpack_require__(74)
	
	/* template */
	var __vue_template__ = __webpack_require__(75)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Alert.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6ee3176f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6ee3176f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6ee3176f!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6ee3176f!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\n}\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\n}\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\n}\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\n}\r\n", "", {"version":3,"sources":["/./src/Alert.vue?71a91c1a"],"names":[],"mappings":";AAoDA;;EAEA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\r\n  <transition name=\"fade\">\r\n    <div v-show=\"val\" :class=\"['alert', 'alert-'+type, placement]\" :style=\"{width:width}\" role=\"alert\">\r\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"val = false\">\r\n        <span>&times;</span>\r\n      </button>\r\n      <slot></slot>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer} from './utils/utils.js'\r\n\r\nvar DURATION = 0\r\nexport default {\r\n  props: {\r\n    dismissable: {type: Boolean, default: false},\r\n    duration: {default: DURATION},\r\n    placement: {type: String},\r\n    type: {type: String},\r\n    value: {type: Boolean, default: true },\r\n    width: {type: String}\r\n  },\r\n  data () {\r\n    return {\r\n      val: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    durationNum () { return coerce.number(this.duration, DURATION) }\r\n  },\r\n  watch: {\r\n    val (val) {\r\n      if (val && this.durationNum > 0) { this._delayClose() }\r\n      this.$emit('input', val)\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) {\r\n        this.val = val\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    this._delayClose = delayer(function () {\r\n      this.val = false\r\n    }, 'durationNum')\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var DURATION = 0; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    dismissable: { type: Boolean, default: false },
	    duration: { default: DURATION },
	    placement: { type: String },
	    type: { type: String },
	    value: { type: Boolean, default: true },
	    width: { type: String }
	  },
	  data: function data() {
	    return {
	      val: this.value
	    };
	  },
	
	  computed: {
	    durationNum: function durationNum() {
	      return _utils.coerce.number(this.duration, DURATION);
	    }
	  },
	  watch: {
	    val: function val(_val) {
	      if (_val && this.durationNum > 0) {
	        this._delayClose();
	      }
	      this.$emit('input', _val);
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  created: function created() {
	    this._delayClose = (0, _utils.delayer)(function () {
	      this.val = false;
	    }, 'durationNum');
	  }
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    class: ['alert', 'alert-' + _vm.type, _vm.placement],
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "role": "alert"
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dismissable),
	      expression: "dismissable"
	    }],
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = false
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6ee3176f", module.exports)
	  }
	}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(77)
	
	/* script */
	__vue_exports__ = __webpack_require__(79)
	
	/* template */
	var __vue_template__ = __webpack_require__(80)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47e93db9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47e93db9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47e93db9!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47e93db9!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker {\r\n  position: relative;\r\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\n}\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.datepicker > button.close:focus {\r\n  opacity: .2;\n}\n.datepicker-popup {\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner {\r\n  width: 218px;\n}\n.datepicker-body {\r\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span {\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\r\n  width: 65%;\n}\n.datepicker-ctrl span {\r\n  position: absolute;\n}\n.datepicker-body span {\r\n  text-align: center;\n}\n.datepicker-monthRange span {\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\n}\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray {\r\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\n}\n.datepicker-monthRange {\r\n  margin-top: 10px\n}\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span {\r\n  font-weight: bold;\n}\n.datepicker-label {\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\n}\n.datepicker-ctrl {\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\n.month-btn {\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\n}\n.datepicker-preBtn {\r\n  left: 2px;\n}\n.datepicker-nextBtn {\r\n  right: 2px;\n}\r\n", "", {"version":3,"sources":["/./src/Datepicker.vue?9032e8f0"],"names":[],"mappings":";AA+ZA;EACA,mBAAA;EACA,sBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,yCAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;EAIA,YAAA;CACA;AAEA;;EAEA,wCAAA;EACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;EAKA,2BAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\r\n  <div class=\"datepicker\" :class='{validate:canValidate, \"has-error\":canValidate&&valid===false,\"has-success\":fInteracted&&canValidate&&valid}'>\r\n    <input class=\"form-control datepicker-input\" type=\"text\" style=\"display:inline-block\"\r\n      v-model=\"val\"\r\n      :class=\"{'with-reset-button': clearButton}\"\r\n      :name=\"name\"\r\n      :placeholder=\"placeholder\"\r\n      :style=\"{width:width}\"\r\n      @click=\"inputClick\"\r\n      :required=\"required\"\r\n    />\r\n    <button v-if=\"clearButton&&val\" type=\"button\" class=\"close\" @click=\"val = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <select class=\"form-control\" v-model=\"hval\" style=\"width:auto;display:inline-block\" :required=\"required\" @change=\"fInteracted=true\">\r\n      <option v-for=\"h in 24\" :value=\"h-1\">{{pad2(h-1)}}</option>\r\n    </select>\r\n    <span>:</span>\r\n    <select class=\"form-control\" v-model=\"mval\" style=\"width:auto;display:inline-block\" :required=\"required\" @change=\"fInteracted=true\">\r\n      <option v-for=\"m in 12\" :value=\"5*(m-1)\">{{pad2(5*(m-1))}}</option>\r\n    </select>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"(m, index) in text.months\">\r\n              <span v-text=\"m.substr(0,3)\"\r\n                :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(val).getMonth()] === m) &&\r\n                  currDate.getFullYear() === parse(val).getFullYear()}\"\r\n                @click=\"monthSelect(index)\"\r\n              ></span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':parse(val).getFullYear() === decade.text}\"\r\n                v-text=\"decade.text\"\r\n                @click.stop=\"yearSelect(decade.text)\"\r\n              ></span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {translations} from './utils/utils.js'\r\n// import $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {type: Number},\r\n    format: {default: 'dd MMMM yyyy'},\r\n    disabledDaysOfWeek: {type: Array, default () { return [] }},\r\n    width: {type: String, default:\"auto\"},\r\n    clearButton: {type: Boolean, default: false},\r\n    lang: {type: String, default: navigator.language},\r\n    name: {type: String},\r\n    placeholder: {type: String},\r\n    iconsFont: {type: String, default: 'glyphicon'},\r\n    required: {type: Boolean, default: false},\r\n  },\r\n  data () {\r\n    var res = {\r\n      currDate: new Date(),\r\n      dateRange: [],\r\n      decadeRange: [],\r\n      displayDayView: false,\r\n      displayMonthView: false,\r\n      displayYearView: false,\r\n      val: \"\",\r\n      hval: \"\",\r\n      mval: \"\",\r\n      fInteracted:false\r\n    };\r\n    this.applyValue(this.value, res);\r\n    return res;\r\n  },\r\n  watch: {\r\n    currDate () {\r\n      this.getDateRange()\r\n    },\r\n    format () {\r\n      this.val = this.stringify(this.currDate)\r\n    },\r\n    val (val, old) {\r\n      this.emitValue(val, this.hval, this.mval);\r\n    },\r\n    hval(h) {\r\n      this.emitValue(this.val, h, this.mval);\r\n    },\r\n    mval(m) {\r\n      this.emitValue(this.val, this.hval, m);\r\n    },\r\n    value (val) {\r\n      this.applyValue(val, this);\r\n    },\r\n    valid(val) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (this._parent) this._parent.validate()\r\n    }\r\n  },\r\n  computed: {\r\n    text () {\r\n      return translations(this.lang)\r\n    },\r\n    preBtnClasses () {\r\n      return `datepicker-preBtn ${this.iconsFont} ${this.iconsFont}-chevron-left`\r\n    },\r\n    nextBtnClasses () {\r\n      return `datepicker-nextBtn ${this.iconsFont} ${this.iconsFont}-chevron-right`\r\n    },\r\n    disabledDaysArray () {\r\n      return this.disabledDaysOfWeek.map(d => parseInt(d, 10))\r\n    },\r\n    canValidate() {\r\n      return !this.disabled && !this.readonly && (this.required)\r\n    },\r\n    valid() {\r\n      //console.log([this.canValidate,this.required, this.value])\r\n      if (!this.canValidate) {\r\n        return true;\r\n      } else {\r\n        return !(this.required&&(!this.value));\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    emitValue(sDate, nH, nM) {\r\n      var dt = sDate?this.parse(sDate):null;\r\n      if (dt) {\r\n        dt.setHours(nH||0);\r\n        dt.setMinutes(nM||0);\r\n      }\r\n      this.$emit('input', dt?dt.valueOf():null);\r\n    },\r\n    applyValue(val, obj) {\r\n      var dt = new Date(val);\r\n      var sVal = val==null?\"\":this.stringify(dt);\r\n      var hVal = val==null?null:(dt.getHours());\r\n      var mVal = val==null?null:(Math.round(dt.getMinutes()/5)*5);\r\n      //console.log({sVal:sVal, mVal:mVal, hVal:hVal})\r\n      if (obj.val !== sVal) { obj.val = sVal }\r\n      if (obj.hval!==hVal) {\r\n        obj.hval = hVal;\r\n      }\r\n      if (obj.mval!==mVal) {\r\n        obj.mval = mVal;\r\n      }\r\n    },\r\n    pad2 (n) {\r\n      return n>9?String(n):\"0\"+String(n);\r\n    },\r\n    close () {\r\n      this.displayDayView = this.displayMonthView = this.displayYearView = false\r\n    },\r\n    inputClick () {\r\n      this.currDate = this.parse(this.val) || this.parse(new Date())\r\n      if (this.displayMonthView || this.displayYearView) {\r\n        this.displayDayView = false\r\n      } else {\r\n        this.displayDayView = !this.displayDayView\r\n      }\r\n    },\r\n    preNextDecadeClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 10, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 10, months, date)\r\n      }\r\n    },\r\n    preNextMonthClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const month = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        const preMonth = this.getYearMonth(year, month - 1)\r\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\r\n      } else {\r\n        const nextMonth = this.getYearMonth(year, month + 1)\r\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\r\n      }\r\n    },\r\n    preNextYearClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 1, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 1, months, date)\r\n      }\r\n    },\r\n    yearSelect (year) {\r\n      this.displayYearView = false\r\n      this.displayMonthView = true\r\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\r\n    },\r\n    daySelect (day) {\r\n      if (day.sclass === 'datepicker-item-disable') {\r\n        return false\r\n      } else {\r\n        this.fInteracted = true;\r\n        this.currDate = day.date\r\n        this.val = this.stringify(this.currDate)\r\n        this.displayDayView = false\r\n      }\r\n    },\r\n    switchMonthView () {\r\n      this.displayDayView = false\r\n      this.displayMonthView = true\r\n    },\r\n    switchDecadeView () {\r\n      this.displayMonthView = false\r\n      this.displayYearView = true\r\n    },\r\n    monthSelect (index) {\r\n      this.displayMonthView = false\r\n      this.displayDayView = true\r\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\r\n    },\r\n    getYearMonth (year, month) {\r\n      if (month > 11) {\r\n        year++\r\n        month = 0\r\n      } else if (month < 0) {\r\n        year--\r\n        month = 11\r\n      }\r\n      return {year: year, month: month}\r\n    },\r\n    stringifyDecadeHeader (date) {\r\n      const yearStr = date.getFullYear().toString()\r\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\r\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\r\n      return firstYearOfDecade + '-' + lastYearOfDecade\r\n    },\r\n    stringifyDayHeader (date) {\r\n      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()\r\n    },\r\n    parseMonth (date) {\r\n      return translations(this.lang).months[date.getMonth()]\r\n    },\r\n    stringifyYearHeader (date) {\r\n      return date.getFullYear()\r\n    },\r\n    stringify (date, format = this.format) {\r\n      if (!date) date = this.parse()\r\n      if (!date) return ''\r\n      const year = date.getFullYear()\r\n      const month = date.getMonth() + 1\r\n      const day = date.getDate()\r\n      const monthName = this.parseMonth(date)\r\n      return format\r\n        .replace(/yyyy/g, year)\r\n        .replace(/yy/g, year)\r\n        .replace(/MMMM/g, monthName)\r\n        .replace(/MMM/g, monthName.substring(0, 3))\r\n        .replace(/MM/g, ('0' + month).slice(-2))\r\n        .replace(/M(?!a)/g, month)\r\n        .replace(/dd/g, ('0' + day).slice(-2))\r\n        .replace(/d/g, day)\r\n    },\r\n    parse (str) {\r\n      if (str === undefined || str === null) { str = this.val }\r\n      let date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy' || this.format === 'dd.MM.yyyy') ?\r\n        new Date(str.substring(6, 10), str.substring(3, 5)-1, str.substring(0, 2)) :\r\n        new Date(str)\r\n      return isNaN(date.getFullYear()) ? new Date() : date\r\n    },\r\n    getDayCount (year, month) {\r\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\r\n      if (month === 1) {\r\n        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\r\n          return 29\r\n        }\r\n      }\r\n      return dict[month]\r\n    },\r\n    getDateRange () {\r\n      this.dateRange = []\r\n      this.decadeRange = []\r\n      const time = {\r\n        year: this.currDate.getFullYear(),\r\n        month: this.currDate.getMonth(),\r\n        day: this.currDate.getDate()\r\n      }\r\n      const yearStr = time.year.toString()\r\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\r\n      for (let i = 0; i < 12; i++) {\r\n        this.decadeRange.push({\r\n          text: firstYearOfDecade + i\r\n        })\r\n      }\r\n\r\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\r\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\r\n      if (firstDayWeek === 0) {\r\n        firstDayWeek = 7\r\n      }\r\n      const dayCount = this.getDayCount(time.year, time.month)\r\n      if (firstDayWeek > 1) {\r\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\r\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\r\n        for (let i = 1; i < firstDayWeek; i++) {\r\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\r\n          const date = new Date(preMonth.year, preMonth.month, dayText)\r\n          let sclass = 'datepicker-item-gray'\r\n          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n            sclass = 'datepicker-item-disable'\r\n          }\r\n          this.dateRange.push({text: dayText, date, sclass })\r\n        }\r\n      }\r\n\r\n      for (let i = 1; i <= dayCount; i++) {\r\n        const date = new Date(time.year, time.month, i)\r\n        let sclass = ''\r\n        if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n          sclass = 'datepicker-item-disable'\r\n        }\r\n        if (i == time.day && date.getFullYear() == time.year && date.getMonth() == time.month){\r\n          sclass = 'datepicker-dateRange-item-active'\r\n        }\r\n        this.dateRange.push({text: i, date, sclass})\r\n      }\r\n\r\n      if (this.dateRange.length < 42) {\r\n        const nextMonthNeed = 42 - this.dateRange.length\r\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\r\n\r\n        for (let i = 1; i <= nextMonthNeed; i++) {\r\n          const date = new Date(nextMonth.year, nextMonth.month, i)\r\n          let sclass = 'datepicker-item-gray'\r\n          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n            sclass = 'datepicker-item-disable'\r\n          }\r\n          this.dateRange.push({text: i, date, sclass})\r\n        }\r\n      }\r\n    }\r\n  },\r\n  created() {\r\n    var parent = this.$parent;\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    //console.log({parent:parent})\r\n    if (parent && parent._formValidator) {\r\n      parent.children.push(this)\r\n      this._parent = parent\r\n    }\r\n  },\r\n  mounted () {\r\n    this.$emit('child-created', this)\r\n    //console.log({val:this.val});\r\n    this.currDate = /*this.parse(this.val) || */this.parse(new Date())\r\n    this._blur = e => {\r\n      if (!this.$el.contains(e.target))\r\n        this.close()\r\n    }\r\n    window.addEventListener('click', this._blur);\r\n  },\r\n  beforeDestroy () {\r\n    window.removeEventListener('click', this._blur)\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.datepicker {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup {\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner {\r\n  width: 218px;\r\n}\r\n.datepicker-body {\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span {\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span {\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray {\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span {\r\n  font-weight: bold;\r\n}\r\n.datepicker-label {\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl {\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn {\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn {\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn {\r\n  right: 2px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	// import $ from './utils/NodeList.js'
	
	exports.default = {
	  props: {
	    value: { type: Number },
	    format: { default: 'dd MMMM yyyy' },
	    disabledDaysOfWeek: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    width: { type: String, default: "auto" },
	    clearButton: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    name: { type: String },
	    placeholder: { type: String },
	    iconsFont: { type: String, default: 'glyphicon' },
	    required: { type: Boolean, default: false }
	  },
	  data: function data() {
	    var res = {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      val: "",
	      hval: "",
	      mval: "",
	      fInteracted: false
	    };
	    this.applyValue(this.value, res);
	    return res;
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    format: function format() {
	      this.val = this.stringify(this.currDate);
	    },
	    val: function val(_val, old) {
	      this.emitValue(_val, this.hval, this.mval);
	    },
	    hval: function hval(h) {
	      this.emitValue(this.val, h, this.mval);
	    },
	    mval: function mval(m) {
	      this.emitValue(this.val, this.hval, m);
	    },
	    value: function value(val) {
	      this.applyValue(val, this);
	    },
	    valid: function valid(val) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (this._parent) this._parent.validate();
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    preBtnClasses: function preBtnClasses() {
	      return 'datepicker-preBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-left';
	    },
	    nextBtnClasses: function nextBtnClasses() {
	      return 'datepicker-nextBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-right';
	    },
	    disabledDaysArray: function disabledDaysArray() {
	      return this.disabledDaysOfWeek.map(function (d) {
	        return parseInt(d, 10);
	      });
	    },
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && this.required;
	    },
	    valid: function valid() {
	      //console.log([this.canValidate,this.required, this.value])
	      if (!this.canValidate) {
	        return true;
	      } else {
	        return !(this.required && !this.value);
	      }
	    }
	  },
	  methods: {
	    emitValue: function emitValue(sDate, nH, nM) {
	      var dt = sDate ? this.parse(sDate) : null;
	      if (dt) {
	        dt.setHours(nH || 0);
	        dt.setMinutes(nM || 0);
	      }
	      this.$emit('input', dt ? dt.valueOf() : null);
	    },
	    applyValue: function applyValue(val, obj) {
	      var dt = new Date(val);
	      var sVal = val == null ? "" : this.stringify(dt);
	      var hVal = val == null ? null : dt.getHours();
	      var mVal = val == null ? null : Math.round(dt.getMinutes() / 5) * 5;
	      //console.log({sVal:sVal, mVal:mVal, hVal:hVal})
	      if (obj.val !== sVal) {
	        obj.val = sVal;
	      }
	      if (obj.hval !== hVal) {
	        obj.hval = hVal;
	      }
	      if (obj.mval !== mVal) {
	        obj.mval = mVal;
	      }
	    },
	    pad2: function pad2(n) {
	      return n > 9 ? String(n) : "0" + String(n);
	    },
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.val) || this.parse(new Date());
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(day) {
	      if (day.sclass === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.fInteracted = true;
	        this.currDate = day.date;
	        this.val = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return (0, _utils.translations)(this.lang).months[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (!date) date = this.parse();
	      if (!date) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	      return format.replace(/yyyy/g, year).replace(/yy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/M(?!a)/g, month).replace(/dd/g, ('0' + day).slice(-2)).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      if (str === undefined || str === null) {
	        str = this.val;
	      }
	      var date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy' || this.format === 'dd.MM.yyyy') ? new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2)) : new Date(str);
	      return isNaN(date.getFullYear()) ? new Date() : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          var sclass = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
	            sclass = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: dayText, date: date, sclass: sclass });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);
	        var _sclass = '';
	        if (this.disabledDaysArray.indexOf(_date.getDay()) > -1) {
	          _sclass = 'datepicker-item-disable';
	        }
	        if (_i2 == time.day && _date.getFullYear() == time.year && _date.getMonth() == time.month) {
	          _sclass = 'datepicker-dateRange-item-active';
	        }
	        this.dateRange.push({ text: _i2, date: _date, sclass: _sclass });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          var _sclass2 = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(_date2.getDay()) > -1) {
	            _sclass2 = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: _i3, date: _date2, sclass: _sclass2 });
	        }
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    //console.log({parent:parent})
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$emit('child-created', this);
	    //console.log({val:this.val});
	    this.currDate = /*this.parse(this.val) || */this.parse(new Date());
	    this._blur = function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    };
	    window.addEventListener('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this._blur);
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "datepicker",
	    class: {
	      validate: _vm.canValidate, "has-error": _vm.canValidate && _vm.valid === false, "has-success": _vm.fInteracted && _vm.canValidate && _vm.valid
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control datepicker-input",
	    class: {
	      'with-reset-button': _vm.clearButton
	    },
	    staticStyle: {
	      "display": "inline-block"
	    },
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "type": "text",
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "required": _vm.required
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "click": _vm.inputClick,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]) : _vm._e(), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.hval),
	      expression: "hval"
	    }],
	    staticClass: "form-control",
	    staticStyle: {
	      "width": "auto",
	      "display": "inline-block"
	    },
	    attrs: {
	      "required": _vm.required
	    },
	    on: {
	      "change": [function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.hval = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }, function($event) {
	        _vm.fInteracted = true
	      }]
	    }
	  }, _vm._l((24), function(h) {
	    return _c('option', {
	      domProps: {
	        "value": h - 1
	      }
	    }, [_vm._v(_vm._s(_vm.pad2(h - 1)))])
	  })), _vm._v(" "), _c('span', [_vm._v(":")]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.mval),
	      expression: "mval"
	    }],
	    staticClass: "form-control",
	    staticStyle: {
	      "width": "auto",
	      "display": "inline-block"
	    },
	    attrs: {
	      "required": _vm.required
	    },
	    on: {
	      "change": [function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.mval = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }, function($event) {
	        _vm.fInteracted = true
	      }]
	    }
	  }, _vm._l((12), function(m) {
	    return _c('option', {
	      domProps: {
	        "value": 5 * (m - 1)
	      }
	    }, [_vm._v(_vm._s(_vm.pad2(5 * (m - 1))))])
	  })), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayDayView),
	      expression: "displayDayView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchMonthView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-weekRange"
	  }, _vm._l((_vm.text.daysOfWeek), function(w) {
	    return _c('span', [_vm._v(_vm._s(w))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-dateRange"
	  }, _vm._l((_vm.dateRange), function(d) {
	    return _c('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          _vm.daySelect(d)
	        }
	      }
	    }, [_vm._v(_vm._s(d.text))])
	  }))])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayMonthView),
	      expression: "displayMonthView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchDecadeView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange"
	  }, [_vm._l((_vm.text.months), function(m, index) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active':
	        (_vm.text.months[_vm.parse(_vm.val).getMonth()] === m) &&
	        _vm.currDate.getFullYear() === _vm.parse(_vm.val).getFullYear()
	      },
	      domProps: {
	        "textContent": _vm._s(m.substr(0, 3))
	      },
	      on: {
	        "click": function($event) {
	          _vm.monthSelect(index)
	        }
	      }
	    })]
	  })], 2)])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayYearView),
	      expression: "displayYearView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange decadeRange"
	  }, [_vm._l((_vm.decadeRange), function(decade) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active': _vm.parse(_vm.val).getFullYear() === decade.text
	      },
	      domProps: {
	        "textContent": _vm._s(decade.text)
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.yearSelect(decade.text)
	        }
	      }
	    })]
	  })], 2)])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47e93db9", module.exports)
	  }
	}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(82)
	
	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15703264", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-15703264", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    disabled: { type: Boolean, default: false },
	    size: { type: String, default: null },
	    text: { type: String, default: null },
	    type: { type: String, default: 'default' },
	    value: { type: Boolean, default: false }
	  },
	  data: function data() {
	    var show = this.value;
	    return { show: show };
	  },
	
	  watch: {
	    show: function show(val) {
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.show = val;
	    }
	  },
	  computed: {
	    buttonSize: function buttonSize() {
	      return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '';
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    slots: function slots() {
	      return this._slotContents;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.show = !this.show;
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    (0, _NodeList2.default)('ul', this.$el).on('click', 'li>a', function (e) {
	      _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('ul', this.$el).off();
	  }
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.isLi ? 'li' : 'div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.blur),
	      expression: "blur"
	    }],
	    tag: "div",
	    class: [{
	      open: _vm.show,
	      disabled: _vm.disabled,
	      dropdown: _vm.isLi,
	      'input-group-btn': _vm.inInput,
	      'btn-group': !_vm.isLi && !_vm.inInput
	    }]
	  }, [_vm._t("before"), _vm._v(" "), (_vm.isLi) ? _c('a', {
	    class: ['dropdown-toggle', _vm.buttonSize, {
	      disabled: _vm.disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2) : _c('button', {
	    class: ['btn btn-' + _vm.type, _vm.buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2), _vm._v(" "), _vm._t("dropdown-menu", [_c('ul', {
	    staticClass: "dropdown-menu"
	  }, [_vm._t("default")], 2)])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-15703264", module.exports)
	  }
	}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(85)
	
	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\FormValidator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7f2f0501", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7f2f0501", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormValidator.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    enterSubmit: { type: Boolean, default: false },
	    icon: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    value: null
	  },
	  data: function data() {
	    return {
	      children: [],
	      valid: null,
	      timeout: null
	    };
	  },
	
	  watch: {
	    children: function children() {
	      this.validate();
	      this.$emit('children', this.children);
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit('input', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    }
	  },
	  methods: {
	    validate: function validate() {
	      var invalid = !this.children.every(function (el) {
	        return el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	      });
	      this.valid = !invalid;
	      return !invalid;
	    },
	    evalValid: function evalValid() {
	      this.children.forEach(function (el) {
	        el.evalValid && el.evalValid();
	      });
	    }
	  },
	  created: function created() {
	    this._formValidator = true;
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7f2f0501", module.exports)
	  }
	}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(88)
	
	/* script */
	__vue_exports__ = __webpack_require__(90)
	
	/* template */
	var __vue_template__ = __webpack_require__(91)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2bcbfedd"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2bcbfedd", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2bcbfedd", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bcbfedd&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bcbfedd&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vsInput[data-v-2bcbfedd] {\r\n  display:inline-block;\n}\n.vsInput input.form-control[data-v-2bcbfedd] {\r\n  display:inline-block;\n}\n.form-group[data-v-2bcbfedd] {\r\n  position: relative;\n}\nlabel~.close[data-v-2bcbfedd] {\r\n  top: 25px;\n}\n.input-group>.icon[data-v-2bcbfedd] {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\n}\n.close[data-v-2bcbfedd] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.has-feedback .close[data-v-2bcbfedd] {\r\n  right: 20px;\n}\r\n", "", {"version":3,"sources":["/./src/Input.vue?5b157bc3"],"names":[],"mappings":";AAySA;EACA,qBAAA;CACA;AACA;EACA,qBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,QAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA","file":"Input.vue","sourcesContent":["<template>\r\n  <div :class=\"[vsClass, {validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid&&fInteracted}]\">\r\n    <slot name=\"label\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\">{{label}}</label></slot>\r\n    <div v-if=\"$slots.before||$slots.after\" class=\"input-group\">\r\n      <slot name=\"before\"></slot>\r\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :list=\"id_datalist\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <div v-if=\"clearButton && value\" :class=\"{icon:icon}\">\r\n        <span class=\"close\" @click=\"value = ''\">&times;</span>\r\n      </div>\r\n      <div v-if=\"icon\" class=\"icon\">\r\n        <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n      </div>\r\n      <slot name=\"after\"></slot>\r\n    </div>\r\n    <template v-else>\r\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :list=\"id_datalist\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <input v-if=\"type!='textarea'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :list=\"id_datalist\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      />\r\n      <span v-if=\"clearButton && val\" class=\"close\" @click=\"val = ''\">&times;</span>\r\n      <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n    </template>\r\n    <datalist v-if=\"id_datalist\" :id=\"id_datalist\">\r\n      <option v-for=\"opc in options\" :value=\"opc\"></option>\r\n    </datalist>\r\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\">{{help}}</div>\r\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\">{{errorText}}</div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer, translations} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nvar DELAY = 300\r\n\r\nexport default {\r\n  props: {\r\n    clearButton: {type: Boolean, default: false},\r\n    cols: {type: Number, default: null},\r\n    datalist: {type: Array, default: null},\r\n    disabled: {type: Boolean, default: false},\r\n    enterSubmit: {type: Boolean, default: false},\r\n    error: {type: String, default: null},\r\n    help: {type: String, default: null},\r\n    hideHelp: {type: Boolean, default: true},\r\n    icon: {type: Boolean, default: false},\r\n    label: {type: String, default: null},\r\n    lang: {type: String, default: navigator.language},\r\n    mask: null,\r\n    maskDelay: {type: Number, default: 100},\r\n    match: {type: String, default: null},\r\n    max: {type: String, default: null},\r\n    maxlength: {type: Number, default: null},\r\n    min: {type: String, default: null},\r\n    minlength: {type: Number, default: 0},\r\n    name: {type: String, default: null},\r\n    pattern: {default: null},\r\n    placeholder: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    required: {type: Boolean, default: false},\r\n    rows: {type: Number, default: 3},\r\n    step: {type: Number, default: null},\r\n    type: {type: String, default: 'text'},\r\n    url: {type: String, default: null},\r\n    urlMap: {type: Function, default: null},\r\n    validationDelay: {type: Number, default: 250},\r\n    value: {default: null},\r\n    vsClass: {type:String, default:\"vsInput\"}\r\n  },\r\n  data () {\r\n    var val = this.value\r\n    return {\r\n      options: this.datalist,\r\n      val,\r\n      valid: null,\r\n      timeout: null,\r\n      fInteracted: false\r\n    }\r\n  },\r\n  computed: {\r\n    canValidate () { return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) },\r\n    errorText () {\r\n      let value = this.value\r\n      let error = [this.error]\r\n      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')\r\n      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')\r\n      return error.join(' ')\r\n    },\r\n    id_datalist () {\r\n      if (this.type !== 'textarea' && this.datalist instanceof Array) {\r\n        if (!this._id_datalist) {\r\n          if (!this.$root.id_datalist) { this.$root.id_datalist = 0 }\r\n          this._id_datalist = 'input-datalist' + this.$root.id_datalist++\r\n        }\r\n        return this._id_datalist\r\n      }\r\n      return null\r\n    },\r\n    input () { return this.$refs.input },\r\n    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },\r\n    regex () { return coerce.pattern(this.pattern) },\r\n    showError () { return this.error && this.valid === false },\r\n    showHelp () { return this.help && (!this.showError || !this.hideHelp) },\r\n    text () { return translations(this.lang) },\r\n    title () { return this.errorText || this.help || '' }\r\n  },\r\n  watch: {\r\n    datalist (val, old) {\r\n      if (val !== old && val instanceof Array) { this.options = val }\r\n    },\r\n    match (val) { this.eval() },\r\n    options (val, old) {\r\n      if (val !== old) this.$emit('options', val)\r\n    },\r\n    url (val) {\r\n      this._url()\r\n    },\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (val !== old) {\r\n        if (this.mask instanceof Function) {\r\n          val = this.mask(val || '')\r\n          if (this.val !== val) {\r\n            if (this._timeout.mask) clearTimeout(this._timeout.mask)\r\n            this._timeout.mask = setTimeout(() => {\r\n              this.val = val\r\n            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)\r\n          }\r\n        }\r\n        this.eval()\r\n      }\r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (this._parent) this._parent.validate()\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  methods: {\r\n    attr (value) {\r\n      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value\r\n    },\r\n    emit (e) {\r\n      this.$emit(e.type, e.type == 'input' ? e.target.value : e)\r\n      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }\r\n      if(e.type=='input') {\r\n        this.fInteracted = true;\r\n      }\r\n    },\r\n    eval () {\r\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\r\n      if (!this.canValidate) {\r\n        this.valid = true\r\n      } else {\r\n        this._timeout.eval = setTimeout(() => {\r\n          this.valid = this.validate()\r\n          this._timeout.eval = null\r\n        }, this.validationDelay)\r\n      }\r\n    },\r\n    focus () { this.input.focus() },\r\n    submit () {\r\n      if (this.$parent._formValidator) {\r\n        return this.$parent.validate()\r\n      }\r\n      if (this.input.form) {\r\n        const invalids = $('.validate:not(.has-success)', this.input.form)\r\n        if (invalids.length) {\r\n          invalids.find('input,textarea,select')[0].focus()\r\n        } else {\r\n          this.input.form.submit()\r\n        }\r\n      }\r\n    },\r\n    validate () {\r\n      if (!this.canValidate) { return true }\r\n      let value = String(this.val || '').trim()\r\n      if (!value) { return !this.required }\r\n      if (this.match !== null) { return this.match === value }\r\n      if (value.length < this.minlength) { return false }\r\n      if (this.nativeValidate && !this.input.checkValidity()) { return false }\r\n      if (this.regex) {\r\n        if (!(this.regex instanceof Function ? this.regex(this.val) : this.regex.test(this.val))) { return false }\r\n      }\r\n      return true\r\n    },\r\n    evalValid() {\r\n      if(this.canValidate) {\r\n        if (!this.validate()) {\r\n          this.valid = false;\r\n        }\r\n      }\r\n    },\r\n    reset() {\r\n      this.value = ''\r\n      this.valid = null\r\n      if (this._timeout.mask) clearTimeout(this._timeout.mask)\r\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\r\n    }\r\n  },\r\n  created () {\r\n    this._input = true\r\n    this._timeout = {}\r\n    let parent = this.$parent\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    if (parent && parent._formValidator) {\r\n      parent.children.push(this)\r\n      this._parent = parent\r\n    }\r\n    this._url = delayer(function () {\r\n      if (!this.url || !this.$http || this._loading) { return }\r\n      this._loading = true\r\n      this.$http.get(this.url).then(response => {\r\n        var data = response.data instanceof Array ? response.data : []\r\n        try { data = JSON.parse(data) } catch (e) {}\r\n        if (this.urlMap) { data = data.map(this.urlMap) }\r\n        this.options = data\r\n        this.loading = false\r\n      }, response => {\r\n        this.loading = false\r\n      })\r\n    }, DELAY)\r\n    if (this.url) this._url()\r\n  },\r\n  mounted () {\r\n    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {\r\n    //   if (this.canValidate) { this.valid = this.validate() }\r\n    //   this.$emit('blur', e)\r\n    // })\r\n  },\r\n  beforeDestroy () {\r\n    // $(this.input).off()\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.vsInput {\r\n  display:inline-block;\r\n}\r\n.vsInput input.form-control {\r\n  display:inline-block;\r\n}\r\n.form-group {\r\n  position: relative;\r\n}\r\nlabel~.close {\r\n  top: 25px;\r\n}\r\n.input-group>.icon {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback .close {\r\n  right: 20px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var DELAY = 300;
	
	exports.default = {
	  props: {
	    clearButton: { type: Boolean, default: false },
	    cols: { type: Number, default: null },
	    datalist: { type: Array, default: null },
	    disabled: { type: Boolean, default: false },
	    enterSubmit: { type: Boolean, default: false },
	    error: { type: String, default: null },
	    help: { type: String, default: null },
	    hideHelp: { type: Boolean, default: true },
	    icon: { type: Boolean, default: false },
	    label: { type: String, default: null },
	    lang: { type: String, default: navigator.language },
	    mask: null,
	    maskDelay: { type: Number, default: 100 },
	    match: { type: String, default: null },
	    max: { type: String, default: null },
	    maxlength: { type: Number, default: null },
	    min: { type: String, default: null },
	    minlength: { type: Number, default: 0 },
	    name: { type: String, default: null },
	    pattern: { default: null },
	    placeholder: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    required: { type: Boolean, default: false },
	    rows: { type: Number, default: 3 },
	    step: { type: Number, default: null },
	    type: { type: String, default: 'text' },
	    url: { type: String, default: null },
	    urlMap: { type: Function, default: null },
	    validationDelay: { type: Number, default: 250 },
	    value: { default: null },
	    vsClass: { type: String, default: "vsInput" }
	  },
	  data: function data() {
	    var val = this.value;
	    return {
	      options: this.datalist,
	      val: val,
	      valid: null,
	      timeout: null,
	      fInteracted: false
	    };
	  },
	
	  computed: {
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null);
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    },
	    id_datalist: function id_datalist() {
	      if (this.type !== 'textarea' && this.datalist instanceof Array) {
	        if (!this._id_datalist) {
	          if (!this.$root.id_datalist) {
	            this.$root.id_datalist = 0;
	          }
	          this._id_datalist = 'input-datalist' + this.$root.id_datalist++;
	        }
	        return this._id_datalist;
	      }
	      return null;
	    },
	    input: function input() {
	      return this.$refs.input;
	    },
	    nativeValidate: function nativeValidate() {
	      return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
	    },
	    regex: function regex() {
	      return _utils.coerce.pattern(this.pattern);
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    title: function title() {
	      return this.errorText || this.help || '';
	    }
	  },
	  watch: {
	    datalist: function datalist(val, old) {
	      if (val !== old && val instanceof Array) {
	        this.options = val;
	      }
	    },
	    match: function match(val) {
	      this.eval();
	    },
	    options: function options(val, old) {
	      if (val !== old) this.$emit('options', val);
	    },
	    url: function url(val) {
	      this._url();
	    },
	    val: function val(_val, old) {
	      var _this = this;
	
	      this.$emit('input', _val);
	      if (_val !== old) {
	        if (this.mask instanceof Function) {
	          _val = this.mask(_val || '');
	          if (this.val !== _val) {
	            if (this._timeout.mask) clearTimeout(this._timeout.mask);
	            this._timeout.mask = setTimeout(function () {
	              _this.val = _val;
	            }, isNaN(this.maskDelay) ? 0 : this.maskDelay);
	          }
	        }
	        this.eval();
	      }
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (this._parent) this._parent.validate();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    attr: function attr(value) {
	      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value;
	    },
	    emit: function emit(e) {
	      this.$emit(e.type, e.type == 'input' ? e.target.value : e);
	      if (e.type === 'blur' && this.canValidate) {
	        this.valid = this.validate();
	      }
	      if (e.type == 'input') {
	        this.fInteracted = true;
	      }
	    },
	    eval: function _eval() {
	      var _this2 = this;
	
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	      if (!this.canValidate) {
	        this.valid = true;
	      } else {
	        this._timeout.eval = setTimeout(function () {
	          _this2.valid = _this2.validate();
	          _this2._timeout.eval = null;
	        }, this.validationDelay);
	      }
	    },
	    focus: function focus() {
	      this.input.focus();
	    },
	    submit: function submit() {
	      if (this.$parent._formValidator) {
	        return this.$parent.validate();
	      }
	      if (this.input.form) {
	        var invalids = (0, _NodeList2.default)('.validate:not(.has-success)', this.input.form);
	        if (invalids.length) {
	          invalids.find('input,textarea,select')[0].focus();
	        } else {
	          this.input.form.submit();
	        }
	      }
	    },
	    validate: function validate() {
	      if (!this.canValidate) {
	        return true;
	      }
	      var value = String(this.val || '').trim();
	      if (!value) {
	        return !this.required;
	      }
	      if (this.match !== null) {
	        return this.match === value;
	      }
	      if (value.length < this.minlength) {
	        return false;
	      }
	      if (this.nativeValidate && !this.input.checkValidity()) {
	        return false;
	      }
	      if (this.regex) {
	        if (!(this.regex instanceof Function ? this.regex(this.val) : this.regex.test(this.val))) {
	          return false;
	        }
	      }
	      return true;
	    },
	    evalValid: function evalValid() {
	      if (this.canValidate) {
	        if (!this.validate()) {
	          this.valid = false;
	        }
	      }
	    },
	    reset: function reset() {
	      this.value = '';
	      this.valid = null;
	      if (this._timeout.mask) clearTimeout(this._timeout.mask);
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	    }
	  },
	  created: function created() {
	    this._input = true;
	    this._timeout = {};
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	    this._url = (0, _utils.delayer)(function () {
	      var _this3 = this;
	
	      if (!this.url || !this.$http || this._loading) {
	        return;
	      }
	      this._loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        if (_this3.urlMap) {
	          data = data.map(_this3.urlMap);
	        }
	        _this3.options = data;
	        _this3.loading = false;
	      }, function (response) {
	        _this3.loading = false;
	      });
	    }, DELAY);
	    if (this.url) this._url();
	  },
	  mounted: function mounted() {
	    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {
	    //   if (this.canValidate) { this.valid = this.validate() }
	    //   this.$emit('blur', e)
	    // })
	  },
	  beforeDestroy: function beforeDestroy() {
	    // $(this.input).off()
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.vsClass, {
	      validate: _vm.canValidate,
	      'has-feedback': _vm.icon,
	      'has-error': _vm.canValidate && _vm.valid === false,
	      'has-success': _vm.canValidate && _vm.valid && _vm.fInteracted
	    }]
	  }, [_vm._t("label", [(_vm.label) ? _c('label', {
	    staticClass: "control-label",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()]), _vm._v(" "), (_vm.$slots.before || _vm.$slots.after) ? _c('div', {
	    staticClass: "input-group"
	  }, [_vm._t("before"), _vm._v(" "), _c(_vm.type == 'textarea' ? _vm.type : 'input', {
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": _vm.emit,
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    },
	    model: {
	      value: (_vm.val),
	      callback: function($$v) {
	        _vm.val = $$v
	      },
	      expression: "val"
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.value) ? _c('div', {
	    class: {
	      icon: _vm.icon
	    }
	  }, [_c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.value = ''
	      }
	    }
	  }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('div', {
	    staticClass: "icon"
	  }, [(_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("after")], 2) : [(_vm.type == 'textarea') ? _c('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), ((_vm.type == 'textarea' ? null : _vm.type) === 'checkbox' && (_vm.type != 'textarea')) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.val) ? _vm._i(_vm.val, null) > -1 : (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": _vm.emit,
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      },
	      "change": function($event) {
	        var $$a = _vm.val,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.val = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.val = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.val = $$c
	        }
	      }
	    }
	  }) : ((_vm.type == 'textarea' ? null : _vm.type) === 'radio' && (_vm.type != 'textarea')) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": "radio"
	    },
	    domProps: {
	      "checked": _vm._q(_vm.val, null)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": _vm.emit,
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      },
	      "change": function($event) {
	        _vm.val = null
	      }
	    }
	  }) : (_vm.type != 'textarea') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()], _vm._v(" "), (_vm.id_datalist) ? _c('datalist', {
	    attrs: {
	      "id": _vm.id_datalist
	    }
	  }, _vm._l((_vm.options), function(opc) {
	    return _c('option', {
	      domProps: {
	        "value": opc
	      }
	    })
	  })) : _vm._e(), _vm._v(" "), (_vm.showHelp) ? _c('div', {
	    staticClass: "help-block",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.help))]) : _vm._e(), _vm._v(" "), (_vm.showError) ? _c('div', {
	    staticClass: "help-block with-errors",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.errorText))]) : _vm._e()], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2bcbfedd", module.exports)
	  }
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(93)
	
	/* script */
	__vue_exports__ = __webpack_require__(95)
	
	/* template */
	var __vue_template__ = __webpack_require__(100)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47627840", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47627840", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47627840!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47627840!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\r\n  transition: all 0.3s ease;\n}\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  -moz-transform: scale(0.1);\r\n  -ms-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\n}\r\n", "", {"version":3,"sources":["/./src/Modal.vue?1fdd6260"],"names":[],"mappings":";AAsGA;EACA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;EACA,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,0BAAA;EACA,qBAAA;CACA;AACA;EACA,4BAAA;EACA,yBAAA;EACA,wBAAA;EACA,oBAAA;EACA,6CAAA;EACA,qCAAA;EACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <div role=\"dialog\" :class=\"['modal',effect]\" @click=\"backdrop&&action(false,1)\" @transitionend=\"transition = false\">\r\n    <div :class=\"['modal-dialog',{'modal-lg':large,'modal-sm':small}]\" role=\"document\" :style=\"{width: optionalWidth}\" @click.stop=\"action(null)\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"action(false,2)\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\"><slot name=\"title\">{{title}}</slot></h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\"><div class=\"modal-body\"><slot></slot></div></slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"action(false,3)\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"action(true,4)\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {getScrollBarWidth} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    backdrop: {type: Boolean, default: true},\r\n    callback: {type: Function, default: null},\r\n    cancelText: {type: String, default: 'Close'},\r\n    effect: {type: String, default: null},\r\n    large: {type: Boolean, default: false},\r\n    okText: {type: String, default: 'Save changes'},\r\n    small: {type: Boolean, default: false},\r\n    title: {type: String, default: ''},\r\n    value: {type: Boolean, required: true},\r\n    width: {default: null}\r\n  },\r\n  data () {\r\n    return {\r\n      transition: false,\r\n      val: null\r\n    }\r\n  },\r\n  computed: {\r\n    optionalWidth () {\r\n      if (this.width === null) {\r\n        return null\r\n      } else if (Number.isInteger(this.width)) {\r\n        return this.width + 'px'\r\n      }\r\n      return this.width\r\n    }\r\n  },\r\n  watch: {\r\n    transition (val, old) {\r\n      if (val === old) { return }\r\n      const el = this.$el\r\n      const body = document.body\r\n      if (val) {//starting\r\n        if (this.val) {\r\n          el.querySelector('.modal-content').focus()\r\n          el.style.display = 'block'\r\n          setTimeout(() => el.classList.add('in'), 0)\r\n          body.classList.add('modal-open')\r\n          if (getScrollBarWidth() !== 0) {\r\n            body.style.paddingRight = getScrollBarWidth() + 'px'\r\n          }\r\n        } else {\r\n          el.classList.remove('in')\r\n        }\r\n      } else {//ending\r\n        this.$emit(this.val ? 'opened' : 'closed')\r\n        if (!this.val) {\r\n          el.style.display = 'none'\r\n          body.style.paddingRight = null\r\n          body.classList.remove('modal-open')\r\n        }\r\n      }\r\n    },\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (old === null ? val === true : val !== old) this.transition = true\r\n    },\r\n    value (val, old) {\r\n      if (val !== old) this.val = val\r\n    }\r\n  },\r\n  methods: {\r\n    action (val,p) {\r\n      if (val === null) { return }\r\n      if (val && this.callback instanceof Function) this.callback()\r\n      this.$emit(val ? 'ok' : 'cancel',p)\r\n      this.val = val || false\r\n    }\r\n  },\r\n  mounted () {\r\n    this.val = this.value\r\n  }\r\n}\r\n</script>\r\n<style>\r\n.modal {\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  -moz-transform: scale(0.1);\r\n  -ms-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(96);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    backdrop: { type: Boolean, default: true },
	    callback: { type: Function, default: null },
	    cancelText: { type: String, default: 'Close' },
	    effect: { type: String, default: null },
	    large: { type: Boolean, default: false },
	    okText: { type: String, default: 'Save changes' },
	    small: { type: Boolean, default: false },
	    title: { type: String, default: '' },
	    value: { type: Boolean, required: true },
	    width: { default: null }
	  },
	  data: function data() {
	    return {
	      transition: false,
	      val: null
	    };
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    }
	  },
	  watch: {
	    transition: function transition(val, old) {
	      if (val === old) {
	        return;
	      }
	      var el = this.$el;
	      var body = document.body;
	      if (val) {
	        //starting
	        if (this.val) {
	          el.querySelector('.modal-content').focus();
	          el.style.display = 'block';
	          setTimeout(function () {
	            return el.classList.add('in');
	          }, 0);
	          body.classList.add('modal-open');
	          if ((0, _utils.getScrollBarWidth)() !== 0) {
	            body.style.paddingRight = (0, _utils.getScrollBarWidth)() + 'px';
	          }
	        } else {
	          el.classList.remove('in');
	        }
	      } else {
	        //ending
	        this.$emit(this.val ? 'opened' : 'closed');
	        if (!this.val) {
	          el.style.display = 'none';
	          body.style.paddingRight = null;
	          body.classList.remove('modal-open');
	        }
	      }
	    },
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (old === null ? _val === true : _val !== old) this.transition = true;
	    },
	    value: function value(val, old) {
	      if (val !== old) this.val = val;
	    }
	  },
	  methods: {
	    action: function action(val, p) {
	      if (val === null) {
	        return;
	      }
	      if (val && this.callback instanceof Function) this.callback();
	      this.$emit(val ? 'ok' : 'cancel', p);
	      this.val = val || false;
	    }
	  },
	  mounted: function mounted() {
	    this.val = this.value;
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	module.exports = __webpack_require__(7).Number.isInteger;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(99) });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['modal', _vm.effect],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": function($event) {
	        _vm.backdrop && _vm.action(false, 1)
	      },
	      "transitionend": function($event) {
	        _vm.transition = false
	      }
	    }
	  }, [_c('div', {
	    class: ['modal-dialog', {
	      'modal-lg': _vm.large,
	      'modal-sm': _vm.small
	    }],
	    style: ({
	      width: _vm.optionalWidth
	    }),
	    attrs: {
	      "role": "document"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.action(null)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_vm._t("modal-header", [_c('div', {
	    staticClass: "modal-header"
	  }, [_c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 2)
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
	    staticClass: "modal-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)])]), _vm._v(" "), _vm._t("modal-body", [_c('div', {
	    staticClass: "modal-body"
	  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("modal-footer", [_c('div', {
	    staticClass: "modal-footer"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 3)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(true, 4)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.okText))])])])], 2)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47627840", module.exports)
	  }
	}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(102)
	
	/* script */
	__vue_exports__ = __webpack_require__(104)
	
	/* template */
	var __vue_template__ = __webpack_require__(106)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-714ca510", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-714ca510", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-714ca510!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-714ca510!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\n}\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n0% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n100% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n100% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Popover.vue?e616963a"],"names":[],"mappings":";AAyBA;;;;EAIA,eAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA","file":"Popover.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <transition :name=\"effect\">\r\n      <div ref=\"popover\" v-if=\"show\" :class=\"['popover',placement]\">\r\n        <div class=\"arrow\"></div>\r\n        <h3 class=\"popover-title\" v-if=\"title\"><slot name=\"title\">{{title}}</slot></h3>\r\n        <div class=\"popover-content\"><slot name=\"content\"><span v-html=\"content\"></span></slot></div>\r\n      </div>\r\n    </transition>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './utils/popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    trigger: {type: String, default: 'click'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(105);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: { type: String, default: 'click' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    content: { type: String },
	    effect: { type: String, default: 'fade' },
	    header: { type: Boolean, default: true },
	    placement: { type: String, default: 'top' },
	    title: { type: String },
	    trigger: { type: String }
	  },
	  data: function data() {
	    return {
	      top: 0,
	      left: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    events: function events() {
	      return { contextmenu: ['contextmenu'], hover: ['mouseleave', 'mouseenter'], focus: ['blur', 'focus'] }[this.trigger] || ['click'];
	    }
	  },
	  methods: {
	    beforeEnter: function beforeEnter() {
	      var _this = this;
	
	      this.position();
	      setTimeout(function () {
	        return _this.position();
	      }, 30);
	    },
	    position: function position() {
	      var _this2 = this;
	
	      this.$nextTick(function () {
	        var popover = _this2.$refs.popover;
	        var trigger = _this2.$refs.trigger.children[0];
	        switch (_this2.placement) {
	          case 'top':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            _this2.left = trigger.offsetLeft + trigger.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight;
	            break;
	          default:
	            console.warn('Wrong placement prop');
	        }
	        popover.style.top = _this2.top + 'px';
	        popover.style.left = _this2.left + 'px';
	      });
	    },
	    toggle: function toggle(e) {
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	      this.show = !this.show;
	      if (this.show) this.beforeEnter();
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;
	
	    var trigger = this.$refs.trigger.children[0];
	    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');
	
	    if (this.trigger === 'focus' && !~trigger.tabIndex) {
	      trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
	      if (!trigger.length) {
	        return;
	      }
	    }
	    this.events.forEach(function (event) {
	      (0, _NodeList2.default)(trigger).on(event, _this3.toggle);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
	  }
	};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['popover', _vm.placement]
	  }, [_c('div', {
	    staticClass: "arrow"
	  }), _vm._v(" "), (_vm.title) ? _c('h3', {
	    staticClass: "popover-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "popover-content"
	  }, [_vm._t("content", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-714ca510", module.exports)
	  }
	}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(108)
	
	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Progressbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-75f26f99", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-75f26f99", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	exports.default = {
	  props: {
	    animated: { type: Boolean, default: false },
	    label: { default: false },
	    now: { required: true },
	    striped: { type: Boolean, default: false },
	    type: { type: String }
	  },
	  computed: {
	    labelBool: function labelBool() {
	      return _utils.coerce.boolean(this.label);
	    },
	    nowNum: function nowNum() {
	      return _utils.coerce.number(this.now);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['progress-bar', 'progress-bar-' + _vm.type, {
	      active: _vm.animated,
	      'progress-bar-striped': _vm.striped
	    }],
	    style: ({
	      width: _vm.nowNum + '%'
	    }),
	    domProps: {
	      "textContent": _vm._s(_vm.labelBool ? _vm.nowNum + '%' : null)
	    }
	  })
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-75f26f99", module.exports)
	  }
	}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(111)
	
	/* script */
	__vue_exports__ = __webpack_require__(113)
	
	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5d5f26ec", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5d5f26ec", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d5f26ec!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d5f26ec!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n@keyframes spin {\n100% {\r\n    transform: rotate(360deg);\n}\n}\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\n}\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\n}\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\n}\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: spin 0.6s linear;\r\n  animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\n}\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\n}\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\n}\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\n}\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\n}\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\n}\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\n}\r\n", "", {"version":3,"sources":["/./src/Spinner.vue?65fc5a8f"],"names":[],"mappings":";AA2FA;AACA;IACA,0BAAA;CACA;CACA;AACA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,qCAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;EACA,mBAAA;EACA,sBAAA;EACA,4BAAA;EACA,oCAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;;;;;EAKA,6IAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;CACA","file":"Spinner.vue","sourcesContent":["<template>\r\n  <div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active||locked\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer} from './utils/utils.js'\r\nconst MIN_WAIT = 500 // in ms\r\n\r\nexport default {\r\n  props: {\r\n    fixed: {type: Boolean, default: false},\r\n    global: {type: Boolean, default: false},\r\n    size: {type: String, default: 'md'},\r\n    text: {type: String, default: ''},\r\n    value: {default: false}\r\n  },\r\n  data () {\r\n    return {\r\n      active: this.value,\r\n      locked: false\r\n    }\r\n  },\r\n  computed: {\r\n    spinnerSize () { return 'spinner-' + (this.size ? this.size : 'sm') }\r\n  },\r\n  watch: {\r\n    active (val, old) {\r\n      if (val !== old) this.$emit('input', val)\r\n    },\r\n    value (val, old) {\r\n      if (val !== old) { this[val ? 'show' : 'hide']() }\r\n    }\r\n  },\r\n  methods: {\r\n    hide () {\r\n      var delay = 0\r\n      this.active = false\r\n    },\r\n    show (options) {\r\n      if (options) {\r\n        if (options.text) { this.text = options.text }\r\n        if (options.size) { this.size = options.size }\r\n        if (options.fixed) { this.fixed = options.fixed }\r\n      }\r\n      // block scrolling when spinner is on\r\n      this._body.style.overflowY = 'hidden'\r\n      // activate spinner\r\n      this._started = new Date()\r\n      this.active = true\r\n      this.locked = true\r\n      this._unlock()\r\n    }\r\n  },\r\n  created () {\r\n    this._body = document.body\r\n    this._bodyOverflow = document.body.style.overflowY\r\n    this._unlock = delayer(function () {\r\n      this.locked = false\r\n      this._body.style.overflowY = this._bodyOverflow\r\n    }, MIN_WAIT)\r\n    if (this.global) {\r\n      if (!this.$root._globalSpinner) {\r\n        this.$root._globalSpinner = true\r\n        var self = this\r\n        this._global = {\r\n          hide () { self.hide() },\r\n          show () { self.show() }\r\n        }\r\n        this.$root.$on('spinner::show', this._global.show)\r\n        this.$root.$on('spinner::hide', this._global.hide)\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy () {\r\n    if (this._global) {\r\n      this.$root.$off('spinner::show', this._global.show)\r\n      this.$root.$off('spinner::hide', this._global.hide)\r\n      delete this.$root._globalSpinner\r\n    }\r\n    clearTimeout(this._spinnerAnimation)\r\n    this._body.style.overflowY = this._bodyOverflow\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n@keyframes spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\r\n}\r\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: spin 0.6s linear;\r\n  animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\r\n}\r\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\r\n}\r\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n}\r\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n}\r\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\r\n}\r\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var MIN_WAIT = 500; // in ms
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    fixed: { type: Boolean, default: false },
	    global: { type: Boolean, default: false },
	    size: { type: String, default: 'md' },
	    text: { type: String, default: '' },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      active: this.value,
	      locked: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return 'spinner-' + (this.size ? this.size : 'sm');
	    }
	  },
	  watch: {
	    active: function active(val, old) {
	      if (val !== old) this.$emit('input', val);
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this[val ? 'show' : 'hide']();
	      }
	    }
	  },
	  methods: {
	    hide: function hide() {
	      var delay = 0;
	      this.active = false;
	    },
	    show: function show(options) {
	      if (options) {
	        if (options.text) {
	          this.text = options.text;
	        }
	        if (options.size) {
	          this.size = options.size;
	        }
	        if (options.fixed) {
	          this.fixed = options.fixed;
	        }
	      }
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.locked = true;
	      this._unlock();
	    }
	  },
	  created: function created() {
	    this._body = document.body;
	    this._bodyOverflow = document.body.style.overflowY;
	    this._unlock = (0, _utils.delayer)(function () {
	      this.locked = false;
	      this._body.style.overflowY = this._bodyOverflow;
	    }, MIN_WAIT);
	    if (this.global) {
	      if (!this.$root._globalSpinner) {
	        this.$root._globalSpinner = true;
	        var self = this;
	        this._global = {
	          hide: function hide() {
	            self.hide();
	          },
	          show: function show() {
	            self.show();
	          }
	        };
	        this.$root.$on('spinner::show', this._global.show);
	        this.$root.$on('spinner::hide', this._global.hide);
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._global) {
	      this.$root.$off('spinner::show', this._global.show);
	      this.$root.$off('spinner::hide', this._global.hide);
	      delete this.$root._globalSpinner;
	    }
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.active || _vm.locked),
	      expression: "active||locked"
	    }],
	    class: ['spinner spinner-gritcode', _vm.spinnerSize, {
	      'spinner-fixed': _vm.fixed
	    }]
	  }, [_c('div', {
	    staticClass: "spinner-wrapper"
	  }, [_c('div', {
	    staticClass: "spinner-circle"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "spinner-text"
	  }, [_vm._v(_vm._s(_vm.text))])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5d5f26ec", module.exports)
	  }
	}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(116)
	
	/* template */
	var __vue_template__ = __webpack_require__(117)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3185abe8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3185abe8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      fadein: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      var _this = this;
	
	      var active = !this._tabs || this._tabs.show === this;
	      this.fadein = false;
	      if (active) {
	        setTimeout(function () {
	          _this.fadein = true;
	        }, 0);
	      }
	      return active;
	    },
	    index: function index() {
	      return this._tabs.tabs.indexOf(this);
	    },
	    transition: function transition() {
	      return this._tabs ? this._tabs.effect : null;
	    }
	  },
	  created: function created() {
	    this._isTab = true;
	    var tabs = this;
	    while (!this._tabs && tabs.$parent) {
	      if (tabs._isTabGroup) {
	        tabs.tabs.push(this);
	        this._tabGroup = tabs;
	      }
	      if (tabs._isTabs) {
	        tabs.tabs.push(this);
	        this._tabs = tabs;
	        if (!this._tabGroup) tabs.headers.push(this);
	      }
	      tabs = tabs.$parent;
	    }
	    if (!this._tabs) throw Error('tab depend on tabs.');
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    if (this._tabGroup) {
	      this._tabGroup.tabs = this._tabGroup.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      this._tabs.tabs = this._tabs.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      if (this._tabs.active === this.index) {
	        this._tabs.index = 0;
	      }
	      if (this._ingroup) {
	        var id = this.$parent.tabs.indexOf(this);
	        if (~id) this.$parent.tabs.splice(id, 1);
	      }
	    }
	    if (this._tabs) {
	      var _id = this._tabs.tabs.indexOf(this);
	      if (~_id) this._tabs.tabs.splice(_id, 1);
	    }
	  }
	};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "panel",
	    class: ['tab-pane', {
	      'active fade': _vm.active,
	      'in': _vm.fadein
	    }],
	    attrs: {
	      "role": "tabpanel"
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3185abe8", module.exports)
	  }
	}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(119)
	
	/* script */
	__vue_exports__ = __webpack_require__(121)
	
	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\TabGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1184ca27", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1184ca27", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TabGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1184ca27!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1184ca27!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content .tab-pane { display: none;\n}\n.tab-content .tab-pane.active { display: block;\n}\r\n", "", {"version":3,"sources":["/./src/TabGroup.vue?22ae1c08"],"names":[],"mappings":";AAkCA,yBAAA,cAAA;CAAA;AACA,gCAAA,eAAA;CAAA","file":"TabGroup.vue","sourcesContent":["<template><span><slot></slot></span></template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    disabled: {type: Boolean, default: false},\r\n    header: {type: String}\r\n  },\r\n  data () {\r\n    return {\r\n      show: false,\r\n      tabs: []\r\n    }\r\n  },\r\n  computed: {\r\n    active () { return ~this.tabs.indexOf(this._tabs.show) }\r\n  },\r\n  methods: {\r\n    blur () { this.show = false },\r\n    toggle () { this.show = !this.show }\r\n  },\r\n  created () {\r\n    this._isTabGroup = true\r\n    if (this.$parent) {\r\n      if (this.$parent._isTabGroup) throw Error('Can\\'t nest tab-groups.')\r\n      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.')\r\n    }\r\n    this._tabs = this.$parent\r\n    this._tabs.headers.push(this)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tab-content .tab-pane { display: none; }\r\n.tab-content .tab-pane.active { display: block; }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      show: false,
	      tabs: []
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabs.show);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  created: function created() {
	    this._isTabGroup = true;
	    if (this.$parent) {
	      if (this.$parent._isTabGroup) throw Error('Can\'t nest tab-groups.');
	      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.');
	    }
	    this._tabs = this.$parent;
	    this._tabs.headers.push(this);
	  }
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1184ca27", module.exports)
	  }
	}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(124)
	
	/* script */
	__vue_exports__ = __webpack_require__(126)
	
	/* template */
	var __vue_template__ = __webpack_require__(127)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-02db723b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-02db723b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02db723b!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02db723b!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n[tabs] > .tab-content {\r\n  margin: 15px 0;\n}\r\n", "", {"version":3,"sources":["/./src/Tabs.vue?4317b9af"],"names":[],"mappings":";AA0EA;EACA,eAAA;CACA","file":"Tabs.vue","sourcesContent":["<template>\r\n  <div tabs>\r\n    <ul :class=\"navStyleClass\" role=\"tablist\">\r\n      <template v-for=\"header in headers\">\r\n        <li v-if=\"header._isTab\" :class=\"{active:header.active, disabled:header.disabled}\" @click.prevent=\"select(header)\">\r\n          <slot name=\"header\"><a href=\"#\" v-html=\"header.header\"></a></slot>\r\n        </li>\r\n        <dropdown v-if=\"header._isTabGroup\" :text=\"header.header\" :class=\"{active:header.active}\" :disabled=\"header.disabled\">\r\n          <li v-for=\"tab in header.tabs\" :class=\"{disabled:tab.disabled}\"><a href=\"#\" @click.prevent=\"select(tab)\">{{tab.header}}</a></li>\r\n        </dropdown>\r\n      </template>\r\n    </ul>\r\n    <div class=\"tab-content\"><slot></slot></div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport dropdown from './Dropdown.vue'\r\n\r\nexport default {\r\n  components: {\r\n    dropdown\r\n  },\r\n  props: {\r\n    // effect: {type: String, default: 'fadein'},\r\n    justified: false,\r\n    navStyle: {type: String, default: null},\r\n    value: {type: Number, default: 0}\r\n  },\r\n  data () {\r\n    var index = this.value || 0\r\n    return {\r\n      index,\r\n      headers: [],\r\n      tabs: []\r\n    }\r\n  },\r\n  watch: {\r\n    index (val) {\r\n      this.$emit('active', val)\r\n      this.$emit('input', val)\r\n    },\r\n    value (val) {\r\n      this.index = val\r\n    }\r\n  },\r\n  computed: {\r\n    navStyleClass () {\r\n      return [\r\n        'nav',\r\n        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',\r\n        {\r\n          'nav-justified': coerce.boolean(this.justified),\r\n          'nav-pills': this.navStyle === 'stacked'\r\n        }\r\n      ]\r\n    },\r\n    show () { return this.tabs[this.index] || this.tabs[0] }\r\n  },\r\n  methods: {\r\n    select (tab) {\r\n      if (!tab.disabled) {\r\n        this.index = this.tabs.indexOf(tab)\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    this._isTabs = true\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n[tabs] > .tab-content {\r\n  margin: 15px 0;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _Dropdown = __webpack_require__(81);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    // effect: {type: String, default: 'fadein'},
	    justified: false,
	    navStyle: { type: String, default: null },
	    value: { type: Number, default: 0 }
	  },
	  data: function data() {
	    var index = this.value || 0;
	    return {
	      index: index,
	      headers: [],
	      tabs: []
	    };
	  },
	
	  watch: {
	    index: function index(val) {
	      this.$emit('active', val);
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.index = val;
	    }
	  },
	  computed: {
	    navStyleClass: function navStyleClass() {
	      return ['nav', ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs', {
	        'nav-justified': _utils.coerce.boolean(this.justified),
	        'nav-pills': this.navStyle === 'stacked'
	      }];
	    },
	    show: function show() {
	      return this.tabs[this.index] || this.tabs[0];
	    }
	  },
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.index = this.tabs.indexOf(tab);
	      }
	    }
	  },
	  created: function created() {
	    this._isTabs = true;
	  }
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "tabs": ""
	    }
	  }, [_c('ul', {
	    class: _vm.navStyleClass,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.headers), function(header) {
	    return [(header._isTab) ? _c('li', {
	      class: {
	        active: header.active, disabled: header.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.select(header)
	        }
	      }
	    }, [_vm._t("header", [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      domProps: {
	        "innerHTML": _vm._s(header.header)
	      }
	    })])], 2) : _vm._e(), _vm._v(" "), (header._isTabGroup) ? _c('dropdown', {
	      class: {
	        active: header.active
	      },
	      attrs: {
	        "text": header.header,
	        "disabled": header.disabled
	      }
	    }, _vm._l((header.tabs), function(tab) {
	      return _c('li', {
	        class: {
	          disabled: tab.disabled
	        }
	      }, [_c('a', {
	        attrs: {
	          "href": "#"
	        },
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            _vm.select(tab)
	          }
	        }
	      }, [_vm._v(_vm._s(tab.header))])])
	    })) : _vm._e()]
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "tab-content"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-02db723b", module.exports)
	  }
	}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(129)
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(132)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28218054", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-28218054", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-28218054!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-28218054!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9;\n}\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\r\n    opacity: 0;\n}\n100% {\r\n    opacity: .9;\n}\n}\n@keyframes fadein-out {\n0% {\r\n    opacity: .9;\n}\n100% {\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Tooltip.vue?37d183ec"],"names":[],"mappings":";AA2BA;;;;EAIA,YAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,WAAA;CACA;AACA;IACA,YAAA;CACA;CACA;AACA;AACA;IACA,YAAA;CACA;AACA;IACA,WAAA;CACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <transition :name=\"effect\">\r\n      <div ref=\"popover\" v-if=\"show\" :class=\"['tooltip',placement]\">\r\n        <div class=\"tooltip-arrow\"></div>\r\n        <div class=\"tooltip-inner\">\r\n          <slot name=\"content\"><div v-html=\"content\"></div></slot>\r\n        </div>\r\n      </div>\r\n    </transition>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './utils/popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    effect: {type: String, default: 'scale'},\r\n    trigger: {type: String, default: 'hover'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9;\r\n}\r\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(105);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    effect: { type: String, default: 'scale' },
	    trigger: { type: String, default: 'hover' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['tooltip', _vm.placement]
	  }, [_c('div', {
	    staticClass: "tooltip-arrow"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "tooltip-inner"
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28218054", module.exports)
	  }
	}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(134)
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(151)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "T:\\r\\vendor\\vue-strap\\src\\Typeahead.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-effd744c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-effd744c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(73)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-effd744c!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-effd744c!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(72)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\r\n  cursor: pointer;\n}\r\n", "", {"version":3,"sources":["/./src/Typeahead.vue?6e314329"],"names":[],"mappings":";AAwJA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\r\n  <div style=\"position: relative\" :class=\"{open:showDropdown}\">\r\n    <input class=\"form-control\" autocomplete=\"off\"\r\n      :value=\"val\" @input=\"changed($event)\"\r\n      :placeholder=\"placeholder\"\r\n      :type.once=\"type\"\r\n      :disabled=\"disabled\"\r\n      @blur=\"blur\"\r\n      @focus=\"focus\"\r\n      @keydown.down.prevent=\"down\"\r\n      @keydown.enter=\"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @keydown.up.prevent=\"up\"\r\n    />\r\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\r\n      <li v-for=\"(item, i) in items\" :class=\"{active: isActive(i)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(i)\">\r\n          <component :is=\"templateComp\" :item=\"item\"></component>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {delayer} from './utils/utils.js'\r\nvar DELAY = 300\r\n\r\nexport default {\r\n  props: {\r\n    async: {type: Function, default:null},\r\n    disabled: {type:Boolean, default:false},\r\n    data: {type: Array},\r\n    delay: {type: Number, default: DELAY},\r\n    asyncKey: {type: String, default: null},\r\n    limit: {type: Number, default: 64},\r\n    matchCase: {type: Boolean, default: false},\r\n    matchStart: {type: Boolean, default: false},\r\n    openMinLength: {type:Number, default:0},\r\n    onHit: {\r\n      type: Function,\r\n      default (item) { return item }\r\n    },\r\n    asyncFilter: {\r\n      type: Function,\r\n      default (item) { return true }\r\n    },\r\n    placeholder: {type: String},\r\n    template: {type: String},\r\n    type: {type: String, default: 'text'},\r\n    value: {type: String, default: ''}\r\n  },\r\n  data () {\r\n    return {\r\n      showDropdown: false,\r\n      fInteracted:false,\r\n      fChanged:false,\r\n      current: 0,\r\n      items: [],\r\n      val: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    templateComp () {\r\n      return {\r\n        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html=\"item\"></strong>',\r\n        props: { item: {default: null} }\r\n      }\r\n    }\r\n  },\r\n  watch: {\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  methods: {\r\n    check4Updates (val) {\r\n       if (this.openMinLength<=String(val||\"\").length) {\r\n        this.__update();\r\n      }\r\n    },\r\n    changed (ev) {\r\n      this.fChanged = true;\r\n      var val = ev.target.value;\r\n      this.$emit('input', val);\r\n      this.check4Updates(val);\r\n    },\r\n    focus (ev) {\r\n      this.fInteracted = true;\r\n      if (!this.value) {\r\n        this.check4Updates(this.val);\r\n      }\r\n      this.$emit('focus', this);\r\n    },\r\n    blur (ev) {\r\n      this.showDropdown = false;\r\n      if (this.fInteracted&&this.fChanged) {\r\n        this.$emit('blur', this);\r\n      }\r\n    },\r\n    setItems (data) {\r\n      if (this.async) {\r\n        this.items = (this.asyncKey ? data[this.asyncKey] : data).filter(this.asyncFilter).slice(0, this.limit);\r\n      } else {\r\n        this.items = (data || []).filter(value => {\r\n          if (typeof value === 'object') { return true }\r\n          value = this.matchCase ? value : value.toLowerCase()\r\n          var query = this.matchCase ? this.val : this.val.toLowerCase()\r\n          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1\r\n        }).slice(0, this.limit)\r\n      }\r\n      this.showDropdown = true;//this.items.length > 0\r\n    },\r\n    setValue (value) {\r\n      this.val = value\r\n      //this.items = []\r\n      this.loading = false\r\n      this.showDropdown = false\r\n    },\r\n    reset () { this.setValue(null) },\r\n    setActive (index) { this.current = index },\r\n    isActive (index) { return this.current === index },\r\n    hit (e) {\r\n      e.preventDefault()\r\n      this.setValue(this.onHit(this.items[this.current], this))\r\n    },\r\n    up () {\r\n      if (this.current > 0) { this.current-- }\r\n      else { this.current = this.items.length - 1 }\r\n    },\r\n    down () {\r\n      if (this.current < this.items.length - 1) { this.current++ }\r\n      else { this.current = 0 }\r\n    }\r\n  },\r\n  created () {\r\n    \r\n    this.__update = delayer(function () {\r\n      if (this.async) {\r\n        this.async(this.val||\"\").then(data => {\r\n          this.setItems(data)\r\n        });\r\n      } else if (this.data) {\r\n        this.setItems(this.data)\r\n      }\r\n    }, 'delay', DELAY);\r\n    \r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(137);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DELAY = 300; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    async: { type: Function, default: null },
	    disabled: { type: Boolean, default: false },
	    data: { type: Array },
	    delay: { type: Number, default: DELAY },
	    asyncKey: { type: String, default: null },
	    limit: { type: Number, default: 64 },
	    matchCase: { type: Boolean, default: false },
	    matchStart: { type: Boolean, default: false },
	    openMinLength: { type: Number, default: 0 },
	    onHit: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    asyncFilter: {
	      type: Function,
	      default: function _default(item) {
	        return true;
	      }
	    },
	    placeholder: { type: String },
	    template: { type: String },
	    type: { type: String, default: 'text' },
	    value: { type: String, default: '' }
	  },
	  data: function data() {
	    return {
	      showDropdown: false,
	      fInteracted: false,
	      fChanged: false,
	      current: 0,
	      items: [],
	      val: this.value
	    };
	  },
	
	  computed: {
	    templateComp: function templateComp() {
	      return {
	        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html="item"></strong>',
	        props: { item: { default: null } }
	      };
	    }
	  },
	  watch: {
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    check4Updates: function check4Updates(val) {
	      if (this.openMinLength <= String(val || "").length) {
	        this.__update();
	      }
	    },
	    changed: function changed(ev) {
	      this.fChanged = true;
	      var val = ev.target.value;
	      this.$emit('input', val);
	      this.check4Updates(val);
	    },
	    focus: function focus(ev) {
	      this.fInteracted = true;
	      if (!this.value) {
	        this.check4Updates(this.val);
	      }
	      this.$emit('focus', this);
	    },
	    blur: function blur(ev) {
	      this.showDropdown = false;
	      if (this.fInteracted && this.fChanged) {
	        this.$emit('blur', this);
	      }
	    },
	    setItems: function setItems(data) {
	      var _this = this;
	
	      if (this.async) {
	        this.items = (this.asyncKey ? data[this.asyncKey] : data).filter(this.asyncFilter).slice(0, this.limit);
	      } else {
	        this.items = (data || []).filter(function (value) {
	          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	            return true;
	          }
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.val : _this.val.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	      this.showDropdown = true; //this.items.length > 0
	    },
	    setValue: function setValue(value) {
	      this.val = value;
	      //this.items = []
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    reset: function reset() {
	      this.setValue(null);
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.setValue(this.onHit(this.items[this.current], this));
	    },
	    up: function up() {
	      if (this.current > 0) {
	        this.current--;
	      } else {
	        this.current = this.items.length - 1;
	      }
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) {
	        this.current++;
	      } else {
	        this.current = 0;
	      }
	    }
	  },
	  created: function created() {
	
	    this.__update = (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      if (this.async) {
	        this.async(this.val || "").then(function (data) {
	          _this2.setItems(data);
	        });
	      } else if (this.data) {
	        this.setItems(this.data);
	      }
	    }, 'delay', DELAY);
	  }
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(138);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(140);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(6);
	var has = __webpack_require__(29);
	var DESCRIPTORS = __webpack_require__(15);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(28);
	var META = __webpack_require__(141).KEY;
	var $fails = __webpack_require__(16);
	var shared = __webpack_require__(43);
	var setToStringTag = __webpack_require__(47);
	var uid = __webpack_require__(44);
	var wks = __webpack_require__(48);
	var wksExt = __webpack_require__(55);
	var wksDefine = __webpack_require__(142);
	var enumKeys = __webpack_require__(143);
	var isArray = __webpack_require__(146);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var toIObject = __webpack_require__(36);
	var toPrimitive = __webpack_require__(18);
	var createDesc = __webpack_require__(19);
	var _create = __webpack_require__(32);
	var gOPNExt = __webpack_require__(60);
	var $GOPD = __webpack_require__(147);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(34);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(145).f = $propertyIsEnumerable;
	  __webpack_require__(144).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(27)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(44)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(29);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var LIBRARY = __webpack_require__(27);
	var wksExt = __webpack_require__(55);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34);
	var gOPS = __webpack_require__(144);
	var pIE = __webpack_require__(145);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(145);
	var createDesc = __webpack_require__(19);
	var toIObject = __webpack_require__(36);
	var toPrimitive = __webpack_require__(18);
	var has = __webpack_require__(29);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(142)('asyncIterator');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(142)('observable');


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      open: _vm.showDropdown
	    },
	    staticStyle: {
	      "position": "relative"
	    }
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "autocomplete": "off",
	      "placeholder": _vm.placeholder,
	      "type": _vm.type,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val
	    },
	    on: {
	      "input": function($event) {
	        _vm.changed($event)
	      },
	      "blur": _vm.blur,
	      "focus": _vm.focus,
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) { return null; }
	        $event.preventDefault();
	        _vm.down($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.hit($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) { return null; }
	        _vm.reset($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) { return null; }
	        $event.preventDefault();
	        _vm.up($event)
	      }]
	    }
	  }), _vm._v(" "), _c('ul', {
	    ref: "dropdown",
	    staticClass: "dropdown-menu"
	  }, _vm._l((_vm.items), function(item, i) {
	    return _c('li', {
	      class: {
	        active: _vm.isActive(i)
	      }
	    }, [_c('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.hit($event)
	        },
	        "mousemove": function($event) {
	          _vm.setActive(i)
	        }
	      }
	    }, [_c(_vm.templateComp, {
	      tag: "component",
	      attrs: {
	        "item": item
	      }
	    })], 1)])
	  }))])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-effd744c", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-strap.js.map