import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleUseRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Caso de uso real del useRef</h1>
            <hr/>

            {/* el useRef nos va a ayudar en casos de error, cuando el componente tarda en cargar los datos de la api y el usuario lo esconde antes que finalice su tarea de cargar las frases */}
            {/* lo vamos a aplicar en el custom hook useFetch */}
            
            {show && <MultipleCustomHooks/>}

            <button className="bt btn-primary mt-5"
            onClick={ () => {
                setShow( !show );
            }}>
                Show/Hide
            </button>
        </div>
    )
}
