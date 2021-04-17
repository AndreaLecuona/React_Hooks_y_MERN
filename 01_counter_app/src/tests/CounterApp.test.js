import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp /> ); 
    //puedo subirlo a un scope de nivel mas alto para no repetirlo en cada prueba
    //debería estar solo incializado "let wrapper;" pero de esta forma inicia como undefined y más abajo en tests cuando quiero aplicarle métodos como find() o toMatchSnapshot() nunca aparecen sugeridos y hay que acordarse de memoria los nombres
    //definirlo asi como está y luego igual dentro del beforeEach es opcional, no es buena práctica repetir, pero en este caso es útil

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> ); //lo reinicio antes de cada prueba, de lo contrario (como se ejecutan sincronicamente) las pruebas tomarían como valor inicial el resultado de la prueba anterior, y eso nos daría siempre fallos

    })

    test('Debe mostrar el componenente <CounterApp/> correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('<CounterApp/> debe mostrar el valor por defecto 0', () => {

        const wrapper = shallow( <CounterApp value={ 0 }/> ); //aca debo escribirlo porque le mando un valor especifico al props

        const valorContador = wrapper.find('h2').text().trim();

        expect( valorContador ).toBe( '0' );
    });
    
    test('Debe incrementar en una unidad con el boton +1 ', () => {
       
        wrapper.find('button').at(2).simulate('click'); //efectúo una simulacion de click

        const valorContador = wrapper.find('h2').text().trim(); //identifico el valor del h2 que ahora VA A ESTAR MODIFICADO por el evento simulado anterior (ejecucion sincronica)

        expect( valorContador ).toBe( '1' ); //comparo
    });

    test('Debe decrementar en una unidad con el boton -1 ', () => {
       
        wrapper.find('button').at(0).simulate('click');

        const valorContador = wrapper.find('h2').text().trim();

        expect( valorContador ).toBe( '-1' );
    });

    test('Debe volver el contador al valor por defecto con el boton Reset', () => {
       
        const wrapper = shallow( <CounterApp value={ 100 }/> ); //pedimos un valor original

        wrapper.find('button').at(2).simulate('click'); //simulamos el click +1 y cambiamos ese valor original a 101
        wrapper.find('button').at(2).simulate('click'); //simulamos el click +1 y cambiamos ese valor original a 102
        
        wrapper.find('button').at(1).simulate('click'); //simulamos click del reset

        const valorContador = wrapper.find('h2').text().trim(); //identifico valor de h2

        expect( valorContador ).toBe( '100' ); //comparo
    });
    

});
