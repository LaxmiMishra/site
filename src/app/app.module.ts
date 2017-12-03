import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadtableComponent } from './loadtable/loadtable.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { WhatWeDocardComponent } from './what-we-docard/what-we-docard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    WhatWeDocardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CardComponent, CardsComponent,WhatWeDocardComponent]
})
export class AppModule { }
