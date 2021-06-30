import React from 'react';

import * as MdIcons from 'react-icons/md'

export const SAdminBarData =[
    {
        title: 'SPERFIL',
        path: '/perfil',
        icon: <MdIcons.MdPerson/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'SPROYECTOS',
        path: '/auditoria',
        icon: <MdIcons.MdPerson/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'SAVANCE ACADEMICO',
        path: '/informe',
        icon: <MdIcons.MdFace/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'SMESAS DE EXAMEN',
        path: '/mesita',
        icon: <MdIcons.MdAccessAlarm/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'SPROFES',
        path:'/listado',
        icon:<MdIcons.MdAccountBox />,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'CUMPLE',
        path:'/cumples',
        icon:<MdIcons.MdPartyMode />,
        cName:'nav-link  btn btn-secondary btn-sm p-0 m-2'
    }

]