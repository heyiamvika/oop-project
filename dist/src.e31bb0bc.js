// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/MenuSection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSection = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// приватні поля
var _title = new WeakMap();

var _description = new WeakMap();

var _image = new WeakMap();

var _dishes = new WeakMap();

var MenuSection = /*#__PURE__*/function () {
  function MenuSection(title, description, image, dishes) {
    _classCallCheck(this, MenuSection);

    _title.set(this, title);

    _description.set(this, description);

    _image.set(this, image);

    _dishes.set(this, dishes);
  }

  _createClass(MenuSection, [{
    key: "title",
    get: function get() {
      return _title.get(this);
    }
  }, {
    key: "description",
    get: function get() {
      return _description.get(this);
    }
  }, {
    key: "image",
    get: function get() {
      return _image.get(this);
    }
  }, {
    key: "dishes",
    get: function get() {
      return _dishes.get(this);
    }
  }]);

  return MenuSection;
}();

exports.MenuSection = MenuSection;
},{}],"classes/Dish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dish = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// клас Dish є абстрактним
// приватні поля
var _title = new WeakMap();

var _image = new WeakMap();

var _price = new WeakMap();

var _rate = new WeakMap();

var Dish = /*#__PURE__*/function () {
  function Dish(title, image, price, rate) {
    _classCallCheck(this, Dish);

    if (this.constructor === Dish) {
      throw new TypeError('Abstract class "Dish" cannot be instantiated directly.');
    }

    _title.set(this, title);

    _image.set(this, image);

    _price.set(this, price);

    _rate.set(this, rate);
  }

  _createClass(Dish, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {}
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {}
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {}
  }, {
    key: "title",
    get: function get() {
      return _title.get(this);
    }
  }, {
    key: "image",
    get: function get() {
      return _image.get(this);
    }
  }, {
    key: "price",
    get: function get() {
      return _price.get(this);
    }
  }, {
    key: "rate",
    get: function get() {
      return _rate.get(this);
    }
  }]);

  return Dish;
}();

exports.Dish = Dish;
},{}],"images/close.svg":[function(require,module,exports) {
module.exports = "/close.4440cd52.svg";
},{}],"classes/Drink.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drink = void 0;

var _Dish2 = require("./Dish");

var _close = _interopRequireDefault(require("../images/close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Drink = /*#__PURE__*/function (_Dish) {
  _inherits(Drink, _Dish);

  var _super = _createSuper(Drink);

  function Drink(title, image, price, rate) {
    _classCallCheck(this, Drink);

    return _super.call(this, title, image, price, rate);
  }

  _createClass(Drink, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {
      _get(_getPrototypeOf(Drink.prototype), "getPreviewHTML", this).call(this);

      return "\n            <div class=\"dish-preview drink-preview\">\n                <img src=".concat(this.image, " />\n                <div class=\"dish-preview-content\">\n                    <div class=\"dish-preview-content-title\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"dish-preview-price\">$").concat(this.price, "</p>\n                    </div>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {
      _get(_getPrototypeOf(Drink.prototype), "getLayoutHTML", this).call(this);

      return "\n            <div class=\"dish-layout\">\n                <h3 class=\"title\">".concat(this.title, "</h3>\n                <p class=\"rate\">Rate: ").concat(this.rate, "</p>\n                <div class=\"buy-section\">\n                    <div class=\"buy-price\">\n                        <span class=\"price-title\">Price</span>\n                        <span class=\"price\">$").concat(this.price, "</span>\n                    </div>\n                    <button class=\"add-to-cart-btn green-btn\">Add to Cart</button>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {
      _get(_getPrototypeOf(Drink.prototype), "getCartHTML", this).call(this);

      return "\n            <div class=\"dish-cart-view snack-cart-view\">\n                <img src=".concat(this.image, " />\n                <div class=\"content\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"price\">$").concat(this.price, "</p>\n                </div>\n                <div class=\"delete-from-cart-btn\"><img src=").concat(_close.default, " /></div>\n            </div>\n        ");
    }
  }]);

  return Drink;
}(_Dish2.Dish);

exports.Drink = Drink;
},{"./Dish":"classes/Dish.js","../images/close.svg":"images/close.svg"}],"classes/Snack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snack = void 0;

var _Dish2 = require("./Dish");

var _close = _interopRequireDefault(require("../images/close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// приватні поля
var _description = new WeakMap();

var Snack = /*#__PURE__*/function (_Dish) {
  _inherits(Snack, _Dish);

  var _super = _createSuper(Snack);

  function Snack(title, image, price, rate, description) {
    var _this;

    _classCallCheck(this, Snack);

    _this = _super.call(this, title, image, price, rate);

    _description.set(_assertThisInitialized(_this), description);

    return _this;
  }

  _createClass(Snack, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {
      _get(_getPrototypeOf(Snack.prototype), "getPreviewHTML", this).call(this);

      return "\n            <div class=\"dish-preview snack-preview\">\n                <img src=".concat(this.image, " />\n                <div class=\"dish-preview-content\">\n                    <div class=\"dish-preview-content-title\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"dish-preview-price\">Price: ").concat(this.price, "</p>\n                    </div>\n                    <p class=\"dish-preview-description\">").concat(this.description, "</p>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {
      _get(_getPrototypeOf(Snack.prototype), "getLayoutHTML", this).call(this);

      return "\n            <div class=\"dish-layout\">\n                <h3 class=\"title\">".concat(this.title, "</h3>\n                <p class=\"rate\">Rate: ").concat(this.rate, "</p>\n                <div class=\"description-section\">\n                    <span class=\"title\">Description</span>\n                    <p class=\"description\">").concat(this.description, "</p>\n                </div>\n                <div class=\"buy-section\">\n                    <div class=\"buy-price\">\n                        <span class=\"price-title\">Price</span>\n                        <span class=\"price\">$").concat(this.price, "</span>\n                    </div>\n                    <button class=\"add-to-cart-btn green-btn\">Add to Cart</button>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {
      _get(_getPrototypeOf(Snack.prototype), "getCartHTML", this).call(this);

      return "\n            <div class=\"dish-cart-view snack-cart-view\">\n                <img src=".concat(this.image, " />\n                <div class=\"content\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"description\">").concat(this.description, "</p>\n                        <p class=\"price\">$").concat(this.price, "</p>\n                </div>\n                <div class=\"delete-from-cart-btn\"><img src=").concat(_close.default, " /></div>\n            </div>\n        ");
    }
  }, {
    key: "description",
    get: function get() {
      return _description.get(this);
    }
  }]);

  return Snack;
}(_Dish2.Dish);

exports.Snack = Snack;
},{"./Dish":"classes/Dish.js","../images/close.svg":"images/close.svg"}],"classes/Meal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meal = void 0;

