/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhapiService } from './khapi.service';
import { KhapiServiceMock } from './khapi.service.mock';
import { HttpModule } from '@angular/http';
import { CharacterFiltrationService } from './character-filtration-service.service';

describe('KhapiService live service tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [KhapiService, CharacterFiltrationService]
    });
  });

  it('should be created', inject([KhapiService], (service: KhapiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get character data when modifying mii fighter url', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMetadata(true).then(characters => {
      expect(characters).not.toBeNull();
      expect(characters.length).toBeGreaterThan(0);
    });
  }));

  it('should get character data when not modifying mii fighter url', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMetadata(false).then(characters => {
      expect(characters).not.toBeNull();
      expect(characters.length).toBeGreaterThan(0);
    });
  }));

  it('should get character metadata with expected properties', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMetadata(true).then(characters => {

      expect(characters).not.toBeNull();
      expect(characters.length).toBeGreaterThan(0);

      characters.forEach(c => {
        expect(c.displayName).not.toBeNull();
        expect(c.fullUrl).not.toBeNull();
        expect(c.id).not.toBeNull();
        expect(c.name).not.toBeNull();
      });
    });
  }));
});
