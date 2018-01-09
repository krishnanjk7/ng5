import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAjaxComponent } from './with-ajax.component';

describe('WithAjaxComponent', () => {
  let component: WithAjaxComponent;
  let fixture: ComponentFixture<WithAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
