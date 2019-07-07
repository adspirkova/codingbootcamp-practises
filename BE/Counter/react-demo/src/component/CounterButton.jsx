import React from 'react';

const CounterButton = (props) => {
    return (
        <button
        onClick={props.handleClick}
        > Add 1 </button>
    )
}


export default CounterButton;