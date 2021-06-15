import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext );

    const handleClick = () => {
        setUser( {} )
    }

    return (
        <div>
            <h1>About screen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
            
            <button 
            className="btn"
            onClick={ handleClick }
            >
                Purge user's data in all pages
            </button>
        </div>
    )
}
