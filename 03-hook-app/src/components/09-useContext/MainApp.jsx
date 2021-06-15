import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'
import './styles.css'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <div className="wrapper">
            <UserContext.Provider value={ {
                user: user, 
                setUser: setUser
                } }>

                <AppRouter/>

            </UserContext.Provider>
        </div>
    )
}

// Agregar el 'Provider' habilita a compartir la informacion entre hijos
// El 'value' es la informacion que voy a compartir a través del useContext que funciona dentro del higher-order component llamado 'UserContext'
// en este caso comienza como un objeto vacío porque lo va a 'llenar' el 'login' y el resultado se va a mostrar en el 'home'