import { environment as ENV} from "environments/environment";

//-------------------CREAR LAS URLS RESTANTES AQUI------------------
export const API_ROUTES={
    AUTH:{
        LOGIN: `${ENV.urlApi}login`
    }
}