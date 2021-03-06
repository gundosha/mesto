import './index.css'

import initialCards from "../utils/initialCards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    profileOpenButton,
    popupAdd,
    validationConfig,
    inputSubtitle,
    inputTitle
} from '../utils/constants.js';

function generateCard(template, onPopup, name, link) {
    const newCards = new Card(template, onPopup, name, link);
    return newCards.createCard(name, link)
}

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image', '.popup__text');
popupImage.setEventListeners()
const openPopupImage = {
    handleCardClick: (title, link) => {
        popupImage.open(title, link)
    }
}

const sectionCard = new Section({
    items: initialCards,
    renderer: (item) => {
        const elCard = generateCard('.element__template', openPopupImage, item.name, item.link);
        sectionCard.prependItem(elCard)
    }
}, '.elements')
sectionCard.render()

const userCard = new UserInfo('.profile__title', '.profile__subtitle')
const userInfo = userCard.getUserInfo()

// nameInput.value = nameAddInput;
// jobInput.value = jobAddInput;


const addFormValidator = new FormValidator(validationConfig, '.popup__form-card');
addFormValidator.enableValidation()
const formValidUser = new FormValidator(validationConfig, '.popup__form-input')
formValidUser.enableValidation()

// function submitEditProfileForm(data) {
//     userCard.setUserInfo(data.title, data.subtitle)
//     popupFormUser.close()

// };
// const formValidDisable = new FormValidator(validationConfig, '.popup__form-card')

// function submitAddCardForm() {
//     const newCard = generateCard('.element__template', openPopupImage, popupCardName.value, popupCardLink.value);
//     sectionCard.prependItem(newCard);
//     popupFormCard.close()
//     formValidDisable.disableSubmitButton()
// }




const popupFormCard = new PopupWithForm('.popup_type_card', (data => {
    const newCard = generateCard('.element__template', openPopupImage, data.title, data.subtitle);
    sectionCard.prependItem(newCard);
    popupFormCard.close()
    addFormValidator.disableSubmitButton()
}))
const popupFormUser = new PopupWithForm('.popup_type_edit', (data) => {
    userCard.setUserInfo(data.title, data.subtitle);
    popupFormUser.close()
})
popupFormCard.setEventListeners()
popupFormUser.setEventListeners()

function openUserProfile() {
    popupFormUser.open()
    inputTitle.value = userInfo.name
    inputSubtitle.value = userInfo.job
}

function openCreateCard() {
    popupFormCard.open()
}

profileOpenButton.addEventListener('click', openUserProfile);

popupAdd.addEventListener('click', openCreateCard);