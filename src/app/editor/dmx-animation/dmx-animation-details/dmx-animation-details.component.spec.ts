import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXAnimationDetailsComponent} from './dmx-animation-details.component';

describe('DMXAnimationDetailsComponent', () => {
  let component: DMXAnimationDetailsComponent;
  let fixture: ComponentFixture<DMXAnimationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXAnimationDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXAnimationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
