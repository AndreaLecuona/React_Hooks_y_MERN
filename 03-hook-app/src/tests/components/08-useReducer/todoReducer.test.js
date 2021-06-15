import { todoReducer } from "../../../components/08-useReducer/todoReducer"

// vamos a importar una simulación de array de objetos hecha por nosotros para utilizar en ésta y otras pruebas
import { demoTodos } from "../../fixtures/simulacion-de-array-para-pruebas";



describe('Pruebas en TodoReducer', () => {

    test('debe retornar el estado por defecto', () => {
        
        // cuando le paso el argumento del demo array de objetos, aunque no tenga actions debería retornar el demo
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    })

    test('debe agregar un todo', () => {

        // simulo un nuevo todo y una accion agregada
        const newTodo = {
            id: 3,
            desc: 'Buscar...',
            done: false
        };

        const action = {
            type: 'add', //debe respetar el nombre que ya existe en el reducer
            payload: newTodo
        };
        

        //mando los argumentos nuevos al reducer
        const state = todoReducer( demoTodos, action );
    
        // podemos evaluar de forma más específica
        expect( state ).toEqual( [...demoTodos, newTodo] );
        // o de forma más general
        expect( state.length ).toBe( 3 );

    })

    test('debe eliminar un todo', () => {
        
        const action = {
            type: 'delete',
            payload: demoTodos[0].id  //en este caso solo necesita el id
        };

        const state = todoReducer( demoTodos, action );

        //general
        expect( state.length ).toBe( 1 );
        //especifica
        expect( state ).toEqual( [ demoTodos[1] ] );

    })
    
    test('debe modificar el valor de "done" a su contrario (por defecto es false, asi que deberia pasar a ser true)', () => {
        
        const action = {
            type: 'toggle',
            payload: demoTodos[0].id
        };

        const state = todoReducer( demoTodos, action );

        expect( state[0].done ).toBe( true );

        //también se puede evaluar que, en este caso, el otro todo no se modifique
        expect( state[1] ).toEqual( demoTodos[1] );
    })
    
})