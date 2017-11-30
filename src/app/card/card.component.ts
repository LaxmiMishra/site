import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CardInfo } from '../cards';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card:CardInfo;

  constructor() {
  }
  ngOnInit() {
   }
  }
