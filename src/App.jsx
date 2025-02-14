import { useState } from 'react'
import './App.css'
import factionData from "../src/data/faction.json";
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  const [selectedFactions, setSelectedFactions] = useState([]);

  const handleSelectFaction = (faction) => {
    setSelectedFactions((prevSelected) =>
      prevSelected.includes(faction)
        ? prevSelected.filter((f) => f !== faction)
        : [...prevSelected, faction]
    );
  };

  const filteredFactions = factionData.filter((faction) =>
    selectedFactions.includes(faction.races)
  );

  return (
    <>
      <h1>Total War Warhammer Randomizer</h1>
      <NavBar onSelectFaction={handleSelectFaction} selectedFactions={selectedFactions}/>
      <CardContainer factionData={filteredFactions}/>
    </>
  )
}

export default App
