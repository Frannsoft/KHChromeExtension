import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KhapiService } from './services/khapi.service';
import { CharactersortingService } from './services/charactersorting.service';
import { AppComponent } from './app.component';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './services/storage.service';
import { CharacterDataViewerComponent } from './components/character-data-viewer/character-data-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersimagesComponent,
    CharacterDataViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'khchrext',
      storageType: 'localStorage'
    })
  ],
  providers: [KhapiService, CharactersortingService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
