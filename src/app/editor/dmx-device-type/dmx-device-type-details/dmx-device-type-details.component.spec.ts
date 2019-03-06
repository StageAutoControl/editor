import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceTypeDetailsComponent } from './dmx-device-type-details.component';

describe('DmxDeviceTypeDetailsComponent', () => {
  let component: DmxDeviceTypeDetailsComponent;
  let fixture: ComponentFixture<DmxDeviceTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
