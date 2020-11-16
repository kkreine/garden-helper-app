import React from "react";
import RadioButtonControl from "../RadioControlPanel/RadioButtonControl";
import '../RadioControlsPanel.css';

function RadioButtonGroup({groupLabel, buttonGroup, idPrefix, buttons}) {
    return (
        <div>
            {//<strong>{groupLabel}:</strong>
}
            {/*
                buttons.map((button, index) => <RadioButtonControl id={`${idPrefix}-${index + 1}`}
                    buttonGroup={buttonGroup} value={button.value} label={button.label}
                    checked={button.checked} key={`${idPrefix}-${index + 1}`}
                ></RadioButtonControl>)*/
            }
        </div>
    );
}

export default RadioButtonGroup;