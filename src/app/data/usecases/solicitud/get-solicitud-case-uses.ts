import { Injectable } from "@angular/core";
import { SolicitudGateway } from "@data/gateways/solicitud-gateway";
import { Paciente } from "@data/schema/paciente";
import { Solicitud } from "@data/schema/solicitud";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class GetSolicitudCaseUses {
    constructor(private solicitudgateway: SolicitudGateway) { }

 getSolicitudes(paciente: Paciente,type: string): Observable<Solicitud[]> {

        return this.solicitudgateway.getAll(paciente,type);

    }

}
