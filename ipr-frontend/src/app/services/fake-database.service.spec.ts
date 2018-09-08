import { TestBed, inject } from '@angular/core/testing';

import { FakeDatabaseService } from './fake-database.service';

describe('FakeDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeDatabaseService]
    });
  });

  it('should be created', inject([FakeDatabaseService], (service: FakeDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
