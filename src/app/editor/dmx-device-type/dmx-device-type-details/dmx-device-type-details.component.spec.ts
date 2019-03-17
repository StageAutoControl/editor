import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMXDeviceTypeDetailsComponent } from './dmx-device-type-details.component';

describe('DMXDeviceTypeDetailsComponent', () => {
  let component: DMXDeviceTypeDetailsComponent;
  let fixture: ComponentFixture<DMXDeviceTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMXDeviceTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXDeviceTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
