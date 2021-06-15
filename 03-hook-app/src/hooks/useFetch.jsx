import { useEffect, useRef, useState } from "react";

//custom hook que hace fetch de los datos de un endpoint que se le pasa como argumento
export const useFetch = (url) => {


    //USEREF para que este custom hook sea más seguro y dé menos lugar a errores
    //hacemos que isMounted (el useRef) mantenga la referencia siempre que este hook esté vivo o cuando el componente que lo usa siga montado.
    //cuando cambiemos los valores del isMounted, no queremos que vuelva a renderizarse el componente
    const isMounted = useRef(true);

    useEffect(() => {
        //no tiene efecto, solo aprovechamos la limpieza

        return () => {
            isMounted.current = false;
        }
    }, []); //se ejecuta una sola vez onpage load



    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null }); //para que vuelva a aparecer el loading entre fetchs de frases

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                //si el componente esta montado DE MANERA SEGURA, entonces continuamos la ejecución que devuelve la data. Si no, no hacemos nada y evitamos un error que crashea el programa
                if( isMounted.current ){

                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                } else {
                    console.log('setState no se ejecutó');
                }


            })
        .catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'No pudo obtenerse la data'
            })
        })

    }, [url]);

    return state;

};
