import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FooterComponent } from '@layout/footer/footer.component';
import { ContentComponent } from './shared/components/content/content.component';
import { DefaulthomeComponent } from './layout/defaulthome/defaulthome.component';
import { PacienteGateway } from '@data/gateways/paciente-gateway';
import { PacienteService } from '@data/services/api/paciente.service';
import { SolicitudGateway } from '@data/gateways/solicitud-gateway';
import { SolicitudService } from '@data/services/api/solicitud.service';

 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {provide: PacienteGateway,
      useClass: PacienteService

    },
    {provide: SolicitudGateway,
      useClass: SolicitudService

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
