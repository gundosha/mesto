class FormValidator {
    constructor(validationConfig, formElement) {
        this._inputSelector = validationConfig.inputSelector;
        this._formElement = document.querySelector(formElement);
        this._validConfig = validationConfig;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._submitButton = this._formElement.querySelector(validationConfig.submitButtonSelector)
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validConfig.errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validConfig.inputErrorClass);
        errorElement.classList.remove(this._validConfig.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    disableSubmitButton = () => {
        console.log(this._submitButton)
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    enableSubmitButton = () => {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState = (inputList) => {
        if (this._hasInvalidInput(inputList)) {
            this.disableSubmitButton()

        } else {
            this.enableSubmitButton()
        }
    }

    _setEventListeners = () => {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList)
            });
        });

    };

    enableValidation() {
        this._setEventListeners();

    }
}

export default FormValidator