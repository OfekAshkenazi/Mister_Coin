import { Component, Input } from '@angular/core';
import { MarketPrice } from 'src/app/models/graph.model';

@Component({
  selector: 'market-price-box-list',
  templateUrl: './market-price-box-list.component.html',
  styleUrls: ['./market-price-box-list.component.scss']
})
export class MarketPriceBoxListComponent {
  @Input() prices!: MarketPrice


  ngOnInit() {
    console.log(this.prices)
  }
}
