import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteGateway } from '@data/gateways/paciente-gateway';
import { Paciente } from '@data/schema/paciente';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiPacientes } from './apiDataPacientes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends PacienteGateway{
 
 
  constructor(private http: HttpClient, private router: Router) {
    super();
  }
  
  //RESOLVER A FUTURO LA REDIRECCIÓN AL NO ENCONTRAR EL USUARIO
  override getByID(id: number): Observable<Paciente> {
   return this.http.get<Paciente>(ApiPacientes.urlApi+id).pipe(
    catchError(e =>{
     // this.router.navigate(['/paciente']);
      console.error(e.error.mensaje);
      Swal.fire("Error al buscar al paciente", e.error.mensaje,'error');
      return throwError(() => new Error(e));
    })
   )
  }

  override getAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(ApiPacientes.urlApi);
  }

             

  override update(paciente: Paciente): Observable<any> {
    return this.http.put<any>(ApiPacientes.urlApi+paciente.idpaciente, paciente ,{headers:environment.httpHeaders}).pipe(
      catchError(e =>{
       this.router.navigate(['paciente/detail']);
       console.error(e.error.mensaje);
       Swal.fire("Error al actualizar el paciente", e.error.mensaje,'error');
       return throwError(() => new Error(e));
     })
    )
    
  }
 
}
