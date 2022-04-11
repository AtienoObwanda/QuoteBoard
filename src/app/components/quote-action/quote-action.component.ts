import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Quotes} from '../../model/Quotes'
@Component({
  selector: 'app-quotes-action',
  templateUrl: './quote-action.component.html',
  styleUrls: ['./quote-action.component.css']
})
export class QuoteActionComponent implements OnInit {
 
    @Input () quote: Quotes;

    @Output() deleteQuote = new EventEmitter<boolean>();

    quoteDelete(deleteyes:boolean){
        this.deleteQuote.emit(deleteyes);
    }
    
  constructor() { }

  //upvotes

  quoteLikes(){
      this.quote.likes++;
  }

  //downvotes

  dislikes(){
      this.quote.dislikes++;
  }

  ngOnInit(): void {
  }

}
