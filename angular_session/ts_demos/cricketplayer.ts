import { Player } from "./player";
import { Team } from "./team";

export class CricketPlayer extends Player{

    private score:number;
    private team:Team;

    constructor(id:number,name:string,score:number,team:Team){
      super(id,name);
      this.score=score;
      this.team=team;
    }
    
    public printCricketPlayer():void{
        console.log("Priniting Cricket Player")
        super.printPlayer();
        console.log("score: "+this.score);
        this.team.printTeam();
    }
}