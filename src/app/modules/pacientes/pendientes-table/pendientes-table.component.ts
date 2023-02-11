import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PENDIENTES_NOT_FOUND } from '@data/constants/errors/solicitudes/pendientes-not-found.const';
import { PENDIENTES_TABLE_DATA } from '@data/constants/pages/Tables/soli-pend.const';
import { IErrorCont } from '@data/interfaces/ui/ierror-content.metadata';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';
import { Paciente } from '@data/schema/paciente';
import { AuthService } from '@data/services/api/auth.service';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';

@Component({
  selector: 'app-pendientes-table',
  templateUrl: './pendientes-table.component.html',
  styleUrls: ['./pendientes-table.component.css']
})
export class PendientesTableComponent implements OnInit, OnDestroy{
  public dataCitas!: ISoliTable;
  public paciente: Paciente=this.authService.getUser;
  public dataError!: IErrorCont;

  //------ESTRUCTURAR DE MANERA LIMPIA EL AUTHSERVICE-----------------
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses, 
    private router: Router,private authService: AuthService, private dataRoute: ActivatedRoute) 
     { 
      this.dataCitas=PENDIENTES_TABLE_DATA;
      this.dataError=PENDIENTES_NOT_FOUND;
     }
  ngOnDestroy(): void {
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
