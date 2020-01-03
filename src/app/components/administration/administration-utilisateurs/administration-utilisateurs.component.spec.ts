import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUtilisateursComponent } from './administration-utilisateurs.component';

describe('AdministrationUtilisateursComponent', () => {
  let component: AdministrationUtilisateursComponent;
  let fixture: ComponentFixture<AdministrationUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
