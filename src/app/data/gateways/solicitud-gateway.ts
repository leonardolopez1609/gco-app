import { Paciente } from "@data/schema/paciente";
import { Solicitud } from "@data/schema/solicitud";
import { Observable } from "rxjs";

export abstract class SolicitudGateway {
   
    abstract getAll(paciente: Paciente,type: string): Observable <Solicitud[]>;
}