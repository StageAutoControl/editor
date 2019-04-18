import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceSelectorsFormComponent} from './device-selectors-form.component';

describe('DeviceSelectorsFormComponent', () => {
  let component: DeviceSelectorsFormComponent;
  let fixture: ComponentFixture<DeviceSelectorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceSelectorsFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSelectorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
