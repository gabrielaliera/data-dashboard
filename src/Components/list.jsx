import React, { useState, useEffect } from 'react';
import './list.css'

const List = ({cards}) => {
 
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  //filtered variables
  const [name, setName] = useState('');
  const [healthPoints, setHealthPoints] = useState(0);


  useEffect(() => {
    setTableData(cards);
    setFilterData(cards);
  }, [cards]);

  const handleSearch = () => {
    const filterByDate = tableData.filter(item => 
      item.name.toLowerCase().includes(name.toLowerCase()));
    
    const filterByHP = filterByDate.filter(item => parseFloat(item.hp) <= healthPoints ) 
    setFilterData(filterByHP);
    
  }

return (
    <div className='List'>

      <div className='filters'>
        <div className='dateFilter'>
          <input type='text' placeholder="Find Pokemon" onChange={(e) => setName(e.target.value)}/>
        </div>
        <button className ='btn' onClick={() => handleSearch()}>Search</button>

        <div className='hpFilter'>
          <label >Max HP:</label>
          <input type="range" name="hp" onChange={(e) => setHealthPoints(e.target.value)} min="0.0" max="300.0" step="1"></input>
          {healthPoints}
        </div>
      </div>
     

    
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
            {
              filterData && filterData.length > 0 ? 
              filterData.map((item,index) =>
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
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;