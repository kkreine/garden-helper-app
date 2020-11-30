import React from 'react';

function AppDescription(props) {
    return (
        <section className={props.sectionID}>
            {props.children}
        </section>
    );
}

export default AppDescription;