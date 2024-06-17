import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Captain America', 'Thor', 'Hulk', 'Ironman', 'Black Widow', 'Hawkeye'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
