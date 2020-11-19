import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-show-players',
  templateUrl: './show-players.component.html',
  styleUrls: ['./show-players.component.css']
  //providers:[]
})
export class ShowPlayersComponent  {

  players:Player[];
  constructor(private service:PlayerService) {
    this.players=this.service.getAllPlayers();
   }

 

}
