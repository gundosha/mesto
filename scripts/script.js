const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit')
const popupClose = document.querySelector('.popup__close');
const popupOpen = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const elTemplate = document.querySelector('.element__template').content;
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const nameInput = document.querySelector('.popup__input_type_title');
const formInput = document.querySelector('.popup__form-input')
const nameAddInput = profileName.textContent;
const jobAddInput = profileJob.textContent;
const buttonClose = document.querySelector('.popup__close-image')
const popupImage = document.querySelector('.popup_type_image');
const popupTxt = document.querySelector('.popup__text');
const bgImage = document.querySelector('.popup__image');
const popupAdd = document.querySelector('.profile__add-button')
const popupCard = document.querySelector('.popup_type_card');
const popupCardClose = document.querySelector('.popup__close-card');
const popupCardName = document.querySelector('.popup__input_type_name');
const popupCardLink = document.querySelector('.popup__input_type_link');
const formInputCard = document.querySelector('.popup__form-card')
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeCard = document.querySelector('.popup_type_card')
const popupTypeImage = document.querySelector('.popup_type_image')
const escKey = 27;
const ButtonElementCreate = document.querySelector('.popup__button_create')

// первые 6 карточек
function createCard(name, imageLink) {

    const cardsElement = elTemplate.cloneNode(true);
    const elementImage = cardsElement.querySelector('.element__image');
    cardsElement.querySelector('.element__container-like').addEventListener('click', toggleLike);

    cardsElement.querySelector('.element__delete-image').addEventListener('click', deleteCard);

    elementImage.addEventListener('click', function() {
        openCard(name, imageLink)
    })

    cardsElement.querySelector('.element__title').textContent = name;
    elementImage.src = imageLink
    elementImage.alt = name
    return cardsElement
}
// активация лайка
function toggleLike(evt) {
    evt.target.classList.toggle('element__container-like_black')
}
// удаление карточки
function deleteCard(evt) {
    evt.target.closest('.element').remove();
}

function openCard(title, link) {
    openPopup(popupImage)
    popupTxt.textContent = title;
    bgImage.src = link;
    bgImage.alt = title
}
initialCards.forEach(function(element) {
    const elCard = createCard(element.name, element.link)
    elements.append(elCard)

});

function closeByOverlayClick(popup) {
    document.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup(popup)
        }
    });
}

function closeByEscClick(popup) {
    document.addEventListener('keydown', (e) => {

        if (e.keyCode === escKey) {
            closePopup(popup)

        }

    })
}

function closeByEsc(popup) {
    document.removeEventListener('keydown', (e) => {

        if (e.keyCode === escKey) {
            closePopup(popup)

        }

    });
}

function closeByOverLay(popup) {
    document.removeEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup(popup)
        }
    });
}

function openPopup(popup) {
    popup.classList.add('popup_active');
    closeByOverlayClick(popup)
    closeByEscClick(popup)


}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    closeByOverLay(popup)
    closeByEsc(popup)
}

function openEditPopup() {
    openPopup(popupEdit)
    nameInput.value = nameAddInput;
    jobInput.value = jobAddInput;
}

function closeEditPopup() {
    closePopup(popupEdit)
}

function openPopupCard() {
    openPopup(popupCard)
    popupCardName.value = '';
    popupCardLink.value = '';

}

function closePopupCard() {
    closePopup(popupCard)
}


buttonClose.addEventListener('click', function() {
    closePopup(popupImage)
})

function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closeEditPopup()

};


//добавить карточку
function submitAddCardForm(evt) {
    evt.preventDefault();
    const newCard = createCard(popupCardName.value, popupCardLink.value);
    elements.prepend(newCard);
    disableSubmitButton(ButtonElementCreate, validationConfig.inactiveButtonClass)
    closePopupCard()
}

formInputCard.addEventListener('submit', submitAddCardForm);

popupOpen.addEventListener('click', openEditPopup);

popupClose.addEventListener('click', closeEditPopup);

formInput.addEventListener('submit', submitEditProfileForm);

popupCardClose.addEventListener('click', closePopupCard)

popupAdd.addEventListener('click', openPopupCard);