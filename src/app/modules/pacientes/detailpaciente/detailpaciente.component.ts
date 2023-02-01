import { Component, OnInit } from '@angular/core';
import { TitleLayout } from '@data/constants/TitleLayout';
import { DATOSPACIENTE } from '@data/constants/titles.const';
import { Paciente } from '@data/schema/paciente';
import { GetPacienteUseCases } from '@data/usecases/get-paciente-use-cases';

@Component({
  selector: 'app-detailpaciente',
  templateUrl: './detailpaciente.component.html',
  styleUrls: ['./detailpaciente.component.css']
})
export class DetailpacienteComponent implements OnInit{
  public paciente:Paciente= new Paciente();
  public datospac : TitleLayout = DATOSPACIENTE;
  
  constructor(private getPacienteUseCases: GetPacienteUseCases){}
   
   cargarPaciente(){
    this.getPacienteUseCases.getPacienteByID(21).subscribe((data)=> {this.paciente=data});
   }

  ngOnInit() {
  
      
    }

}
