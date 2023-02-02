import { Component } from '@angular/core';
import { Paciente } from '@data/schema/paciente';
import { GetPacienteUseCases } from '@data/usecases/get-paciente-use-cases';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  public paciente:Paciente= new Paciente();
  constructor(private getPacienteUseCases: GetPacienteUseCases){}
  
  cargarPaciente():void{
    this.getPacienteUseCases.getPacienteByID(21).subscribe((paciente)=> {this.paciente=paciente});
    
   }
 
  ngOnInit() {
  this.cargarPaciente();
  
    }

  }