
import React from 'react';
import { Component, useState } from 'react'
import './dashboard.css'
import Card from './card'
import List from './list'

const DashBoard = ({deck, cards}) => {
  
  console.log(deck);
  console.log(cards);
 
  return (
    <div className="App-page">
      <div className='deckImage'>
        <img src={deck.images.logo}/>
      </div>
      <div className="dashboard-row">
        <Card name="Symbol" image={deck.images.symbol}/>
        <Card name="Series"stat={deck.series}/>
        <Card name="Release Date" stat={deck.releaseDate}/>
        <Card name="Total Cards" stat={deck.total}/>
      </div>
      <div className="dashboard-row">
        <List cards={cards}/>
      </div>
      
    </div>
  )
}

export default DashBoard;