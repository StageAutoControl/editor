import {TestBed} from '@angular/core/testing';

import {DMXDeviceGroupService} from './dmx-device-group.service';

describe('DMXDeviceGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXDeviceGroupService = TestBed.get(DMXDeviceGroupService);
    expect(service).toBeTruthy();
  });
});
