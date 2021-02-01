import React, { useState } from 'react';
import ControlPanel from '../../Control Panel/ControlPanel';
import RadioButtonGroup from '../../Buttons/RadioButtonGroup/RadioButtonGroup';
import LoadButton from '../../Buttons/LoadButton/LoadButton';
import DataLoader from '../../DataLoader';
import LocnSeasonDisplay from './LocnSeasonDisplay';
import './SearchbyLocnSeason.css';

function SearchbyLocnSeason({
  zoneFilters,
  selectedZone,
  setSelectedZone,
  seasonFilters,
  selectedSeason,
  setSelectedSeason,
  pathType
}) {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(null);
  const [userEntry, setUserEntry] = useState('');

  return (

    <div id="page-content">
      <ControlPanel>
        <h4>Select the filters for searching by season and region:</h4>
        <h5>Choose your zone based on this map:</h5>
        <img src="https://www.edenbrothers.com/store/media/images/usda.png" alt="map" class="map1" width="700" height="auto"></img>

        <RadioButtonGroup
          groupLabel={zoneFilters.groupLabel}
          buttonGroup={zoneFilters.buttonGroup}
          idPrefix={zoneFilters.idPrefix}
          buttons={zoneFilters.buttons}
          handler={(newValue) => {
            setSelectedZone(newValue);
            console.log(newValue)
          }}
          selectedItem={selectedZone}
        ></RadioButtonGroup>
        <RadioButtonGroup
          groupLabel={seasonFilters.groupLabel}
          buttonGroup={seasonFilters.buttonGroup}
          idPrefix={seasonFilters.idPrefix}
          buttons={seasonFilters.buttons}
          handler={(newValue) => { setSelectedSeason(newValue) }}
          selectedItem={selectedSeason}
        ></RadioButtonGroup>
      </ControlPanel>

      <LoadButton handler={(ev) => setKeyword(selectedZone)}
        label="Search"></LoadButton>

      <DataLoader pathType={pathType}
        keyword={keyword}
        setData={setData}></DataLoader>

      <LocnSeasonDisplay data={data}></LocnSeasonDisplay>

    </div>
  )
}

export default SearchbyLocnSeason;