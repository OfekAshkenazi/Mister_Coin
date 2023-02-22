import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  user!: User

  ngOnInit(): void {
    this.user = this.userService.getEmptyUser()
  }
  onSaveUser() {
    this.userService.login(this.user)
    this.router.navigateByUrl('/')
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
