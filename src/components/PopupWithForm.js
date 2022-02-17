import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm, ) {
        super(popupSelector);
        this._submitForm = submitForm
            // достаём все элементы полей
        this._form = this._popup.querySelector('.popup__form');
        this._inputsList = Array.from(this._form.querySelectorAll('.popup__input'))
    }
    _getInputValues() {
        console.log(this._inputsList)
            // создаём пустой объект
        const data = {};
        this._inputsList.forEach(input => {
            data[input.name] = input.value;

        })
        console.log(data)
        return data;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this._getInputValues())
        });
        super.setEventListeners()
    }



    close() {
        // reset fo
        this._form.reset();
        super.close();
    }

}