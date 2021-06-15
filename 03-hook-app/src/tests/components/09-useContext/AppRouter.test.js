import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en AppRouter', () => {

    const user = { 
        id: 1,
        name: 'Jareth'
    }

    const wrapper = mount( 
        <UserContext.Provider value={ user }>
        <AppRouter/>
        </UserContext.Provider>
    )
    
    test('debe renderizarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
})