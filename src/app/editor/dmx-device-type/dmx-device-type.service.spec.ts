import { TestBed } from '@angular/core/testing';

import { DmxDeviceTypeService } from './dmx-device-type.service';

describe('DmxDeviceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxDeviceTypeService = TestBed.get(DmxDeviceTypeService);
    expect(service).toBeTruthy();
  });
});
