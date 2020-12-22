import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '../componentes/ui/Navbar';
import { AdminRoutes } from './AdminRoutes';
import { ProfeRoutes } from './ProfeRoutes';

export const DashboardRoutes = () => {
    const {legajo} = useSelector(store => store.user)
    return (
        <>
            <Navbar />
        {(legajo==='3')?<AdminRoutes/>:''}
        {(legajo==='1')?<ProfeRoutes/>:''}
            

        </>
    )
}
