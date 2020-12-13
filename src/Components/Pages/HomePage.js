import React from 'react';
import { render } from 'react-dom';
import AppDescription from '../AppDescription';
import ControlPanel from '../Control Panel/ControlPanel';
import './HomePage.css';


function HomePage() {
    return (
        <div id="page-content">
        <AppDescription sectionID="introduction">
      <p>This site will assist you in planting your home garden.</p>
      <h2>Here are some things that the site will do:</h2>
      <u1>
        <li>
          <a>Search growable plants by season and region</a>
        </li>
        <li>
          <a>Search for information about a certain plant</a>
        </li>
        <li>
          <a>Enter date seeds are planted and generate dates for plant milestones</a>
        </li>
      </u1>
      </AppDescription>
      
        </div>
    )
}

export default HomePage;