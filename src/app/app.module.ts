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
import { ContentComponent } from './layout/content/content.component';
import { DefaulthomeComponent } from './layout/defaulthome/defaulthome.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    DefaulthomeComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
