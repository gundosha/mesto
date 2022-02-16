export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._buttonClose = this._popup.querySelector('.popup__close');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close();
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) this.close();
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            this._handleOverlayClose(evt);
        });
        this._buttonClose.addEventListener('click', () => {
            this.close();
        });
    }

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}