import { Component } from '@angular/core';
import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  public data=CONST_LOGIN_PAGE 
  public loginForm;
  
     get isValidForm(){
      return (this.loginForm.email.isValid()&& this.loginForm.password.isValid());
    }
  
    constructor(){
      this.loginForm=this.data.FORM;
      }
    }

