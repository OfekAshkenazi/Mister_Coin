import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  navOpen: Boolean = false

  openNav() {
    this.navOpen?  this.navOpen = false : this.navOpen = true
  }

}
