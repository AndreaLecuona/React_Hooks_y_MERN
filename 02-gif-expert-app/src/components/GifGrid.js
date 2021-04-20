import React from 'react';
import Proptypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categoria } ) => {

    // const [images, setImages] = useState([]);
    
    const { data: images, loading } = useFetchGifs( categoria );

    // useEffect( () => {
    //     getGifs( categoria ).then( imgs => setImages( imgs )); //al modularizar getGifs, hubo que convertirlo en async y por ende en promesa
    // }, [ categoria ]); //dependencia a la categoria: si cambia la categoria vuelve a hacer la peticion a la api

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">"{ categoria }"</h3>

            { loading && <p className="animate__animated animate__flash">Cargando</p> }
            
            <div className="card-grid">
                {
                    images.map( img =>
                        <GifGridItem 
                            key={img.id}

                            // img={ img }
                            { ...img }
                        />
                    )
                }
            </div>
        </>
    )
};

GifGrid.proptypes = {
    categoria: Proptypes.string.isRequired
};

// SIN DESTRUCTURING

// <div>
// <h3>{ category }</h3>
// <ol>
//     {
//         images.map( image =>
//             <li key={image.id}>{image.title}</li>)
//     }
// </ol>
// </div
