import React from "react";

function RadioButtonControl({id, buttonGroup, value, label, checked}) {
    
    return checked ? (
        <>
        <input type="radio" id={id}
        name={buttonGroup} value={value} checked></input>
        <label for={id}>{label}</label>
        </>
    ) : (
        <>
        <input type="radio" id={id}
        name={buttonGroup} value={value}></input>
        <label for={id}>{label}</label>
        </>
    );
}

export default RadioButtonControl;