import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: false,
    urlApi: 'http://localhost:8080/gco/',
    httpHeaders: new HttpHeaders ({'Content-Type':'application/json'})
    }