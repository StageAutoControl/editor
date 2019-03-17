import { TestBed } from '@angular/core/testing';

import { DMXPlaygroundService } from './dmx-playground.service';

describe('DMXPlaygroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXPlaygroundService = TestBed.get(DMXPlaygroundService);
    expect(service).toBeTruthy();
  });
});
