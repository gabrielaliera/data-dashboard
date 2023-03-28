
import React from 'react';
import { Component, useState } from 'react'
import Card from './card'
import List from './list'

const DashBoard = ({deck, cards}) => {
  

 // const deckData = data.deck;
 // const cardsData = data.cards;
  //console.log("deck")
  console.log(deck);
  console.log(cards);

  /*
  <h2>Dashboard</h2>
        <p>{deck.data.name}</p>
        <p>{deck.data.series}</p>
        <p>{deck.data.releaseDate}</p>
        <p>{deck.data.total}</p>
        <img src={data.data.images.logo}></img>
        


       
      <div className="dashboard-row">
        <List/>
      </div>
      */
  return (
    <div>
      
      <h2>DashBoard</h2>
      
      <div className="dashboard-row">
        <img src={deck.images.symbol}></img>
        <Card name="Name" stat={deck.name}/>
        <Card name="Series"stat={deck.series}/>
        <Card name="Release Date" stat={deck.releaseDate}/>
        <Card name="Total Cards" stat={deck.total}/>
      </div>
      <List cards={cards}/>
    </div>
  )
}

export default DashBoard;