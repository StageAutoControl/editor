import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceParamsListComponent} from './device-params-list.component';

describe('DeviceParamsListComponent', () => {
  let component: DeviceParamsListComponent;
  let fixture: ComponentFixture<DeviceParamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceParamsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceParamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
