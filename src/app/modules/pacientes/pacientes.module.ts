import { NgModule } from '@angular/core';
import { ListpacientesComponent } from './listpacientes/listpacientes.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';
import { SharedModule } from '@shared/shared.module';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { pacientesRoutingModule } from './pacientes-routing.module';
import { ListcitasactComponent } from './listcitasact/listcitasact.component';
import { ListcitashistComponent } from './listcitashist/listcitashist.component';
import { Solicitud1Component } from './solicitud1/solicitud1.component';



@NgModule({
  declarations: [
    ListpacientesComponent,
    ListcitaspendComponent,
    DetailpacienteComponent,
    ListcitasactComponent,
    ListcitashistComponent,
    Solicitud1Component
  ],
  imports: [
    SharedModule,
    pacientesRoutingModule
  ]
})
export class PacientesModule { }
