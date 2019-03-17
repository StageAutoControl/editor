import { TestBed } from '@angular/core/testing';

import { DmxPlaygroundService } from './dmx-playground.service';

describe('DmxPlaygroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxPlaygroundService = TestBed.get(DmxPlaygroundService);
    expect(service).toBeTruthy();
  });
});
