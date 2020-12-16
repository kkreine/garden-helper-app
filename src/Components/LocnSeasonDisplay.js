import React from 'react';
import PlantCard from './PlantCard';

function LocnSeasonDisplay({data}) {
    if (!data) {
        return <></>;
    }
    //JSON.stringify(data);
    return (
        <div>
            {
                data.map((plant) => <PlantCard plant={plant}></PlantCard>)
            }
        </div>
    )
    

    
}

export default LocnSeasonDisplay;