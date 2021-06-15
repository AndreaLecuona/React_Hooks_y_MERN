import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/simulacion-de-array-para-pruebas";


describe( 'Pruebas en TodoList', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    test('debe renderizarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('la lista debe renderizar dos items', () => {
        
        //podemos chequear comparando lengths
        
        // console.log( wrapper.find( 'TodoListItem' ).length );
        expect( wrapper.find( 'TodoListItem' ).length ).toBe( demoTodos.length );
    

        //o podemos chequear que mantenga la misma propiedad
        
        // console.log( wrapper.find( 'TodoListItem' ).at( 0 ).props() );
        expect( wrapper.find( 'TodoListItem' ).at( 0 ).prop( 'handleDelete' ) ).toEqual( expect.any( Function ) );
        
    })
    
})
