/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig({
          prefix: 'khchrext',
          storageType: 'localStorage'
      })],
        providers: [StorageService]
    });
  });

  it('should ...', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));
});
