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
import {
    popupOpen,
    profileName,
    profileJob,
    formInput,
    nameAddInput,
    jobAddInput,
    popupAdd,
    popupCardName,
    popupCardLink,
    formInputCard,
    ButtonElementCreate,
    jobInput,
    nameInput,
    popupButton,
    validationConfig,
} from '../utils/constants.js';

function generateCard(template, onPopup, name, link) {
    const newCards = new Card(template, onPopup, name, link);
    return newCards.createCard(name, link)
}

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image', '.popup__text');

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

const userCard = new UserInfo({
    name: profileName,
    job: profileJob
})


const popupTypeCard = new Popup('.popup_type_card')
const popupTypeImage = new Popup('.popup_type_image')
const popupTypeEdit = new Popup('.popup_type_edit')

popupTypeEdit.setEventListeners()
popupTypeCard.setEventListeners()
popupTypeImage.setEventListeners()

nameInput.value = nameAddInput;
jobInput.value = jobAddInput;

function submitEditProfileForm(evt) {
    evt.preventDefault();
    userCard.setUserInfo({ title: nameInput.value, work: jobInput.value })
    popupTypeEdit.close()

};
const formValidDisable = new FormValidator(validationConfig, validationConfig.formSelector, ButtonElementCreate)

function submitAddCardForm(evt) {
    evt.preventDefault();
    const newCard = generateCard('.element__template', openPopupImage, popupCardName.value, popupCardLink.value);
    sectionCard.prependItem(newCard);
    formValidDisable.disableSubmitButton()
    popupTypeCard.close()
}



const formValid = new FormValidator(validationConfig, formInputCard, ButtonElementCreate);
formValid.enableValidation()
const formValidUser = new FormValidator(validationConfig, formInput, popupButton)
formValidUser.enableValidation()

const PopupFormCard = new PopupWithForm('.popup__form-card', submitAddCardForm)
const PopupFormUser = new PopupWithForm('.popup__form-input', submitEditProfileForm)
PopupFormCard.setEventListeners()
PopupFormUser.setEventListeners()

function openUserProfile() {
    popupTypeEdit.open()
}

function openCreateCard() {
    popupTypeCard.open()
}

popupOpen.addEventListener('click', openUserProfile);

popupAdd.addEventListener('click', openCreateCard);