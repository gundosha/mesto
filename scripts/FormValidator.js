class FormValidator {
    constructor(validationConfig = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__input-error_active'
    }, formElement) {
        this._formElement = formElement
        this._validConfig = validationConfig
    }

    _showInputError = (_formElement, inputElement, errorMessage) => {
        const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validConfig.errorClass);
    };

    _hideInputError = (_formElement, inputElement) => {
        const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validConfig.inputErrorClass);
        errorElement.classList.remove(this._validConfig.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (_formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(_formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(_formElement, inputElement);
        }
    };

    _disableSubmitButton = (buttonElement, inactiveButtonClass) => {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement, this._validConfig.inactiveButtonClass)

        } else {
            buttonElement.disabled = false
            buttonElement.classList.remove(this._validConfig.inactiveButtonClass);
        }
    }

    _setEventListeners = (_formElement) => {
        const inputList = Array.from(_formElement.querySelectorAll(this._validConfig.inputSelector));
        const buttonElement = _formElement.querySelector(this._validConfig.submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(_formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement)
            });
        });

    };

    enableValidation(config, _formElement) {
        const formList = Array.from(document.querySelectorAll(_formElement));
        formList.forEach((_formElement) => {
            _formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });

            const fieldsetList = Array.from(_formElement.querySelectorAll('.popup__form-set'));
            fieldsetList.forEach((fieldSet) => {
                this._setEventListeners(fieldSet, config);
            });

            return this._setEventListeners(_formElement, config);
        });
    }
}

export default FormValidator