import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceParamsFormComponent} from './device-params-form.component';

describe('DeviceParamsFormComponent', () => {
  let component: DeviceParamsFormComponent;
  let fixture: ComponentFixture<DeviceParamsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceParamsFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceParamsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
