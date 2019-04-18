import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SongSelectComponent} from './song-select.component';

describe('SongSelectComponent', () => {
  let component: SongSelectComponent;
  let fixture: ComponentFixture<SongSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
