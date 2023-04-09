import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import React from 'react';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="content">
      <div className="page">
        <Header />
        <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__field popup__field_type_name" type="text" id="name-input" value="" placeholder="ФИО" required minlength="2" maxlength="40" name="name"/>
          <span className="name-input-error popup__error"></span>
          <input className="popup__field popup__field_type_job" type="text" id="job-input" value="" placeholder="Чем занимаетесь?" required minlength="2" maxlength="200" name="info"/>
          <span className="popup__input-error job-input-error popup__error"></span>
        </PopupWithForm>
        <PopupWithForm
        name="add_card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        >
          <input className="popup__field popup__field_type_region" type="text" id="region-input" value="" placeholder="Название" required minlength="2" maxlength="30" name="region"/>
          <span className="region-input-error popup__error"></span>
          <input className="popup__field popup__field_type_link" type="url" id="image-input" value="" placeholder="Ссылка на картинку" required name="link"/>
          <span className="image-input-error popup__error"></span>
        </PopupWithForm>
        <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        >
        </PopupWithForm>
        <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        >
        </PopupWithForm>
        <ImagePopup />
    
      </div>

      <template className="elements-template">
        <li className="elements__element">
          <button className="elements__btn-delete" type="button" aria-label="Удалить"></button>
          <img className="elements__image" src="#" alt="#" />
          <div className="elements__caption">
            <h2 className="elements__title"></h2>
            <div className="elements__like">
              <button className="elements__icon" type="button" aria-label="Нравится"></button>
              <p className="elements__counter"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
