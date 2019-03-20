import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXTransitionListComponent} from './dmx-transition-list.component';

describe('DMXTransitionListComponent', () => {
  let component: DMXTransitionListComponent;
  let fixture: ComponentFixture<DMXTransitionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXTransitionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXTransitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
