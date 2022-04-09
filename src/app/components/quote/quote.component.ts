import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from '../../model/Quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input () kuote !: Quotes
  quotes !: Quotes[]
  inputQuote :string = "";
  inputAuthor:string="";
  inputPublisher:string="";


  constructor() { }

  ngOnInit(): void {
    this.quotes =[
      {
        quoteTitle:' first Quote',
        author : 'Jj',
        publisher: 'Atieno',
        likes : 0,
        dislikes:0,
      },
        {
          quoteTitle:' fSometimes',
          author : 'Jj',
          publisher: 'Atieno',
          likes : 10,
          dislikes:11,
        },
        {
          quoteTitle:' fSometimes',
          author : 'Jj',
          publisher: 'Atieno',
          likes : 10,
          dislikes:11,
        },
    ]
   
  }
  //addQuote(){
    //this.quotes.push() }
    addQuote(){
      this.quotes.push(
        {
       quoteTitle: this.inputQuote,
       author:this.inputAuthor,
        publisher:this.inputPublisher,
        likes: 0,
        dislikes: 0
      }
      );
      this.inputQuote=" ",
      this.inputAuthor=" ",
      this.inputPublisher=" "
    }

    deleteQuote(id:number){
      this.quotes = this.quotes.filter((v, i)=> i !== id);
    }


    //Add likes
  //likeQuotes(){ this.kuote.likes ++; }
  
 //Dislikes
 //dislikeQuotes(){this.kuote.dislikes ++;}

   
   

}
