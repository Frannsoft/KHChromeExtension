/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharactersortingService } from './charactersorting.service';

describe('CharactersortingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersortingService]
    });
  });

  it('should ...', inject([CharactersortingService], (service: CharactersortingService) => {
    expect(service).toBeTruthy();
  }));
});
