import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { LoadtableComponent } from './loadtable/loadtable.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {TrainingComponent} from './training/training.component'

const appRoutes: Routes = [
  { path: 'training', component: 'TrainingComponent' }
  { path: 'training', redirectTo: '/training' }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    NavBarComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent, CardComponent, CardsComponent, NavBarComponent, TrainingComponent]
})


export class AppModule { }
