import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceServiceDemoComponent } from './price-service-demo.component';

describe('PriceServiceDemoComponent', () => {
  let component: PriceServiceDemoComponent;
  let fixture: ComponentFixture<PriceServiceDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceServiceDemoComponent]
    });
    fixture = TestBed.createComponent(PriceServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
