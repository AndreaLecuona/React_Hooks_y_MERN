import React from 'react';
import { GifGridItem } from "../../components/GifGridItem";
import {shallow} from 'enzyme';


describe('Pruebas en componente GifGridItem', () => {

    const title = 'Ejemplo';
    const url = 'https://images.app.goo.gl/jsTogSW8gkoT9zK46';

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );


    test('Debe mostrar el componente GifGridItem correctamente', () => {

        const wrapper = shallow( <GifGridItem /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe renderizar GifGridItem junto a sus props correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('El componente debe contener un párrafo con el title', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });

    test('El componente debe contener una img con la url y una alt con el title', () => {
        
        const img = wrapper.find('img');
        //console.log( img.html() ); //podemos ver contenido y atributos del elemento
        //console.log( img.props() ); //equivalente pero en idioma react. Muestra las props como objetos
        
        //para ver una prop especifica
        //console.log( img.props().src ); //muestra solo el link
        //console.log( img.prop('src') ); //muestra el img como objeto con propiedades src y alt

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('El div principal del componente debe tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        //console.log( div.prop('className') ); //muestra todas las clases que tiene

        expect( div.hasClass('animate__fadeIn') ).toBe( true );

    });
    

});