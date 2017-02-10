import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';
import { KhapiService } from './services/khapi.service';
import { Charactersort } from './models/charactersort.enum';
import { CharactersortingService } from './services/charactersorting.service';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';
import { LocalStorageService } from 'angular-2-local-storage';
import { StorageService } from './services/storage.service';
import { CharacterSortOption } from './models/CharacterSortOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characterSortOptions: Array<CharacterSortOption>;
  activeCharacterSortOption: CharacterSortOption;
  characters: Character[];
  isDoneLoading: boolean;

  constructor(private khapiService: KhapiService,
    private characterSortingService: CharactersortingService,
    private storageService: StorageService) {

    this.isDoneLoading = false;
    this.characterSortOptions = [
      new CharacterSortOption(Charactersort.Ascending),
      new CharacterSortOption(Charactersort.Descending)
    ];
  }

  ngOnInit() {
    // get characters and load sort type
      this.khapiService.getCharacterMetadata(true)
        .then(characters => {
          this.characters = characters;

          let storedSortTypeOption = this.storageService.getStoredSortOption();

          if (storedSortTypeOption !== null) {
            this.sortChars(storedSortTypeOption);
          }
          this.isDoneLoading = true;
        });
  }

  set characterSortOption(characterSortOption: CharacterSortOption) {
    this.sortChars(characterSortOption);
  }

  get characterSortOption() {
    return this.activeCharacterSortOption;
  }

  sortChars(characterSortOption: CharacterSortOption) {
    this.characterSortingService.sortCharacters(this.characters, characterSortOption);
    this.assignActiveSortOption(characterSortOption);
    this.storageService.setStoredSortOption(characterSortOption);
  }

  assignActiveSortOption(sortOption: CharacterSortOption) {
    let foundSortOption = this.characterSortOptions.find(option => option.name === sortOption.name);

    if (foundSortOption === undefined) {
      // assign kh sort order by default
      this.activeCharacterSortOption = this.characterSortOptions
        .find(option => option.name === Charactersort.Ascending.toString());
    } else {
      this.activeCharacterSortOption = foundSortOption;
    }
  }
}

