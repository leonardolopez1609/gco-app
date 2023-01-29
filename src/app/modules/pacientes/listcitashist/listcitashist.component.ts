import { Component, OnInit } from '@angular/core';
import { TitleLayout } from '@data/constants/TitleLayout';
import { CITASHIST } from '@data/constants/titles.const';

@Component({
  selector: 'app-listcitashist',
  templateUrl: './listcitashist.component.html',
  styleUrls: ['./listcitashist.component.css']
})
export class ListcitashistComponent implements OnInit {
  public citashist : TitleLayout = CITASHIST;
  ngOnInit() {
    
  }

}
