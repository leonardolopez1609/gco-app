
import { IleftNavMenu } from "@data/interfaces/ui/ileft-nav-menu.metadata";

export const LEFT_NAV_MENUS: IleftNavMenu =
{
    item: [{

        title: 'Mis Citas',
        subtitle: 'Gestionar mis Citas',
        icon: 'fas fa-fw fa-list',
        id: 'collapseTwo',
        target: '#collapseTwo',
        controls: 'Two',
        label:'headingTwo',
        links: [
            {
                name: 'Solocitar Cita',
                link: 'solic1'
            },
            {
                name: 'Citas Activas',
                link: 'activas'
            },
            {
                name: 'Citas Pendientes',
                link: 'pendientes'
            },
            {
                name: 'Historial',
                link: 'historial'
            }
        ]
    }, {

        title: 'Preguntas Frecuentes',
        subtitle: 'Citas',
        icon: 'fas fa-fw fa-question',
        id: 'collapseUtilities',
        target: '#collapseUtilities',
        controls: 'collapseUtilities',
        label:'headingUtilities',
        links: [
            {
                name: 'Recomendaciones',
                link: '/'
            },
            {
                name: 'Sobre Citas Pendientes',
                link: '/'
            },
            {
                name: 'Sobre las Multas',
                link: '/'
            }
        ]
    }
    ]

}




