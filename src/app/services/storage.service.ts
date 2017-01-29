import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CharacterSortOption } from '../models/CharacterSortOption';

@Injectable()
export class StorageService {

  localStorageSortTypeKey: string = 'sortType';
  constructor(private localStorageService: LocalStorageService) { }

  getStoredSortOption(): CharacterSortOption {
    return this.localStorageService.get<CharacterSortOption>(this.localStorageSortTypeKey);
  }

  setStoredSortOption(value: CharacterSortOption) {
    this.localStorageService.set(this.localStorageSortTypeKey, value);
  }
}
