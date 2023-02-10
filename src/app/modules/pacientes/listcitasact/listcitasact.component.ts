import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleLayout } from "@data/constants/TitleLayout";
import { CITASACT } from '@data/constants/titles.const';
import { TypesSolis } from '@data/constants/typesSolis';
import { Paciente } from '@data/schema/paciente';
import { Solicitud } from '@data/schema/solicitud';
import { AuthService } from '@data/services/api/auth.service';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';
import { TopbarComponent } from '@layout/topbar/topbar.component';

@Component({
  selector: 'app-listcitasact',
  templateUrl: './listcitasact.component.html',
  styleUrls: ['./listcitasact.component.css']
}) 
export class ListcitasactComponent implements OnInit {
//
 public citasAct: Solicitud[]=[];
  public citasact: TitleLayout = CITASACT;
  public paciente: Paciente=this.authService.getUser;
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses,
     private getPacienteUseCases: GetPacienteUseCases, private router: Router,private authService: AuthService) 
     { 
      
     }

 
  cargarPaciente(): void {
    this.getPacienteUseCases.getPacienteByID(this.paciente.idpaciente).subscribe((paciente) => {
      this.paciente = paciente
    });
  }
 
  isData(): boolean {
    if (this.citasAct.length!=0)
      return true;
    else
      return false;
  }
  cargarSolicitudes(): void {
    console.log(this.paciente)
    this.getSolicitudUseCases.getSolicitudes(this.paciente, TypesSolis.tAct).subscribe(
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
