export class Contact {

    public _id?: string = ''
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public imgUrl: string = '',
    ) {
    }

    setId?(id: string = 'c101') {
        this._id = id
    }
}

export interface ContactFilter {
    name: string,
    email: string,
    phone: string,

}
