import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-found',
  templateUrl: './transfer-found.component.html',
  styleUrls: ['./transfer-found.component.scss']
})
export class TransferFoundComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  
  @Input() contact!: Contact
  newUser = this.userService.getLoggedinUser()
  amount = 0
  subscription!: Subscription


  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onSaveTransaction() {
    let move = {
      // toId: this.contact
      // to: string,
      // at: Date,
      // amount: number
    }
    this.newUser.moves.push()
  }

}
