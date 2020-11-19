export class Team{
    private teamid:number;
    private teamName:string;
    private coachName:string;
    
    constructor(teamid:number,teamName:string,coachName:string){
        this.teamid=teamid;
        this.teamName=teamName;
        this.coachName=coachName;
    }

    public printTeam():void{
        console.log("Printing Team Details.....");
        console.log("TeamId : "+this.teamid);
        console.log("Team Name : "+this.teamName);
        console.log("Coach Name : "+this.coachName)
    }
}