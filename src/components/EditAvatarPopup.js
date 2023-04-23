import React, { useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export function EditAvatarPopup(){
  const avatarRef = useRef();

  return(
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
    </PopupWithForm>
  )
}