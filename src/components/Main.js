export default function Main(props){

  return (
    <main>
        <section className="profile">
          <div className="profile__avatar-area">
            <button className="profile__avatar-button" type="button"  aria-label="Обновить аватар" onClick={props.onEditAvatar}>
            </button>
            <img className="profile__avatar" src="#" alt="аватар профиля"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button className="profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
      <ul className="elements"></ul>
    </main>
  )
}