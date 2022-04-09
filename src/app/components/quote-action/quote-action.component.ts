import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Quotes } from 'src/app/model/Quotes';

@Component({
  selector: 'app-quote-action',
  templateUrl: './quote-action.component.html',
  styleUrls: ['./quote-action.component.css']
})
export class QuoteActionComponent implements OnInit {
  @Input () quote !: Quotes
  

  constructor() { }
 
  ngOnInit(): void {
  }

}
