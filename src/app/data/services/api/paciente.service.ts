import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteGateway } from '@data/gateways/paciente-gateway';
import { Paciente } from '@data/schema/paciente';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiPacientes } from './apiDataPacientes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends PacienteGateway{
 
  constructor(private http: HttpClient, private router: Router) {
    super();
  }


  override getByID(id: number): Observable<Paciente> {
   return this.http.get<Paciente>(ApiPacientes.urlApi+id).pipe(
    catchError(e =>{
      this.router.navigate(['/home']);
      console.error(e.error.mensaje);
      Swal.fire("Error al buscar al paciente", e.error.mensaje,'error');
      return throwError(() => new Error(e));
    })
   )
  }

  override getAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(ApiPacientes.urlApi);
  }

 
}
