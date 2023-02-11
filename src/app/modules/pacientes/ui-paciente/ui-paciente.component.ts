import { Component } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants';
import { ACTIVAS_TABLE_DATA } from '@data/constants/pages/Tables/soli-act.const';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';

@Component({
  selector: 'app-ui-paciente',
  templateUrl: './ui-paciente.component.html',
  styleUrls: ['./ui-paciente.component.css']
})
export class UiPacienteComponent {
  constructor(){
    this.menus=LEFT_NAV_MENUS;
    this.dataCitas=ACTIVAS_TABLE_DATA;
  }
  public menus: IleftNavMenu;
  public dataCitas: ISoliTable;
  //definir los valores de los input


}
