import { useState } from "react"


//centraliza la lógica de "contador" para exportarla y reutilizarla en todos los componentes que la necesiten (y asi evitar repetir codigo)
export const useCounter = ( initialState = 1 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 ); 
    }

    const reset = () => {
        setCounter( initialState );
    };

    //flexibilizo aun más, dandole la posibilidad de modificar en cuánto debe crecer o decrecer
    // const increment = ( factor = 1) => {
    //     setCounter( counter + factor );
    // }

    // const decrement = ( factor = 1) => {
    //     setCounter( counter - factor ); 
    // }

    // const reset = () => {
    //     setCounter( initialState );
    // };

    return{
        counter,
        increment,
        decrement,
        reset
    };
}
