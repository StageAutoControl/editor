import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXSceneListComponent} from './dmx-scene-list.component';

describe('DMXSceneListComponent', () => {
  let component: DMXSceneListComponent;
  let fixture: ComponentFixture<DMXSceneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXSceneListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXSceneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
