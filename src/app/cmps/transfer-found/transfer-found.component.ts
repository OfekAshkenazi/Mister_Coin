import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-found',
  templateUrl: './transfer-found.component.html',
  styleUrls: ['./transfer-found.component.scss']
})
export class TransferFoundComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  @Input() contact!: Contact
  @Output() updateMoves = new EventEmitter()
  amount!: number
  user!: User

  ngOnInit() {
    this.user = this.userService.getLoggedinUser()
  }

  onSaveTransaction() {
    this.userService.addMove(this.contact, this.amount)
    this.user = this.userService.getLoggedinUser()
    this.amount = 0
    this.updateMoves.emit()
  }

}
