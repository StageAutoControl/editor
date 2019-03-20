import {TestBed} from '@angular/core/testing';

import {DMXTransitionService} from './dmx-transition.service';

describe('DMXTransitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXTransitionService = TestBed.get(DMXTransitionService);
    expect(service).toBeTruthy();
  });
});
