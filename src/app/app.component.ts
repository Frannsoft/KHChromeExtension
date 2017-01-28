import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';
import { KhapiService } from './services/khapi.service';
import { Charactersort } from './models/charactersort.enum';
import { CharactersortingService } from './services/charactersorting.service';
import { CharactersimagesComponent } from './components/charactersimages/charactersimages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeCharacterSort: Charactersort;
  characters: Character[];

  sortOptions: string[];

  constructor(private khapiService: KhapiService,
    private characterSortingService: CharactersortingService) {
    this.activeCharacterSort = Charactersort.KuroganeHammerOrder;

    let keys = Object.keys(Charactersort);
    this.sortOptions = keys.slice(keys.length / 2);
  }

  ngOnInit() {
    // get characters
    this.khapiService.getCharacterMetadata()
      .then(characters => this.characters = characters);
  }

  sortCharacters(characterSortType: string) {

    let sortType: Charactersort = Charactersort[<string>characterSortType];
    console.log(sortType.toString());
    // I like separation of cases by brackets, but vs code is 
    // annoying with warnings here.  That's why they're disabled.
    switch (sortType) {
      case Charactersort.KuroganeHammerOrder: {
        this.characterSortingService.sortByKuroganeHammerSiteOrder(this.characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case Charactersort.DisplayNameAscending: {
        this.characterSortingService.sortByDisplayNameAscending(this.characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case Charactersort.DisplayNameDescending: {
        this.characterSortingService.sortByDisplayNameDescending(this.characters);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      default: {
        console.error('Unexpected activeCharacterSort value of ' + this.activeCharacterSort);
        break;
      }
    }
  }
}

