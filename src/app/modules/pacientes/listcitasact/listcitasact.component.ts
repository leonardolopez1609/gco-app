import { Component, OnInit } from '@angular/core';
import { TitleLayout } from "@data/constants/TitleLayout";
import { CITASACT } from '@data/constants/titles.const';

@Component({
  selector: 'app-listcitasact',
  templateUrl: './listcitasact.component.html',
  styleUrls: ['./listcitasact.component.css']
})
export class ListcitasactComponent implements OnInit{

public citasact : TitleLayout = CITASACT;


  ngOnInit() {

    
  }

}
