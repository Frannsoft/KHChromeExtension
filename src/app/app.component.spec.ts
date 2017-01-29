/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KhapiService } from './services/khapi.service';
import { CharactersortingService } from './services/charactersorting.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './services/storage.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CharactersimagesComponent
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
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
