import { Consultorio } from "./consultorio";
import { EstadoSolicitud } from "./estado-solicitud";
import { Horario } from "./horario";
import { Multa } from "./multa";
import { Paciente } from "./paciente";
import { TipoSolicitud } from "./tipo-solicitud";

export class Solicitud {
    id?: number;
    fecha: string = "";
    observaciones: string = "";
    paciente?: Paciente;
    consultorio?: Consultorio;
    horario?: Horario ;
    tipo?: TipoSolicitud;
    estado?: EstadoSolicitud;
    multa?: Multa;
   
}
