import { Component, Input } from '@angular/core';
import { IErrorCont } from '@data/interfaces/ui/ierror-content.metadata';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.css']
})
export class NotFoundErrorComponent {
  @Input() data!: IErrorCont;


}
