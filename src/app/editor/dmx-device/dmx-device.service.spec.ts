import { TestBed } from '@angular/core/testing';

import { DmxDeviceService } from './dmx-device.service';

describe('DmxDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxDeviceService = TestBed.get(DmxDeviceService);
    expect(service).toBeTruthy();
  });
});
