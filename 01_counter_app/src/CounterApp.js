import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ( { value = 0 } ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1); opción2
    };

    const handleReset = () => {
        setCounter( value );
    };

    const handleSubstract = () => {
        setCounter( counter - 1 );
    };

    return (
        <div className="center">
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick={ handleSubstract }>- 1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleAdd }>+ 1</button>
        </div>
    );
};

CounterApp.proptypes = {
    value: PropTypes.number
};

export default CounterApp;