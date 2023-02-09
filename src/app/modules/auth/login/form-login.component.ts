import { Component, OnInit } from '@angular/core';
import { CONST_LOGIN_PAGE, FORMUSER } from '@data/constants';
import { AuthService } from '@data/services/api/auth.service';
import { PutPacienteUseCases } from '@data/usecases/paciente/put-paciente-use-cases';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  public data=CONST_LOGIN_PAGE 
  public loginForm;
  public data2=FORMUSER
  constructor(useCasePaciente: PutPacienteUseCases,
   private authService: AuthService ){
    this.loginForm=this.data.FORM;
    this.data2.email=this.loginForm.email.val;
    this.data2.password=this.loginForm.password.val;
    }


     get isValidForm(){
      return (this.loginForm.email.isValid()
      //&& this.loginForm.password.isValid()
      );
    }

    authenticated(){
    this.data2.email=this.loginForm.email.val;
    this.data2.password=this.loginForm.password.val;
      console.log(this.data2)
     if(!this.isValidForm){
      return;
     }
     this.authService.login(this.data2).subscribe(r=>{
      console.log(r);
     })
    }

  
    
    }

