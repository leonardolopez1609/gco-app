import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS_CONST } from '@data/constants';
import { API_ROUTES, INTERNAL_ROUTES } from '@data/constants/routes';
import { IApiUserAuthenticated } from '@data/interfaces';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public currentUser: BehaviorSubject<IApiUserAuthenticated>;
  public nameUserLS = 'nameUserGCO';

  constructor(private http: HttpClient,private router: Router) 
  {
    this.currentUser= new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS)!)
    );
   }

   get getUser(): IApiUserAuthenticated{
    return this.currentUser.value;
   }

  login(
    data:{
     email:string;
     password:string;
    }):Observable<{
    error:boolean,
    msg: string,
    data: any
    }>
  {
 const response = {error:true, msg:ERRORS_CONST.LOGING.ERROR,data:null}
 return this.http.post<any>(API_ROUTES.AUTH.LOGIN,data)
 .pipe(
  map(r=>{
    response.msg=r.msg;
    response.error=r.error;
    response.data=r.data;
    this.setUserToLocalStorage(r.data);
    this.currentUser.next(r.data)
    if(!response.error){
     this.router.navigateByUrl(INTERNAL_ROUTES.IUPACIENTE_DEFINDEX);
    }
    return response
  }
  ),
  catchError(e =>{
 return of(response)
  })
 )
}

logouth(){
  localStorage.removeItem(this.nameUserLS);
  this.currentUser.unsubscribe();
  this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
}

private setUserToLocalStorage(user: IApiUserAuthenticated){
  localStorage.setItem(this.nameUserLS, JSON.stringify(user));
}



}
