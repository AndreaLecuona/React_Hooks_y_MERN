import { act } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/simulacion-de-array-para-pruebas"

describe('pruebas en TodoApp', () => {
    
    const wrapper = shallow( <TodoApp/> );

    //para prueba del localStorage:
    //hacemos que el setItem sea una simulacion de jest
    Storage.prototype.setItem = jest.fn( () => {}) //se puede definir vacía

    test('debe renderizarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    // !!!no sería tan necesaria porque ya lo evaluamos en todoAdd
    test('debe agregar un todo', () => {

        //capturo:
        //el mount sirve para cuando queremos probar nuestro componente en contexto, la app en general
        //tiene todos los mismo metodos que venios usando pero cambia el nivel en que es renderizada la aplicacion.
        //Shallow en más básico, toma sólo el componente aislado. Mount considera sus componentes hijos y el contexto en que se inserta y actúa.
        const wrapper = mount( <TodoApp/> );

        //simulacion de agregar un todo:
        //busco a su componente hijo TodoAdd y en particular su prop handleAdd para ejecutar esa función con el primer item de mi lista simulada (luego lo repito con un segundo item)
        //hay que envolverlo en un act porque ejecutar handleAdd provoca la modificación de un state 
        act( () => {
          
            wrapper.find( 'TodoAdd' ).prop( 'handleAdd' )(demoTodos[0]);
            wrapper.find( 'TodoAdd' ).prop( 'handleAdd' )(demoTodos[1]);

        })

        //aserciones:
        //espero que el h3 muestre el lenght de acuerdo a la cantidad de items agregados
        expect( wrapper.find( 'h3' ).text().trim() ).toBe( 'Pelis por ver: 2' );

        //espero que los items se graben en localStorage
        //no evaluamos que se haya grabado efectivamente, sólo que se haya llamado al método para grabar con nuestra info
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );

    })

    // !!!no sería tan necesaria porque ya lo evaluamos en todoAdd
    test('debe eliminar un todo', () => {
        
        //usando como referencia el wrapper con shallow, repetimos la simulación de agregar un todo
        wrapper.find( 'TodoAdd' ).prop( 'handleAdd' )(demoTodos[0]);
        expect( wrapper.find( 'h3' ).text().trim() ).toBe( 'Pelis por ver: 1' );

        //ejecutamos la accion de borrar
        wrapper.find( 'TodoList' ).prop( 'handleDelete' )(demoTodos[0].id);
        
        //esperamos que el lenght haya cambiado
        expect( wrapper.find( 'h3' ).text().trim() ).toBe( 'Pelis por ver: 0' );

    })
    

})

//NOTAS DE PROFESOR ASISTENTE
// Para las tareas de renderizado, eventos de usuario o data fetch que interactúan con la interfaz del usuario 
// es necesario el uso de act que se asegura que todas estas interacciones se hayan procesado y aplicado al DOM.
// Esto ayuda a que sus pruebas se acerquen más a lo que experimentarían los usuarios reales al usar su aplicación.

// Act() lo puedes usar con shallow o con mount() que permiten la renderización de componentes.

// al usar mount, react requiere que las actualizaciones en la interfaz sean envueltas en act() para manejar con mayor control los estados de actualización.
