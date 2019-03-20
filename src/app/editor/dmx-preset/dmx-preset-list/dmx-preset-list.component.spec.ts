import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXPresetListComponent} from './dmx-preset-list.component';

describe('DMXPresetListComponent', () => {
  let component: DMXPresetListComponent;
  let fixture: ComponentFixture<DMXPresetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXPresetListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXPresetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
