import { Paciente } from "@data/schema/paciente";
import { Observable } from "rxjs";

export abstract class PacienteGateway {
    abstract getByID(id:number): Observable<Paciente>;
    abstract getAll(): Observable <Array<Paciente>>;
}
