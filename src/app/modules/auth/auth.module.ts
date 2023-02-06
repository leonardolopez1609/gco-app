import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './login/form-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
