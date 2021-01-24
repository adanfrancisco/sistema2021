import React from 'react'
import { AppRouter } from './routers/AppRouter'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { Redirect } from 'react-router-dom'



export const Is93 = () => {
    <Redirect to="/" />
    return (
        <div>
            <AppRouter />
        </div>
    )
}