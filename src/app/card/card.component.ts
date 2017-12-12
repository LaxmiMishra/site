import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { CardInfo } from '../cards';
import 'materialize-css';
import {MaterializeAction} from 'angular2-materialize';
import {courses} from '../courses'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card: CardInfo;

  @Input() index:number;

  constructor() {
  }

  ngOnInit() {
  }

  chooseCourse(index:number) {
    return courses[index];
  }

  modalActions = new EventEmitter<string | MaterializeAction>();

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
}
