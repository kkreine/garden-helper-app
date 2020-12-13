import React from 'react';
import ControlPanel from '../Control Panel/ControlPanel';
import RadioButtonGroup from '../Buttons/LoadButton/RadioButtonGroup/RadioButtonGroup';
import LoadButton from '../Buttons/LoadButton/LoadButton';

function SearchbyLocnSeason({
    zoneFilters, 
    selectedZone, 
    setSelectedZone, 
    seasonFilters, 
    selectedSeason, 
    setSelectedSeason
}) {
    return (
        <div id="page-content">
            <ControlPanel>
        <h4>Select the filters for searching by season and region:</h4>
        <h5>Choose your zone based on this map:</h5>
        <img src= "https://www.edenbrothers.com/store/media/images/usda.png"></img> 

        <LoadButton 
          label="Load Data"
          handler={(ev) => {console.log(`${ev.target} clicked!`)}}>
        </LoadButton>
        
        <RadioButtonGroup
          groupLabel={zoneFilters.groupLabel} 
          buttonGroup={zoneFilters.buttonGroup}
          idPrefix={zoneFilters.idPrefix}
          buttons={zoneFilters.buttons}
          handler={(newValue) => {setSelectedZone(newValue)}}
          selectedItem={selectedZone}
        ></RadioButtonGroup>
        <RadioButtonGroup
          groupLabel={seasonFilters.groupLabel} 
          buttonGroup={seasonFilters.buttonGroup}
          idPrefix={seasonFilters.idPrefix}
          buttons={seasonFilters.buttons}
          handler={(newValue) => {setSelectedSeason(newValue)}}
          selectedItem={selectedSeason}
        ></RadioButtonGroup>
      </ControlPanel>
        </div>
    )
}

export default SearchbyLocnSeason;