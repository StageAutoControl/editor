import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXPresetDetailsComponent} from './dmx-preset-details.component';

describe('DMXPresetDetailsComponent', () => {
  let component: DMXPresetDetailsComponent;
  let fixture: ComponentFixture<DMXPresetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXPresetDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXPresetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
