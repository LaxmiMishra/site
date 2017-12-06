import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoadtableComponent } from './loadtable/loadtable.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CardComponent, CardsComponent, NavBarComponent]
})
export class AppModule { }

// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];
