import React from 'react';
import './PlantCard.css';

function PlantCard({plant}) {
    if (!plant) {
        return <></>;
    }

  return (
      <div className="plant">
          <p>
            <u>
                {plant.common_name}
            </u>
          </p>
          <p>
              <em>{plant.scientific_name}</em>
          </p>
          <p>
              Average Height: {plant.average_height}
          </p>
          <p>
              Zone: {plant.zone}
          </p>
          <p>
              Row Spacing: {plant.row_spacing}
          </p>
          <p>
              Color: {plant.season}
          </p>
      </div>
  )
}

export default PlantCard;