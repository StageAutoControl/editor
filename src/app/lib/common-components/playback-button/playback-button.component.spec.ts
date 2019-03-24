import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackButtonComponent } from './playback-button.component';

describe('PlaybackButtonComponent', () => {
  let component: PlaybackButtonComponent;
  let fixture: ComponentFixture<PlaybackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
