
var city; //if we dont specify the type then by default it is any
export function sayHello(name:string,age:number){
    city=100;
    return "Hello "+name+" age : "+age;
}

console.log(sayHello("Kiran",23));

var x='1'; 
var y:number=<number><any>x; //this is now of type number
//y='d';
y=99;
console.log("typeof(y) : "+typeof(y));
console.log("typeof(x) : "+typeof(x));
var z:number=100;
console.log("typeof(z) : "+typeof(z));
//x=100;
/*
number,string,boolean,void,null,undefined
*/