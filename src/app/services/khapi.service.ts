import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Move } from '../models/move';
import { Movement } from '../models/movement';
import { Http } from '@angular/http';
import { CharacterFiltrationService } from './character-filtration-service.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KhapiService {

  constructor(
    private http: Http,
    private characterFiltrationService: CharacterFiltrationService) { }

  // get character metadata for all characters
  getCharacterMetadata(modifyMiiFighterUrl: boolean): Promise<Character[]> {
    return this.http.get('http://api.kuroganehammer.com/api/characters')
      .toPromise()
      .then(response => {
        let responseData = response.json() as Character[];

        if (modifyMiiFighterUrl) {
          let miiFighterAdjustedCharacterData = this.modifyMiiFighterData(responseData);
          return miiFighterAdjustedCharacterData;
        } else {
          return responseData;
        }
      })
      .catch(this.handleError);
  }

  // there are no official images for individual mii fighters and I do not have enough experience to make decent quality ones of my own.
  // this will remove all but one mii fighter entry and change the remaining mii fighter fullUrl data to 
  // point to the hub page on the main kh site instead of the individual character page.
  private modifyMiiFighterData(characters: Character[]) {
    return this.characterFiltrationService.modifyMiiFighterUrls(characters);
  }

  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }
}