var _Dish2 = require("./Dish");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Meal = /*#__PURE__*/function (_Dish) {
  _inherits(Meal, _Dish);

  var _super = _createSuper(Meal);

  function Meal(title, image, price, rate) {
    var _this;

    _classCallCheck(this, Meal);

    _this = _super.call(this, title, image, price, rate);

    if (_this.constructor === Meal) {
      throw new TypeError('Abstract class "Meal" cannot be instantiated directly.');
    }

    return _this;
  }

  _createClass(Meal, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {
      _get(_getPrototypeOf(Meal.prototype), "getPreviewHTML", this).call(this);
    }
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {
      _get(_getPrototypeOf(Meal.prototype), "getLayoutHTML", this).call(this);
    }
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {
      _get(_getPrototypeOf(Meal.prototype), "getCartHTML", this).call(this);
    }
  }]);

  return Meal;
}(_Dish2.Dish);

exports.Meal = Meal;
},{"./Dish":"classes/Dish.js"}],"classes/Breakfast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breakfast = void 0;

var _Meal2 = require("./Meal");

var _close = _interopRequireDefault(require("../images/close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// приватні поля
var _description = new WeakMap();

var _options = new WeakMap();

var Breakfast = /*#__PURE__*/function (_Meal) {
  _inherits(Breakfast, _Meal);

  var _super = _createSuper(Breakfast);

  function Breakfast(title, image, price, rate, description) {
    var _this;

    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

    _classCallCheck(this, Breakfast);

    _this = _super.call(this, title, image, price, rate);

    _description.set(_assertThisInitialized(_this), description);

    _options.set(_assertThisInitialized(_this), options);

    return _this;
  }

  _createClass(Breakfast, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {
      _get(_getPrototypeOf(Breakfast.prototype), "getPreviewHTML", this).call(this);

      return "\n            <div class=\"dish-preview breakfast-preview\">\n                <img src=".concat(this.image, " />\n                <div class=\"dish-preview-content\">   \n                    <div class=\"dish-preview-content-title\">\n                        <h3>").concat(this.title, " +Options!</h3>\n                        <p class=\"dish-preview-price\">$").concat(this.price, "</p>\n                    </div>\n                    <p class=\"dish-preview-description\">").concat(this.description, "</p>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {
      _get(_getPrototypeOf(Breakfast.prototype), "getLayoutHTML", this).call(this);

      var options = this.options.map(function (option) {
        return "\n                <div class=\"checkbox-option\">\n                    <input type=\"checkbox\" id=".concat(option, " name=").concat(option, " value=").concat(option, ">\n                    <label for=").concat(option, ">").concat(option, "</label>\n                </div>\n            ");
      }).join("");
      return "\n        <div class=\"dish-layout\">\n            <h3 class=\"title\">".concat(this.title, "</h3>\n            <p class=\"rate\">Rate: ").concat(this.rate, "</p>\n            <div class=\"option-checkbox-section\">\n                <span class=\"title\">Choose additions: </span>\n                ").concat(options, "\n            </div>\n            <div class=\"buy-section\">\n                <div class=\"buy-price\">\n                    <span class=\"price-title\">Price</span>\n                    <span class=\"price\">$").concat(this.price, "</span>\n                </div>\n                <button class=\"add-to-cart-btn green-btn\">Add to Cart</button>\n            </div>\n        </div>\n    ");
    }
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {
      _get(_getPrototypeOf(Breakfast.prototype), "getCartHTML", this).call(this);

      return "\n            <div class=\"dish-cart-view snack-cart-view\">\n                <img src=".concat(this.image, " />\n                <div class=\"content\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"description\">").concat(this.description, "</p>\n                        <p class=\"options\">\n                            You added: \n                        </p>\n                        <p class=\"price\">$").concat(this.price, "</p>\n                </div>\n                <div class=\"delete-from-cart-btn\"><img src=").concat(_close.default, " /></div>\n            </div>\n        ");
    }
  }, {
    key: "description",
    get: function get() {
      return _description.get(this);
    }
  }, {
    key: "options",
    get: function get() {
      return _options.get(this);
    }
  }]);

  return Breakfast;
}(_Meal2.Meal);

exports.Breakfast = Breakfast;
},{"./Meal":"classes/Meal.js","../images/close.svg":"images/close.svg"}],"classes/Lunch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lunch = void 0;

var _Meal2 = require("./Meal");

