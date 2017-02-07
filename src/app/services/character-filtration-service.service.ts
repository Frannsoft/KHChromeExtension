import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable()
export class CharacterFiltrationService {

  miiFighterHubUrl: string;

  constructor() { }

  modifyMiiFighterUrls(characters: Character[]) {

    // only show one mii fighter entry that takes user to mii fighter page instead of having multiple same images       
    let miiFighter = characters.find(c => c.name.startsWith('Mii'));

    if (miiFighter === undefined) {
      // I'd rather return multiple mii fighter images than outright fail.
      // log an error message and return the unfiltered list
      console.error('Unable to find any characters that start with [Mii]!  Was expecting 3.  Full returned list...');
      console.log(characters);
      return characters;
    }
    miiFighter.fullUrl = 'http://kuroganehammer.com/Smash4/Mii';
    miiFighter.displayName = 'Mii fighters';
    miiFighter.name = 'Miifighers';
    // remove extra mii fighters and just show the one modified above        
    let restOfCharacters = characters.filter(c => !c.name.startsWith('Mii'));
    restOfCharacters.push(miiFighter);
    return restOfCharacters;
  }
}
