import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../Components/pokemonDetails'


const DetailPage = ({data}) => {

    let {id} = useParams();

    const pokemon = data.find(item => item.id === id);
    const pokemonData = pokemon ? [pokemon] : [];
   
    console.log("pokemon Details on detail page")
    console.log(pokemon)
    console.log(typeof pokemon === "object");
     
    return (
        <div className="App-page">
            <div className="App-row">
            <PokemonDetails data={pokemonData}/>
            </div>
        </div>  
    )
}

export default DetailPage;