import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm
            // достаём все элементы полей
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    }
    _getInputValues() {

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }

    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => { this._submitForm(evt); });

    }

    close() {
        // reset form
        this._form = this._popupSelector.querySelectorAll('.popup__form')
        this._form.reset();
        super.close();
    }
}