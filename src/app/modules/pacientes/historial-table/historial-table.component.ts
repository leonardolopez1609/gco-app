import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HISTORIAL_NOT_FOUND } from '@data/constants/errors/solicitudes/historial-not-found.const';
import { HISTORIAL_TABLE_DATA } from '@data/constants/pages/Tables/soli-hist.const';
import { IErrorCont } from '@data/interfaces/ui/ierror-content.metadata';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';
import { Paciente } from '@data/schema/paciente';
import { AuthService } from '@data/services/api/auth.service';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';

@Component({
  selector: 'app-historial-table',
  templateUrl: './historial-table.component.html',
  styleUrls: ['./historial-table.component.css']
})
export class HistorialTableComponent implements OnInit, OnDestroy {


  public dataCitas!: ISoliTable;
  public paciente: Paciente=this.authService.getUser;
  public dataError!: IErrorCont;
  colorText='binary';

  //------ESTRUCTURAR DE MANERA LIMPIA EL AUTHSERVICE-----------------
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses, 
    private router: Router,private authService: AuthService, private dataRoute: ActivatedRoute) 
     { 
      this.dataCitas=HISTORIAL_TABLE_DATA;
      this.dataError=HISTORIAL_NOT_FOUND;
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
