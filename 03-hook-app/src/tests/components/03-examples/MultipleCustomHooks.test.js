import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock( "../../../hooks/useFetch" );
jest.mock( "../../../hooks/useCounter" );



describe( 'Pruebas en MultipleCustomHooks', () => {


    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })


    test('debe renderizarse correctamente', () => {

        //si no especificamos el resultado, el mock da error
        useFetch.mockReturnValue( {
            data: null,
            loading: true,
            error: null
        } );
        
        const wrapper = shallow( <MultipleCustomHooks/> );
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe mostrar la información cuando ya se llamó la API', () => {
        
        //como useFetch ya está testeado y no nos interesa evaluar su implementación sino sus resultados (data), hacemos un mock (simulación)
        // del use fetch y la respuesta (data)
        useFetch.mockReturnValue( {
            data: [{
                author: "Bowie",
                quote: "Let's dance"
            }],
            loading: false,
            error: null
        } );

        //capturamos el componente despues de la respuesta
        const wrapper = shallow( <MultipleCustomHooks/> );

        // console.log(wrapper.html());

        //evaluamos. Puede ser de varias formas: 
        // - (A) por snapshot
        // - (B) buscando clases que no existen ya que lo elementos que las tiene no se renderizan cuando hay data
        // - (C) buscando el texto que deberia estar

        expect( wrapper.find( '.alert' ).exists() ).toBe( false );  // (B)clase alert del loading no deberia existir

        expect( wrapper.find( 'p' ).text().trim() ).toBe( "Let's dance" ); // (C)texto resultado del mock
        expect( wrapper.find( '.blockquote-footer' ).text().trim() ).toBe( "Bowie" );
    })

});