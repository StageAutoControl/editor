import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceGroupDetailsComponent } from './dmx-device-group-details.component';

describe('DmxDeviceGroupDetailsComponent', () => {
  let component: DmxDeviceGroupDetailsComponent;
  let fixture: ComponentFixture<DmxDeviceGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
