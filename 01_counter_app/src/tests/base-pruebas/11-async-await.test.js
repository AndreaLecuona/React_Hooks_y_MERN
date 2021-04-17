import { getImagen } from "../../base-pruebas/11-async-await";

describe('pruebas con async-await y fetch', () => {

    test('debe retornar el url de la imagen ', async() => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
    
    })
    //a esta altura podemos forzar el error poniendo una apikey incorrecta  
})