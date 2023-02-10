import { Injectable } from '@angular/core';
import { VALIDATION_ERRORS } from '@data/constants';
import { ENUM_VALIDATION_OPTIONS } from '@data/enum';
import { IResponseValidation } from '@data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {


  validateField(value: any, type: ENUM_VALIDATION_OPTIONS){
    switch (type) {
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmail(value);
        case ENUM_VALIDATION_OPTIONS.PASSWORD:
          return this.validatePassword(value); 
    }
  }
  constructor() { }

  private validateEmail(v: any): IResponseValidation {
    const r: IResponseValidation = { msg: '', isValid: true };
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    r.isValid = emailRegex.test(v);
    r.msg = (v == '') ? VALIDATION_ERRORS.EMAIL_REQUIRED_FIELD : VALIDATION_ERRORS.EMAIL_INVALID;
    return r;
  }


  private validatePassword(v: any): IResponseValidation {
  const r: IResponseValidation = { msg: '', isValid: true }; 
  //const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,20}$/;
 // r.isValid = emailRegex.test(v);
  r.msg = (v == '') ? VALIDATION_ERRORS.PASSWORD_REQUIRED_FIELD : VALIDATION_ERRORS.PASSWORD_INVALID;
  return r;
  }



}