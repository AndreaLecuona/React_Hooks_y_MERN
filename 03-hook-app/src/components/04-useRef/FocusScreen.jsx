import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

//usos comunes de useRef -> mantener una referencia mutable

//permite cambiar la referencia sin necesidad de volver a renderizar 
export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').focus(); o...
        //document.querySelector('input').select(); que además del focus en el borde, también seleciona el texto
    
        // USO POCO COMUN PERO POSIBLE
        //reemplazo el querySelector anterior con:
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>

            <input
            ref={ inputRef }
            className='form-control'
            type="text"
            placeholder='Tu nombre'
            />

            <button className="btn btn-outline-primary mt-4"
            onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
