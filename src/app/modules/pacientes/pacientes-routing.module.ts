import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { Solicitud1Component } from './solicitud1/solicitud1.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { SolicitudesTableComponent } from '@shared/components/solicitudes-table/solicitudes-table.component';
import { PendientesTableComponent } from './pendientes-table/pendientes-table.component';
import { HistorialTableComponent } from './historial-table/historial-table.component';
import { ActivasTableComponent } from './activas-table/activas-table.component';
const routes: Routes = [
  {path:'',
  redirectTo: "/paciente/index",
    pathMatch: 'full'},
  
  {path:'detail',component:DetailpacienteComponent,canActivate:[AuthGuard]},

  {path:'activas',component:ActivasTableComponent,canActivate:[AuthGuard]},

  {path:'pendientes',component:PendientesTableComponent,canActivate:[AuthGuard]},

  {path:'historial',component:HistorialTableComponent,canActivate:[AuthGuard]},

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
