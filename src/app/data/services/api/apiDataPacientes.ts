import { HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment.prod";

export const ApiPacientes= {
    isProduction: environment.production,
    urlApi:environment.urlApi+"pacientes/"
    }