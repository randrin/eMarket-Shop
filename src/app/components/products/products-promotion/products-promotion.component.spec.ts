import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPromotionComponent } from './products-promotion.component';

describe('ProductsPromotionComponent', () => {
  let component: ProductsPromotionComponent;
  let fixture: ComponentFixture<ProductsPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
