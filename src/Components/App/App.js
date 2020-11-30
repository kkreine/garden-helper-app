import {useState} from "react";

import './App.css';

import PageHeader from '../PageHeader/PageHeader';
import HomePage from "../Pages/HomePage";
import NextPage from "../Pages/NextPage";
import SearchbyLocnSeason from "../Pages/SearchbyLocnSeason";
import SearchByName from "../Pages/SearchByName";
import Calendar from "../Pages/Calendar";


function App() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [currentPage, setCurrentPage] = useState("HomePage");

    const zoneFilters = {
    groupLabel: "Zone",
    buttonGroup: "zone-filters",
    idPrefix: "filter",
    buttons: [{value: "zone1", label: "Zone 1", checked: false},
    {value: "zone2", label: "Zone 2", checked: false}, 
    {value: "zone3", label: "Zone 3", checked: false},
    {value: "zone4", label: "Zone 4", checked: false},
    {value: "zone5", label: "Zone 5", checked: false},
    {value: "zone6", label: "Zone 6", checked: false},
    {value: "zone7", label: "Zone 7", checked: false},
    {value: "zone8", label: "Zone 8", checked: false},
    {value: "zone9", label: "Zone 9", checked: false},
    {value: "zone10", label: "Zone 10", checked: false},
    {value: "zone11", label: "Zone 11", checked: false},
    {value: "zone12", label: "Zone 12", checked: false},
    {value: "zone13", label: "Zone 13", checked: false}]
  };

  const seasonFilters = {
    groupLabel: "Season",
    buttonGroup: "season-filters",
    idPrefix: "filter",
    buttons: [{value: "spring", label: "Spring", checked: false},
    {value: "summer", label: "Summer", checked: false},
    {value: "fall", label: "Fall", checked: false},
    {value: "winter", label: "Winter", checked: false}]
  }
  return (
    <div className="App">
      <PageHeader>
        Garden Helper
      </PageHeader>
      
      { (() => {
          switch(currentPage) {
            case "SearchbyLocnSeason":
              return <SearchbyLocnSeason
              zoneFilters={zoneFilters}
              selectedZone={selectedZone}
              setSelectedZone={setSelectedZone}
              seasonFilters={seasonFilters}
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}></SearchbyLocnSeason>;
            case "SearchByName":
              return <SearchByName></SearchByName>;
            case "Calendar":
              return <Calendar></Calendar>
            case "HomePage":
            default:
              return <HomePage 
              zoneFilters={zoneFilters}
              selectedZone={selectedZone}
              setSelectedZone={setSelectedZone}
              seasonFilters={seasonFilters}
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}></HomePage>;
              
          }
        })()
      }
      
      </div>
  );
}

export default App;
