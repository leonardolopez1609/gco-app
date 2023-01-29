import { Component, OnInit } from '@angular/core';
import { TitleLayout } from '@data/constants/TitleLayout';
import { CITASPEND } from '@data/constants/titles.const';

@Component({
  selector: 'app-listcitaspend',
  templateUrl: './listcitaspend.component.html',
  styleUrls: ['./listcitaspend.component.css']
})
export class ListcitaspendComponent implements OnInit{

  public citaspend : TitleLayout = CITASPEND;
  
  
    ngOnInit() {
  
      
    }
}
