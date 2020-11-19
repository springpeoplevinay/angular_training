import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent  {

  players:Player[]=[];
  player:Player;
  flag=false;

  constructor() { 
    this.player=new Player();
  }

 public addPlayer():void{
   this.flag=true;
   this.players.push(this.player);
   this.player=new Player();
 }

 public removeLastPlayer():void{
   this.players.pop();
   if(this.players.length==0){
     this.flag=false;
   }
 }

 public removePlayerById():void{
//code here for removing player by id

  if(this.players.length==0){
    this.flag=false;
  }
 }

}
