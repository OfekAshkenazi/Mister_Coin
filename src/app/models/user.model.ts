export class User {

    public _id?: string = ''
    
    constructor(
        public fullname: string = '',
        public username: string = '',
        public balance: number = 100,
        public moves: Move[]

    ) {
    }

}

export interface Move {
    toId: string,
    to: string,
    at: number,
    amount: number
}