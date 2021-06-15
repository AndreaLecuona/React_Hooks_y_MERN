import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"

// vamos a importar una simulación de array de objetos hecha por nosotros para utilizar en ésta y otras pruebas
import { demoTodos } from "../../fixtures/simulacion-de-array-para-pruebas";


describe( 'Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    let wrapper = shallow( 
        <TodoListItem 
            todo={ demoTodos[0] } 
            index={ 0 } 
            handleDelete={ handleDelete } 
            handleToggle={ handleToggle } 
        /> 
    )


    test('debe renderizarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe llamar a la funcion handleDelete', () => {

        //busco el elemento que ejecuta el llamado a la funcion 
        const button = wrapper.find( 'button' );

        //simulo el evento
        button.simulate( 'click' );

        //espero que haya sido llamado y que haya sido llamado con ese id como argumento
        expect( handleDelete ).toHaveBeenCalled();
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    })

    test('debe llamar a la funcion handleToggle', () => {

        const pText = wrapper.find( 'p' );

        pText.simulate( 'click' );

        expect( handleToggle ).toHaveBeenCalled();
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    })

    test('debe mostrar el texto (contenido del párrafo) correctamente', () => {

        const pText = wrapper.find( 'p' );

        pText.simulate( 'click' );

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
        //espero que el texto resultante sea este
        expect( pText.text().trim() ).toBe( `1. ${ demoTodos[0].desc }` );

    })

    test('el párrafo debe tener un className "complete" cuando el todo tiene su propiedad "done" en true', () => {

        //creo una copia del primer objeto de mi simulacion de array
        const completedTodo = demoTodos[0];
        //a la copia le modifico la propiedad done a true
        completedTodo.done = true;

        //paso la copia modificada como prop y creo un nuevo wrapper para usar
        let wrapper = shallow( 
            <TodoListItem
                todo={ completedTodo } 
                //estas podría borrarlas:
                index={ 0 } 
                handleDelete={ handleDelete } 
                handleToggle={ handleToggle } 
            /> 
        )

        // console.log( wrapper.html() )

        //espero que la clase del parrafo sea complete
        expect( wrapper.find('p').hasClass( 'complete' ) ).toBe( true );

    })
    

})