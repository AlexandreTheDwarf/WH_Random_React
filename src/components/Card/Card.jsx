import React from 'react'
import "./Card.scss"

function Card({factionData}) {
  return (
    <div className='Card'>
        <div className='CardHeader'>
            <span>{factionData.Factions}</span>
        </div>
        <div className='CardBody'>
            <span>{factionData.Personnage}</span>
        </div>
        <div className='CardFooter'>
            <img src={factionData.image} alt={factionData.Factions} />
        </div>
    </div>
  )
}

export default Card