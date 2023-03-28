import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [deckInfo, setDeckInfo] = useState(null)
  const [cardInfo, setCardInfo] = useState(null)

  useEffect ( () => {
    const fetchPokemonData = async () => {
      const setOptions = "sets/swsh12pt5"
      const cardOptions ="cards?q=set.id:swsh12pt5"
      
      const setURL = "https://api.pokemontcg.io/v2/" + setOptions 
      const cardURL = "https://api.pokemontcg.io/v2/" +  cardOptions 
      
      const cardSetResponse = await fetch(setURL,
                                  {headers: {'x-api-key' : API_KEY}});
      
      const cardDataResponse = await fetch (cardURL,
                                     {headers: {'x-api-key' : API_KEY}});
      
      const cardSetJson = await cardSetResponse.json();
      const cardDataJson = await cardDataResponse.json();
      
      console.log(cardSetJson);
      console.log("last");
      console.log(cardDataJson);


      setDeckInfo(cardSetJson);
      setCardInfo(cardDataJson);
    };


    fetchPokemonData().catch(console.error)


  },[])
  
  

  return (
    <div className="App">
      <h1>Pokemon</h1>
    </div>
  )
}

export default App
