import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback( (num) => {
        setValor( v => v + num )
        },[ setValor ]
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

//DEFINICIONES
// React.memo = se usa para memorizar un valor cuando el argumento de la función encerrada en ( ) es el mismo/no cambia.

// useMemo() = se usa para memorizar un valor cuando una o mas dependencias mantienen su valor/no cambian. 
//              El primer argumento es la función/callback que se vuelve a ejecutar si estas dependencias cambian. 
//              Devuelve una forma memorizada de la función.

// useCallback() = se usa para mantener la referencia a una función (se puede decir que se mantiene la posición de memoria 
//                  de esa función) siempre que sus dependencias se mantengan/no cambien. Devuelve una versión memorizada 
//                  de la función que se le coloque, que será usada en otros lugares del código.