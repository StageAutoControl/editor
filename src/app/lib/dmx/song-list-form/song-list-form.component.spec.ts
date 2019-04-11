import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LedListFormComponent} from './animation-frame-form.component';

describe('LedListFormComponent', () => {
  let component: LedListFormComponent;
  let fixture: ComponentFixture<LedListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LedListFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
