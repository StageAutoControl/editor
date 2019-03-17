import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMXDeviceListComponent } from './dmx-device-list.component';

describe('DMXDeviceListComponent', () => {
  let component: DMXDeviceListComponent;
  let fixture: ComponentFixture<DMXDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMXDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
