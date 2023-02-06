import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { ContentComponent } from '@shared/components/content/content.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';
import { DefaultErrorComponent } from '@shared/components/default-error/default-error.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { UiPacienteComponent } from '@modules/pacientes/ui-paciente/ui-paciente.component';
import { AuthModule } from '@modules/auth/auth.module';

//VERIFICAR PORQUÉ LOGIN REQUIERE COMPONENTE PADRE
const routes: Routes = [

  {
    path: 'paciente', component: UiPacienteComponent,
    children: [
      {
        path: '', loadChildren: () => import('@modules/pacientes/pacientes.module').then((m) => m.PacientesModule)
      }
    ]
  },

  {
    path: 'auth', component: LoginComponent,
    children: [
      {
        path: '',loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
      } 
    ]
  },

  {
    path: '',redirectTo:'/auth',pathMatch:'full'
  }
  ,

  {
    path: '**',redirectTo:'/auth',pathMatch:'full'
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
