import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-charactersimages',
  templateUrl: './charactersimages.component.html',
  styleUrls: ['./charactersimages.component.css']
})
export class CharactersimagesComponent implements OnInit {

  @Input()
  characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
