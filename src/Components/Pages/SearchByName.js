import React from 'react';
import AppDescription from '../AppDescription';
import SearchBar from '../Bars/SearchBar';

function SearchByName() {
    return (
        <div id="page-content">
            <AppDescription sectionID="search-by-name-intro">
                <h1>Search for plant information by name</h1>
                <p>
                    Enter a name of a plant to get information about it.
                </p>
            </AppDescription>
        <SearchBar></SearchBar>
        </div>
    )
}

export default SearchByName;