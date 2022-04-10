import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../model/Quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    // Quotes Array
    quotes:Quotes[]=[
        new Quotes('Sometimes life is going to hit you in the head. Dont loose faith.','Steve Jobs','Felista Kiriinya', new Date(2020,1,23),2,1),
        new Quotes('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Faith Mucami',new Date(2020,3,30),4,3),
        new Quotes('Competitions are for horses not artists','Anonymous', 'Eustine whels',new Date(2020,7,23),3,4),
        new Quotes('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt', 'James Racher',new Date(2020,4,10),1,0),
        new Quotes('The way to get started is to quit talking and begin doing','Walt Disney','Harry Thunder',new Date(2020,5,9),9,2),
        new Quotes('Life is what happens when you are making other plans','John Lennon', 'George Whither',new Date(2020,6,12),1,0),
    ]
    
    //function for ading a new quote
    addQuote(quote) {
       
        this.quotes.push(quote)
      }

    //function for toggling small text
    toggleDetails(index) {
        
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }  

    //function for deleting quote

    deletingQuote(deleteQuote, index){
        if(deleteQuote){
            let toDelete =confirm("Are you sure you want to delete this quote?")

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

  
    
    highlightHighest() {
        
        let quotesUpvote = []
        let highestUpVote: number
        for (let j = 0; j < this.quotes.length; j++) {
          quotesUpvote.push(this.quotes[j].upVote)
        }
        
            //The sort callback has to return

            // a negative number if a < b
            // 0 if a === b
            // a positive number if a > b

        quotesUpvote.sort(function (a, b) {
            //if b>a then b-a>0 and will return a positive number
          return b - a
        })
        highestUpVote = quotesUpvote[0]
        return highestUpVote;
      }
    
      
  constructor() { }

  ngOnInit(): void {
  }

}
