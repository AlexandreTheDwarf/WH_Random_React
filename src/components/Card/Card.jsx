import React from 'react'
import "./Card.scss"

function Card({factionData}) {
  return (
    <div className='Card'>
        <div className='CardHeader'>
            {factionData.Factions}
        </div>
        <div className='CardBody'>
            {factionData.Personnage}
        </div>
        <div className='CardFooter'>
            <img src={factionData.image} alt={factionData.Factions} />
        </div>
    </div>
  )
}

export default Card