import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ACTIVAS_NOT_FOUND } from '@data/constants/errors/solicitudes/activas-not-found.const';
import { ACTIVAS_TABLE_DATA } from '@data/constants/pages/Tables/soli-act.const';
import { IErrorCont } from '@data/interfaces/ui/ierror-content.metadata';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';
import { Paciente } from '@data/schema/paciente';
import { AuthService } from '@data/services/api/auth.service';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';

@Component({
  selector: 'app-activas-table',
  templateUrl: './activas-table.component.html',
  styleUrls: ['./activas-table.component.css']
})
export class ActivasTableComponent implements OnInit, OnDestroy {

  public dataCitas: ISoliTable=ACTIVAS_TABLE_DATA;
  public paciente: Paciente;
 
  public dataError!: IErrorCont;

  //------ESTRUCTURAR DE MANERA LIMPIA EL AUTHSERVICE-----------------
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses, 
    private router: Router,private authService: AuthService, private dataRoute: ActivatedRoute) 
     { 
      //this.dataCitas=ACTIVAS_TABLE_DATA;
      this.dataError=ACTIVAS_NOT_FOUND;
      this.paciente=this.authService.getUser;
     }
  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
    this.dataCitas.citas=[];
  }

     isData(): boolean {
      if (this.dataCitas.citas.length!=0)
        return true;
      else
        return false;
    }

    
     cargarSolicitudes(): void {
      
      console.log(this.paciente)
      this.getSolicitudUseCases.getSolicitudes(this.paciente, this.dataCitas.type).subscribe(
        (solis) => {
          this.dataCitas.citas = solis
          console.log(this.dataCitas.citas);
        });
    }

  ngOnInit(): void {
  this.cargarSolicitudes(); 

  }




}