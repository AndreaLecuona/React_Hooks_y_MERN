import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ( { defaultCategories = [] } ) => {

    // const [categories, setCategories] = useState(['aristocats']);
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     setCategories(
    //         [...categories, 'nuevaCategoria']
    //     );
    // }

    return (
        <>
        <h2>GifExpert APP</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        {/* <button onClick={handleAdd}> Agregar </button> */}

            <ol>
                {categories.map( category =>
                    <GifGrid
                        key={ category }
                        categoria={ category }
                    />)
                }
            </ol>
        </>
    )
};