var _close = _interopRequireDefault(require("../images/close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// приватні поля
var _description = new WeakMap();

var _options = new WeakMap();

var _chosenOption = new WeakMap();

var Lunch = /*#__PURE__*/function (_Meal) {
  _inherits(Lunch, _Meal);

  var _super = _createSuper(Lunch);

  function Lunch(title, image, price, rate, description, options) {
    var _this;

    _classCallCheck(this, Lunch);

    _this = _super.call(this, title, image, price, rate);

    _description.set(_assertThisInitialized(_this), description);

    _options.set(_assertThisInitialized(_this), options);

    _chosenOption.set(_assertThisInitialized(_this), options[0]);

    return _this;
  }

  _createClass(Lunch, [{
    key: "getPreviewHTML",
    value: function getPreviewHTML() {
      _get(_getPrototypeOf(Lunch.prototype), "getPreviewHTML", this).call(this);

      _get(_getPrototypeOf(Lunch.prototype), "getPreviewHTML", this).call(this);

      return "\n            <div class=\"dish-preview lunch-preview\">\n                <img src=".concat(this.image, " />\n                <div class=\"dish-preview-content\">   \n                    <div class=\"dish-preview-content-title\">\n                        <h3>").concat(this.title, " +Options!</h3>\n                        <p class=\"dish-preview-price\">$").concat(this.price, "</p>\n                    </div>\n                    <p class=\"dish-preview-description\">").concat(this.description, "</p>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getLayoutHTML",
    value: function getLayoutHTML() {
      _get(_getPrototypeOf(Lunch.prototype), "getLayoutHTML", this).call(this);

      var lunchTypes = this.options.map(function (option) {
        return "<input type=\"radio\" id=".concat(option, " name=\"lunch-option\" value=").concat(option, ">\n            <label for=").concat(option, ">").concat(option, "</label><br>");
      }).join("");
      return "\n            <div class=\"dish-layout\">\n                <h3 class=\"title\">".concat(this.title, "</h3>\n                <p class=\"rate\">Rate: ").concat(this.rate, "</p>\n                <div class=\"option-radio-section\">\n                    <span class=\"title\">Choose lunch type: </span>\n                    <div class=\"lunch-types\">\n                        ").concat(lunchTypes, "\n                    </div>\n                </div>\n                <div class=\"buy-section\">\n                    <div class=\"buy-price\">\n                        <span class=\"price-title\">Price</span>\n                        <span class=\"price\">$").concat(this.price, "</span>\n                    </div>\n                    <button class=\"add-to-cart-btn green-btn\">Add to Cart</button>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "getCartHTML",
    value: function getCartHTML() {
      _get(_getPrototypeOf(Lunch.prototype), "getCartHTML", this).call(this);

      return "\n            <div class=\"dish-cart-view snack-cart-view\">\n                <img src=".concat(this.image, " />\n                <div class=\"content\">\n                        <h3>").concat(this.title, "</h3>\n                        <p class=\"description\">").concat(this.description, "</p>\n                        <p class=\"options\">\n                            Your chosen lunch-type is: \n                        </p>\n                        <p class=\"price\">$").concat(this.price, "</p>\n                </div>\n                <div class=\"delete-from-cart-btn\"><img src=").concat(_close.default, " /></div>\n            </div>\n        ");
    }
  }, {
    key: "description",
    get: function get() {
      return _description.get(this);
    }
  }, {
    key: "options",
    get: function get() {
      return _options.get(this);
    }
  }, {
    key: "chosenOption",
    get: function get() {
      return _chosenOption.get(this);
    }
  }]);

  return Lunch;
}(_Meal2.Meal);

exports.Lunch = Lunch;
},{"./Meal":"classes/Meal.js","../images/close.svg":"images/close.svg"}],"images/content/_menu_section_page_coffee.jpeg":[function(require,module,exports) {
module.exports = "/_menu_section_page_coffee.03ca804d.jpeg";
},{}],"images/content/_menu_section_page_breakfast.jpg":[function(require,module,exports) {
module.exports = "/_menu_section_page_breakfast.402a949b.jpg";
},{}],"images/content/_menu_section_page_lunch.jpg":[function(require,module,exports) {
module.exports = "/_menu_section_page_lunch.47b8fab2.jpg";
},{}],"images/content/_menu_section_page_drinks.jpg":[function(require,module,exports) {
module.exports = "/_menu_section_page_drinks.7db62001.jpg";
},{}],"images/content/_menu_section_page_munchies.jpg":[function(require,module,exports) {
module.exports = "/_menu_section_page_munchies.a8ff17ff.jpg";
},{}],"images/content/_menu_section_page_fries.jpg":[function(require,module,exports) {
module.exports = "/_menu_section_page_fries.1b5e6231.jpg";
},{}],"classes/Menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _MenuSection = require("./MenuSection");

var _Drink = require("./Drink");

var _Snack = require("./Snack");

var _Breakfast = require("./Breakfast");

var _Lunch = require("./Lunch");

var _menu_section_page_coffee = _interopRequireDefault(require("../images/content/_menu_section_page_coffee.jpeg"));

var _menu_section_page_breakfast = _interopRequireDefault(require("../images/content/_menu_section_page_breakfast.jpg"));

var _menu_section_page_lunch = _interopRequireDefault(require("../images/content/_menu_section_page_lunch.jpg"));

var _menu_section_page_drinks = _interopRequireDefault(require("../images/content/_menu_section_page_drinks.jpg"));

var _menu_section_page_munchies = _interopRequireDefault(require("../images/content/_menu_section_page_munchies.jpg"));

var _menu_section_page_fries = _interopRequireDefault(require("../images/content/_menu_section_page_fries.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// приватні поля
var _sections = new WeakMap();

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    _sections.set(this, this.createMenu());
  }

  _createClass(Menu, [{
    key: "createMenu",
    value: function createMenu() {
      return [new _MenuSection.MenuSection('Coffee', 'Freshly brewed coffee', _menu_section_page_coffee.default, [new _Drink.Drink('Espresso', _menu_section_page_coffee.default, 2.99, 5.0), new _Drink.Drink('Latte', _menu_section_page_coffee.default, 3.75, 4.25), new _Drink.Drink('Cappucino', _menu_section_page_coffee.default, 2.09, 5.75)]), new _MenuSection.MenuSection('Breakfast', 'Hearty, hot & Fresh', _menu_section_page_breakfast.default, [new _Breakfast.Breakfast('Ukrainian breakfast', _menu_section_page_breakfast.default, 2.99, 5.0, 'Tasty Ukrainian breakfast', ['Salad', 'Syrnyky']), new _Breakfast.Breakfast('American breakfast', _menu_section_page_breakfast.default, 3.75, 4.25, 'Tasty American breakfast', ['Salad', 'Orange juice']), new _Breakfast.Breakfast('French breakfast', _menu_section_page_breakfast.default, 2.09, 5.75, 'Tasty French breakfast', ['Croissant', 'Creme frappe'])]), new _MenuSection.MenuSection('Munchies', 'Perfectly Baked Goodies', _menu_section_page_munchies.default, [new _Snack.Snack('Cookie', _menu_section_page_munchies.default, 2.99, 5.0, "Ingridients: flour, sugar, eggs, milk"), new _Snack.Snack('Pastry', _menu_section_page_munchies.default, 3.75, 4.25, "Ingridients: flour, sugar, eggs"), new _Snack.Snack('Cake', _menu_section_page_munchies.default, 2.09, 5.75, "Ingridients: creme, flour, sugar, eggs")]), new _MenuSection.MenuSection('Lunch', 'Hearty, hot & Fresh', _menu_section_page_lunch.default, [new _Lunch.Lunch('Ukrainian lunch', _menu_section_page_lunch.default, 2.99, 5.0, 'Tasty Ukrainian lunch', ['Vegan', 'Healthy']), new _Lunch.Lunch('American lunch', _menu_section_page_lunch.default, 3.75, 4.25, 'Tasty American breakfast', ['Diary free', 'Oil free']), new _Lunch.Lunch('French lunch', _menu_section_page_lunch.default, 2.09, 5.75, 'Tasty French breakfast', ['Vegetarian', 'Gluten free', 'Sugar free'])]), new _MenuSection.MenuSection('Fries', 'Fresh & Crispy', _menu_section_page_fries.default, [new _Snack.Snack('Fish and Chips', _menu_section_page_fries.default, 2.99, 5.0, "Ingridients: potaoes, oil, fish"), new _Snack.Snack('French Fries', _menu_section_page_fries.default, 3.75, 4.25, "Ingridients: salt, oil, potatoes"), new _Snack.Snack('Sweet potato fries', _menu_section_page_fries.default, 2.09, 5.75, "Ingridients: sweet potatoes, paprika, salt")]), new _MenuSection.MenuSection('Drinks', 'Healthy & Fresh', _menu_section_page_drinks.default, [new _Drink.Drink('Cola', _menu_section_page_drinks.default, 2.99, 5.0), new _Drink.Drink('Sprite', _menu_section_page_drinks.default, 3.75, 4.25)])];
    }
  }, {
    key: "sections",
    get: function get() {
      return _sections.get(this).map(function (section) {
        return {
          title: section.title,
          description: section.description,
          image: section.image,
          dishes: section.dishes
        };
      });
    }
  }]);

  return Menu;
}();

exports.Menu = Menu;
},{"./MenuSection":"classes/MenuSection.js","./Drink":"classes/Drink.js","./Snack":"classes/Snack.js","./Breakfast":"classes/Breakfast.js","./Lunch":"classes/Lunch.js","../images/content/_menu_section_page_coffee.jpeg":"images/content/_menu_section_page_coffee.jpeg","../images/content/_menu_section_page_breakfast.jpg":"images/content/_menu_section_page_breakfast.jpg","../images/content/_menu_section_page_lunch.jpg":"images/content/_menu_section_page_lunch.jpg","../images/content/_menu_section_page_drinks.jpg":"images/content/_menu_section_page_drinks.jpg","../images/content/_menu_section_page_munchies.jpg":"images/content/_menu_section_page_munchies.jpg","../images/content/_menu_section_page_fries.jpg":"images/content/_menu_section_page_fries.jpg"}],"images/content/user.jpg":[function(require,module,exports) {
module.exports = "/user.bb9ab2cc.jpg";
},{}],"classes/User.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _user = _interopRequireDefault(require("../images/content/user.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// приватні поля
var _favorites = new WeakMap();

var User = /*#__PURE__*/function () {
  function User(name, title, photo, info) {
    _classCallCheck(this, User);

    this._userName = name;
    this._title = title;
    this._photo = photo;
    this._info = info; // приватне поле для збереження улюблених страв

    _favorites.set(this, []);
  }

  _createClass(User, [{
    key: "addFavorite",
    value: function addFavorite(dish) {
      this.favorites.push(dish);
    }
  }, {
    key: "removeFavorite",
    value: function removeFavorite(dish) {
      var newFavorites = this.favorites.filter(function (item) {
        return item.title !== dish.title;
      });

      _favorites.set(this, newFavorites);
    }
  }, {
    key: "userName",
    get: function get() {
      return this._userName;
    },
    set: function set(name) {
      if (name.length <= 1) throw new Error("Name is too short");
      this._userName = name;
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(title) {
      if (title.length <= 1) throw new Error("Title is too short");
      this._title = title;
    }
  }, {
    key: "photo",
    get: function get() {
      return this._photo;
    },
    set: function set(src) {
      this._photo = src;
    }
  }, {
    key: "info",
    get: function get() {
      return this._info;
    },
    set: function set(info) {
      this._info = info;
    }
  }, {
    key: "favorites",
    get: function get() {
      return _favorites.get(this);
    }
  }]);

  return User;
}(); // в реальному додатку дані про користувачів беруться з бази даних


var user = new User('Vika', 'Software Engineer', _user.default, 'Lorem ipsum, or lipsum as it is sometimes known,is dummy text used in laying out print graphicor web designs. The passage is attributed to anunknown typesetter in the 15th century who is thought to have scrambled parts of.');
exports.user = user;
},{"../images/content/user.jpg":"images/content/user.jpg"}],"images/home.svg":[function(require,module,exports) {
module.exports = "/home.941c208c.svg";
},{}],"images/heart-active.svg":[function(require,module,exports) {
module.exports = "/heart-active.06871db5.svg";
},{}],"images/cart.svg":[function(require,module,exports) {
module.exports = "/cart.b7d88fbb.svg";
},{}],"images/user.svg":[function(require,module,exports) {
module.exports = "/user.d066ec8b.svg";
},{}],"pages/FavoritesPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoritesPage = void 0;

var _User = require("../classes/User");

var _MenuPage = require("./MenuPage");

var _CartPage = require("./CartPage");

var _UserPage = require("./UserPage");

var _DishPage = require("./DishPage");

var _home = _interopRequireDefault(require("../images/home.svg"));

var _heartActive = _interopRequireDefault(require("../images/heart-active.svg"));

var _cart = _interopRequireDefault(require("../images/cart.svg"));

var _user = _interopRequireDefault(require("../images/user.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FavoritesPage = /*#__PURE__*/function () {
  function FavoritesPage() {
    _classCallCheck(this, FavoritesPage);
  }

  _createClass(FavoritesPage, null, [{
    key: "render",
    value: function render() {
      var favoritesHTML = _User.user.favorites.map(function (favItem) {
        return "\n                <div class=\"small-card menu-section\">\n                    <img src=".concat(favItem.image, " />\n                    <h3>").concat(favItem.title, "</h3>\n                    <p>").concat(favItem.description, "</p>\n                </div>  \n            ");
      }).join("");

      var pageHTML = "\n            <div class=\"page-wrapper\">\n                <header>\n                    <h2 class=\"page-title\">Favorites</h2>\n                </header>\n                <main>\n                ".concat(favoritesHTML, "\n                </main>\n                <footer>\n                    <button id=\"home-btn\"><img src=").concat(_home.default, " /></button>\n                    <button id=\"favorite-btn\"><img src=").concat(_heartActive.default, " /></button>\n                    <button id=\"cart-btn\"><img src=").concat(_cart.default, " /></button>\n                    <button id=\"user-btn\"><img src=").concat(_user.default, " /></button>\n                </footer>\n            </h3>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var favorites = document.querySelectorAll('.menu-section');
      favorites.forEach(function (card) {
        var title = card.querySelector("h3").textContent;
        card.addEventListener('click', function () {
          var item = _User.user.favorites.find(function (fav) {
            return fav.title === title;
          });

          _DishPage.DishPage.render(item);
        });
      }); // footer buttons

      var homeBtn = document.querySelector("#home-btn");
      homeBtn.addEventListener('click', function () {
        return _MenuPage.MenuPage.render();
      });
      var favoriteBtn = document.querySelector("#favorite-btn");
      favoriteBtn.addEventListener('click', function () {
        return FavoritesPage.render();
      });
      var cartBtn = document.querySelector("#cart-btn");
      cartBtn.addEventListener('click', function () {
        return _CartPage.CartPage.render();
      });
      var userBtn = document.querySelector("#user-btn");
      userBtn.addEventListener('click', function () {
        return _UserPage.UserPage.render();
      });
    }
  }]);

  return FavoritesPage;
}();

exports.FavoritesPage = FavoritesPage;
},{"../classes/User":"classes/User.js","./MenuPage":"pages/MenuPage.js","./CartPage":"pages/CartPage.js","./UserPage":"pages/UserPage.js","./DishPage":"pages/DishPage.js","../images/home.svg":"images/home.svg","../images/heart-active.svg":"images/heart-active.svg","../images/cart.svg":"images/cart.svg","../images/user.svg":"images/user.svg"}],"images/heart.svg":[function(require,module,exports) {
module.exports = "/heart.47dcc97a.svg";
},{}],"images/user-active.svg":[function(require,module,exports) {
module.exports = "/user-active.6f4ad7e9.svg";
},{}],"pages/UserPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPage = void 0;

var _User = require("../classes/User");

var _MenuPage = require("./MenuPage");

var _CartPage = require("./CartPage");

var _FavoritesPage = require("./FavoritesPage");

var _home = _interopRequireDefault(require("../images/home.svg"));

var _heart = _interopRequireDefault(require("../images/heart.svg"));

var _cart = _interopRequireDefault(require("../images/cart.svg"));

var _userActive = _interopRequireDefault(require("../images/user-active.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserPage = /*#__PURE__*/function () {
  function UserPage() {
    _classCallCheck(this, UserPage);
  }

  _createClass(UserPage, null, [{
    key: "render",
    value: function render() {
      var pageHTML = "\n            <div class=\"user-page-wrapper\">\n                <header>\n                    <h2 class=\"page-title\">User</h2>\n                </header>\n                <main>\n                    <div class=\"user-page-image\" style=\"background-image: url(".concat(_User.user.photo, ")\">\n                        <div class=\"user-info\">\n                            <h3>").concat(_User.user.userName, "</h3>\n                            <span>").concat(_User.user.title, "</span>\n                        </div>\n                    </div>  \n                    <div class=\"user-page-layout\">\n                        <p>").concat(_User.user.info, "</p>\n                        <button class=\"green-btn\" id=\"to-favorites-btn\">To favorites</button>\n                    </div>\n                </main>\n                <footer>\n                    <button id=\"home-btn\"><img src=").concat(_home.default, " /></button>\n                    <button id=\"favorite-btn\"><img src=").concat(_heart.default, " /></button>\n                    <button id=\"cart-btn\"><img src=").concat(_cart.default, " /></button>\n                    <button id=\"user-btn\"><img src=").concat(_userActive.default, " /></button>\n                </footer>\n            </h3>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var toFavoritesBtn = document.querySelector("#to-favorites-btn");
      toFavoritesBtn.addEventListener('click', function () {
        return _FavoritesPage.FavoritesPage.render();
      }); // footer buttons

      var homeBtn = document.querySelector("#home-btn");
      homeBtn.addEventListener('click', function () {
        return _MenuPage.MenuPage.render();
      });
      var favoriteBtn = document.querySelector("#favorite-btn");
      favoriteBtn.addEventListener('click', function () {
        return _FavoritesPage.FavoritesPage.render();
      });
      var cartBtn = document.querySelector("#cart-btn");
      cartBtn.addEventListener('click', function () {
        return _CartPage.CartPage.render();
      });
      var userBtn = document.querySelector("#user-btn");
      userBtn.addEventListener('click', function () {
        return UserPage.render();
      });
    }
  }]);

  return UserPage;
}();

exports.UserPage = UserPage;
},{"../classes/User":"classes/User.js","./MenuPage":"pages/MenuPage.js","./CartPage":"pages/CartPage.js","./FavoritesPage":"pages/FavoritesPage.js","../images/home.svg":"images/home.svg","../images/heart.svg":"images/heart.svg","../images/cart.svg":"images/cart.svg","../images/user-active.svg":"images/user-active.svg"}],"images/cart-active.svg":[function(require,module,exports) {
module.exports = "/cart-active.fbfebdf7.svg";
},{}],"pages/CartPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartPage = void 0;

var _Cart = require("../classes/Cart");

var _MenuPage = require("./MenuPage");

var _UserPage = require("./UserPage");

var _FavoritesPage = require("./FavoritesPage");

var _home = _interopRequireDefault(require("../images/home.svg"));

var _heart = _interopRequireDefault(require("../images/heart.svg"));

var _cartActive = _interopRequireDefault(require("../images/cart-active.svg"));

var _user = _interopRequireDefault(require("../images/user.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CartPage = /*#__PURE__*/function () {
  function CartPage() {
    _classCallCheck(this, CartPage);
  }

  _createClass(CartPage, null, [{
    key: "render",
    value: function render() {
      var mainPageContent = "";

      if (_Cart.cart.items.length === 0) {
        // корзина пуста
        mainPageContent = "\n                <main>\n                    <div class=\"no-items-view\">\n                        <div>\n                            <p>You don't have items in your cart yet...</p>\n                        </div>\n                        <button class=\"go-to-menu-btn green-btn\">Go to Menu</button>\n                    </div>\n                </main>\n            ";
      } else {
        var addedItemsHTML = _Cart.cart.items.map(function (item) {
          return item.getCartHTML();
        }).join("");

        mainPageContent = "\n            <main>\n                ".concat(addedItemsHTML, "\n                <div class=\"total-wrapper\">\n                    <div class=\"titles column\">\n                        <span class=\"row-title\">Delivery charges</span>\n                        <span class=\"row-title\">Subtotal</span>\n                        <span class=\"row-title sum\">Total</span>\n                    </div>\n                    <div class=\"prices column\">\n                        <span class=\"row-price\">$").concat(_Cart.cart.deliveryCharges, "</span>\n                        <span class=\"row-price\">$").concat(_Cart.cart.subtotal, "</span>\n                        <span class=\"row-price sum\">$").concat(_Cart.cart.total, "</span>\n                    </div>\n                </div>\n                <button class=\"checkout-btn green-btn\">Secure Checkout</button>\n            </main>\n        ");
      }

      var pageHTML = "\n            <div class=\"page-wrapper\" id=\"cart-page-wrapper\">\n                <header>\n                    <h2 class=\"page-title\">Cart</h2>\n                </header>\n                ".concat(mainPageContent, "\n                <footer>\n                    <button id=\"home-btn\"><img src=").concat(_home.default, " /></button>\n                    <button id=\"favorite-btn\"><img src=").concat(_heart.default, " /></button>\n                    <button id=\"cart-btn\"><img src=").concat(_cartActive.default, " /></button>\n                    <button id=\"user-btn\"><img src=").concat(_user.default, " /></button>\n                </footer>\n            </div>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var deleteButtons = document.querySelectorAll(".delete-from-cart-btn");
      deleteButtons.forEach(function (button, index) {
        var itemToDeleteTitle = _Cart.cart.items[index].title;
        button.addEventListener('click', function () {
          return _Cart.cart.deleteItem(itemToDeleteTitle);
        });
      });

      if (_Cart.cart.items.length === 0) {
        var toMenuBtn = document.querySelector(".go-to-menu-btn");
        toMenuBtn.addEventListener('click', function () {
          return _MenuPage.MenuPage.render();
        });
      } else {
        var checkoutBtn = document.querySelector(".checkout-btn");
        checkoutBtn.addEventListener('click', function () {
          return console.log('Thanks for the order!');
        });
      } // footer buttons


      var homeBtn = document.querySelector("#home-btn");
      homeBtn.addEventListener('click', function () {
        return _MenuPage.MenuPage.render();
      });
      var favoriteBtn = document.querySelector("#favorite-btn");
      favoriteBtn.addEventListener('click', function () {
        return _FavoritesPage.FavoritesPage.render();
      });
      var cartBtn = document.querySelector("#cart-btn");
      cartBtn.addEventListener('click', function () {
        return CartPage.render();
      });
      var userBtn = document.querySelector("#user-btn");
      userBtn.addEventListener('click', function () {
        return _UserPage.UserPage.render();
      });
    }
  }]);

  return CartPage;
}();

exports.CartPage = CartPage;
},{"../classes/Cart":"classes/Cart.js","./MenuPage":"pages/MenuPage.js","./UserPage":"pages/UserPage.js","./FavoritesPage":"pages/FavoritesPage.js","../images/home.svg":"images/home.svg","../images/heart.svg":"images/heart.svg","../images/cart-active.svg":"images/cart-active.svg","../images/user.svg":"images/user.svg"}],"classes/Cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cart = void 0;

var _CartPage = require("../pages/CartPage");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// приватні поля
var _items = new WeakMap();

var _subtotal = new WeakMap();

var Cart = /*#__PURE__*/function () {
  function Cart() {
    _classCallCheck(this, Cart);

    _items.set(this, []);

    _subtotal.set(this, 0);
  }

  _createClass(Cart, [{
    key: "addItem",
    value: function addItem(item) {
      this.items.push(item);

      _subtotal.set(this, this.subtotal + item.price);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemTitle) {
      var itemToDelete = this.items.find(function (item) {
        return item.title === itemTitle;
      });

      _subtotal.set(this, this.subtotal - itemToDelete.price);

      _items.set(this, this.items.filter(function (item) {
        return item.title !== itemTitle;
      }));

      _CartPage.CartPage.render();
    }
  }, {
    key: "items",
    get: function get() {
      return _items.get(this);
    }
  }, {
    key: "deliveryCharges",
    get: function get() {
      // ціна доставки за замовчуванням
      var deliveryCharges = 5;

      if (this.subtotal < 20) {
        deliveryCharges = 10;
      }

      if (this.subtotal > 50) {
        deliveryCharges = 0;
      }

      return deliveryCharges;
    }
  }, {
    key: "subtotal",
    get: function get() {
      return _subtotal.get(this);
    }
  }, {
    key: "total",
    get: function get() {
      return parseFloat(this.deliveryCharges + this.subtotal).toFixed(2);
    }
  }]);

  return Cart;
}();

var cart = new Cart();
exports.cart = cart;
},{"../pages/CartPage":"pages/CartPage.js"}],"images/like.svg":[function(require,module,exports) {
module.exports = "/like.e674bbc8.svg";
},{}],"images/like-clicked.svg":[function(require,module,exports) {
module.exports = "/like-clicked.7afc3f90.svg";
},{}],"images/arrow.svg":[function(require,module,exports) {
module.exports = "/arrow.305c14c2.svg";
},{}],"pages/DishPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishPage = void 0;

