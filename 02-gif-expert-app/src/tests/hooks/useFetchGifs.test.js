// import React from 'react';
// import '@testing-library/jest-dom';
// import { GifExpertApp } from '../GifExpertApp';
// import {shallow} from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas del custom hook useFetchGifs', () => {

    test('Debe retornar el estado inicial (data vacía, loading true)', async() => {

        // const { data, loading } = useFetchGifs( 'Aristocats' );
        // console.log(data, loading);

        // no se pueden testear los hooks de esta manera, ya que necesita que el hook esté dentro de un componente.
        //por eso istalamos una librería react-hooks que facilita la obtencion de resultados para hacer aserciones

        // const response = renderHook( () => useFetchGifs( 'Aristocats' ) );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Aristocats' ) );
        const { data, loading } = result.current;
        console.log(data, loading);

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
    
    test('Debe retornar un array de imágenes y loading en false', async() => {
       
        //waitForNextUpdate es una funcion promesa que avisa cuando haya sucedido un cambio en el estado del custom hook
        //hubo que ponerlo en el test anterior ya que sino afectaba el desempeño del siguiente test
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Aristocats' ) );
        
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    

});