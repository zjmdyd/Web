"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = __importDefault(require("foo"));
// import testDeclareVar from "./global"
// import jQuery from "./global"
let dirs = [foo_1.default.Down, foo_1.default.Up];
console.log(dirs);
// testDeclareVar = 10
// console.log(testDeclareVar)
// jQuery('#foo');
// jQuery = function(selector) {
// return selector
// return document.querySelector(selector);
// };
// let cat0 = new Animal('Tom')
//# sourceMappingURL=16_declare.js.map