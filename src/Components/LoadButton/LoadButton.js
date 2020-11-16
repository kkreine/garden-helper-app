import React from 'react';

function LoadButton(props) {
    return (
        <button className="data-load-button" onClick={props.handler}>
        {props.label}
        </button>
    );
}

export default LoadButton;
