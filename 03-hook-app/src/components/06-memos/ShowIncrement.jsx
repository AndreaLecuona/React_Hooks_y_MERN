import React from 'react'

export const ShowIncrement = React.memo( ( { incrementar } ) => {

    console.log('volví a generarme');

    return (
        <button 
        className="btn btn-success"
        onClick={ () => {
            incrementar( 5 );
        } } >
            Incrementar
        </button>
    )
} );
