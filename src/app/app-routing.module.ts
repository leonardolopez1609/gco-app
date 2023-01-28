import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { ListpacientesComponent } from '@modules/pacientes/listpacientes/listpacientes.component';
import { ListcitaspendComponent } from '@modules/pacientes/listcitaspend/listcitaspend.component';
import { ContentComponent } from '@layout/content/content.component';


const routes: Routes = [

  {path:'',component:ContentComponent,
   children: [
     {
      path: '', loadChildren:() => import('@modules/pacientes/pacientes.module').then((m)=> m.PacientesModule)
     }
    
   ]
  }
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