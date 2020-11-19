"use strict";
exports.__esModule = true;
exports.sayHello = void 0;
var city; //if we dont specify the type then by default it is any
function sayHello(name, age) {
    city = 100;
    return "Hello " + name + " age : " + age;
}
exports.sayHello = sayHello;
console.log(sayHello("Kiran", 23));
var x = '1';
var y = x; //this is now of type number
//y='d';
y = 99;
console.log("typeof(y) : " + typeof (y));
console.log("typeof(x) : " + typeof (x));
var z = 100;
console.log("typeof(z) : " + typeof (z));
//x=100;
/*
number,string,boolean,void,null,undefined
*/ 
