import { from } from "rxjs";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";
import { DefaultErrorComponent } from "./default-error/default-error.component";
import { ContentComponent } from "./content/content.component";
import { LateralMenuComponent } from "./lateral-menu/lateral-menu.component";
import { SolicitudesTableComponent } from "./solicitudes-table/solicitudes-table.component";
import { NotFoundErrorComponent } from "./not-found-error/not-found-error.component";

//import components
export const components : any []= [
TitleH1Component,
DefaultErrorComponent,
ContentComponent,
LateralMenuComponent,
SolicitudesTableComponent,
NotFoundErrorComponent
];

//export all components
export * from "./titles/title-h1/title-h1.component";
