import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { CharacterSortOption } from '../models/CharacterSortOption';
import { Charactersort } from '../models/charactersort.enum';

@Injectable()
export class CharactersortingService {

  constructor() { }

  sortCharacters(characters: Character[], characterSortOption: CharacterSortOption) {
    // I like separation of cases by brackets, but vs code is 
    // annoying with warnings here.  That's why they're disabled.
    switch (characterSortOption.sortType) {
      case Charactersort.KuroganeHammerOrder: {
        this.sortByKuroganeHammerSiteOrder(characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case Charactersort.DisplayNameAscending: {
        this.sortByDisplayNameAscending(characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case Charactersort.DisplayNameDescending: {
        this.sortByDisplayNameDescending(characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      default: {
        console.error('Unexpected characterSortOption of ' + characterSortOption);
        break;
      }
    }
  }

  sortByDisplayNameAscending(characters: Character[]) {
    characters.sort((a, b) => {
      if (a.displayName > b.displayName) {
        return 1;
      }
      if (a.displayName < b.displayName) {
        return -1;
      }
      return 0;
    });
  }

  // sorts by character id  
  sortByKuroganeHammerSiteOrder(characters: Character[]) {
    characters.sort((a, b) => a.id - b.id);
  }

  sortByDisplayNameDescending(characters: Character[]) {
    characters.sort((a, b) => {
      if (a.displayName > b.displayName) {
        return -1;
      }
      if (a.displayName < b.displayName) {
        return 1;
      }
      return 0;
    });
  }
}
