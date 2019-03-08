import { TestBed } from '@angular/core/testing';

import { DmxDeviceGroupService } from './dmx-device-group.service';

describe('DmxDeviceGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxDeviceGroupService = TestBed.get(DmxDeviceGroupService);
    expect(service).toBeTruthy();
  });
});
