
export class Quotes {
    showDetails: boolean;
    constructor(
        public quote: string,
        public author: string,
        public name: string,
        public submissionDate: Date,
        public upVote: number,
        public downVote: number,
        // public smallText: any
    ){
        this.showDetails = false;
    }
}
