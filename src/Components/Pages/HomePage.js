import React from 'react';
import AppDescription from '../AppDescription';
import './HomePage.css';


function HomePage() {
    return (
        <div id="page-content">
        <AppDescription sectionID="introduction">
      <h1>This site will assist you in planting your home garden.</h1>
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
        <img src="https://i.pinimg.com/originals/c3/a4/63/c3a463df27fadb50309b8f92caf8bee2.jpg" 
      alt="plant" class="plantHP" width="auto" height="400"></img>
      </ul>
      
      </AppDescription>

      
        </div>
    )
}

export default HomePage;