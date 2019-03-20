import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXDeviceGroupDetailsComponent} from './dmx-device-group-details.component';

describe('DMXDeviceGroupDetailsComponent', () => {
  let component: DMXDeviceGroupDetailsComponent;
  let fixture: ComponentFixture<DMXDeviceGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXDeviceGroupDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
