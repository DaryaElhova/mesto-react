export default class UserInfo {
  constructor({userName, userInfo, userAvatar}){
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
    this._userAvatar = document.querySelector(userAvatar);
  }

  //возвращает объект с данными пользователя,которые были отображены на странице. Возвращает текущие значения из класса в виде объекта. Ключ объекта-значение атрибута name соотв.инпута

  getUserInfo(){
  return {
    name : this._userName.textContent,
    info : this._userInfo.textContent
  }

}

  //принимает новые данные польхователя и обображает их на странице
  setUserInfo({name, info}){
   this._userName.textContent = name;
   this._userInfo.textContent = info;
   }

  //установка аватара
  setUserAvatar(avatarLink) {
    this._userAvatar.src = avatarLink;
  }
}
