import { environment } from "environments/environment.prod";

export const ApiPacientes= {
    isProduction: environment.production,
    urlApi:environment.urlApi+"pacientes/"
    }