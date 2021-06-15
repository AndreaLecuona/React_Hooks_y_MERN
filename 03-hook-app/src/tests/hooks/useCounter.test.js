import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";


describe( 'Pruebas en useCounter', () => {

    test('debe retornar los valores por defecto (counter, increment, decrement, reset)', () => {

        //evaluamos el hook a traves del metodo renderHook de la libreria
        const { result } = renderHook( () => useCounter() );

        //como no pase argumentos al useCounter, counter deberia tener el valor por defecto de 1 (que se lo habiamos asignado nosotros cuando lo armamos)
        //result no tiene la info directa obtenida del useCouinter y por eso para acceder a ella, hay que ir a la propiedad .current 
        // console.log( result.current );

        //hacemos las aserciones usando el acceso mediante .current para asegurarnos que devuelva: 1 valor y 3 funciones
        expect( result.current.counter ).toBe( 1 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );
    })

    test('debe tener el counter en 100', () => {

        const { result } = renderHook( () => useCounter( 100 ) );

        expect( result.current.counter ).toBe( 100 );
    })

    test('debe incrementar el counter en 1 unidad', () => {
        //inicializo
        const { result } = renderHook( () => useCounter( 100 ) );
        
        //identifico el increment
        const { increment } = result.current;
        
        //como no puedo usar el increment directamente, importo y uso el metodo .act de la libreria
        //ejecuto la funcion increment
        act( () => {
            increment();
        })

        //identifico el counter (lo identifico en este momento y no al principio porque recién acá deberia haberse modificado)
        const { counter } = result.current;
        //hago asercion para chequear que se haya modificado
        expect( counter ).toBe( 101 );
    })

    test('debe decrementar el counter en 1 unidad', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        })

        const { counter } = result.current;
        expect( counter ).toBe( 99 );
    })

    test('debe resetear el counter a 100', () => {
        const { result } = renderHook( () => useCounter( 100 ));
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        })

        const { counter } = result.current;
        expect( counter ).toBe( 100 );
    })

});