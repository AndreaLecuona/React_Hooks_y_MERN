import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

    // SIN custom Hook

    // const [formState, setformState] = useState( {
    //     name: '',
    //     email: '',
    //     password: ''
    // } );

    // const { name, email, password } = formState;

    // const handleInputChange = ( { target } ) => {

    //     setformState( {
    //         ...formState,
    //         [ target.name ]: target.value
    //     });
    // };

    // const handleInputChange = ( { target } ) => {

    //     setformState( {
    //         ...formState,
    //         [ target.name ]: target.value
    //     });
    // };



    // CON custom Hook

    const [formValues, handleInputChange] = useForm( {
        name: '',
        email: '',
        password: ''
    } );

    const { name, email, password } = formValues;

    //ejemplo extra de uso de efecto junto al custom hook
    useEffect(() => {
        console.log('email modificado');
    }, [email])

     //ejemplo extra de submit y visualizacion de los datos provistos por el custom hook
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Tu nombre" 
                autoComplete="off" 
                value={ name } 
                onChange={ handleInputChange }/>
            </div>

            <div className="form-group">
                <input 
                type="text" 
                name="email"
                className="form-control" 
                placeholder="email@example.com" 
                autoComplete="off" 
                value={ email } 
                onChange={ handleInputChange }/>
            </div>

            <div className="form-group">
                <input 
                type="password" 
                name="password"
                className="form-control" 
                placeholder="*****" 
                value={ password } 
                onChange={ handleInputChange }/>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
