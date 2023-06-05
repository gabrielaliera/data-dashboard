import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import DashBoard from './Components/dashboard';
import Header from './Components/header';
import DetailPage from './pages/DetailPage'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {

  const [data, setData] = useState({deck:null, cards:null})
 
  
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
      
      
      console.log(cardSetJson.data);
      console.log("last");
      console.log(cardDataJson.data);

      setData({
        deck: cardSetJson.data,
        cards: cardDataJson.data
      });
      
    };

    fetchPokemonData().catch(console.error)

  },[])
  


  return (
    <div className="App">
      <div className="App-sidebar">
        <Header/>
      </div>
      
      {data.deck && data.cards ? (
          <Routes>
            <Route path="/" element={<DashBoard deck={data.deck} cards={data.cards}/>} />
            <Route path="/:id" element={<DetailPage data={data}/>} />
          </Routes> 
          ) : (
            <div>Loading...</div>
          )}
      
    </div>
  )
}

export default App;
