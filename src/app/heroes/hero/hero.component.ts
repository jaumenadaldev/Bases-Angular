import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Batman';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void{
    this.name = 'Joker';
  }

  changeAge():void{
    this.age = 50;
  }
  resetForm():void{
    this.name = 'Batman';
    this.age = 30;
  }
}
