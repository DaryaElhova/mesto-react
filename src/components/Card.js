import React from 'react';

export default function Card(props) {
 function handleClick(){
  props.onCardClick(props.card);
 }

  return (
    <li className="elements__element">
      <button className="elements__btn-delete" type="button" aria-label="Удалить"></button>
      <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="elements__caption">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like">
          <button className="elements__icon" type="button" aria-label="Нравится"></button>
          <p className="elements__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
