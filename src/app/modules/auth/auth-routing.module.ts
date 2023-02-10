import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoAuthGuard } from '@core/guards/no-auth.guard';


const routes: Routes = [
  {
    path:'',component:LoginComponent,canActivate:[NoAuthGuard]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
