import { HttpClient } from "@angular/common/http";
import { Paciente } from "@data/schema/paciente";
import { ApiPacientes } from "@data/services/api/apiDataPacientes";
import { GetPacienteUseCases } from "@data/usecases/paciente/get-paciente-use-cases";

export class PacienteSes {


paciente:Paciente=new Paciente;
constructor(public getPaciente:GetPacienteUseCases){}

paciente2=this.getPaciente.getPacienteByID(21).subscribe((paciente) => {
    this.paciente = paciente
}
);


} export{}
