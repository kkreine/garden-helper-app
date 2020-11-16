import React from 'react';

function RadioControlsPanel(props) {
    return (
        <div>
            <strong>{props.label}</strong>
            {props.children}
        </div>
    );
}

export default RadioControlsPanel;