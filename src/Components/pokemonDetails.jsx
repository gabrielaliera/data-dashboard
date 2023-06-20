import React from 'react';
import './pokemonDetails.css'


const PokemonDetails = ({data}) => {
   console.log(data);
  return (
    <div className="Details">
     {data ? (
        <div>
             <h1><img src={data[0]?.images?.large} alt={`Small icon for ${data[0].name}`}/></h1>
             <h2>{data[0].flavorText}</h2>
             
             <table>
                <tr>
                    <th>HP</th>
                    <th>Type</th>
                    <th>Rarity</th>
                </tr>
                <tr>
                  <td>{data[0].hp}</td>
                  <td>{data[0].types}</td>  
                  <td>{data[0].rarity}</td>
                </tr>
             </table>
             <h2>Market Price</h2>
             <table>
                <tr>
                   <th>Normal Market Price</th>
                   {
                      data[0]?.tcgplayer?.prices && 'normal' in data[0].tcgplayer.prices ? (
                        <td>{data[0].tcgplayer.prices.normal.market}</td>
                      ) : (
                        <td>"N/A"</td>
                      )
                    }
                   
                   
                </tr>
                <tr>
                  <th>Holo Market Price</th>
                  {
                    data[0]?.tcgplayer?.prices && 'holofoil' in data[0].tcgplayer.prices ? (
                      <td>{data[0].tcgplayer.prices.holofoil.market}</td>
                    ) : (
                      <td>"N/A"</td>
                    )
                  }
                </tr>
                <tr>
                  <th>ReverseHolo Foil Market Price</th>
                    {
                      data[0]?.tcgplayer?.prices && 'reverseHolofoil' in data[0].tcgplayer.prices ? (
                        <td>{data[0].tcgplayer.prices.reverseHolofoil.market}</td>
                      ) : (
                        <td>"N/A"</td>
                      )
                    } 
                </tr>
             </table>      
        </div>
     
      ) : ( 
        <h1>No Data</h1>
      )}
    </div>
  )
}

export default PokemonDetails;