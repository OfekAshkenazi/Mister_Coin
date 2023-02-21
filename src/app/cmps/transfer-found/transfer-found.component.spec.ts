import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFoundComponent } from './transfer-found.component';

describe('TransferFoundComponent', () => {
  let component: TransferFoundComponent;
  let fixture: ComponentFixture<TransferFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