var _MenuPage = require("./MenuPage");

var _Cart = require("../classes/Cart");

var _User = require("../classes/User");

var _like = _interopRequireDefault(require("../images/like.svg"));

var _likeClicked = _interopRequireDefault(require("../images/like-clicked.svg"));

var _arrow = _interopRequireDefault(require("../images/arrow.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DishPage = /*#__PURE__*/function () {
  function DishPage() {
    _classCallCheck(this, DishPage);
  }

  _createClass(DishPage, null, [{
    key: "render",
    value: function render(dish) {
      var isDishLiked = _User.user.favorites.find(function (fav) {
        return fav.title === dish.title;
      });

      var dishLayout = dish.getLayoutHTML();
      var pageHTML = "\n            <div class=\"dish-page-wrapper\">\n                <button class=\"like-btn ".concat(isDishLiked ? "like-btn-active" : "like-btn-inactive", "\">\n                    <img src=\"").concat(isDishLiked ? _likeClicked.default : _like.default, "\"/>\n                </button>\n                <div class=\"dish-page-image\" style=\"background-image: url(").concat(dish.image, ")\">\n                    <button class=\"back-btn\"><img src=").concat(_arrow.default, " /></button>  \n                </div>  \n                ").concat(dishLayout, "\n            </div>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners(dish, isDishLiked);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(dish, isDishLiked) {
      var backButton = document.querySelector(".back-btn");

      var onBackBtnClick = function onBackBtnClick() {
        return _MenuPage.MenuPage.render();
      };

      backButton.addEventListener('click', function () {
        return onBackBtnClick();
      });
      var addToCardButton = document.querySelector(".add-to-cart-btn");

      var onAddToCardButtonClick = function onAddToCardButtonClick() {
        _Cart.cart.addItem(dish);

        addToCardButton.textContent = "Added!";
      };

      addToCardButton.addEventListener('click', function () {
        return onAddToCardButtonClick();
      });

      if (isDishLiked) {
        var likeButtonActive = document.querySelector(".like-btn-active");

        var onLikeBtnActiveClick = function onLikeBtnActiveClick() {
          _User.user.removeFavorite(dish);

          DishPage.render(dish);
        };

        likeButtonActive.addEventListener('click', function () {
          return onLikeBtnActiveClick();
        });
      } else {
        var likeButtonInactive = document.querySelector(".like-btn-inactive");

        var onLikeBtnInactiveClick = function onLikeBtnInactiveClick() {
          _User.user.addFavorite(dish);

          DishPage.render(dish);
        };

        likeButtonInactive.addEventListener('click', function () {
          return onLikeBtnInactiveClick();
        });
      }
    }
  }]);

  return DishPage;
}();

exports.DishPage = DishPage;
},{"./MenuPage":"pages/MenuPage.js","../classes/Cart":"classes/Cart.js","../classes/User":"classes/User.js","../images/like.svg":"images/like.svg","../images/like-clicked.svg":"images/like-clicked.svg","../images/arrow.svg":"images/arrow.svg"}],"images/arrow-black.svg":[function(require,module,exports) {
module.exports = "/arrow-black.d23b4607.svg";
},{}],"pages/MenuSectionPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSectionPage = void 0;

