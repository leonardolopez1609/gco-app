import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONST_LOGIN_PAGE, FORMUSER } from '@data/constants';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { PutPacienteUseCases } from '@data/usecases/paciente/put-paciente-use-cases';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  public data=CONST_LOGIN_PAGE 
  public loginForm;
  public data2=FORMUSER
  constructor(useCasePaciente: PutPacienteUseCases,
   private authService: AuthService,private router: Router){
    this.loginForm=this.data.FORM;
    this.data2.user.correo=this.loginForm.email.val;
    this.data2.user.contrasenia=this.loginForm.password.val;
    }


     get isValidForm(){
      return (this.loginForm.email.isValid()
      //&& this.loginForm.password.isValid()
      );
    }

    authenticated(){
    this.data2.user.correo=this.loginForm.email.val;
    this.data2.user.contrasenia=this.loginForm.password.val;
      console.log(this.data2)
     if(!this.isValidForm){
      return;
     }
     this.authService.login(this.data2.user).subscribe(
      json => {
      this.router.navigateByUrl(INTERNAL_ROUTES.IUPACIENTE_DEFINDEX);
    
     })
    }
     

    
  
    
    }

