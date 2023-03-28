
import React from 'react';
import { Component, useState } from 'react'
import Card from './card'
import List from './list'

const DashBoard = ( {data}) => {
  

  const deckData = data.deck;
  const cardsData = data.cards;
  console.log("deck")
  console.log(deckData);

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
        <img src={deckData.images.symbol}></img>
        <Card name="Name" stat={deckData.name}/>
        <Card name="Series"stat={deckData.series}/>
        <Card name="Release Date" stat={deckData.releaseDate}/>
        <Card name="Total Cards" stat={deckData.total}/>
      </div>
    </div>
  )
}

export default DashBoard;