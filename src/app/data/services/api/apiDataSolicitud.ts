import { environment } from "environments/environment.prod";

export const ApiSolicitud= {
    isProduction: environment.production,
    urlApi:environment.urlApi+"solicitudes/"
    }