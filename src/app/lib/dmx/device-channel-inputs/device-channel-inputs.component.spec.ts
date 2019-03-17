import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceChannelInputsComponent } from './device-channel-inputs.component';

describe('DeviceChannelInputsComponent', () => {
  let component: DeviceChannelInputsComponent;
  let fixture: ComponentFixture<DeviceChannelInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceChannelInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceChannelInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
