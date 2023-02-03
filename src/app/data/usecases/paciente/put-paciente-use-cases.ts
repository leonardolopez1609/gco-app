import { Injectable } from "@angular/core";
import { PacienteGateway } from "@data/gateways/paciente-gateway";
import { Paciente } from "@data/schema/paciente";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
    })
export class PutPacienteUseCases {

    constructor(private pacienteGateway : PacienteGateway){
    }
    
        updatePaciente(paciente:Paciente): Observable<any>{
      
            return this.pacienteGateway.update(paciente);
            
          }  

    }

