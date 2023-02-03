import { Consultorio } from "./consultorio";
import { EstadoSolicitud } from "./estado-solicitud";
import { Horario } from "./horario";
import { Multa } from "./multa";
import { Paciente } from "./paciente";
import { TipoSolicitud } from "./tipo-solicitud";

export class Solicitud {
    id: number=0;
    fecha: string = "";
    observaciones: string = "";
    paciente: Paciente= new Paciente;
    consultorio: Consultorio= new Consultorio;
    horario: Horario = new Horario;
    tipoSolicitud: TipoSolicitud= new TipoSolicitud;
    estadoSolicitud: EstadoSolicitud= new EstadoSolicitud;
    multa: Multa = new Multa;
   
}
