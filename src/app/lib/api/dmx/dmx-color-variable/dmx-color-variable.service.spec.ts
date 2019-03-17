import { TestBed } from '@angular/core/testing';

import { DmxColorVariableService } from './dmx-color-variable.service';

describe('DmxColorVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxColorVariableService = TestBed.get(DmxColorVariableService);
    expect(service).toBeTruthy();
  });
});
