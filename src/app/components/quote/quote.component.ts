import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../model/Quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  num1:number
  lnum:number
  c:number//counter

  required: boolean = true;

    // Quotes Array
    quotes:Quotes[]

    inputQuote :string = "";
    inputAuthor:string="";
    inputPublisher:string="";

      
  constructor() { }
  //delete

  deletingQuote(deleteQuote, index){
    if(deleteQuote){
        let toDelete = confirm("Proceed to delete?")
        
        if(toDelete){
          this.quotes = this.quotes.filter((v, i)=> i !== index);
        }
    }
}

  highlight() {
    this.num1 = 0
    this.lnum = 0

    for(this.c=0 ; this.c < this.quotes.length; this.c++) {
      this.lnum = this.quotes[this.c].likes;
      if(this.lnum > this.num1){this.num1 = this.lnum}
    }
    return  this.num1
  }


  ngOnInit(): void {  
    this.quotes =[
      {
        quoteTitle:'First solve the problem. Then write the code.',
        author : 'John Johnson',
        publisher: 'Atieno',
        postDate: new Date(2022,4,11),
        likes : 0,
        dislikes:0,
      },
       {
        quoteTitle:'Testing leads to failure, and failure leads to understanding.',
        author : 'Burt Rutan',
        publisher: 'AO',
        postDate: new Date(2022,2,2),
        likes : 0,
        dislikes:2,
      },
      
        {
          quoteTitle:"Programming isn't about what you know; it's about what you can figure out",
          author : ' Chris Pine',
          publisher: 'Gama',
          postDate: new Date(2022,4,10),
          likes : 0,
          dislikes:1,
        },
        {
          quoteTitle:'The best error message is the one that never shows up',
          author : 'Thomas Fuchs',
          publisher: 'Atieno',
          postDate: new Date(2022,8,8),
          likes : 0,
          dislikes:5,
        }, 
        {
          quoteTitle:"Don't write better error messages, write code that doesn't need them.",
          author : 'Jaon C. Mc Donald',
          publisher: 'AO',
          postDate: new Date(2021,6,18),
          likes : 20,
          dislikes:1,
        },
        {
          quoteTitle:" The only way to learn a new programming language is by writing programs in it.",
          author : 'Dennis Ritchie',
          publisher: 'Gama',
          postDate: new Date(2022,2,21),
          likes : 0,
          dislikes:2,
        }, 
        

    ]
  }

  
    //this.quotes.push() }
    addQuote(){
      this.quotes.push(
        {
       quoteTitle: this.inputQuote,
       author:this.inputAuthor,
      publisher:this.inputPublisher,
      postDate: new Date(),
      likes: 0,
      dislikes: 0
      }
      );
      this.inputQuote=" ",
      this.inputAuthor=" ",
      this.inputPublisher=" "
    }

}
