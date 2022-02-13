import "../pages/index.css"; // добавьте импорт главного файла стилей 
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути

import initialCards from "./initialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit')
const popupClose = document.querySelector('.popup__close');
const popupOpen = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const elTemplate = document.querySelector('.element__template').content;
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
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
const elImage = document.querySelector('.element__image')
const elText = document.querySelector('.element__title')
const jobInput = document.querySelector('.popup__input_type_subtitle');
const nameInput = document.querySelector('.popup__input_type_title');

const inputUser = {
    name: nameAddInput,
    job: jobAddInput
}





const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

function generateCard(template, onPopup, name, link) {
    const newCards = new Card(template, onPopup, name, link);
    return newCards.createCard(name, link)
}

const PopupByImage = new PopupWithImage(popupTypeImage, '.popup__image', '.popup__text');


const openPopupImage = {
    handleCardClick: (title, link) => {
        PopupByImage.open(title, link)
    }
}



const SectionCard = new Section({
    items: initialCards,
    renderer: (item) => {
        const elCard = generateCard('.element__template', openPopupImage, item.name, item.link);
        SectionCard.addItem(elCard)
    }
}, '.elements')
SectionCard.render()

// initialCards.forEach(function(element) {
//     const openPopupImage = {
//         handleCardClick: (title, link) => {
//             PopupByImage.open(title, link)
//         }
//     }
//     const elCard = generateCard('.element__template', openPopupImage, element.name, element.link);
//     elements.append(elCard);

// });



function submitEditProfileForm(evt) {
    evt.preventDefault();
    const userCard = new UserInfo({
        name: profileName,
        job: profileJob
    })
    userCard.setUserInfo({ title: nameInput.value, work: jobInput.value })
        // profileName.textContent = nameInput.value
        // profileJob.textContent = jobInput.value
    closeEditPopup()

};

function openPopup(popup) {
    const popupOp = new Popup(popup, popupClose)
    popupOp.setEventListeners()
    popupOp.open()


}

function closePopup(popup) {
    const popupEdit = new Popup(popup, popupClose)
    popupEdit.setEventListeners()
    popupEdit.close()
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


function submitAddCardForm(evt) {
    evt.preventDefault();
    const newCard = generateCard('.element__template', openPopupImage, popupCardName.value, popupCardLink.value);
    elements.prepend(newCard);
    const formValidDisable = new FormValidator(validationConfig, validationConfig.formSelector)
    formValidDisable.disableSubmitButton(ButtonElementCreate, validationConfig.inactiveButtonClass)
    closePopupCard()
}



const formValid = new FormValidator(validationConfig, formInputCard);
formValid.enableValidation(validationConfig, validationConfig.formSelector)
const formValidUser = new FormValidator(validationConfig, formInput)
formValidUser.enableValidation(validationConfig, validationConfig.formSelector)

const PopupFormCard = new PopupWithForm(formInputCard, submitAddCardForm)
const PopupFormUser = new PopupWithForm(formInput, submitEditProfileForm)
PopupFormCard.setEventListeners()
PopupFormUser.setEventListeners()

// formInputCard.addEventListener('submit', submitAddCardForm);

popupOpen.addEventListener('click', openEditPopup);

popupClose.addEventListener('click', closeEditPopup);

// formInput.addEventListener('submit', submitEditProfileForm);

popupCardClose.addEventListener('click', closePopupCard)

popupAdd.addEventListener('click', openPopupCard);