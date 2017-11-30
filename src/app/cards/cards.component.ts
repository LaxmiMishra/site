import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardInfo } from '../cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {

  cards:Array<CardInfo>;

  constructor() {
    this.cards = [{
      "cardTitle" : "Scala",
      "explanation" : "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively ",
      "url" : "http://www.scala-lang.com"
    },
    {
      "cardTitle" : "Akka",
      "explanation" : "Scala is a ",
      "url" : "scala-lang"
    },
    {
      "cardTitle" : "Scala",
      "explanation" : "Scala is a ",
      "url" : "scala-lang"
    },
    {
      "cardTitle" : "Scala",
      "explanation" : "Scala is a ",
      "url" : "scala-lang"
    },
    {
      "cardTitle" : "Scala",
      "explanation" : "Scala is a ",
      "url" : "scala-lang"
    },{
      "cardTitle" : "Scala",
      "explanation" : "Scala is a ",
      "url" : "scala-lang"
    }]

    console.log(this.cards.length)

}

  ngOnInit() {

}
}
