import React from 'react';
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en TodoAdd', () => {

    const handleAdd = jest.fn();

    const wrapper = shallow( 
        <TodoAdd
            handleAdd={ handleAdd }
        /> 
    );

    test('debe renderizarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('cuando NO paso un valor a descripcion, el submit formulario no debe llegar a llamar a handleAdd', () => {
        //si no le paso valor a desc, entonces al hacer submit, se pone en juego el e.preventdefault y la validacion de campo vacío,
        //  lo cual hace que se detenga el submit y no se llegue a llamar a handleAdd dandole un argumento desc vacío

        //puede hacerse simulando el submit (como ya hicimos en otra prueba)
        //o puede hacerse referenciando al submit como propiedad:
        const formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );

        //si chequeamos en consola, vemos que esta constante se considera una función
        //console.log(formSubmit); //devuelve [Function: handleSubmit]

        //podemos hacer uso entonces, de la constante como función, pero necesitamos pasarle como parámetro la función preventDefault para que la use
        // formSubmit sin argumentos crashea
        // preventDeafult con la desc como objeto vacío, es lo que necesitamos para testear
        formSubmit( { preventDefault(){} } );


        //esperamos que NO sea llamado
        expect( handleAdd ).toHaveBeenCalledTimes( 0 );

    })
    
    test('debe llamar a handleAdd cuando hay un argumento válido', () => {

        //modificamos el valor del input para que tenga algo y no esté vacío
        const value = 'Limpiar...';

        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                value,
                name: 'description'
            }
        } )

        //capturamos y llamamos a la simulacion del evento submit
        const formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );

        formSubmit( { preventDefault(){} } );

        //esperamos que handleAdd haya sido llamado 1 vez
        expect( handleAdd ).toHaveBeenCalledTimes( 1 );

        //esperamos que haya sido llamado con un objeto como argumento:
        //expect( handleAdd ).toHaveBeenCalledWith( expect.any( Object ) ); //no puedo escribirlo así porque un objeto vacío también pasaría
        expect( handleAdd ).toHaveBeenCalledWith( {
            id: expect.any( Number ), //le decimos a jest que no importa el numero que salga acá mientras sea de tipo número (porque en la app esta armado para que siempre sea random, y si testeamos con numero especifico, nos va a hacer fallar las pruebas)
            desc: value,
            done: false
        } )

        //el submit tambien debe llamar el reset() luego de llamar a handleAdd
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );
    })
      
})
