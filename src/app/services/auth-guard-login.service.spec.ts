import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AuthGuardLoginService } from './auth-guard-login.service';

describe('AuthGuardLoginService', () => {
  let service: AuthGuardLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule]
    });
    service = TestBed.inject(AuthGuardLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
