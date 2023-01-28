import { NgModule } from '@angular/core';
import { ListpacientesComponent } from './listpacientes/listpacientes.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';
import { SharedModule } from '@shared/shared.module';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { pacientesRoutingModule } from './pacientes-routing.module';



@NgModule({
  declarations: [
    ListpacientesComponent,
    ListcitaspendComponent,
    DetailpacienteComponent
  ],
  imports: [
    SharedModule,
    pacientesRoutingModule
  ]
})
export class PacientesModule { }
