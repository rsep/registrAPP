import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { AttendRecordService } from './attend-record.service';

describe('AttendRecordService', () => {
  let service: AttendRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AttendRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
