import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

//Sirve para PREVENIR que un componente vuelva a renderizarse mientras sus PROPS sean las mismas. El memo se aplica en el subcomponente que quiero evitar volver a llamar
export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [display, setDisplay] = useState(true);

    //en este caso cuando tocamos esconder/mostrar, el componente small vuelve a ser renderizado/llamado, aunque no tenga nada que ver con la accion que se lleva a cabo. El memo lo colocamos en él
    //este es un caso simple, pero podria ocurrir con las peticiones http, y eso afectaría la performance de la app
    return (
        <div>
            <h1>Memorize</h1>
            <h2> Counter: <Small value={ counter }/> </h2>
            <hr />

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
                {/* los booleanos no se muestran por variable asi que hay que pasarlos a json */}
                Display/Hide: {JSON.stringify( display )}
            </button>

        </div>
    )
}
