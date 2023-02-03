import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';
import { ListcitasactComponent } from './listcitasact/listcitasact.component';
import { ListcitashistComponent } from './listcitashist/listcitashist.component';
import { Solicitud1Component } from './solicitud1/solicitud1.component';

const routes: Routes = [
  {path:'',
  redirectTo: "/paciente/citasact",
    pathMatch: 'full'},
  {path:'citaspend',component:ListcitaspendComponent},
  {path:'detail',component:DetailpacienteComponent},
  {path:'activas',component:ListcitasactComponent},
  {path:'citashist',component:ListcitashistComponent},
  {path:'solic1',component:Solicitud1Component}
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
