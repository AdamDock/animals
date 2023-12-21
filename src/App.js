import React, { useState, useEffect } from "react";
import AnimalShow from "./AnimalShow";
import './app.css';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow','dog','gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        console.log("clicked");
        setAnimals([...animals, getRandomAnimal()]);
    }
    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} animalCount={animal} />
    });
    return (
        <div className="app">
          <button onClick={handleClick}>Add Animal</button>
          
          <div className="animal-list">{renderAnimals}</div>
        </div>
      );
      
}
export default App;