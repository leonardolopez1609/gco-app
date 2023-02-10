export interface IleftNavMenu{
    item:{
        title: string,
        subtitle:string,
        icon: any;
        id: string;
        target:any;
        controls:string;
        label:string;
        links:{
            name: string;
            link?: string;
            method?(): any;
        }[]
    }[]
    
}