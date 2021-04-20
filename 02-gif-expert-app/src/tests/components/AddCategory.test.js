import React from 'react';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';


describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('Debe renderizarse correctamente', () => {    

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe modificar el texto del input', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        input.simulate('change', {
            target: {
                value: value
            }
        });

        //opcion2 con un <p> en el componente
        //expect(wrapper.find('p').text().trim()).toBe( value );

    });
    
    test('No debe hacer submit automáticamente', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe llamar a setCategories y limpiar el input cuado hace submit', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); //que sea una funcion y no un number o string

        expect( input.prop('value') ).toBe( '' );

    });
    
    
    
});