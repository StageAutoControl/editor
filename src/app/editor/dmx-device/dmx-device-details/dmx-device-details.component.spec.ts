import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMXDeviceDetailsComponent } from './dmx-device-details.component';

describe('DMXDeviceDetailsComponent', () => {
  let component: DMXDeviceDetailsComponent;
  let fixture: ComponentFixture<DMXDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMXDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
