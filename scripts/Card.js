class Card {
    constructor(selector, openPopup, name, imageLink) {
        this._name = name;
        this._imageLink = imageLink;
        this._openPopup = openPopup;
        this._selector = selector;
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);

    }

    _openCard(title, link) {
        const popupImage = document.querySelector('.popup_type_image');
        const popupTxt = document.querySelector('.popup__text');
        const bgImage = document.querySelector('.popup__image');
        this._openPopup(popupImage)
        popupTxt.textContent = title;
        bgImage.src = link;
        bgImage.alt = title
    }

    _setEventListeners(_name, _imageLink) {
        this._element.querySelector('.element__container-like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__container-like_black')
        });

        this._element.querySelector('.element__delete-image').addEventListener('click', (evt) => {
            evt.target.closest('.element').remove();
        });

        this._elementImage.addEventListener('click', () => {
            this._openCard(_name, _imageLink)
        })
    }

    createCard(_name, _imageLink) {

        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._setEventListeners(_name, _imageLink)
        this._element.querySelector('.element__title').textContent = _name;
        this._elementImage.src = _imageLink
        this._elementImage.alt = _name
        return this._element
    }

}

export default Card