
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
        //toEqual compara dos objetos que tienen propiedades y valores iguales, pero no son el mismo objeto, porque apuntan a distintos lugares en la memoria
    })

    test('getUsuarioActivo debe retornar un objeto con parametro ', () => {
        const nombre = 'Anónimo'

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
    

})