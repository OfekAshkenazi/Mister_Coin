import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { bitcoinService } from 'src/app/services/bitcoin.service';
import { Router } from '@angular/router';

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

  user!: User
  bitCoinExgRate!: number | any
  logedInUser = ''
  async ngOnInit() {
    this.user = this.userService.getUser()
    try {
      this.logedInUser = this.userService.getLoggedinUser()
      console.log(this.logedInUser)
      if (!this.logedInUser) {
        this.router.navigateByUrl('/signup')
      }

      this.bitCoinExgRate = await this.bitcoinService.getRate()
    } catch (err) {
      console.log('Something went wrong')
    }
  }

  onGoBack() {
    this.router.navigateByUrl('/contact')
  }

}

