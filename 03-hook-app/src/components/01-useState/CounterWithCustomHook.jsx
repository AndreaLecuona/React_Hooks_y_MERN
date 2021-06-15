import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    //importo el custom hook y desestructuro lo que me devuelve para manipularlo más fácil
    const {state, increment, decrement, reset} = useCounter( 100 ); //seteo un estado inicial (o no, y uso el de por defecto)

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr/>

            {/* <button onClick={increment} className="btn btn-success"> +1 </button> Si lo dejo así el hook no funciona porque recibe el event en lugar del numero de factor, ya que el event es el primer argumento de una funcion onClick */}

            <button onClick={ () => increment( 2 )} className="btn btn-success"> +1 </button>
            <button onClick={ reset } className="btn btn-success"> Reset </button>
            <button onClick={ () => decrement( 2 )} className="btn btn-success"> -1 </button>
        </>
    )
}
