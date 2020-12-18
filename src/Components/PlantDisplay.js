import React from 'react';

function PlantDisplay({ data }) {

    if (!data) {
        return <></>;
    }
    let tableData = data;
    if (!Array.isArray(tableData)) {
        tableData = [tableData];
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Common Name</th>
                    <th>Scientific Name</th>
                    <th>Average Height</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((info, key) => (
                    <tr key={`row-${key}`}>
                        <td>{info.common_name}</td>
                        <td>{info.scientific_name}</td>
                        <td>{info.average_height}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default PlantDisplay;