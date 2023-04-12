//компонент принимает пропсы title, name и isOpen,onClose (для обработки события закрытия попапа), а также проп children, который содержит вложенную разметку для формы. Пропс isOpen используем для задания класса открытого попапа
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form name={props.name} className="form popup__form" noValidate>
            <h2 className="popup__header">{props.title}</h2>
            {props.children}
            <button className="popup__btn" type="submit">{props.text || 'Сохранить'}</button>
            <button className="popup__close" type="button" onClick={props.onClose}></button>
          </form>
        </div>
      </div>
  )
}
