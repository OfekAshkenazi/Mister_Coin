import { Component, OnInit } from '@angular/core';
import { bitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent {

  constructor(private bitcoinService: bitcoinService) { }
 

  

}
