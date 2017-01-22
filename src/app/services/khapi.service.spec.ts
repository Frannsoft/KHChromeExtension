/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhapiService } from './khapi.service';

describe('KhapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KhapiService]
    });
  });

  it('should ...', inject([KhapiService], (service: KhapiService) => {
    expect(service).toBeTruthy();
  }));
});
