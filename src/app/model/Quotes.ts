export class Quotes{
    //seeDetails: boolean;

    constructor(
        public quoteTitle: string,
        public author: string,
        public publisher : string,
        public likes:number,
        public dislikes:number=0

    )
    {
       //this.seeDetails = false
    }
}