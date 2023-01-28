import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';

const routes: Routes = [

  {path:'citaspend',component:ListcitaspendComponent},
  {path:'detail',component:DetailpacienteComponent},
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
export class pacientesRoutingModule { }
