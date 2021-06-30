import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '../componentes/ui/Navbar';
import { AdminRoutes } from './AdminRoutes';
import { ProfeRoutes } from './ProfeRoutes';
import { SuperAdminRoutes } from './SuperAdminRoutes';

export const DashboardRoutes = () => {
    const {legajo,dni} = useSelector(store => store.user)
    return (
        <>
            <Navbar />

        {(dni==='23618811')?<SuperAdminRoutes/>:''}
        {(legajo==='3')?<AdminRoutes/>:''}
        {(legajo==='1')?<ProfeRoutes/>:''}
            

        </>
    )
}
