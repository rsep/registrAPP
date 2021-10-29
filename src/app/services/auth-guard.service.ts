import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService:AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
