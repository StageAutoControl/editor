import { TestBed } from '@angular/core/testing';

import { SetListService } from './set-list.service';

describe('SetListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetListService = TestBed.get(SetListService);
    expect(service).toBeTruthy();
  });
});
