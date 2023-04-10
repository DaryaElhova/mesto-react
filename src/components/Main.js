import React from 'react';
import api from '../utils/Api.js'
import { useEffect, useState } from 'react';
import Card from './Card.js'

export default function Main(props){
  const [userName, setUserName]= React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfoApi().then((data)=>{
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  },[])

  useEffect(() => {
    api.getCardsApi().then((cards) => {
      setCards(cards);
    })
  },[])

  return (
    <main>
        <section className="profile">
          <div className="profile__avatar-area">
            <button className="profile__avatar-button" type="button"  aria-label="Обновить аватар" onClick={props.onEditAvatar}>
            </button>
            <img className="profile__avatar" src={userAvatar} alt="аватар профиля"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button className="profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
      <ul className="elements">
        {cards.slice(0, 12).map((card) => {
          return (
            <Card 
              key={card._id} 
              card={card} 
              name={card.name}
              link={card.link}
              onCardClick={props.onCardClick}
              />
          )
        })}
      </ul>
    </main>
  )
}
