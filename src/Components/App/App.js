import './App.css';
import RadioButtonControl from '../RadioControlPanel/RadioButtonControl';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import LoadButton from '../LoadButton/LoadButton';
import PageHeader from './PageHeader/PageHeader';
import Content from '../Content';
import ControlPanel from '../Control Panel/ControlPanel';

function App() {
  const zoneFilters = {
    groupLabel: "Zone",
    buttonGroup: "zone-filters",
    idPrefix: "filter",
    buttons: [{value: "zone1", label: "Zone 1", checked: true},
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
    buttons: [{value: "spring", label: "Spring", checked: true},
    {value: "summer", label: "Summer", checked: false},
    {value: "fall", label: "Fall", checked: false},
    {value: "winter", label: "Winter", checked: false}]
  }
  return (
    <div className="App">
      <PageHeader>
        Garden Helper
      </PageHeader>
      
      <Content sectionID="introduction">
      <p>This site will assist you in finding the right plants to grow.</p>
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
      <h4>Select the filters for searching by season and region:</h4>
      
      <h5>Choose your zone based on this map:</h5>
      <img src= "https://www.edenbrothers.com/store/media/images/usda.png"></img> 

      </Content>

      <ControlPanel>
        <LoadButton 
          label="Load Data"
          handler={(ev) => {console.log(`${ev.target} clicked!`)}}>
        </LoadButton>
        
        <RadioButtonGroup groupLabel={zoneFilters.groupLabel}></RadioButtonGroup>
        <RadioButtonGroup groupLabel={seasonFilters.groupLabel}></RadioButtonGroup>
          <strong>Zone:</strong>

          <RadioButtonControl id="filter-1"
          buttonGroup="zone-filters" value="zone1"
          label="Zone 1" checked={true}></RadioButtonControl>

          <RadioButtonControl id="filter-2"
          buttonGroup="zone-filters" value="zone2"
          label="Zone 2" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-3"
          buttonGroup="zone-filters" value="zone3"
          label="Zone 3" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-4"
          buttonGroup="zone-filters" value="zone4"
          label="Zone 4" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-5"
          buttonGroup="zone-filters" value="zone5"
          label="Zone 5" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-6"
          buttonGroup="zone-filters" value="zone6"
          label="Zone 6" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-7"
          buttonGroup="zone-filters" value="zone7"
          label="Zone 7" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-8"
          buttonGroup="zone-filters" value="zone8"
          label="Zone 8" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-9"
          buttonGroup="zone-filters" value="zone9"
          label="Zone 9" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-10"
          buttonGroup="zone-filters" value="zone10"
          label="Zone 10" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-11"
          buttonGroup="zone-filters" value="zone11"
          label="Zone 11" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-12"
          buttonGroup="zone-filters" value="zone12"
          label="Zone 12" checked={false}></RadioButtonControl>

          <RadioButtonControl id="filter-13"
          buttonGroup="zone-filters" value="zone13"
          label="Zone 13" checked={false}></RadioButtonControl>

      </ControlPanel>

        <div>
          <strong>Season:</strong>

          <input type="radio" id="season-summer"
          name="season-filters" value="summer"></input>
          <label for="season-summer">Summer</label>

          <input type="radio" id="season-fall"
          name="season-filters" value="fall"></input>
          <label for="season-fall">Fall</label>

          <input type="radio" id="season-winter"
          name="season-filters" value="summer"></input>
          <label for="season-winter">Winter</label>

          <input type="radio" id="season-spring"
          name="season-filters" value="spring"></input>
          <label for="season-spring">Spring</label>

        </div>
      </div>
    
  
  );
}
/*
class renderZoneSeason extends React.Component() {
  render (
    return {

    };
  )
}
*/



export default App;
