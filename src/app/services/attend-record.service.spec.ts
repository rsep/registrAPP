import { TestBed } from '@angular/core/testing';

import { AttendRecordService } from './attend-record.service';

describe('AttendRecordService', () => {
  let service: AttendRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
