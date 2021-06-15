import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    return (
        <div>
            <h1>Counter1 {counter1} </h1>
            <h1>Counter2 {counter2} </h1>
            <hr />

            {/* modificar un valor de un state sin modificar el resto */}
            <button className="btn btn-primary" onClick={() => setState( {
                ...state, //copia el estado anterior al nuevo estado
                counter1: counter1 + 1, //sobreescribe el valor que quiero
            } ) }>
                 +1 
            </button>
        </div >
    )
}
