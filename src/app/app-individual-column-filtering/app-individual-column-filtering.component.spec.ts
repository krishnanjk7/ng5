import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIndividualColumnFilteringComponent } from './app-individual-column-filtering.component';

describe('AppIndividualColumnFilteringComponent', () => {
  let component: AppIndividualColumnFilteringComponent;
  let fixture: ComponentFixture<AppIndividualColumnFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIndividualColumnFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIndividualColumnFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
