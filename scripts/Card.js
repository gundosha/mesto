class Card {
    constructor(selector) {
        this._selector = selector;
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);

    }

    _closePopup(popup) {
        popup.classList.remove('popup_active');
        this._closeByOverLay(popup)
        this._closeByEsc(popup)
    }

    _closeByEsc(popup) {
        document.removeEventListener('keydown', (e) => {

            if (e.keyCode === escKey) {
                this._closePopup(popup)

            }

        });
    }
    _closeByOverLay = (popup) => {
        document.removeEventListener('click', (e) => {
            if (e.target === popup) {
                this._closePopup(popup)
            }
        });
    }

    _closeByOverlayClick(popup) {
        document.addEventListener('click', (e) => {
            if (e.target === popup) {
                this._closePopup(popup)
            }
        });
    }

    _closeByEscClick(popup) {
        document.addEventListener('keydown', (e) => {
            const escKey = 27;
            if (e.keyCode === escKey) {
                this._closePopup(popup)

            }

        })
    }

    _openPopup(popup) {
        popup.classList.add('popup_active');
        this._closeByOverlayClick(popup)
        this._closeByEscClick(popup)

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


    createCard(name, imageLink) {

        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');

        this._element.querySelector('.element__container-like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__container-like_black')
        });

        this._element.querySelector('.element__delete-image').addEventListener('click', (evt) => {
            evt.target.closest('.element').remove();
        });

        this._elementImage.addEventListener('click', () => {
            this._openCard(name, imageLink)
        })

        this._element.querySelector('.element__title').textContent = name;
        this._elementImage.src = imageLink
        this._elementImage.alt = name
        return this._element
    }

}

export default Card