import React from 'react';

import * as MdIcons from 'react-icons/md'

export const AdminBarData =[
    {
        title: 'PERFIL',
        path: '/perfil',
        icon: <MdIcons.MdPerson/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'ENTREGA',
        path: '/auditoria',
        icon: <MdIcons.MdPerson/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'ADEUDA',
        path: '/audicarrera',
        icon: <MdIcons.MdPerson/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    },
    {
        title: 'LISTADO',
        path: '/personal',
        icon: <MdIcons.MdFace/>,
        cName:'nav-link  btn btn-success btn-sm p-0 m-2'
    }

]