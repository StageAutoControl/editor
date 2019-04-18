import {TestBed} from '@angular/core/testing';

import {DMXColorVariableService} from './dmx-color-variable.service';

describe('DMXColorVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXColorVariableService = TestBed.get(DMXColorVariableService);
    expect(service).toBeTruthy();
  });
});
