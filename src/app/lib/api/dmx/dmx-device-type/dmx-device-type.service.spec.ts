import { TestBed } from '@angular/core/testing';

import { DMXDeviceTypeService } from './dmx-device-type.service';

describe('DMXDeviceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXDeviceTypeService = TestBed.get(DMXDeviceTypeService);
    expect(service).toBeTruthy();
  });
});
