import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { ContentComponent } from '@layout/content/content.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';
import { DefaultErrorComponent } from '@shared/components/default-error/default-error.component';


const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  
  {path:'paciente',component:ContentComponent,
   children: [
     {
      path: '', loadChildren:() => import('@modules/pacientes/pacientes.module').then((m)=> m.PacientesModule)
     }
    
    
   ]
  },
  {path:'home',component:DefaulthomeComponent},
  {path:'defaultError',component:DefaultErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
