import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

//el objetivo del layouteffect es UNA VEZ QUE SE TERMINÓ DE RENDERIZAR MI HTML, permitirme obtener mediciones de tamaños de divs (por ej) o ejecutar codigo 
export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // en un primer momento el valor de data es null o undefined.
    // para validar que tengamos la info y no rompa el programa, usamos un short circuit. Pero necesitamos que el valor evaluado resuelva 'true' o 'false' (no 'null').
    // entonces haciendo la doble negacion de 'null' nos da 'false', y asi lo transformamos a algo evaluable.
    const { quote } = !!data && data[0]; 


    //vamos a mostrar en consola el tamaño final de la caja del párrafo de la frase
    const pTag = useRef();


    //EXTRA: lo muestro en pantalla
    const [boxSize, setboxSize] = useState({});



    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() );

        setboxSize( pTag.current.getBoundingClientRect() );

    }, [quote]) //si el quote cambia quiere decir que la caja del p también cambia, por ende tengo que actualizar la informacion sobre su tamaño



    return (
        <div>
            <h1> Uso de LayoutEffect</h1>
            <hr />

            <blockquote
                className="blockquote"
                ref={pTag}
            >
                <p> {quote} </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
                {/* el initialState es un objeto, por eso hay que convertirlo a json */}
            </pre>

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
