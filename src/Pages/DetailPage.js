import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../Components/pokemonDetails'

const DetailPage = ({data}) => {

    const {pokemonID} = useParams();
    const pokemon = data.cards.find(c => c.id === pokemonID);

    return (
        <div className="App-page">
            <div className="App-row">
                <PokemonDetails data={pokemon}/>
            </div>
        </div>  
    )
}

export default DetailPage;