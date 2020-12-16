import React, {useState} from 'react';
import AppDescription from '../AppDescription';
import SearchBar from '../Bars/SearchBar';
import DataLoader from '../DataLoader';
import PlantDisplay from '../PlantDisplay';
import PlantCard from '../PlantCard';
//import PlantDisplay from '../PlantDisplay';
//import { JsonToTable } from "react-json-to-table";

function SearchByName({pathType}) {
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState(null);
    
    let plantData;

    /*
    {plantData.map((data, keyword) => {
          return (
            <div keyword={keyword}>
              {data.common_name +
                " , " +
                data.scientific_name +
                " ," +
                data.average_height +
                ", " +
                data.row_spacing}
            </div>
          );
        })}
        */
    
    return (
        <div id="page-content">
            <AppDescription sectionID="search-by-name-intro">
                <h1>Search for plant information by name</h1>
                <p>
                    Enter a name of a plant to get information about it.
                </p>
            </AppDescription>
        <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}></SearchBar>
        <DataLoader pathType={pathType}
                    keyword={keyword}
                    setData={setData}></DataLoader> 
        
        <PlantCard plant={data}></PlantCard>
        {JSON.stringify(data)}
        </div>
    );
}

export default SearchByName;