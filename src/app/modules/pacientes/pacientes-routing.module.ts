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
import { AuthGuard } from '@core/guards/auth.guard';
import { SolicitudesTableComponent } from '@shared/components/solicitudes-table/solicitudes-table.component';

const routes: Routes = [
  {path:'',
  redirectTo: "/paciente/index",
    pathMatch: 'full'},
 // {path:':pendientes',component:ListcitaspendComponent,canActivate:[AuthGuard]},
  {path:'detail',component:DetailpacienteComponent,canActivate:[AuthGuard]},
  {path:'activas',component:SolicitudesTableComponent,canActivate:[AuthGuard]},
  {path:'pendientes',component:ListcitaspendComponent,canActivate:[AuthGuard]},
  {path:'historial',component:ListcitashistComponent,canActivate:[AuthGuard]},
  {path:'solic1',component:Solicitud1Component,canActivate:[AuthGuard]},
  {path:'index',component:DefaulthomeComponent,canActivate:[AuthGuard]}
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
