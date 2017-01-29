import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KhapiService } from './services/khapi.service';
import { CharactersortingService } from './services/charactersorting.service';
import { AppComponent } from './app.component';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';
import { MaterialModule } from '@angular/material';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersimagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'khchrext',
      storageType: 'localStorage'
    })
  ],
  providers: [KhapiService, CharactersortingService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
