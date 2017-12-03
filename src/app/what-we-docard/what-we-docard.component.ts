import { Component, OnInit } from '@angular/core';
import { WhatWeDoCard } from '../cards';

@Component({
  selector: 'app-what-we-docard',
  templateUrl: './what-we-docard.component.html',
  styleUrls: ['./what-we-docard.component.css']
})

export class WhatWeDocardComponent implements OnInit {

  cards: Array<WhatWeDoCard>;

  constructor() {
    this.cards = [{
      "title": "Consulting",
      "icon" : "question_answer",
      "explanation": "We provides consulting over functional programming language like Scala, Java and technologies which exists in it's Akka, Play, Spark",
      "url": "#"
    },
    {
      "title": "Traning",
      "icon" : "menu",
      "explanation": "Scala is a ",
      "url": "#"
    },
    {
      "title": "Development",
      "icon" : "menu",
      "explanation": "Scala is a ",
      "url": "#"
    }]
  }

  ngOnInit() {
  }

}
