import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadtable',
  templateUrl: './loadtable.component.html',
  styleUrls: ['./loadtable.component.css']
})

export class LoadtableComponent implements OnInit {
  flag:boolean;

  bookDetails:Array<BookDetail>;
  constructor() {
    this.flag = false;
    this.bookDetails = [{name:"The lightning thief", author:"Rick Riorden",pages:302},
            {name:"The sea of monisters", author:"Rick Riorden",pages:304},
            {name:"Lucene in action,second adition", author:"Michael Mc.Candless",pages:305},
          {name:"Lucene in action,fir adition", author:"Michael Mc",pages:305},
          {name:"Lucene in action,fir adition", author:"Michael Mc",pages:305}]

          }

  ngOnInit() {
  }

  toggle() {
     if(this.flag == true)
       {this.flag = false}
       else {
         this.flag = true
       }

  }

}

class BookDetail implements Book {
  name: string;
  author: string;
  pages: number;

  constructor(name: string, author: string, pages: number) {
    this.name = name
    this.author = author
    this.pages = pages
  }
}

interface Book {
  name: string,
  author: string,
  pages: number
}
