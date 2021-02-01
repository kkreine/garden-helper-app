import React from 'react';
import PlantCard from '../../PlantCard';
import './LocnSeasonDisplay.css';

function LocnSeasonDisplay({ data }) {
    if (!data) {
        return <></>;
    }
    return (
        <div id="plant" class="card">
            <p>
                {
                    data.map((plant) => <PlantCard plant={plant}></PlantCard>)
                }
            </p>
        </div>
    )
}

export default LocnSeasonDisplay;