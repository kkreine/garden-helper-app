import React from 'react';

function Content(props) {
    return (
        <section className={props.sectionID}>
            {props.children}
        </section>
    );
}

export default Content;