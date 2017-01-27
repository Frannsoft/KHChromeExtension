import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable()
export class CharactersortingService {

  constructor() { }

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
