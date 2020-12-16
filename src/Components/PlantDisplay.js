import React from 'react';
//import RenderRow from './RenderRow';

function PlantDisplay({data}) {
    
    if (!data) {
        return <></>;
    }
    //JSON.stringify(data);
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
//React.render(<JsonTable rows={ items } />, document.body);

export default PlantDisplay;

/*
export default class PlantDisplay extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
        }
    
getRowsData = function(){
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
    }

}*/

