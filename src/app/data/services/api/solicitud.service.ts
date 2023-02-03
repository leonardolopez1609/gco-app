import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudGateway } from '@data/gateways/solicitud-gateway';
import { Paciente } from '@data/schema/paciente';
import { Solicitud } from '@data/schema/solicitud';
import { environment } from 'environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { ApiSolicitud } from './apiDataSolicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends SolicitudGateway {
 

  constructor(private http: HttpClient,private router: Router) {
    super();
  }



  //IMPORTANTE ACTUALIZAR EL TIPO PACIENTE QUE SE RECIBE  EN LOS PARAMETROS (Paciente.Idpaciente)
  override getAll(paciente: Paciente, type: string): Observable<Solicitud[]> {
    return this.http.get(`${ApiSolicitud.urlApi}${type}/${paciente.idpaciente}`,{ headers:environment.httpHeaders}).pipe(
      map((response:any)=>response as Solicitud[] ),
      catchError(e =>{
       //this.router.navigate(['']);
       console.error(e.error.mensaje);
       Swal.fire(`Error al mostrar las citas del tipo ${type}`, e.error.mensaje,'error');
       return throwError(() => new Error(e));
     })
    )
  }
}
