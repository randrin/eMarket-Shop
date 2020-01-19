import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisponibleComponent } from './products-disponible.component';

describe('ProductsDisponibleComponent', () => {
  let component: ProductsDisponibleComponent;
  let fixture: ComponentFixture<ProductsDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
