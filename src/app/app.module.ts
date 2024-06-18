import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { GotModule } from './got/got.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    GotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
