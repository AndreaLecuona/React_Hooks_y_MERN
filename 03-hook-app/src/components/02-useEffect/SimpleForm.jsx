import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState( {
        name: '',
        email: ''
    } );

    const { name, email } = formState;



    //el useEffect es un "efecto secundario" de un cambio
    //si no tiene segundo argumento se ejecuta cada vez que algo en la pagina cambia
    //si el segundo argumento es un array vacío, se ejecuta una sola vez onpage load
    //si el segundo argumento es cierta variable o componente especificado, se ejecuta cuando esa variable o componente cambie
    useEffect( () => {
        console.log('ejecutado onload / onmount');
    }, []);

    useEffect( () => {
        console.log('cambio en formstate');
    }, [ formState ]);

    useEffect( () => {
        console.log('cambio solo en email');
    }, [ email ]);



    const handleInputChange = ( { target} ) => { //desestructuro el event (e)
        // console.log(e.target.name);
        // console.log(e.target.value);

        setformState( {
            ...formState,
            [ target.name ]: target.value //los corchetes son para acceder a la propiedad
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input 
                type="text" 
                name="name" //el name que recibe el event (e)
                className="form-control" 
                placeholder="Tu nombre" 
                autoComplete="off" 
                value={ name } 
                onChange={ handleInputChange }/>
            </div>

            <div className="form-group">
                <input 
                type="text" 
                name="email" //el name que recibe el event (e)
                className="form-control" 
                placeholder="email@example.com" 
                autoComplete="off" 
                value={ email } 
                onChange={ handleInputChange }/>
            </div>

            { (name === 'Luke') && <Message/> }
            {/* los hooks no pueden estar dentro de un condicional, asi que para renderizar condicionalmente, lo incluimos en un componenente y éste es llamado usando un operador ternario o de circuito corto */}

        </>
    )
}
