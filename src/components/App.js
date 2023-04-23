import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { EditProfilePopup } from "./EditProfilePopup.js";
import { EditAvatarPopup } from "./EditAvatarPopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCardsApi()
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => console.log(`Возникла ошибка ${err}`))
  }, []);

  useEffect(() => {
    api.getUserInfoApi()
      .then((data) => {
        setCurrentUser(data);
      })
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(cardItem => cardItem._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch( (err) => { console.log(`Возникла ошибка ${err}`)});
} 

  function handleCardDelete(id){
    api.deleteCardApi(id)
      .then(() => {
        const updatedCards = cards.filter((card) => card._id !== id);
        setCards(updatedCards);
    })
      .catch( (err) => { console.log(`Возникла ошибка ${err}`)})
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleUpdateUser(userData) {
    api.updateUserInfo(userData.name, userData.about)
      .then((res)=> {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch( (err) => { console.log(`Возникла ошибка ${err}`)})
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="add_card"
            title="Новое место"
            text="Добавить"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__field popup__field_type_region"
              type="text"
              id="region-input"
              value=""
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              name="region"
            />
            <span className="region-input-error popup__error"></span>
            <input
              className="popup__field popup__field_type_link"
              type="url"
              id="image-input"
              value=""
              placeholder="Ссылка на картинку"
              required
              name="link"
            />
            <span className="image-input-error popup__error"></span>
          </PopupWithForm>
          <PopupWithForm name="confirm" title="Вы уверены?"></PopupWithForm>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
