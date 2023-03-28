import React, { useState, useEffect } from 'react';
import './list.css'

const List = ({cards}) => {
 
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(cards);
  },[cards]);

//<td>{item.tcgplayer.prices?.holofoil?.market}</td>
  //                <td>{item.tcgplayer.prices?.reverseHolofoil?.market}</td>
//  {'normal' in item.tcgplayer.prices ? <td>item.tcgplayer.prices.normal.market</td> : <td>"N/A"</td>}
//<td>{item.types[0]}</td>  

return (
    <div>
    
      <div className='table'>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>HP</td>
              <td>Type</td>
              <td>Rarity</td>
              <td>Normal Market Price</td>
              <td>Holo Market Price</td>
              <td>ReverseHolo Foil Market Price</td>
            </tr>
          </thead>
          <tbody>
            {tableData ? 
              tableData.map((item,index) =>
                <tr key={index}>
                  <td><img src={item.images.small} alt={`Small icon for ${item.name}`}/></td>
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