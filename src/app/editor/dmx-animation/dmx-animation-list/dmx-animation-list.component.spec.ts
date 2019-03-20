import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXAnimationListComponent} from './dmx-animation-list.component';

describe('DMXAnimationListComponent', () => {
  let component: DMXAnimationListComponent;
  let fixture: ComponentFixture<DMXAnimationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXAnimationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXAnimationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
