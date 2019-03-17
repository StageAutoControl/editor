import { TestBed } from '@angular/core/testing';

import { DMXAnimationService } from './dmx-animation.service';

describe('DMXAnimationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXAnimationService = TestBed.get(DMXAnimationService);
    expect(service).toBeTruthy();
  });
});
