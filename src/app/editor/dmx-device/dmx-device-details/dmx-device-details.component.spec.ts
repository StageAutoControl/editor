import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceDetailsComponent } from './dmx-device-details.component';

describe('DmxDeviceDetailsComponent', () => {
  let component: DmxDeviceDetailsComponent;
  let fixture: ComponentFixture<DmxDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
