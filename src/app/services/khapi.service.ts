import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Move } from '../models/move';
import { Movement } from '../models/movement';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KhapiService {

  constructor(private http: Http) { }

  // get character metadata for all characters
  getCharacterMetadata(): Promise<Character[]> {
    return this.http.get('http://api.kuroganehammer.com/api/characters')
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.handleError);
  }

  // get all move data for a specific character  
  getCharacterMoveData(id: number): Promise<Move[]> {
    return this.http.get('http://api.kuroganehammer.com/api/characters/' + id + '/moves')
      .toPromise()
      .then(response => response.json() as Move[])
      .catch(this.handleError);
  }

  // get all movement data for a specific character  
  getCharacterMovementData(id: number): Promise<Movement[]> {
    return this.http.get('http://api.kuroganehammer.com/api/characters/' + id + '/movements')
      .toPromise()
      .then(response => response.json() as Movement[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }
}
