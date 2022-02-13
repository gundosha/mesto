export default class Popup {
    constructor(popupSelector, buttonClose) {
        this._buttonClose = buttonClose
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
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
        this._popupSelector.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        if (this._popupSelector.classList.contains('popup_active')) {
            this._popupSelector.classList.remove('popup_active');
            document.removeEventListener('keydown', this._handleEscClose);
        }
    }
}