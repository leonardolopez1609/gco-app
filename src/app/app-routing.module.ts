import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { ContentComponent } from '@layout/content/content.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';


const routes: Routes = [

  {path:'paciente',component:ContentComponent,
   children: [
     {
      path: '', loadChildren:() => import('@modules/pacientes/pacientes.module').then((m)=> m.PacientesModule)
     }
    
   ]
  },
  {path:'',component:DefaulthomeComponent}
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
