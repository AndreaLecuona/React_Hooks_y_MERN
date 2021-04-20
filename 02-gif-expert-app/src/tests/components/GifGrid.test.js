import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', () => {
    
    const categoria = '101 Dalmatas';

    test('Debe renderizarse correctamente', () => {

        //simulamos cuál sería el resultado de llamar al custom hook en un estado inicial
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
       
        const wrapper = shallow( <GifGrid categoria={ categoria }/> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar items cuando recibe las imágenes del useFetchGif', () => {
       
        //debemos simular el llamado al custom hook. 
        //Para eso primero se importa el hook, luego se setea jest.mock('path del hook')

        //inventamos una data en el formato que podría recibirla el componente
        const gifs= [{
            id: '123',
            url: 'https://images.app.goo.gl/R4F9rcT6Nhi1ELgo6',
            title: 'Ejemplo'
        }];

        //simulamos el llamado al hook y le ponemos la data inventada como supuesta respuesta
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        //capturo el componente luego del llamado al hook
        const wrapper = shallow( <GifGrid categoria={ categoria }/> );

        // expect( wrapper ).toMatchSnapshot(); //sabemos que funciona por test anterior

        //testeamos que el parrafo 'cargando' no exista
        expect( wrapper.find('p').exists() ).toBe( false );

        //testeamos que se genere un componente GifGridItem
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

});