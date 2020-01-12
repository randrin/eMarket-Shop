import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraionSousCategoriesComponent } from './administraion-sous-categories.component';

describe('AdministraionSousCategoriesComponent', () => {
  let component: AdministraionSousCategoriesComponent;
  let fixture: ComponentFixture<AdministraionSousCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministraionSousCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministraionSousCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