var _MenuPage = require("./MenuPage");

var _DishPage = require("./DishPage");

var _arrowBlack = _interopRequireDefault(require("../images/arrow-black.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _dishes = new WeakMap();

var MenuSectionPage = /*#__PURE__*/function () {
  function MenuSectionPage() {
    _classCallCheck(this, MenuSectionPage);
  }

  _createClass(MenuSectionPage, null, [{
    key: "render",
    value: function render(section) {
      _dishes.set(this, section.dishes);

      var dishesHTML = _dishes.get(this).map(function (dish) {
        return dish.getPreviewHTML();
      }).join("");

      var pageHTML = "\n            <div class=\"page-wrapper\" id=\"menu-section-page-wrapper\">\n                <header>\n                    <button class=\"back-btn\"><img src=\"".concat(_arrowBlack.default, "\" /></button>\n                    <h2 class=\"page-title\">").concat(section.title, "</h2>\n                </header>\n                <main>\n                    ").concat(dishesHTML, "\n                </main>\n            </div>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var backButton = document.querySelector(".back-btn");

      var onBackBtnClick = function onBackBtnClick() {
        return _MenuPage.MenuPage.render();
      };

      backButton.addEventListener('click', function () {
        return onBackBtnClick();
      });
      var dishPreviews = document.querySelectorAll(".dish-preview");

      var onDishPreviewClick = function onDishPreviewClick(dishData) {
        return _DishPage.DishPage.render(dishData);
      };

      dishPreviews.forEach(function (preview, index) {
        preview.addEventListener('click', function () {
          return onDishPreviewClick(_dishes.get(_this)[index]);
        });
      });
    }
  }]);

  return MenuSectionPage;
}();

exports.MenuSectionPage = MenuSectionPage;
},{"./MenuPage":"pages/MenuPage.js","./DishPage":"pages/DishPage.js","../images/arrow-black.svg":"images/arrow-black.svg"}],"images/home-active.svg":[function(require,module,exports) {
module.exports = "/home-active.b9a2c0c5.svg";
},{}],"pages/MenuPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuPage = void 0;

var _Menu = require("../classes/Menu");

var _MenuSectionPage = require("./MenuSectionPage");

var _CartPage = require("./CartPage");

var _UserPage = require("./UserPage");

var _FavoritesPage = require("./FavoritesPage");

var _homeActive = _interopRequireDefault(require("../images/home-active.svg"));

var _heart = _interopRequireDefault(require("../images/heart.svg"));

var _cart = _interopRequireDefault(require("../images/cart.svg"));

var _user = _interopRequireDefault(require("../images/user.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// приватні поля 
var _menu = new WeakMap();

var _sections = new WeakMap();

var MenuPage = /*#__PURE__*/function () {
  function MenuPage() {
    _classCallCheck(this, MenuPage);
  }

  _createClass(MenuPage, null, [{
    key: "render",
    value: function render() {
      _menu.set(this, new _Menu.Menu());

      _sections.set(this, _menu.get(this).sections);

      var sectionsHTML = _sections.get(this).map(function (section) {
        return "\n                <div class=\"small-card menu-section\">\n                    <img src=".concat(section.image, " />\n                    <h3>").concat(section.title, "</h3>\n                    <p>").concat(section.description, "</p>\n                </div>  \n            ");
      }).join("");

      var pageHTML = "\n            <div class=\"page-wrapper\" id=\"menu-page-wrapper\">\n                <header>\n                    <h2 class=\"page-title\">Menu</h2>\n                </header>\n                <main>".concat(sectionsHTML, "</main>\n                <footer>\n                    <button id=\"home-btn\"><img src=").concat(_homeActive.default, " /></button>\n                    <button id=\"favorite-btn\"><img src=").concat(_heart.default, " /></button>\n                    <button id=\"cart-btn\"><img src=").concat(_cart.default, " /></button>\n                    <button id=\"user-btn\"><img src=").concat(_user.default, " /></button>\n                </footer>\n            </div>\n        ");
      document.querySelector('body').innerHTML = pageHTML;
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var menuSections = document.querySelectorAll(".menu-section");
      menuSections.forEach(function (section, index) {
        var sectionData = _sections.get(_this)[index];

        section.addEventListener('click', function () {
          return _MenuSectionPage.MenuSectionPage.render(sectionData);
        });
      }); // footer buttons

      var homeBtn = document.querySelector("#home-btn");
      homeBtn.addEventListener('click', function () {
        return MenuPage.render();
      });
      var favoriteBtn = document.querySelector("#favorite-btn");
      favoriteBtn.addEventListener('click', function () {
        return _FavoritesPage.FavoritesPage.render();
      });
      var cartBtn = document.querySelector("#cart-btn");
      cartBtn.addEventListener('click', function () {
        return _CartPage.CartPage.render();
      });
      var userBtn = document.querySelector("#user-btn");
      userBtn.addEventListener('click', function () {
        return _UserPage.UserPage.render();
      });
    }
  }]);

  return MenuPage;
}();

exports.MenuPage = MenuPage;
},{"../classes/Menu":"classes/Menu.js","./MenuSectionPage":"pages/MenuSectionPage.js","./CartPage":"pages/CartPage.js","./UserPage":"pages/UserPage.js","./FavoritesPage":"pages/FavoritesPage.js","../images/home-active.svg":"images/home-active.svg","../images/heart.svg":"images/heart.svg","../images/cart.svg":"images/cart.svg","../images/user.svg":"images/user.svg"}],"index.js":[function(require,module,exports) {
"use strict";

var _MenuPage = require("./pages/MenuPage");

// Логіка відображення першої сторінки додатку (екран завантаження)
setTimeout(function () {
  return _MenuPage.MenuPage.render();
}, 3000);
},{"./pages/MenuPage":"pages/MenuPage.js"}],"../../../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59718" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map