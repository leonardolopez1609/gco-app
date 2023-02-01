import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteGateway } from '@data/gateways/paciente-gateway';
import { Paciente } from '@data/schema/paciente';
import { environment } from 'environments/environment.prod';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends PacienteGateway {
  private url:string = environment.urlApi;
  constructor(private http: HttpClient) {
    super();
  }

  override getByID(id: number): Observable<Paciente> {
   return this.http.get<Paciente>(this.url+id);
  }
  override getAll(): Observable<Paciente[]> {
    throw new Error('Method not implemented.');
  }

 
}
