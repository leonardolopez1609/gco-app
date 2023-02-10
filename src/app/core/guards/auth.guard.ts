import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   const currentUser = this.authService.getUser;
   if(currentUser){
    return true;
   }
   this.router.navigate([INTERNAL_ROUTES.AUTH_LOGIN],
    { 
      queryParams:{reurnUrl: state.url}
    });
     return false;
  }

  constructor(private authService: AuthService, private router: Router){

  }
  
}
