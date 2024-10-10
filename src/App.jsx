import React from "react";
import Card from "./components/card/Card";
import Header from "./components/Header/header";
import "./App.css";
import { cardData, headerData } from './data'; 

const App = () => {
  return (
    <div className="App">
      <Header title={headerData.title} subtitle={headerData.subtitle} />{} 
      <button 
        className="link-button"
        onClick={() => window.open('https://lichess.com', '_blank')}
      >
        Go to Lichess
      </button>
      <div className="card-container">
        {cardData.map((card) => (
          <Card 
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
