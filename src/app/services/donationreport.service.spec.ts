import { TestBed } from '@angular/core/testing';

import { DonationreportService } from './donationreport.service';

describe('DonationreportService', () => {
  let service: DonationreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
