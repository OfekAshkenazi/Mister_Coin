import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User, Move } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService

  ) { }

  
  moves !: Move[]
  user!: User
  contact!: Contact
  subscription!: Subscription

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  updateMoves() {
    this.user = this.userService.getUser()
    this.moves = this.user.moves.filter(move => move.toId === this.contact._id)
  }


}
