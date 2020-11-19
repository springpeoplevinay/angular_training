import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players:Player[]=[];
  constructor() { }

  public addPlayer(player:Player):void{
    this.players.push(player);
  }

  public removeLastPlayer():void{
    this.players.pop();
  }

  public getAllPlayers():Player[]{
    return this.players;
  }
}
