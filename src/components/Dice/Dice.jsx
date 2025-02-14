import React from 'react'
import "./Dice.scss"

function Dice({Randomizer}) {

  return (
    <div className='Dice'>
        <img src="/random.svg" alt="" onClick={() => Randomizer()} />
    </div>
  )
}

export default Dice