import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaySingleButtonComponent} from './playback-button.component';

describe('PlaybackButtonComponent', () => {
  let component: PlaySingleButtonComponent;
  let fixture: ComponentFixture<PlaySingleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaySingleButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySingleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
