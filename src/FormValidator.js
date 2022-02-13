class FormValidator {
    constructor(validationConfig, formElement) {
        this._inputSelector = validationConfig.inputSelector;
        this._formElement = formElement;
        this._validConfig = validationConfig;
    }

    _showInputError = (_formElement, inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validConfig.errorClass);
    };

    _hideInputError = (_formElement, inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validConfig.inputErrorClass);
        errorElement.classList.remove(this._validConfig.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (_formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(this._formElement, inputElement);
        }
    };

    disableSubmitButton = (buttonElement, inactiveButtonClass) => {
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
            this.disableSubmitButton(buttonElement, this._validConfig.inactiveButtonClass)

        } else {
            buttonElement.disabled = false
            buttonElement.classList.remove(this._validConfig.inactiveButtonClass);
        }
    }

    _setEventListeners = (_formElement) => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._validConfig.submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(_formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement)
            });
        });

    };

    enableValidation(config, _formElement) {
        this._setEventListeners(_formElement);

    }
}

export default FormValidator