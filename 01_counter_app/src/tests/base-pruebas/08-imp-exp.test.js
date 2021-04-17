import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    
    })
    
    test('debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect(heroe).toBe(undefined); //toBe porque es un dato primitivo
    
    })

    test('debe retornar los heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner);

        expect(heroe).toEqual(heroeData);
    
    })

    test('debe retornar los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        expect(heroe.length).toBe(2);
    
    })
    
    //podemos probar qué pasa si el id es mas grande o mas chico de lo que hay
    //podemos probar qué pasa si pongo un owner que no existe
    

})