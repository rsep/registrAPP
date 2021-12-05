import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  /* Credenciales Correctas en duro */
  let credServiceSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthService);
    
    /* Crear mockObject */
    credServiceSpy = jasmine.createSpyObj('Credenciales', {
      username: 'rosa.sepulveda',
      password: '1101'
    });
    service = new AuthService(credServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* Prueba a Ejecutar: ver si permite login */
  describe('Permitir Ingreso', () => {
    it('1. El usuario se loguea', () => {
      expect(credServiceSpy).toBeTruthy();
    });
  });
});
