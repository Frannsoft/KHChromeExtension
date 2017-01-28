import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/Character';
import { CharactersView } from '../charactersview';

@Component({
  selector: 'app-characterslist',
  templateUrl: './characterslist.component.html',
  styleUrls: ['./characterslist.component.css']
})
export class CharacterslistComponent extends CharactersView implements OnInit  {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
