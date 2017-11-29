import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadtableComponent } from './loadtable/loadtable.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CardComponent, CardsComponent]
})
export class AppModule { }
