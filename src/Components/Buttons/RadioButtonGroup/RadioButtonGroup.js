import React from "react";
import RadioButtonControl from "../RadioControlPanel/RadioButtonControl";
import './RadioButtonGroup.css';


function RadioButtonGroup({groupLabel, buttonGroup, idPrefix, buttons, handler, selectedItem}) {
    return (
        <div>
            <strong>{groupLabel}:</strong>
            {
                buttons.map((button, index) => <RadioButtonControl id={`${idPrefix}-${index + 1}`}
                    buttonGroup={buttonGroup} value={button.value} label={button.label}
                    checked={button.value===selectedItem} key={`${idPrefix}-${index + 1}`}
                    handler={(ev) => handler(ev.target.value)}
                ></RadioButtonControl>)
            }
        </div>
    );
}

export default RadioButtonGroup;