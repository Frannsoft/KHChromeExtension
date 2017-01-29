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

  it('should ...', inject([KhapiService], (service: KhapiService) => {
    expect(service).toBeTruthy();
  }));
});
