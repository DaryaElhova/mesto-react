//компонент принимает пропсы title, name и isOpen,onClose (для обработки события закрытия попапа), а также проп children, который содержит вложенную разметку для формы. Пропс isOpen используем для задания класса открытого попапа
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form name={props.name} className="form popup__form" novalidate>
            <h2 className="popup__header">{props.title}</h2>
            {props.children}
            <button className="popup__btn" type="submit">Сохранить</button>
            <button className="popup__close" type="button" onClick={props.onClose}></button>
          </form>
        </div>
      </div>
  )
}















// import Popup from './Popup.js'

// export default class PopupWithForm extends Popup {
//   constructor(popupSelector, {handleSubmitForm}) {
//     super(popupSelector);
//     this._handleSubmitForm = handleSubmitForm;
//     //ищем форму в коонкретном попапе, который задаем через селектор
//     this._form = this._popup.querySelector('.popup__form');
//     //достать все элементы полей конкретной формы
//     this._inputsList = this._form.querySelectorAll('.popup__field');
//     this._submitBtn = this._form.querySelector('.popup__btn');
//   }

//   _getInputValues() {
//     //создать пустой объект,туда запишем данные полей
//     const values ={};
//     //проходимся по массиву всех полей формы. Через input.name получем св-во name формы input.value значение поля
//   //   //создаем свойство в объекте values с именем, соответствующим имени поля, и значением, соответствующим значению поля.
//     this._inputsList.forEach(input => {
//       values[input.name] = input.value;
//     })

//     return values;
//   }

//   setInputValues(data) {
//     this._inputList.forEach((input) => {
//       // вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
//       input.value = data[input.name];
//     });
//   }

//   onSaveButtonClick() {
//     this._submitBtn.textContent = 'Сохранение...'
//   }

//   onDataLoaded() {
//     this._submitBtn.textContent = 'Сохранить'
//   }

//   setEventListeners(){
//     super.setEventListeners();
//     //добавить обработчик сабмита формы
//     // добавим вызов функции _handleFormSubmit
//     // передадим ей объект — результат работы _getInputValues
//     this._form.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       this._handleSubmitForm(this._getInputValues())
//     })
//   }

//   close(){
//     super.close();
//     //добавить сброс формы при закрытии
//     this._form.reset();
//   }
// }