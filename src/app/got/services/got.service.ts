import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Brandon',
    house: 'Stark'
  },{
    id: uuid(),
    name: 'Daenerys',
    house: 'Targaryen'
  },{
    id: uuid(),
    name: 'Tyrion',
    house: 'Lannister'
  }];


  addCharacter( character : Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
