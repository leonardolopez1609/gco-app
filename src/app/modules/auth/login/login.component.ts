import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: {
    email: {
      val: string;
      error: string;
      isValid: () => boolean;
    },
    password: {
      val: string;
      error: string;
      isValid: () => boolean;
    };
  };

  isValidForm(){
    return (this.loginForm.email.isValid()&& this.loginForm.password.isValid());

  }

  constructor(){
    this.loginForm={
      email :{
        val:'',
        error: 'El correo es invalido',
        isValid(){
          const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
           //const pattern = [a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?
            return emailRegex.test(this.val);
        }
      },
      password :{
        val:'',
        error: 'Se requiere una contraseña',
        isValid(){
           return this.val.length>0
        }
      }
  
    }
  }


  
}
