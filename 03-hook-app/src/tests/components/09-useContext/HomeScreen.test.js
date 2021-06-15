import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => {

    const user = { 
        name: 'Ziggy',
        email: 'stardust@spiders.mars'
    }
    
    //si usaramos shallow, solo renderizaría el UserContext con el HomeScreen vacío, NO renderizaría los elementos internos del homeScreen (div, h1, pre, etc.)
    const wrapper = mount( 
        <UserContext.Provider value={ { user } }>
        <HomeScreen/>
        </UserContext.Provider>
    );

    test('debe renderizarse correctamente', () => {

        //si no hubieramos puesto el provider en el wrapper general, esta prueba fallaría porque no tendria acceso a los valores del context que este componente usa
        expect( wrapper ).toMatchSnapshot();

    })
    
})
