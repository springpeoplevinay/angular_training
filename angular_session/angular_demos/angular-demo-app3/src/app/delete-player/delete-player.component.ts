import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent  {

  //flag:boolean=false;
  constructor(private service:PlayerService) {
    // if(this.service.getAllPlayers().length==0){
    //   this.flag=false;
    // }
   }

   public removeLastPlayer():void{
     this.service.removeLastPlayer();
     if(this.service.getAllPlayers().length==0){
     // this.flag=false;
    }
   }
  

}
