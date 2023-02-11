import { Component, Input } from '@angular/core';
import { ISoliTable } from '@data/interfaces/ui/itable-solicitudes.metadata';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()dataCitas!: ISoliTable;
  
}
