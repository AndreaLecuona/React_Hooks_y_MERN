import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

            <Navbar/>

            <Switch>
                <Route exact path="/" component={ HomeScreen }/>
                <Route exact path="/about" component={ AboutScreen }/>
                <Route exact path="/login" component={ LoginScreen }/>

                {/* <Route component={ HomeScreen }/> */}
                <Redirect to="/"/>
            </Switch>

            </div>
        </Router>
    )
}

// El switch renderiza rutas de manera condicional, que en este caso tienen jerarquía de hermanos

//con sólo este router, puedo navegar cambiando la terminacion del path en el url
// si el path no existe, entonces puedo poner un Route SIN PATH como default e indicarle qué quiero renderizar (en este caso es la HomeScreen pero podria ser una 404)
// otra forma para enfrentar path que no existen, es usar el Redirect

// SI NO UTILIZO LA CONDICIÓN EXACT, entonces el home screen (o ruta más general) siempre se 
// pone al final de la lista porque el Route devuelve la PRIMER coincidencia 
// con el path. Si lo pusiera al comienzo, no podría llegar a los otros paths 
// porque siempre la primer coincidencia sería el home