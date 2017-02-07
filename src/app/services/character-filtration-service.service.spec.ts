/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterFiltrationService } from './character-filtration-service.service';
import { CharacterMockData } from './character.mock.data';
import { Character } from '../models/character';

describe('CharacterFiltrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterFiltrationService]
    });
  });

  it('should be created', inject([CharacterFiltrationService], (service: CharacterFiltrationService) => {
    expect(service).toBeTruthy();
  }));

  it('should modify mii fighter data when told', inject([CharacterFiltrationService], (service: CharacterFiltrationService) => {

    let characterNameUnderTest = 'Mii';
    let tempMiiFighter = new Character();
    tempMiiFighter.name = 'MiiFighter';
    tempMiiFighter.fullUrl = 'http://dummy.url';

    let characters = new CharacterMockData().characters.concat(tempMiiFighter);

    let modifiedCharacterData = service.modifyMiiFighterUrls(characters);

    expect(modifiedCharacterData.find(c => c.name.startsWith(characterNameUnderTest))).not.toBeUndefined();
    expect(modifiedCharacterData.find(c => c.name.startsWith(characterNameUnderTest)).fullUrl.startsWith('http://dummy'));
    expect(modifiedCharacterData.length).toBeGreaterThan(0);
  }));

  it('should not modify any data when no mii fighter data present',
    inject([CharacterFiltrationService], (service: CharacterFiltrationService) => {

      let characters = new CharacterMockData().characters;
      let modifiedCharacterData = service.modifyMiiFighterUrls(characters);

      expect(modifiedCharacterData.length).toEqual(characters.length);
    }));
});
