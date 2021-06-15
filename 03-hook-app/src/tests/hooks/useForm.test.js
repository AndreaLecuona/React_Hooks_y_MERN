import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {

    //preparo un ejemplo de la info que recibiría el useForm
    const initialForm = {
        name: 'Andre',
        email: 'email@email.com'
    }

    test('debe retornar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    })

    test('debe cambiar el valor "name" del formulario', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange] = result.current

        act( () => {
            handleInputChange( {
                target: {
                    name: 'name',
                    value: 'Tomás'
                }
            } )
        })

        const [ values, ] = result.current
        expect( values ).toEqual( { ...initialForm, name:'Tomás' } )
    })
    
    test('debe reestablecer el formulario con "reset"', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current

        act( () => {

            handleInputChange( {
                target: {
                    name: 'name',
                    value: 'Tomás'
                }
            } );

            reset();
        })

        const [ values, ] = result.current
        expect( values ).toEqual( initialForm )

    })
    
    
});