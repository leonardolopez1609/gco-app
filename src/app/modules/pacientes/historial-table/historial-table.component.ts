import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ACTIVAS_TABLE_DATA } from '@data/constants/pages/Tables/soli-act.const';
import { PENDIENTES_TABLE_DATA } from '@data/constants/pages/Tables/soli-pend.const';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';
import { Paciente } from '@data/schema/paciente';
import { AuthService } from '@data/services/api/auth.service';
import { GetSolicitudCaseUses } from '@data/usecases/solicitud/get-solicitud-case-uses';

@Component({
  selector: 'app-historial-table',
  templateUrl: './historial-table.component.html',
  styleUrls: ['./historial-table.component.css']
})
export class HistorialTableComponent {


  public dataCitas!: ISoliTable;
  public paciente: Paciente=this.authService.getUser;

  //------ESTRUCTURAR DE MANERA LIMPIA EL AUTHSERVICE-----------------
  constructor(private getSolicitudUseCases: GetSolicitudCaseUses, 
    private router: Router,private authService: AuthService, private dataRoute: ActivatedRoute) 
     { 
      this.dataCitas=PENDIENTES_TABLE_DATA;
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
