export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._buttonClose = this._popupSelector.querySelector('.popup__close');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close();
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) this.close();
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {
            this._handleOverlayClose(evt);
        });
        this._buttonClose.addEventListener('click', () => {
            this.close();
        });
    }

    open() {
        console.log(this._popupSelector)
        this._popupSelector.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}