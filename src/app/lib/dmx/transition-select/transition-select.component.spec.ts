import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSelectComponent } from './transition-select.component';

describe('TransitionSelectComponent', () => {
  let component: TransitionSelectComponent;
  let fixture: ComponentFixture<TransitionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
