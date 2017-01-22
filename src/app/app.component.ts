import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';
import { KhapiService } from './services/khapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  characters: Character[];

  constructor(private khapiService: KhapiService){  }

  ngOnInit() {
    // get characters
    this.khapiService.getCharacterMetadata()
      .then(characters => this.characters = characters);
  }
}

