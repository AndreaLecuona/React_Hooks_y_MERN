import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'

//Tiene dos usos principales:
// 1.Mandar como callback una función a un componente hijo memorizado (ejemplo con componente ShowIncrement). Evitar que un componente hijo (ShowIncrement) vuelva a renderizarse cada vez que haya un cambio en el componente padre (CallbackHook)
// 2.Cuando la dependencia de un useEffect es una función, se recomienda usar el use callback para que ese effect no se dispare cada vez que se construya o renderiza esa función
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 )
    // };

    //1.
    //este hook es una funcion que crea una versión memorizada de otra función, donde esa otra funcion puede mandarse como argumento y sólo se llama si la dependencia especificada en el hook cambia
    const increment = useCallback( (num) => {
            setCounter( c => c + num)
        },
        [ setCounter ]
    )

    //2.
    useEffect(() => {
        ///???
    }, [increment])


    return (
        <div>
            <h1>useCallback Hook { counter } </h1>
            <hr/>

            <ShowIncrement incrementar={ increment } />

        </div>
    )
}
