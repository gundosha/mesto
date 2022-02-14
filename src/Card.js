class Card {
    constructor(selector, { handleCardClick }, name, imageLink) {
        this._name = name;
        this._imageLink = imageLink;
        this._handleCardClick = handleCardClick;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
            return document
                .querySelector(this._selector)
                .content
                .querySelector('.element')
                .cloneNode(true);

        }
        // _openCard(title, link) {
        //     const popupImage = document.querySelector('.popup_type_image');
        //     const popupTxt = document.querySelector('.popup__text');
        //     const bgImage = document.querySelector('.popup__image');
        //     this._handleCardClick(title, link)
        //     popupTxt.textContent = title;
        //     bgImage.src = link;
        //     bgImage.alt = title
        // }



    _setEventListeners() {
        this._element.querySelector('.element__container-like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__container-like_black')
        });

        this._element.querySelector('.element__delete-image').addEventListener('click', (evt) => {
            evt.target.closest('.element').remove();
        });
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._imageLink)
        })
    }

    createCard() {

        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._setEventListeners()
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.src = this._imageLink
        this._elementImage.alt = this._name
        return this._element
    }

}

export default Card