import { HttpHeaders } from "@angular/common/http";

export const environment = {
production: true,
urlApi: 'http://localhost:8080/gco/',
httpHeaders: new HttpHeaders ({'Content-Type':'application/json'})
}

