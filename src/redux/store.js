import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {  authUserReducer } from './pokeUsers'
import { profeMateReducer } from './pokeProfes'
import { audiReducer } from './pokeAuditoria'

let rootReducer = combineReducers({
    user: authUserReducer,
    profe: profeMateReducer,
    auditor:audiReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const STORE = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return STORE
}
