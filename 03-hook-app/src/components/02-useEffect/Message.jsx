import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0, 
        y:0
    });
    const {x, y} = coords;


    useEffect(() => {
        
        //efecto (buena practica de listeners)
        const manejoMousemove = (e) => {
            console.log('componente montado');
            const coordenadas = {x: e.x, y: e.y};
            setCoords( coordenadas ); 
        }

        window.addEventListener('mousemove', manejoMousemove);


        return () => { //fase de limpieza para evitar el consumo de memoria innecesario
            console.log('componente desmontado');
            window.removeEventListener('mousemove', manejoMousemove);
        }
        
    }, [] );

    return (
        <div>
            <h1>May the force be with you</h1>

            <p>las coordenadas de la posición del mouse son x: { x } / y: { y }</p>
        </div>
    )
}

//en las situaciones donde el effect implica un event listener, si no hago una fase de limpieza los listeners no se borran y por ende cada vez que se monte el componente, se seguirán acumulando resultando en cantidad de peticiones simultaneas y repetidas que crecen exponencialmente