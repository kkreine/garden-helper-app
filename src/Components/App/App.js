import { useEffect, useState } from "react";

import './App.css';
import PageHeader from '../PageHeader/PageHeader';
import HomePage from "../Pages/HomePage";
import SearchbyLocnSeason from "../Pages/SearchbyLocnSeason";
import SearchByName from "../Pages/SearchByName";
import Calendar from "../Pages/Calendar";
import NavBar from "../Bars/NavBar";

const zoneFilters = {
  groupLabel: "Zone",
  buttonGroup: "zone-filters",
  idPrefix: "filter",
  buttons: [{ value: "1", label: "Zone 1", checked: false },
  { value: "2", label: "Zone 2", checked: false },
  { value: "3", label: "Zone 3", checked: false },
  { value: "4", label: "Zone 4", checked: false },
  { value: "5", label: "Zone 5", checked: false },
  { value: "6", label: "Zone 6", checked: false },
  { value: "7", label: "Zone 7", checked: false },
  { value: "8", label: "Zone 8", checked: false },
  { value: "9", label: "Zone 9", checked: false },
  { value: "10", label: "Zone 10", checked: false },
  { value: "11", label: "Zone 11", checked: false },
  { value: "12", label: "Zone 12", checked: false },
  { value: "13", label: "Zone 13", checked: false }]
};

const seasonFilters = {
  groupLabel: "Season",
  buttonGroup: "season-filters",
  idPrefix: "filter",
  buttons: [{ value: "spring", label: "Spring", checked: false },
  { value: "summer", label: "Summer", checked: false },
  { value: "fall", label: "Fall", checked: false },
  { value: "winter", label: "Winter", checked: false }]
}

const navOptions = [{ key: "HomePage", displayName: "Home Page" },
{ key: "SearchbyLocnSeason", displayName: "Search by Location and Season" },
{ key: "SearchByName", displayName: "Search by Name" },
{ key: "Calendar", displayName: "Calendar" }];

function App() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [pathType, setPathType] = useState('');

  useEffect(() => {
    setPathType(getPathType(currentPage));
  }, [setPathType, currentPage]);

  return (
    <div className="App">
      <NavBar currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        navigationOptions={navOptions}></NavBar>
      <PageHeader>
        Garden Helper
      </PageHeader>
    {
      getNewPage(currentPage, {selectedZone, setSelectedZone, pathType, selectedSeason, setSelectedSeason})
    }
    </div>
  );
}

function getNewPage(pageName, {selectedZone, setSelectedZone, pathType, selectedSeason, setSelectedSeason}) {
  switch (pageName) {
    case "SearchbyLocnSeason":
      return <SearchbyLocnSeason
        zoneFilters={zoneFilters}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        seasonFilters={seasonFilters}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        pathType={pathType}></SearchbyLocnSeason>;
    case "SearchByName":
      return <SearchByName
      pathType={pathType}>
      </SearchByName>;
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
}

function getPathType(pageName) {
  switch(pageName) {
    case "SearchbyLocnSeason":
      return 'by-locn-season';
    case "SearchByName":
      return 'by-name';
    default:
      return '';
  }
}

export default App;
