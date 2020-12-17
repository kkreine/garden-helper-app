import React from 'react';

function PageHeader(props) {
    return (
        <header>
            <h1>
                {props.children}
            </h1>

        </header>
    );
}

export default PageHeader;