import React from 'react'

//memo es una funcion que devuelve la forma memorizada de mi componente, y SÓLO SE VUELVE A RENDERIZAR si sus props cambian. Caso contrario, simplemente usa esa versión memorizada
export const Small = React.memo(  ({value}) => {

    console.log('componente Small volvió a ser llamado');

    return (
        <small>
            { value }
        </small>
    )
}  )


// otra forma de escribirlo:

// import React, { memo } from 'react'

// export const Small = memo(  ({value}) => {
//     console.log('componente Small volvió a ser llamado');
//     return (
//         <small>
//             { value }
//         </small>
//     )
// }  )
