import { Component, OnInit } from '@angular/core';
import { TitleLayout } from '@data/constants/TitleLayout';
import { DATOSPACIENTE } from '@data/constants/titles.const';

@Component({
  selector: 'app-detailpaciente',
  templateUrl: './detailpaciente.component.html',
  styleUrls: ['./detailpaciente.component.css']
})
export class DetailpacienteComponent implements OnInit{

  public datospac : TitleLayout = DATOSPACIENTE;
  
  
    ngOnInit() {
  
      
    }

}
