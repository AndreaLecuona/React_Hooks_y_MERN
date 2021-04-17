import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses.arr', () => {

    test('retornaArreglo dene retornar un string y un numero ', () => {
        
        const arr = retornaArreglo();
        expect(arr).toEqual(['ABC', 123])

        //opcion 2
        const [ letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })

})