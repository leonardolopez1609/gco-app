import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleLayout } from '@data/constants/TitleLayout';
import { ACTIVAS_TABLE_DATA } from '@data/constants/pages/Tables/soli-act.const';
import { PENDIENTES_TABLE_DATA } from '@data/constants/pages/Tables/soli-pend.const';
import { CITASACT } from '@data/constants/titles.const';
import { TypesSolis } from '@data/constants/typesSolis';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';
import { Paciente } from '@data/schema/paciente';
import { Solicitud } from '@data/schema/solicitud';
import { AuthService } from '@data/services/api/auth.service';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit{
  //public citas: Solicitud[]=[];
  @Input()dataCitas!: ISoliTable;
  public citasact: TitleLayout = new TitleLayout;
  public paciente: Paciente=this.authService.getUser;
  //public type='activas';
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses, 
    private router: Router,private authService: AuthService, private dataRoute: ActivatedRoute) 
     { 
      this.dataCitas=ACTIVAS_TABLE_DATA;
      //this.type= dataRoute.snapshot.paramMap.get('type');
      //console.log(this.type);
     }

     isData(): boolean {
      if (this.dataCitas.citas.length!=0)
        return true;
      else
        return false;
    }

    //DEBE VALIDAR EL TIPO DE CITA QUE SE PIDE
     cargarSolicitudes(): void {
      console.log(this.paciente)
      this.citasact.text='Citas Activas';
      //this.selectData(this.type);
      this.getSolicitudUseCases.getSolicitudes(this.paciente, this.dataCitas.type).subscribe(
        (solis) => {
          this.dataCitas.citas = solis
          console.log(this.dataCitas.citas);
        });
    }

    selectData(type:string):void {
      switch (type) {
        case 'activas':
          this.dataCitas=ACTIVAS_TABLE_DATA;
          this.citasact.text='Citas Activas';
          break;
        case 'pendientes':
          this.dataCitas=PENDIENTES_TABLE_DATA;
          this.citasact.text='Citas Pendientes';
          break;
        
      }
    }

  ngOnInit(): void {
    //console.log(this.citasact.text)
 
  this.cargarSolicitudes();

  }




}
