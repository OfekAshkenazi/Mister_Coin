import { Move } from "./move.model";

export class User {

    public _id?: string = ''
    public moves?: Move[]

    constructor(
        public fullname: string = '',
        public username: string = '',
        public password: number | undefined,
        public balance: number = 100,

    ) {
    }

}
