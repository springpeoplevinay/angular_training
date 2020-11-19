import { CricketPlayer } from "./cricketplayer";
import { Player } from "./player";
import { Team } from "./team";

let p1=new Player(100,"Sachin");
p1.printPlayer();

let team=new Team(1000,"INDIA","Ravi Shastri");
let cp=new CricketPlayer(999,"Sachin R Tendulkar",200,team);

cp.printCricketPlayer();

let player=<Player> cp;
console.log("after casting");
player.printPlayer();