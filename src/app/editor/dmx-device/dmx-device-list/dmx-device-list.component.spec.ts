import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceListComponent } from './dmx-device-list.component';

describe('DmxDeviceListComponent', () => {
  let component: DmxDeviceListComponent;
  let fixture: ComponentFixture<DmxDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
