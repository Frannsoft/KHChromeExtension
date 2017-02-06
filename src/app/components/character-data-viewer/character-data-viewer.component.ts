import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move';
import { Movement } from '../../models/movement';
import { Character } from '../../models/character';
import { KhapiService } from '../../services/khapi.service';

@Component({
  selector: 'app-character-data-viewer',
  templateUrl: './character-data-viewer.component.html',
  styleUrls: ['./character-data-viewer.component.css']
})
export class CharacterDataViewerComponent implements OnInit {

  private _character: Character;
  moves: Move[];
  movements: Movement[];

  constructor(private khapiService: KhapiService) { }

  ngOnInit() {
  }

  @Input()
  set character(character: Character) {

    console.log('running');
    this._character = character;

    this.khapiService.getCharacterMoveData(this._character.id).then(data => {
      // alert(data);
      this.moves = data;
    }).catch(reason => console.error(reason));
  }

  get character(): Character {
    return this._character;
  }

  toggleItem(move: Move) {
    move.isShown = !move.isShown;
  }
}
