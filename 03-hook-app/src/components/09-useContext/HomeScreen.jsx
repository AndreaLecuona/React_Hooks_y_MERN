import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user, setUser } = useContext(UserContext);

    // console.log(user.city);

    return (
        <div>
            <h1>Home screen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </div>
    )
}

// Para que RECIBA LA INFORMACION, al useContext le pasamos como argumento el higher-order component.
// podemos desesctructurar el valor resultado para ordenar y utilizar mejor la info que necesito

// el home solo usa el 'user' porque quiere MOSTRAR la info
// el login solo usa el 'setUser' porque quiere MODIFICAR la info