import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingInputsComponent } from './timing-inputs.component';

describe('TimingInputsComponent', () => {
  let component: TimingInputsComponent;
  let fixture: ComponentFixture<TimingInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
