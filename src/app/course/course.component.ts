
import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() {


   }

  ngOnInit() {
  }

  modalActions = new EventEmitter<string|MaterializeAction>();

   openModal() {
     this.modalActions.emit({action:"modal",params:['open']});
   }
   closeModal() {
     this.modalActions.emit({action:"modal",params:['close']});
   }

}
