import { TestBed } from '@angular/core/testing';

import { DMXDeviceService } from './dmx-device.service';

describe('DMXDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXDeviceService = TestBed.get(DMXDeviceService);
    expect(service).toBeTruthy();
  });
});
