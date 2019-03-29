import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackInfosComponent } from './playback-infos.component';

describe('PlaybackInfosComponent', () => {
  let component: PlaybackInfosComponent;
  let fixture: ComponentFixture<PlaybackInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
