import { Component, OnInit } from '@angular/core';
import { Paciente } from '@data/schema/paciente';
import { AuthService } from '@data/services/api/auth.service';
import { GetPacienteUseCases } from '@data/usecases/paciente/get-paciente-use-cases';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public paciente:Paciente= new Paciente();
  constructor(private getPacienteUseCases: GetPacienteUseCases, private authService: AuthService){
    
  }
  
  cargarPaciente():void{
    const currentUser =this.authService.getUser;
    this.getPacienteUseCases.getPacienteByID(currentUser.idpaciente).subscribe((paciente)=> {this.paciente=paciente});
    
   }

   logouth(){
    this.authService.logouth();
  }
 
  ngOnInit() {
  this.cargarPaciente();
  
    }

  }