import { Component } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';

@Component({
  selector: 'app-ui-paciente',
  templateUrl: './ui-paciente.component.html',
  styleUrls: ['./ui-paciente.component.css']
})
export class UiPacienteComponent {
  constructor(){
    this.menus=LEFT_NAV_MENUS;
  }
  public menus: IleftNavMenu;
  //definir los valores de los input


}
