//Component to take 

import React, { useEffect } from 'react';
import ApiClient from '../lib/ApiClient';

function DataLoader({ pathType, keyword, setData }) {
    //fetches data from my api and uses setData to save the data it gets from the api
    //construct url and url encode it and then use that variable in the fetch
    useEffect(async () => {
        if (pathType && pathType !== '' && keyword && keyword !== '') {
            const apiClient = new ApiClient('http://localhost:3000');
            const path = encodeURI(`/${pathType}/${keyword}`);
            const data = await client.getData(path);
            setData(data);
            console.log(`${apiClient.baseUrl}${path}`);
        }
    });

    return (
        <></>
    );
}

// function getData(setData, url) {
//     (async () => {
//         const response = await fetch(url);
//         const jsObject = await response.json();
//         setData(jsObject);
//     })();
// }

export default DataLoader;