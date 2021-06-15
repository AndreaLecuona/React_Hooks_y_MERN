import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

//Vamos a relacionar varios custom hooks
export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);


    //const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { author, quote } = !!data && data[0]; //si hay data la extraigo, evitamos el error de extraerla cuando todavia está en null
                                                //la doble negacion está para asegurarnos que si es null, éste se traduzca a false y no ejecute nada (y por ende no rompa el codigo usando null como dato) --->  !null = true, pero !!null = false (no es null otra vez)


    return (
        <div>
            <h1>Breaking Bad quotes</h1>
            <hr />

            {/* ternario (podría simplificarse creando dos componentes con el div y el blockquote) */}
            {loading ?
                <div className="alert alert-info text-center">
                    Loading...
                </div>
                :
                <blockquote className="blockquote">
                    <p> { quote } </p>
                    <footer className="blockquote-footer"> { author } </footer>
                </blockquote>
            }

            <button className="btn btn-primary" onClick={ increment }>
                Siguiente quote
            </button>

        </div>
    )
}
