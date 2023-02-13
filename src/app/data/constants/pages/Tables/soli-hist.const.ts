import { ISoliTable } from "@data/interfaces/ui/itable-solicitudes.metadata";

export const HISTORIAL_TABLE_DATA: ISoliTable = {
    title: 'Historial Citas',
    txtType: 'binary',
    type:'historial',
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
            name: 'Estado'
        }
    ],
    citas:[]

}