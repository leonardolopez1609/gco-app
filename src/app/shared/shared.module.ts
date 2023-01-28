import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';


@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],

  exports:[
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
