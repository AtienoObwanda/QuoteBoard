import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Quotes} from '../../model/Quotes'
@Component({
  selector: 'app-quotes-details',
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

  //function that increments upvotes

  upVote(){
      this.quote.upVote++;
  }

  //function that increments downvotes

  downVote(){
      this.quote.downVote++;
  }

  ngOnInit(): void {
  }

}
