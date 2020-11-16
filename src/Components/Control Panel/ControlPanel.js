import React from 'react';

function ControlPanel(props) {
    return (
        <div id="controls">
            {props.children}
        </div>
    );
}

export default ControlPanel;