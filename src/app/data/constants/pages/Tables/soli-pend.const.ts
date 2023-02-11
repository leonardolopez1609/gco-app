import { ISoliTable } from "@data/interfaces/ui/itable-solicitudes.metadata";

export const PENDIENTES_TABLE_DATA: ISoliTable = {
    type:'pendientes',
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