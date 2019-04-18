import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SongFrameStateComponent} from './song-frame-state.component';

describe('SongFrameStateComponent', () => {
  let component: SongFrameStateComponent;
  let fixture: ComponentFixture<SongFrameStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongFrameStateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongFrameStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
