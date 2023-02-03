import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleLayout } from "@data/constants/TitleLayout";
import { CITASACT } from '@data/constants/titles.const';
import { TypesSolis } from '@data/constants/typesSolis';
import { Paciente } from '@data/schema/paciente';
import { Solicitud } from '@data/schema/solicitud';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';
import { TopbarComponent } from '@layout/topbar/topbar.component';

@Component({
  selector: 'app-listcitasact',
  templateUrl: './listcitasact.component.html',
  styleUrls: ['./listcitasact.component.css']
})
export class ListcitasactComponent implements OnInit{

  public citasAct:Array<Solicitud>=[];
  public citasact: TitleLayout = CITASACT;
  public paciente: Paciente = new Paciente();
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses,private getPacienteUseCases: GetPacienteUseCases, private router: Router) { }


  cargarPaciente(): void {
    this.getPacienteUseCases.getPacienteByID(21).subscribe((paciente) => {
      this.paciente = paciente
      console.log(this.paciente);
    });
  }

  cargarSolicitudes(): void {
    this.getSolicitudUseCases.getSolicitudes(this.paciente,TypesSolis.tAct).subscribe(
      (solis) => {
        this.citasAct = solis
        console.log(this.citasAct);
      });
  }

  ngOnInit() {
    this.cargarPaciente();
    this.cargarSolicitudes();

  }

}
