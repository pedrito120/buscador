import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {
  user:any;
  constructor(private authServices: AuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    let url = state.url
    return this.checkLogin(url);
  }
  checkLogin(url):boolean{
    if(localStorage.getItem('user')!='null'){
      return true
    }
    this.authServices.redirectUrl = url;
    this.router.navigate(['login']);
    return false;
  }
}
