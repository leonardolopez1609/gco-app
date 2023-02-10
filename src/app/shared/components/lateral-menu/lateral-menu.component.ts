import { Component, Input } from '@angular/core';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';
import { Paciente } from '@data/schema/paciente';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  public paciente:Paciente= new Paciente();
  public type:string = "activas";
  @Input()menus!: IleftNavMenu;
 
}
