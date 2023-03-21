"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
请使用关键字 class 创建一个类。
请始终添加一个名为 constructor() 的方法
构造方法

构造方法是一种特殊的方法：
它必须有确切的名称的 “constructor”
创建新对象时自动执行
用于初始化对象属性
如果您没有定义构造方法，JavaScript 会添加一个空的构造方法。

创建类方法的语法与对象方法相同。
*/
var Car =
/*#__PURE__*/
function () {
  function Car(brand) {
    _classCallCheck(this, Car);

    this.carname = brand;
  }

  _createClass(Car, [{
    key: "present",
    value: function present() {
      return 'I have a ' + this.carname;
    }
  }]);

  return Car;
}();

var Model =
/*#__PURE__*/
function (_Car) {
  _inherits(Model, _Car);

  function Model(brand, mod) {
    var _this;

    _classCallCheck(this, Model);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this, brand));
    _this.model = mod;
    return _this;
  }

  _createClass(Model, [{
    key: "show",
    value: function show() {
      return this.present() + ', it is a ' + this.model;
    } // static 类方法是在类本身上定义的。
    // 您不能在对象上调用 static 方法，只能在对象类上调用
    // 静态方法

  }], [{
    key: "hello",
    value: function hello(x) {
      return "Hello!!" + x.carname;
    } // name = '直接在类里面定义属性'
    // static num = 22  // 

  }]);

  return Model;
}(Car);
/*
与函数和其他 JavaScript 声明不同，类声明不会被提升。
这意味着您必须先声明类，然后才能使用它
*/


var myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
console.log(Model.hello(myCar));
console.log(myCar.name);