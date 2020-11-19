export interface MyInterface{
    method1():void;
    method2():void;
    method3():void;
    method4():void;
}

export interface MyInterface2{
    myMethodInt2():void;
   
}

export class Implementor implements MyInterface,MyInterface2{
    myMethodInt2(): void {
        throw new Error("Method not implemented.");
    }
    method1(): void {
        throw new Error("Method not implemented.");
    }
    method2(): void {
        throw new Error("Method not implemented.");
    }
    method3(): void {
        throw new Error("Method not implemented.");
    }
    method4(): void {
        throw new Error("Method not implemented.");
    }

    
}

let m1=<MyInterface2>new Implementor();
m1.myMethodInt2();
let m2=<MyInterface>new Implementor();
m2.method1();