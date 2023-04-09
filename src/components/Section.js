export default class Section {
  constructor ({renderer}, containerSelector) {
    //this._items = items;//массив карточек
    this._renderer = renderer;
    //свойство,которому нужно присвоить функцию,получающую на вход карточкуж  в теле функции создается карточка путем вызова createCard(item)(создание новой карточки) и добавляется в контейнер путем вызова публичного метода addItem

    this._container = document.querySelector(containerSelector);
  }
//Метод renderItems проходит по всем элементам массива items и для каждого из них вызывает функцию renderer,
// которая создает соответствующий DOM-элемент
  rendererItems(items) {
    items.reverse().forEach((item) => {
      this._renderer(item);
    })
  }

//метод добавления карточки в контейнер
//Передаем этот элемент в метод addItems, который добавляет его в контейнер.
  addItems(element){
    this._container.prepend(element);
  }
}
