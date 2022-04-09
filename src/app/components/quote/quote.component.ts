import { Component, OnInit } from '@angular/core';
import {Quotes} from '../../model/Quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  inputQuote :string = "";
  inputAuthor:string="";
  inputPublisher:string="";
//Array for quotes
quotes !: Quotes[]
  constructor() { }

  ngOnInit(): void {
    this.quotes = [
      new Quotes('Sometimes.','Steve Jobs','Atieno',2,1),
      new Quotes('Sometimes.','Steve Jobs','Mishie',2,1)
    ]

  }

  addQuote(){
    this.quotes.push()

  }

}
