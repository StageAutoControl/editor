import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXDeviceGroupListComponent} from './dmx-device-group-list.component';

describe('DMXDeviceGroupListComponent', () => {
  let component: DMXDeviceGroupListComponent;
  let fixture: ComponentFixture<DMXDeviceGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXDeviceGroupListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
