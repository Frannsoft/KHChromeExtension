import { Injectable } from '@angular/core';
import { Character } from '../models/character';
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

  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }
}
