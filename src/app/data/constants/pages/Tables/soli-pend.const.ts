import { ISoliTable } from "@data/interfaces/ui/itable-solicitudes.metadata";

export const PENDIENTES_TABLE_DATA: ISoliTable = {
    title: 'Citas Pendientes',
    txtType: 'primary',
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
            name: 'Acciones'
        },
    ],
    citas:[]

}