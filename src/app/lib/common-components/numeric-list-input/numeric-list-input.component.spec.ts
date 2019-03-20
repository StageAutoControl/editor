import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NumericListInputComponent} from './numeric-list-input.component';

describe('NumericListInputComponent', () => {
  let component: NumericListInputComponent;
  let fixture: ComponentFixture<NumericListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumericListInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
