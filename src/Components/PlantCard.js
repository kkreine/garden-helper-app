import React from 'react';

function PlantCard({plant}) {
    if (!plant) {
        return <></>;
    }
    /*
    {
    "id": 1,
    "common_name": "Ant Plant",
    "scientific_name": "Hydnophytum Jack.",
    "zone": 10,
    "season": "Purple",
    "average_height": 6,
    "row_spacing": 3
  }*/
  //return html that displays each of those values
  return (
      <div className="plant">
          <p>
            <strong>
                {plant.common_name}
            </strong>
          </p>
          <p>
              <em>{plant.scientific_name}</em>
          </p>

      </div>
  )
}

export default PlantCard;