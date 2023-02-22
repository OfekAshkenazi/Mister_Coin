import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgChartComponent } from './avg-chart.component';

describe('AvgChartComponent', () => {
  let component: AvgChartComponent;
  let fixture: ComponentFixture<AvgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
