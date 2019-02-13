import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxDeviceDetailComponent } from './dmx-device-detail.component';

describe('DmxDeviceDetailComponent', () => {
  let component: DmxDeviceDetailComponent;
  let fixture: ComponentFixture<DmxDeviceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxDeviceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
