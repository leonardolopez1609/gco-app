import { NgModule } from '@angular/core';
import { ListpacientesComponent } from './listpacientes/listpacientes.component';
import { ListcitaspendComponent } from './listcitaspend/listcitaspend.component';
import { SharedModule } from '@shared/shared.module';
import { DetailpacienteComponent } from './detailpaciente/detailpaciente.component';
import { pacientesRoutingModule } from './pacientes-routing.module';
import { ListcitasactComponent } from './listcitasact/listcitasact.component';
import { ListcitashistComponent } from './listcitashist/listcitashist.component';
import { Solicitud1Component } from './solicitud1/solicitud1.component';
import { DefaultErrorComponent } from "../../shared/components/default-error/default-error.component";
import { AppComponent } from 'app/app.component';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { ContentComponent } from '@shared/components/content/content.component';
import { DefaulthomeComponent } from '@layout/defaulthome/defaulthome.component';
import { UiPacienteComponent } from './ui-paciente/ui-paciente.component';
import { TestComponent } from './ui-paciente/test/test.component';



@NgModule({
    declarations: [
        ListpacientesComponent,
        ListcitaspendComponent,
        DetailpacienteComponent,
        ListcitasactComponent,
        ListcitashistComponent,
        Solicitud1Component,
        TopbarComponent,
        SidebarComponent,
        FooterComponent,
        DefaulthomeComponent,
        UiPacienteComponent,
        TestComponent
    ],
    imports: [
        SharedModule,
        pacientesRoutingModule
    ]
})
export class PacientesModule { }
