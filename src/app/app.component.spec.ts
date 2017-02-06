/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';
import { CharacterDataViewerComponent } from './components/character-data-viewer/character-data-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KhapiService } from './services/khapi.service';
import { KhapiServiceMock } from './services/khapi.service.mock';
import { CharactersortingService } from './services/charactersorting.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './services/storage.service';
import { CharacterSortOption } from './models/CharacterSortOption';
import { Charactersort } from './models/charactersort.enum';
import { Character } from './models/character';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
      providers: [{ provide: KhapiService, useClass: KhapiServiceMock }, CharactersortingService, StorageService],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should properly re-sort characters when descending Z-A sort used', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app: AppComponent = fixture.debugElement.componentInstance;

    app.ngOnInit();
    fixture.whenStable().then(() => {
      expect(app.characters).not.toBeUndefined();

      app.sortChars(new CharacterSortOption(Charactersort.Descending));

      let lastCharacter: Character = app.characters[0];
      expect(lastCharacter.displayName).toBe('Zero Suit Samus');
    });
  }));

  it('should properly re-sort character when ascending A-Z sort used', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app: AppComponent = fixture.debugElement.componentInstance;

    app.ngOnInit();
    fixture.whenStable().then(() => {
      expect(app.characters).not.toBeUndefined();

      app.sortChars(new CharacterSortOption(Charactersort.Ascending));

      let lastCharacter: Character = app.characters[0];
      expect(lastCharacter.displayName).toBe('Yoshi');
    });
  }));


  it('should properly re-sort character when sort option set', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app: AppComponent = fixture.debugElement.componentInstance;

    app.ngOnInit();
    fixture.whenStable().then(() => {
      expect(app.characters).not.toBeUndefined();

      app.sortChars(new CharacterSortOption(Charactersort.Ascending));
      expect(app.characters[0].displayName).toBe('Yoshi');

      app.characterSortOption = new CharacterSortOption(Charactersort.Descending);

      expect(app.characters[0].displayName).toBe('Zero Suit Samus');
    });
  }));
});
