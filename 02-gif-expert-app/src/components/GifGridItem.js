import React from 'react';
import Proptypes from "prop-types";

export const GifGridItem = ( { id, title, url } ) => {

    // console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
};

GifGridItem.proptypes = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
};
