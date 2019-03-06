import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceTypeListComponent } from './dmx-device-type-list.component';

describe('DmxDeviceTypeListComponent', () => {
  let component: DmxDeviceTypeListComponent;
  let fixture: ComponentFixture<DmxDeviceTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
