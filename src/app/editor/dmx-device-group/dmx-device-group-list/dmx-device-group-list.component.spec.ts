import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceGroupListComponent } from './dmx-device-group-list.component';

describe('DmxDeviceGroupListComponent', () => {
  let component: DmxDeviceGroupListComponent;
  let fixture: ComponentFixture<DmxDeviceGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
