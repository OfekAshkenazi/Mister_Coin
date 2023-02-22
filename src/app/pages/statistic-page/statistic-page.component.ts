import { Component, OnInit } from '@angular/core';
import { bitcoinService } from 'src/app/services/bitcoin.service';
import { MarketPrice } from 'src/app/models/graph.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent {

  constructor(
    private bitcoinService: bitcoinService
  ) { }

  prices$!: Observable<MarketPrice>

  ngOnInit(): void {
    this.prices$ = this.bitcoinService.getMarketPrice()
  }


}
