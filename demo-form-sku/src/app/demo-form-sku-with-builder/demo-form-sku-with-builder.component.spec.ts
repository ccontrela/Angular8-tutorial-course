import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder.component';

describe('DemoFormSkuWithBuilderComponent', () => {
  let component: DemoFormSkuWithBuilderComponent;
  let fixture: ComponentFixture<DemoFormSkuWithBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormSkuWithBuilderComponent]
    });
    fixture = TestBed.createComponent(DemoFormSkuWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
