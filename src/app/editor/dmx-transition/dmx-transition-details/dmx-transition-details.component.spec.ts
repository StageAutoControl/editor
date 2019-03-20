import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXTransitionDetailsComponent} from './dmx-transition-details.component';

describe('DMXTransitionDetailsComponent', () => {
  let component: DMXTransitionDetailsComponent;
  let fixture: ComponentFixture<DMXTransitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXTransitionDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXTransitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
