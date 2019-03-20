import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXSceneDetailsComponent} from './dmx-scene-details.component';

describe('DMXSceneDetailsComponent', () => {
  let component: DMXSceneDetailsComponent;
  let fixture: ComponentFixture<DMXSceneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXSceneDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXSceneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
