import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';
import { ListcitasactComponent } from './listcitasact/listcitasact.component';
import { ListcitashistComponent } from './listcitashist/listcitashist.component';
import { Solicitud1Component } from './solicitud1/solicitud1.component';
import { UiPacienteComponent } from './ui-paciente/ui-paciente.component';
import { ContentComponent } from '@shared/components/content/content.component';
import { TestComponent } from './ui-paciente/test/test.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';

const routes: Routes = [
  {path:'',
  redirectTo: "/paciente/index",
    pathMatch: 'full'},
  {path:'pendientes',component:ListcitaspendComponent},
  {path:'detail',component:DetailpacienteComponent},
  {path:'activas',component:ListcitasactComponent},
  {path:'historial',component:ListcitashistComponent},
  {path:'solic1',component:Solicitud1Component},
  {path:'index',component:DefaulthomeComponent}
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
