import { TestBed, inject } from '@angular/core/testing';

import { IprdatabaseService } from './iprdatabase.service';

describe('IprdatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IprdatabaseService]
    });
  });

  it('should be created', inject([IprdatabaseService], (service: IprdatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
