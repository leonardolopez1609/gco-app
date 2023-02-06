import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleLayout } from '@data/constants/TitleLayout';
import { DATOSPACIENTE } from '@data/constants/titles.const';
import { Paciente } from '@data/schema/paciente';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';
import { PutPacienteUseCases } from '@data/usecases/paciente/put-paciente-use-cases';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailpaciente',
  templateUrl: './detailpaciente.component.html',
  styleUrls: ['./detailpaciente.component.css']
})
export class DetailpacienteComponent implements OnInit {
  public paciente: Paciente = new Paciente();
  public datospac: TitleLayout = DATOSPACIENTE;


  constructor(private getPacienteUseCases: GetPacienteUseCases,
    private putPacienteUsecases: PutPacienteUseCases,
    private router: Router) { }
  
  cargarPaciente(): void {
    this.getPacienteUseCases.getPacienteByID(this.paciente.idpaciente).subscribe((paciente) => {
      this.paciente = paciente
      console.log(this.paciente);
    });
  }

  updatePaciente(): void {
   
    this.putPacienteUsecases.updatePaciente(this.paciente).subscribe(
      json => {
        this.router.navigate(['paciente/detail'])
        Swal.fire('Paciente Actualizado',`El Paciente ${json.paciente.nombre} ha sido actulizado con éxito!`,'success')
      }
    )
  }


  ngOnInit() {
    this.cargarPaciente();

  }

}
