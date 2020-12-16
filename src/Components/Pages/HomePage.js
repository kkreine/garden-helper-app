import React from 'react';
import AppDescription from '../AppDescription';
import './HomePage.css';


function HomePage() {
    return (
        <div id="page-content">
        <AppDescription sectionID="introduction">
      <p>This site will assist you in planting your home garden.</p>
      <h2>Here are some things that the site will do:</h2>
      <ul>
        <li>
          Search growable plants by season and region
        </li>
        <li>
          Search for information about a certain plant
        </li>
        <li>
          Enter date seeds are planted and generate dates for plant milestones
        </li>
      </ul>
      </AppDescription>
      
        </div>
    )
}

export default HomePage;