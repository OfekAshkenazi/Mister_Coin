import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private router: Router

  ) { }

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>

   ngOnInit() {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

}
