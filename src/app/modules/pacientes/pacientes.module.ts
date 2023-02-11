import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { pacientesRoutingModule } from './pacientes-routing.module';
import { Solicitud1Component } from './solicitud1/solicitud1.component';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';
import { UiPacienteComponent } from './ui-paciente/ui-paciente.component';
import { TestComponent } from './ui-paciente/test/test.component';
import { ActivasTableComponent } from './activas-table/activas-table.component';
import { PendientesTableComponent } from './pendientes-table/pendientes-table.component';
import { HistorialTableComponent } from './historial-table/historial-table.component';



@NgModule({
    declarations: [
        DetailpacienteComponent,
        Solicitud1Component,
        TopbarComponent,
        SidebarComponent,
        FooterComponent,
        DefaulthomeComponent,
        UiPacienteComponent,
        TestComponent,
        ActivasTableComponent,
        PendientesTableComponent,
        HistorialTableComponent
    ],
    imports: [
        SharedModule,
        pacientesRoutingModule
    ]
})
export class PacientesModule { }
