import '@testing-library/jest-dom'; //para que aparezcan los metodos de test sugeridos al tipear

import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar hola Andrea', () => {
        //Arrange
        const nombre = "Andrea";

        //Act
        const saludo = getSaludo( nombre );

        //Assert
        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola Anónimo si no hay argumento nombre', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Anónimo')
    })
    

})