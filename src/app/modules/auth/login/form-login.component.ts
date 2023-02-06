import { Component, OnInit } from '@angular/core';
import { CONST_LOGIN_PAGE } from '@data/constants';
import { PutPacienteUseCases } from '@data/usecases/paciente/put-paciente-use-cases';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  public data=CONST_LOGIN_PAGE 
  public loginForm;
  
  constructor(useCasePaciente: PutPacienteUseCases){
    this.loginForm=this.data.FORM;
    }
     get isValidForm(){
      return (this.loginForm.email.isValid()&& this.loginForm.password.isValid());
    }

  
    
    }

