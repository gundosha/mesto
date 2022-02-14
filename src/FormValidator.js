class FormValidator {
    constructor(validationConfig, formElement, buttonElement) {
        this._inputSelector = validationConfig.inputSelector;
        this._formElement = formElement;
        this._validConfig = validationConfig;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._buttonElement = buttonElement
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

    disableSubmitButton = () => {
        console.log(this._buttonElement)
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    enableSubmitButton = () => {
        console.log(this._buttonElement)
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
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

    _setEventListeners = (_formElement) => {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(_formElement, inputElement);
                this._toggleButtonState(this._inputList)
            });
        });

    };

    enableValidation() {
        this._setEventListeners();

    }
}

export default FormValidator