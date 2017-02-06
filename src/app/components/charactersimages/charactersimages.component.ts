import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/Character';
import { CharactersView } from '../charactersview';
import { KhapiService } from '../../services/khapi.service';

@Component({
  selector: 'app-charactersimages',
  templateUrl: './charactersimages.component.html',
  styleUrls: ['./charactersimages.component.css']
})
export class CharactersimagesComponent extends CharactersView implements OnInit {

  // showDetails: boolean;
  // selectedCharacter: Character;

  constructor(private khapiService: KhapiService) {
    super();
  }

  ngOnInit() {
  }

  // viewDetails(character: Character) {
  //     this.showDetails = true;
  //     this.selectedCharacter = character;
  //   return false;
  // }
}
