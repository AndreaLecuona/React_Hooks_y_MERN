import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {

    const setUser = jest.fn();

    //wrapper mount
    const wrapper = mount( 
        <UserContext.Provider value={ { setUser } }>
        <LoginScreen/>
        </UserContext.Provider>
    )

 
    test('debe renderizarse correctamente', () => {

        expect( 'wrapper' ).toMatchSnapshot();

    })

    test('debe ejecutar el setUser con el argumento esperado', () => {

        //copié el user del componente para respetar las propiedades y valores
        const newUser = {
            name:'Andre',
            city:'Buenos Aires',
            email:'email@email.com'
        }

        //capturo el boton y simulo el evento
        wrapper.find( 'button' ).simulate( 'click' );
        //opcion 2:
        // wrapper.find( 'button' ).prop( 'onClick' )();

        expect( setUser ).toHaveBeenCalledWith( newUser );

    })
    
    
})
