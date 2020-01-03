import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationProduitsComponent } from './administration-produits.component';

describe('AdministrationProduitsComponent', () => {
  let component: AdministrationProduitsComponent;
  let fixture: ComponentFixture<AdministrationProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
