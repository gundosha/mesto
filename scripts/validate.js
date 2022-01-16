const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage, validConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validConfig.errorClass);
};

const hideInputError = (formElement, inputElement, validConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validConfig.inputErrorClass);
    errorElement.classList.remove(validConfig.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validConfig);
    } else {
        hideInputError(formElement, inputElement, validConfig);
    }
};

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
}


const toggleButtonState = (inputList, buttonElement, validConfig) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true
        buttonElement.classList.add(validConfig.inactiveButtonClass);

    } else {
        disableSubmitButton(buttonElement, validConfig.inactiveButtonClass)
        buttonElement.disabled = false
        buttonElement.classList.remove(validConfig.inactiveButtonClass);
    }
}



const setEventListeners = (formElement, validConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
    const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validConfig)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, validConfig);
            toggleButtonState(inputList, buttonElement, validConfig)
        });
    });

};



function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            disableSubmitButton(config.submitButtonSelector, config.inactiveButtonClass)
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, config);
        });

        setEventListeners(formElement, config);
    });
}
enableValidation(validationConfig);

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

console.log(validationConfig.submitButtonSelector)