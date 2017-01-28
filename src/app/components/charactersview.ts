import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/Character';

export class CharactersView {

  @Input()
  characters: Character[];
}
