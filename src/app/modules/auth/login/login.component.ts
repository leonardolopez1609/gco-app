import { Component } from '@angular/core';
import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public data=CONST_LOGIN_PAGE 
public loginForm;

   get isValidForm(){
    return (this.loginForm.email.isValid()&& this.loginForm.password.isValid());
  }

  constructor(){
    this.loginForm=this.data.FORM;
    }
  }


  

