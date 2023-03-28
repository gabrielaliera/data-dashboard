import React, { useState, useEffect } from 'react';
import './list.css'

const List = ({cards}) => {
 
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(cards);
  },[cards]);


return (
    <div className='List'>
    
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>HP</th>
              <th>Type</th>
              <th>Rarity</th>
              <th>Normal Market Price</th>
              <th>Holo Market Price</th>
              <th>ReverseHolo Foil Market Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData ? 
              tableData.map((item,index) =>
                <tr key={index}>
                  <td><img className="image" src={item.images.small} alt={`Small icon for ${item.name}`}/></td>
                  <td>{item.name}</td>
                  <td>{item.hp}</td>
                  <td>{item.types}</td>  
                  <td>{item.rarity}</td>
                  {'normal' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.normal.market}</td>) : (<td>"N/A"</td>)}
                  {'holofoil' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.holofoil.market}</td>) : (<td>"N/A"</td>)} 
                  {'reverseHolofoil' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.reverseHolofoil.market}</td>) : (<td>"N/A"</td>)}           
                </tr>
              
              ):         
            <tr>
              <td>No Pokemon data avaiable</td>
            </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;