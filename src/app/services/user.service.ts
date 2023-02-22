import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Move, User } from '../models/user.model';
import { storageService } from './async-storage.service';


@Injectable({
    providedIn: 'root'
})

export class UserService {

    private USER_STORAGE_KEY = 'users'
    private STORAGE_KEY_LOGGEDIN_USER = 'user'

    constructor() {
        this._createUsers()
    }

    private _createUsers() {
        let users = storageService.oldGet(this.USER_STORAGE_KEY)
        if (!users || !users.length) {
            users = [
                {
                    _id: "5a566ca",
                    fullname: "Ofek Ashkenazi",
                    username: "ofeka25",
                    password: 123,
                    balance: 100,
                    moves: []
                },
                {
                    _id: "5a5ssss66ca",
                    fullname: "Niv Ashkenazi",
                    username: "niv",
                    password: 123,
                    balance: 100,
                    moves: []
                },
            ]
            storageService.oldSave(this.USER_STORAGE_KEY, users)
        }
    }


    private getUsers() {
        return storageService.oldGet(this.USER_STORAGE_KEY)
    }


    public login(user: User): void {
        const users = this.getUsers()
        const loggedInUser = users.find((currUser: { name: string; }) => currUser.name === user.username)
        if (loggedInUser) this.saveLocalUser(loggedInUser)
        else {
            user = this.save(user)
            this.saveLocalUser(user)
        }
    }

    public saveLocalUser(user: User) {
        sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    }

    private save(user: User): User {
        let users: any = this.getUsers()
        if (user._id) users = users.map((currUser: { _id: string | undefined; }) => currUser._id === user._id ? user : currUser)
        else {
            user._id = makeId()
            users.push(user)
        }
        storageService.oldSave(this.USER_STORAGE_KEY, users)
        return user
    }

    public getLoggedinUser() {
        let user: null | string = sessionStorage.getItem('loogedInUser')
        if (!user) return
        let loggedinUser = JSON.parse(user);
        return loggedinUser
    }

    public getUser(): User {
        return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
    }

    public addMove(contact: Contact, amount: number) {
        const user = this.getUser()
        const move: Move = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount: amount
        } as Move

        user.moves.push(move)
        user.balance -= amount
        this.saveLocalUser(user)
        this.save(user)
    }

}


function makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
