/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhapiService } from './khapi.service';
import { HttpModule } from '@angular/http';

describe('KhapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [KhapiService]
    });
  });

  it('should create khapi service', inject([KhapiService], (service: KhapiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get character data', inject([KhapiService], (service: KhapiService) => {
    let characters = service.getCharacterMetadata();
    expect(characters).not.toBeNull();
  }));

  it('should get character data with expected properties', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMetadata().then(characters => {
      characters.forEach(c => {
        expect(c.displayName).not.toBeNull();
        expect(c.fullUrl).not.toBeNull();
        expect(c.id).not.toBeNull();
        expect(c.name).not.toBeNull();
      });
    });
  }));
});
