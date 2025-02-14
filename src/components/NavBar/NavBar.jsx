import React from 'react';
import "./NavBar.scss";

function NavBar({ onSelectFaction, selectedFactions }) {
  const handleClick = (faction) => {
    onSelectFaction(faction);
  };

  return (
    <nav className='NavBar'>
      <ul className='WarhammerOne'>
        {['Beastmen', 'Bretonnia', 'Dwarfs', 'Empire', 'Greenskins', 'Norsca', 'Vampire Counts', 'Warriors of Chaos', 'Wood Elves'].map((faction) => (
          <li
            key={faction}
            onClick={() => handleClick(faction)}
            className={selectedFactions.includes(faction) ? 'selected' : ''}
          >
            {faction}
          </li>
        ))}
      </ul>
      <ul className='WarhammerTwo'>
        {['Dark Elves', 'High Elves', 'Lizardmen', 'Skaven', 'Tomb Kings', 'Vampire Coast'].map((faction) => (
          <li
            key={faction}
            onClick={() => handleClick(faction)}
            className={selectedFactions.includes(faction) ? 'selected' : ''}
          >
            {faction}
          </li>
        ))}
      </ul>
      <ul className='WarhammerThree'>
        {['Grand Cathay', 'Chaos Dwarfs', 'Khorne', 'Kislev', 'Nurgle', 'Ogre Kingdoms', 'Slaanesh', 'Tzeentch'].map((faction) => (
          <li
            key={faction}
            onClick={() => handleClick(faction)}
            className={selectedFactions.includes(faction) ? 'selected' : ''}
          >
            {faction}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

