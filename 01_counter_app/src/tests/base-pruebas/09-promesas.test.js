import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('pruebas con promesas', () => {

    test('getHeroeByIdAsync debe retornar un hero async ', ( done ) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {

            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    //hay que pasarle 'done' como parámetro para evaluar funciones asyncronas
    //y hay que ubicarlo en el cuerpo, al final de tosos los expect que hagamos
    //el 'done' termina la evaluacion como el 'return' termina la funcion

    test('getHeroeByIdAsync debe retornar un error si el hero id no existe ', ( done ) => {
        const id = 10;

        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe("No se pudo encontrar el héroe") //toBe porque el string es un primitivo
            done();
        })
    });
});