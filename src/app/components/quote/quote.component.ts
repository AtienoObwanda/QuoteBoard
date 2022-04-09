import { Component, OnInit } from '@angular/core';
import {Quotes} from '../../model/Quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
//Array for quotes
quotes : Quotes[]=[
  new Quotes('Sometimes.','Steve Jobs','Atieno',2,1),
  new Quotes('Sometimes.','Steve Jobs','Mishie',2,1)
]
  constructor() { }

  ngOnInit(): void {
  }

}
