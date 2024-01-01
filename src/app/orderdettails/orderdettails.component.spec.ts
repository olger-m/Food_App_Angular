import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdettailsComponent } from './orderdettails.component';

describe('OrderdettailsComponent', () => {
  let component: OrderdettailsComponent;
  let fixture: ComponentFixture<OrderdettailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderdettailsComponent]
    });
    fixture = TestBed.createComponent(OrderdettailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
