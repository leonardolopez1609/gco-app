import { Component, OnInit } from '@angular/core';
import { Paciente } from '@data/schema/paciente';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public paciente:Paciente= new Paciente();
  public type:string = "activas";
  constructor(){}

  
    
    
   
 
  ngOnInit() {
 
  
    }


}
