import { TestBed } from '@angular/core/testing';

import { DMXPresetService } from './dmx-preset.service';

describe('DMXPresetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXPresetService = TestBed.get(DMXPresetService);
    expect(service).toBeTruthy();
  });
});
