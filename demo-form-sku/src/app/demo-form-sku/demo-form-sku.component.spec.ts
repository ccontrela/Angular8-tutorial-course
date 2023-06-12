import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuComponent } from './demo-form-sku.component';

describe('DemoFormSkuComponent', () => {
  let component: DemoFormSkuComponent;
  let fixture: ComponentFixture<DemoFormSkuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormSkuComponent]
    });
    fixture = TestBed.createComponent(DemoFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
