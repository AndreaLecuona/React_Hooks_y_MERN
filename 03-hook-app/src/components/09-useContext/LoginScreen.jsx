import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const newUser = {
        name:'Andre',
        city:'Buenos Aires',
        email:'email@email.com'
    }

    const { user, setUser } = useContext( UserContext );

    return (
        <div>
            <h1>Login screen</h1>
            <hr/>
            <button 
            className="btn"
            onClick={ () => setUser(newUser) }
            >
                Show user's info in all pages
            </button>
        </div>
    )
}

// Para que RECIBA LA INFORMACION, al useContext le pasamos como argumento el higher-order component.
// podemos desesctructurar el valor resultado para ordenar y utilizar mejor la info que necesito

// el home solo usa el 'user' porque quiere MOSTRAR la info
// el login solo usa el 'setUser' porque quiere MODIFICAR la info
