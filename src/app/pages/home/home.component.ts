import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { bitcoinService } from 'src/app/services/bitcoin.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: bitcoinService,
    private router: Router
  ) { }

  bitCoinExgRate$!: Observable<string>
  user!: User
  async ngOnInit() {
    this.user = this.userService.getLoggedinUser()
    try {
      this.bitCoinExgRate$ = this.bitcoinService.getRateStream()
    } catch (err) {
      console.log('Something went wrong')
    }
  }

  onGoBack() {
    this.router.navigateByUrl('/contact')
  }

}

