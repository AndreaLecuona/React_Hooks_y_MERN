import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';


describe( 'Pruebas en HookApp', () => {

    test('Debe renderizarse correctamente', () => {

        const wrapper = shallow( <HookApp/> );

        expect( wrapper ).toMatchSnapshot();
    })

});