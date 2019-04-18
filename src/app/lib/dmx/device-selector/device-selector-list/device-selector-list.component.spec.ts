import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceSelectorListComponent} from './device-selector-list.component';

describe('DeviceSelectorListComponent', () => {
  let component: DeviceSelectorListComponent;
  let fixture: ComponentFixture<DeviceSelectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceSelectorListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSelectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
