// import React from 'react';
// import { render } from '@testing-library/react';
// import PrimeraApp from '../PrimeraApp';


// La primera app es un componente que renderiza un h1 y un p cuyo texto se envia a través de props llamadas titulo y subtitulo



// describe('pruebas en un componente de react', () => {

//     test('debe mostrar el mensaje "Hola Mundo"', () => {
//         const mensaje = "Hola Mundo";

//         //opcion1
//         const wrapper = render( <PrimeraApp saludo={ mensaje }/>);
//         wrapper.getByText()

//         //opcion2 (la que recomienda)
//         const { getByText } = render( <PrimeraApp saludo={ mensaje }/>);

//         expect( getByText(saludo) ).toBeInTheDocument();

            //se testea el renderizado del componente
            //esta es la versión usando la testing library de react, en el futuro vamos a usar Enzyme
//     })


// MISMA PRUEBA CON ENZYME

//     test('debe mostrar <PrimeraApp> correctamente', () => {
//         const mensaje = "Hola soy Alguien";

//         const wrapper = shallow( <PrimeraApp saludo={ mensaje }/>);

//         expect( wrapper ).toMatchSnapshot();
//     })



// REVISAR COMPONENTES Y PROPS CON ENZYME

//     test('debe mostrar el subtitulo enviado por props', () => {
//         const mensaje = "Hola soy Alguien";
//         const mensaje2 = "Texto de subtitulo";

//         const wrapper = shallow( <PrimeraApp saludo={ mensaje } subtitulo={ mensaje2 }/>);

//         const textoParrafo = wrapper.find('p').text();
//              find es equivalente a querySelector. Luego extrae solo el texto

//         expect( textoParrafo ).toBe( subtitulo );
//     })
    
// });