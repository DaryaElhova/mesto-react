//компонент принимает пропсы title, name и isOpen,onClose (для обработки события закрытия попапа), а также проп children, который содержит вложенную разметку для формы. Пропс isOpen используем для задания класса открытого попапа
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form name={props.name} className="form popup__form" onSubmit={props.onSubmit} noValidate>
            <h2 className="popup__header">{props.title}</h2>
            {/* в чилдрен отличное от базового содержание формы */}
            {props.children}
            {/* почти везде текст кнопки сохранить,поэтому можно использовать {props.text || 'Сохранить'} */}
            <button className="popup__btn" type="submit">{props.text || 'Сохранить'}</button>
            <button className="popup__close" type="button" onClick={props.onClose}></button>
          </form>
        </div>
      </div>
  )
}
