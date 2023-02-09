import { VALIDATION_ERRORS } from "@data/constants/errors/errors-validatios.const"
import { ENUM_VALIDATION_OPTIONS } from "@data/enum"
import { Ifield } from "@data/interfaces"
import { ValidationsService } from "@shared/services/validations/validations.service"

export const CONST_LOGIN_PAGE:{
    FORM:{
   email: Ifield,
   password: Ifield
    }
 } =
    {
        FORM:{
            email:{
                val:'',
                error: VALIDATION_ERRORS.EMAIL_REQUIRED_FIELD,
                isValid() {
                    const validationService = new ValidationsService();
                    const validationEmail = validationService.validateField(this.val,ENUM_VALIDATION_OPTIONS.EMAIL);
                    this.error= validationEmail.msg;
                    return validationEmail.isValid;
                }
               

        },
        password:{
            val:'',
            error: VALIDATION_ERRORS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const validationService = new ValidationsService();
                const validationPassword = validationService.validateField(this.val,ENUM_VALIDATION_OPTIONS.PASSWORD);
                this.error= validationPassword.msg;
                return validationPassword.isValid;
            }

    }
    }
}

export const FORMUSER={
    email:'leonardo@gmail.com',
    password:'123'
}