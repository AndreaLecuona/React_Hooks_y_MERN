import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {

    test('debe retornar la informacion por defecto (el state que consiste en un objeto con propiedades: data, loading y error)', () => {
        
        const { result } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

    })

    test('debe retornar la info pedida después de la espera (data, loading: false, error: null)',  async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        await waitForNextUpdate({timeout:3000}); //agregamos timeout porque como la api tarda en responder, la prueba falla
        const { data, loading, error } = result.current;

        // console.log(data)

        expect( data.length ).toBe( 1 ); //como el objeto trae muchos elementos adentro, subimos un nivel y solo evaluamos que el array contenedor posea 1 objeto
        expect( loading ).toBe( false );
        expect( error ).toBe( null );

    })

    test('debe manejar el error',  async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://reqres.in/api25/users?page=2' ) ); //agrego un error en la url (25)
        await waitForNextUpdate({timeout:3000});//agregamos timeout para que falle por el error que queremos testear
        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No pudo obtenerse la data' );
    })
    
});