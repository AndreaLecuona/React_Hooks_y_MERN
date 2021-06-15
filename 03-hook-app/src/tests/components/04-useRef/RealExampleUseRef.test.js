import { shallow } from "enzyme"
import { RealExampleUseRef } from "../../../components/04-useRef/RealExampleUseRef"

describe( 'Pruebas en RealExampleUseRef', () => { 
    
    // lo coloco aca porque no va a modificarse durante las pruebas
    const wrapper = shallow( <RealExampleUseRef/> ); // si tuviera argumentos hay que ponerlos

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe( false );

    })
    
    test('debe mostrar el componente MultipleCustomHooks', () => {
        // en el componente cuando se hace click, se modifica un state show a true y eso hace que se renderice y visibilice el componente MultipleCustomHooks
        wrapper.find( 'button' ).simulate( 'click' );

        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe( true );

    })

})