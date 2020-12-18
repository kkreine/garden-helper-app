import React, { useState } from 'react';
import AppDescription from '../AppDescription';
import SearchBar from '../Bars/SearchBar';
import DataLoader from '../DataLoader';
import PlantCard from '../PlantCard';
import './SearchByName.css';

function SearchByName({ pathType }) {
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState(null);

    return (
        <div id="page-content">
            <AppDescription sectionID="search-by-name-intro">
                <h1>Search for plant information by name</h1>
                <h2>Enter a name of a plant to get information about it.</h2>
            </AppDescription>
            <img src="https://www.proflowers.com/blog/wp-content/uploads/2018/08/small-indoor-plants-hero.jpg" class="cacti" alt="cacti" height="auto" width="500"></img>

            <SearchBar
                keyword={keyword}
                setKeyword={setKeyword}></SearchBar>
            <DataLoader pathType={pathType}
                keyword={keyword}
                setData={setData}></DataLoader>

            <PlantCard plant={data}></PlantCard>
        </div>
    );
}

export default SearchByName;