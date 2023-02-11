import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';
import { Paciente } from '@data/schema/paciente';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  public paciente:Paciente= new Paciente();
  @Input()menus!: IleftNavMenu;

 constructor(private router:Router){

 }
   
 


}
