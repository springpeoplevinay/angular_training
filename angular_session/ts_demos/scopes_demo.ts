var global_val = 100; //global

export class ScopeDemo {
    x: number = 1000; //instance level
    static y: number = 8999; //class level
    private m:number;
    public assignNumber(m:number): void {
        var local_val = 7878;
        console.log("local_val within assignNumber() "+local_val)
        this.m=m;
        console.log("m : "+this.m);

    }
}
var res=function(a:number,b:number){
    return a+b;
}
console.log("result is res : "+res(11,22));
var arrow=(a:number,b:number)=>{
    return a*b;
}
console.log("result is arrow : "+arrow(11,22));

console.log("global value : "+global_val);
console.log("static/class level y -> : "+ScopeDemo.y);
let obj=new ScopeDemo();
console.log("Instance level x : "+obj.x);
obj.assignNumber(88);
console.log(obj instanceof ScopeDemo);//will be helpful for object casting to avoid class cast exception
console.log(obj instanceof Date);


function testOptional(x:string,y?:any):void{
    console.log("Optional param demo");
    console.log("x : "+x);
    console.log("y : "+y);
}

testOptional("Giri");
testOptional("Giri",22);
testOptional("Giri","Hemanth");

