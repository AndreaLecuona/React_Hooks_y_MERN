import React from 'react';
import { getGifs } from "../../helpers/getGifs";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Pruebas en helper getGifs fetch', () => {

    test('Debe devolver 10 elementos', async() => {
        
        const gifs = await getGifs('pulp fiction');

        expect( gifs.length ).toBe( 10 );

    });

    test('Debe devolver 0 elementos si no tiene argumentos', async() => {
        
        const gifs = await getGifs('');
        //console.log(gifs);

        expect( gifs.length ).toBe( 0 );

    });
    

});