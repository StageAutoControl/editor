import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChangeListFormComponent } from './bar-change-list-form.component';

describe('BarChangeListFormComponent', () => {
  let component: BarChangeListFormComponent;
  let fixture: ComponentFixture<BarChangeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChangeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChangeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
