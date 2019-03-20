import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXDeviceTypeListComponent} from './dmx-device-type-list.component';

describe('DMXDeviceTypeListComponent', () => {
  let component: DMXDeviceTypeListComponent;
  let fixture: ComponentFixture<DMXDeviceTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXDeviceTypeListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
