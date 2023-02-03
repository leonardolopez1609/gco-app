import { from } from "rxjs";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";
import { DefaultErrorComponent } from "./default-error/default-error.component";

//import components
export const components : any []= [
TitleH1Component,
DefaultErrorComponent
];

//export all components
export * from "./titles/title-h1/title-h1.component";
