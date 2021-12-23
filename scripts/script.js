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

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// первые 6 карточек
function createCard(name, image) {
    const cardsElements = elTemplate.cloneNode(true);
    cardsElements.querySelector('.element__title').textContent = name;
    cardsElements.querySelector('.element__image').src = image
    return cardsElements.querySelector('.element')
}
// активация лайка
function addLike(evt) {
    evt.target.classList.toggle('element__container-like_black')
}
// удаление карточки
function deleteCard(evt) {
    evt.target.closest('.element').remove();
}

function openCard(title, link) {
    popupImage.classList.toggle('popup_active');
    popupTxt.textContent = title;
    bgImage.src = link;
}
initialCards.forEach(function(element) {
    const elCard = createCard(element.name, element.link)
    elCard.querySelector('.element__container-like').addEventListener('click', addLike);
    elCard.querySelector('.element__delete-image').addEventListener('click', deleteCard)
    elCard.querySelector('.element__image').addEventListener('click', function() {
        openCard(element.name, element.link)
    })
    elements.append(elCard)

});





buttonClose.addEventListener('click', function() {
    openPopup(popupImage)
})

function openPopup(popup) {
    popup.classList.toggle('popup_active');

}

function editUser() {
    openPopup(popupEdit)
    nameInput.value = nameAddInput;
    jobInput.value = jobAddInput;
}

popupOpen.addEventListener('click', editUser);
popupClose.addEventListener('click', editUser);



function addSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value

    editUser()



};

formInput.addEventListener('submit', addSubmitHandler);


function changeCard() {
    openPopup(popupCard)
    popupCardName.value = '';
    popupCardLink.value = '';
}

popupCardClose.addEventListener('click', changeCard)

popupAdd.addEventListener('click', changeCard);


//добавить карточку
function addSubmitCard(evt) {
    evt.preventDefault();
    const newCard = createCard(popupCardName.value, popupCardLink.value);
    newCard.querySelector('.element__container-like').addEventListener('click', addLike);

    newCard.querySelector('.element__delete-image').addEventListener('click', deleteCard);

    const elTitle = newCard.querySelector('.element__title').textContent;
    const elLink = newCard.querySelector('.element__image').src;;

    newCard.querySelector('.element__image').addEventListener('click', function() {
        openCard(elTitle, elLink)
    })

    elements.prepend(newCard);

    changeCard()

}

formInputCard.addEventListener('submit', addSubmitCard);