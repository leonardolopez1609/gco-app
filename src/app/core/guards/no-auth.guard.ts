import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean{
      const currentUser =this.authService.getUser;
      if(currentUser){
        this.router.navigateByUrl(INTERNAL_ROUTES.IUPACIENTE_DEFINDEX);
        return false;
      }
    
    return true;
  }


  

  }
  

