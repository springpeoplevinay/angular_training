export class Player{
    private id:number;
    private name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    public printPlayer():void{
        console.log("Printing Player.....")
        console.log("Id : "+this.id);
        console.log("Name : "+this.name);
    }
}