import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KhapiService } from './services/khapi.service';
import { CharactersortingService } from './services/charactersorting.service';
import { AppComponent } from './app.component';
import { CharacterslistComponent } from './components/characterslist/characterslist.component';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterslistComponent,
    CharactersimagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [KhapiService, CharactersortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
