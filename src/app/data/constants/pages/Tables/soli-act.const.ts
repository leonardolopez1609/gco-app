import { ISoliTable } from "@data/interfaces/ui/itable-solicitudes.metadata";

export const ACTIVAS_TABLE_DATA: ISoliTable = {
    type:'activas',
    heads: [
        {
            name: 'Fecha'
        },
        {
            name: 'Horario'
        },
        {
            name: 'Tipo'
        },
        {
            name: 'Consultorio'
        },
        {
            name: 'Observaciones'
        },
        {
            name: 'Multa'
        },
        {
            name: 'Acciones'
        },
    ],
    citas:[]

}