import React from 'react'
import Card from '../Card/Card'
import './Modal.scss'

function Modal({ randomFaction, onClose }) {
  if (!randomFaction) return null; // Ne rien afficher si aucune faction n'est sélectionnée

  return (
    <div className='Modal'>
      <div className='ModalContent'>
        <button className="closeButton" onClick={onClose}>X</button>
        <Card factionData={randomFaction} />
      </div>
    </div>
  )
}

export default Modal;
