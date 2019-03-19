import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSelectorFormComponent } from './device-selector-form.component';

describe('DeviceSelectorFormComponent', () => {
  let component: DeviceSelectorFormComponent;
  let fixture: ComponentFixture<DeviceSelectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSelectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
