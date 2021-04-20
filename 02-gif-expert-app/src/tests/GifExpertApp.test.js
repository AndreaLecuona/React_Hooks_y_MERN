import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import {shallow} from 'enzyme';

describe('Pruebas en el GifExpertApp', () => {

    test('Debe renderizarse correctamente ', () => {
        
        const wrapper = shallow( <GifExpertApp/> ); 

        expect( wrapper ).toMatchSnapshot();

    });

    //no hay forma directa de pasarle un state por default para testear
    //por lo tanto modificamos el componenente para flexbilizarlo y darle la chance a otro usuario de pasarle un valor por defecto a categories, y por extension al useState inicial

    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['Aristocats', '101 dalmatians'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
    
    
});