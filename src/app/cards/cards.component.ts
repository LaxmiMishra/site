import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardInfo } from '../cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {

  cards: Array<CardInfo>;

  constructor() {
    this.cards = [{
      "cardTitle": "Learning Scala",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function," +
      "higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url" : "https://www.scala-lang.com"
    },
    {
      "cardTitle": "Akka",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function,higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url": "scala-lang"
    },
    {
      "cardTitle": "Spark",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function,higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url": "scala-lang"
    },
    {
      "cardTitle": "Play",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function,higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url": "scala-lang"
    },
    {
      "cardTitle": "NG2",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function,higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url": "scala-lang"
    }, {
      "cardTitle": "Slick",
      "explanation": "In the course you will learn scala from scratch which covers classes, trait, function,higher order functions, pattern matching recursion, map, flatmap and much more.",
      "url": "scala-lang"
    }]

    console.log(this.cards.length)

  }

  ngOnInit() {

  }
}
