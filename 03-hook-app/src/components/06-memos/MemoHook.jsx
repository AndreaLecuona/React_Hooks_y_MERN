import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

//Similar al memo, sirve para PREVENIR que un componente vuelva a renderizarse mientras sus ARGUMENTOS sean los mismos.
//es decir, si algo cambia quiero memorizar el nuevo resultado, caso contrario, no se ejecuta y uso el resultado memorizado que ya tenía de la primera ejecución
export const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [display, setDisplay] = useState(true);

    //esta funcion normalmente estaría en otro archivo en una carpeta 'helpers' ya que no depende de este componente, funciona autonomamente
    const procesoPesado = ( iteraciones ) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('ahi va el loop');
        }
        return `${iteraciones} iteraciones realizadas`
    };

    //si el counter cambia necesito ejecutar la funcion que le paso como callback (procesoPesado), para obtener una version actualizada del resultado de esa funcion, y memorizarla
    //de esta manera, el display/hide (que no tiene nada que ver con el procesoPesado) no va a hacer que se vuelva a ejecutar el loop innecesariamente
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

    
    return (
        <div>
            <h1>useMemo hook</h1>
            <h2> Counter: { counter } </h2>
            <hr />

            {/* <p>{procesoPesado( counter )}</p> */}
            {/* reemplazado por: */}
            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-info"
                onClick={increment}>
                +1
            </button>

            <button
            className="btn btn-outline-info"
            onClick={ () => {
                setDisplay( !display );
            }}>
                Display/Hide: {JSON.stringify( display )}
            </button>

        </div>
    )
}