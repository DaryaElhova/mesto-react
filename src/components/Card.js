import React from 'react';

export default function Card({card, onCardClick}) {
 function handleClick(){
  onCardClick(card);
 }

  return (
    <li className="elements__element">
      <button className="elements__btn-delete" type="button" aria-label="Удалить"></button>
      <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="elements__caption">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like">
          <button className="elements__icon" type="button" aria-label="Нравится"></button>
          <p className="elements__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
