import React from 'react';
import './card.css';


const PokemonDetails = ({data}) => {
  
  return (
    <div className="Details">
     data?
        <div>
             <h1>{data.name}</h1>
             <img className="image" src={item.images.small} alt={`Small icon for ${item.name}`}/>
             <table>
                <tr>
                    <th>HP</th>
                    <th>Type</th>
                    <th>Rarity</th>
                </tr>
                <tr>
                  <td>{item.hp}</td>
                  <td>{item.types}</td>  
                  <td>{item.rarity}</td>
                </tr>
             </table>
             <h2>Market Price</h2>
             <table>
                <tr>
                   <th>Normal Market Price</th>
                   <th>Holo Market Price</th>
                   <th>ReverseHolo Foil Market Price</th>
                </tr>
                <tr>
                {'normal' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.normal.market}</td>) : (<td>"N/A"</td>)}
                  {'holofoil' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.holofoil.market}</td>) : (<td>"N/A"</td>)} 
                  {'reverseHolofoil' in item.tcgplayer.prices ? (<td>{item.tcgplayer.prices.reverseHolofoil.market}</td>) : (<td>"N/A"</td>)}       
                </tr>
             </table>      
        </div>
     
        : <h1>No Data</h1>
    </div>
  )
}

export default PokemonDetails;