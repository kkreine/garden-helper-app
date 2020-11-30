import React from "react";

function RadioButtonControl({id, buttonGroup, value, label, checked, handler}) {
    
    return checked ? (
        <>
        <input type="radio" id={id}
        name={buttonGroup} value={value} checked
        onChange={(ev) => handler(ev)}></input>
        <label for={id}>{label}</label>
        </>
    ) : (
        <>
        <input type="radio" id={id}
        name={buttonGroup} value={value}
        onChange={(ev) => handler(ev)}></input>
        <label for={id}>{label}</label>
        </>
    );
}

export default RadioButtonControl;