import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  contact!: Contact
  subscription!: Subscription

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onBack() {
    this.router.navigateByUrl('/')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  makeAtransaction() {
    this.router.navigateByUrl(`/contact/${this.contact._id}/transaction`)
  }

}
