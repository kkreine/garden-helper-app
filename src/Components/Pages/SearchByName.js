import React from 'react';
import ControlPanel from '../Control Panel/ControlPanel';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import LoadButton from '../LoadButton/LoadButton';
import AppDescription from '../AppDescription';

function SearchByName() {
    return (
        <div id="page-content">
            <AppDescription sectionID="search-by-name-intro">
                <h1>Search for plant information by name</h1>
                <p>
                    Enter a name of a plant to get information about it.
                </p>
            </AppDescription>
        </div>
    )
}

export default SearchByName;