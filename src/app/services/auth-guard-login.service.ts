import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService {

  constructor(private router: Router, private authService:AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let log = JSON.parse(localStorage.getItem("log"));
    if (!log){
      let status = {'estado':0, 'user': ""};
      localStorage.setItem("log",JSON.stringify(status));
    }
    if (log.estado == 1) {
      this.authService._currentUser = log.user;
      this.router.navigate(["home"]);
    }
    return true;
    } 

}
