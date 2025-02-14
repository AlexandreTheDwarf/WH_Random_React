import React from 'react';
import Card from '../Card/Card';
import "./CardContainer.scss"

function CardContainer({ factionData }) {
  return (
    <section className='CardContainer'>
      {factionData.map((faction, index) => (
        <Card key={index} factionData={faction} />
      ))}
    </section>
  );
}

export default CardContainer;
