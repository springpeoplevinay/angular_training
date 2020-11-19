import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent  {

  //players:Player[]=[];
  player:Player;
  //flag:false;

  constructor(private service:PlayerService) { 
    this.player=new Player();

  }

 public addPlayer():void{
   //this.flag=true;
   this.service.addPlayer(this.player);
   this.player=new Player();
 }

}
