import { TestBed } from '@angular/core/testing';

import { DogapisService } from './dogapis.service';

describe('DogapisService', () => {
  let service: DogapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
