import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ShowPlayersComponent } from './show-players/show-players.component';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    DeletePlayerComponent,
    ShowPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
