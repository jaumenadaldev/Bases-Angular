import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GotService } from '../services/got.service';

@Component({
  selector: 'app-got-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor( private gotService: GotService) {}

  get characters(): Character[]{
    return [...this.gotService.characters];
  }

  onDeleteCharacter( id: string ): void{
    this.gotService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void{
    this.gotService.addCharacter( character );
  }

}
