import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoadtableComponent } from './loadtable/loadtable.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {TrainingComponent} from './training/training.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'training', component: TrainingComponent },
  { path: '* *', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    NavBarComponent,
    TrainingComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})


export class AppModule { }
