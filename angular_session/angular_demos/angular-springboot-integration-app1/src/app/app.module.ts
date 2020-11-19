import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { DeleteAnimalComponent } from './delete-animal/delete-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { SearchAnimalComponent } from './search-animal/search-animal.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnimalService } from './animal.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    DeleteAnimalComponent,
    UpdateAnimalComponent,
    SearchAnimalComponent,
    AnimalsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
