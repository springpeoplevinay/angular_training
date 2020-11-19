"use strict";
exports.__esModule = true;
exports.ScopeDemo = void 0;
var global_val = 100; //global
var ScopeDemo = /** @class */ (function () {
    function ScopeDemo() {
        this.x = 1000; //instance level
    }
    ScopeDemo.prototype.assignNumber = function (m) {
        var local_val = 7878;
        console.log("local_val within assignNumber() " + local_val);
        this.m = m;
        console.log("m : " + this.m);
    };
    ScopeDemo.y = 8999; //class level
    return ScopeDemo;
}());
exports.ScopeDemo = ScopeDemo;
var res = function (a, b) {
    return a + b;
};
console.log("result is res : " + res(11, 22));
var arrow = function (a, b) {
    return a * b;
};
console.log("result is arrow : " + arrow(11, 22));
console.log("global value : " + global_val);
console.log("static/class level y -> : " + ScopeDemo.y);
var obj = new ScopeDemo();
console.log("Instance level x : " + obj.x);
obj.assignNumber(88);
console.log(obj instanceof ScopeDemo); //will be helpful for object casting to avoid class cast exception
console.log(obj instanceof Date);
function testOptional(x, y) {
    console.log("Optional param demo");
    console.log("x : " + x);
    console.log("y : " + y);
}
testOptional("Giri");
testOptional("Giri", 22);
testOptional("Giri", "Hemanth");
