import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api.js";

import Card from "./Card.js";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfoApi()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(`Возникла ошибка ${err}`))

    api.getCardsApi()
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => console.log(`Возникла ошибка ${err}`))
  }, []);


  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-area">
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}
          ></button>
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="аватар профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <ul className="elements">
        {cards.slice(0, 12).map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </ul>
    </main>
  );
}
