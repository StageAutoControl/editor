import {TestBed} from '@angular/core/testing';

import {DMXSceneService} from './dmx-scene.service';

describe('DMXSceneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DMXSceneService = TestBed.get(DMXSceneService);
    expect(service).toBeTruthy();
  });
});
