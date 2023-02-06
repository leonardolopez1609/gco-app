import { Injectable } from '@angular/core';
import { ENUM_VALIDATION_OPTIONS } from '@data/enum';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
 

  validateField(value: any, type: ENUM_VALIDATION_OPTIONS){
    switch (ENUM_VALIDATION_OPTIONS) {
      case value:
        
        break;
    
      default:
        break;
    }
  }
  constructor() { }
}
