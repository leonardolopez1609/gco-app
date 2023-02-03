import { Injectable } from "@angular/core";
import { PacienteGateway } from "@data/gateways/paciente-gateway";
import { Paciente } from "@data/schema/paciente";
import { Observable } from "rxjs";

@Injectable({
providedIn: 'root'
})
//
export class GetPacienteUseCases {
    constructor(private pacienteGateway: PacienteGateway){}

     getPacienteByID(id:number): Observable<Paciente>{
      
       return this.pacienteGateway.getByID(id)
       
     }

     getPacientes(): Observable<Array<Paciente>>{
        return this.pacienteGateway.getAll()
      }

}
