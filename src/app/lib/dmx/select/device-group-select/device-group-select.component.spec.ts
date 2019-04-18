import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceGroupSelectComponent} from './deviceGroup-select.component';

describe('DeviceGroupSelectComponent', () => {
  let component: DeviceGroupSelectComponent;
  let fixture: ComponentFixture<DeviceGroupSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceGroupSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
