import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';



@NgModule({
  declarations: [...fromComponents.components, NotFoundErrorComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  
  ],

  exports:[
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
