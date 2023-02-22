import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceBoxPreviewComponent } from './market-price-box-preview.component';

describe('MarketPriceBoxPreviewComponent', () => {
  let component: MarketPriceBoxPreviewComponent;
  let fixture: ComponentFixture<MarketPriceBoxPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPriceBoxPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPriceBoxPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
