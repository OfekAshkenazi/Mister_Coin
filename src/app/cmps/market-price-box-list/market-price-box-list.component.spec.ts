import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceBoxListComponent } from './market-price-box-list.component';

describe('MarketPriceBoxListComponent', () => {
  let component: MarketPriceBoxListComponent;
  let fixture: ComponentFixture<MarketPriceBoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPriceBoxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPriceBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
