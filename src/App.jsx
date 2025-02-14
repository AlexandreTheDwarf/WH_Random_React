import { useState } from 'react'
import './App.css'
import factionData from "../src/data/faction.json";
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/CardContainer/CardContainer';
import Dice from './components/Dice/Dice';
import Modal from './components/Modal/Modal';

function App() {
  const [selectedFactions, setSelectedFactions] = useState([]);
  const [randomFaction, setrandomFaction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectFaction = (faction) => {
    setSelectedFactions((prevSelected) =>
      prevSelected.includes(faction)
        ? prevSelected.filter((f) => f !== faction)
        : [...prevSelected, faction]
    );
  };

  const Randomizer = () => {
    if (selectedFactions.length === 0) return;
  
    // Sélection aléatoire d'une race parmi celles choisies
    const randomRace = selectedFactions[Math.floor(Math.random() * selectedFactions.length)];
    
    // Filtrer toutes les factions qui appartiennent à cette race
    const factionsOfRace = factionData.filter(f => f.races === randomRace);
  
    // Vérifier s'il y a des factions dans cette race
    if (factionsOfRace.length === 0) return;
  
    // Sélectionner une faction au hasard dans cette race
    const randomFaction = factionsOfRace[Math.floor(Math.random() * factionsOfRace.length)];
  
    // Mettre à jour l'état avec l'objet faction
    setrandomFaction(randomFaction);
    setShowModal(true);
  };  

  return (
    <>
      <h1>Total War Warhammer Randomizer</h1>
      <NavBar onSelectFaction={handleSelectFaction} selectedFactions={selectedFactions} />
      <Dice Randomizer={Randomizer} />
      <CardContainer factionData={factionData.filter(faction => selectedFactions.includes(faction.races))} />
      
      {/* Afficher le modal seulement si showModal est vrai */}
      {showModal && <Modal randomFaction={randomFaction} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default App;
