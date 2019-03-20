import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveDMXInputComponent} from './reactive-dmx-input.component';

describe('ReactiveDMXInputComponent', () => {
  let component: ReactiveDMXInputComponent;
  let fixture: ComponentFixture<ReactiveDMXInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveDMXInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDMXInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
