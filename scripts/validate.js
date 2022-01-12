const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');


};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {



    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });

        setEventListeners(formElement);
    });
}
enableValidation();

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_type_error');
    } else {
        buttonElement.classList.remove('popup__button_type_error');
    }
}


const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeCard = document.querySelector('.popup_type_card')
const popupTypeImage = document.querySelector('.popup_type_image')


// Обойдём все элементы полученной коллекции
document.addEventListener('click', (e) => {
    if (e.target === popupTypeEdit) {
        closePopup(popupTypeEdit)
    }
});

document.addEventListener('click', (e) => {
    if (e.target === popupTypeCard) {
        closePopup(popupTypeCard)
    }
});

document.addEventListener('click', (e) => {
    if (e.target === popupTypeImage) {
        closePopup(popupTypeImage)
    }
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popupTypeEdit)
    }
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popupTypeCard)
    }
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        closePopup(popupTypeImage)
    }
});