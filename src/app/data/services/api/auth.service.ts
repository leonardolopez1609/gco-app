import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS_CONST } from '@data/constants';
import { API_ROUTES, INTERNAL_ROUTES } from '@data/constants/routes';
import { IApiUserAuthenticated } from '@data/interfaces';
import { Paciente } from '@data/schema/paciente';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public currentUser: BehaviorSubject<Paciente>;
  public currentUserEmpty: BehaviorSubject<Paciente>;
  public nameUserLS = 'nameUserGCO';

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS)!)
    );
    this.currentUserEmpty = new BehaviorSubject(
      JSON.parse(localStorage.getItem('')!)
    );
  }

  get getUser(): IApiUserAuthenticated {
    return this.currentUser.value;
  }

  login(data: { correo: string;contrasenia: string;}):Observable<any> {
   
    return this.http.post<Paciente>(API_ROUTES.AUTH.LOGIN, data,{ headers: environment.httpHeaders })
      .pipe(
        map(r => {
          this.setUserToLocalStorage(r);
          this.currentUser.next(r)
          console.log(r)
        }
        ),
        catchError(e => {
          Swal.fire("Datos incorrectos",e.error.mensaje,'error');
          return throwError(() => new Error(e));
        })
      )
  }


  //----------CONFIGURAR EL CURRENT USER.NEXT-----------------
  logouth() {
    
    localStorage.removeItem(this.nameUserLS);
    this.router.navigate(['gco/auth']);
    this.currentUser.next(this.currentUserEmpty.value);
     
    //this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  private setUserToLocalStorage(user: IApiUserAuthenticated) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(user));
  }



}
