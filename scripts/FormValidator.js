export default class FormValidator {
    constructor(config, form){
        this._inputSeclector = config.inputSelector,
        this._submitButtonSelector = config.submitButtonSelector,
        this._inactiveButtonClass = config.inactiveButtonClass,
        this._inputErrorClass = config.inputErrorClass,
        this._errorClass = config.errorClass;
        this._config = config;
        this._form = form;
        this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
        this._inputList = this._form.querySelectorAll(this._inputSeclector);
    }

    _setError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.classList.add(this._errorClass);
        error.textContent = input.validationMessage;
    }

    _hideError(input){
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
        error.textContent = '';
    }

    _validateInput(input){
        /* const error = this._form.querySelector(`#${input.id}-error`); */
        if (!input.validity.valid) {
            this._setError(input);
        } else {
            this._hideError(input);
        };
    }

    _hasInvalidInput(){
        return Array.from(this._form.querySelectorAll(this._inputSeclector)).some((input) => {
            return !input.validity.valid;
        })
    }

    _setButtonDisabled() {
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
        this._buttonSubmit.setAttribute("disabled", "disabled");
    }

    _removeButtonDisabled() {
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
        this._buttonSubmit.removeAttribute("disabled", "disabled");
    }

    _toggleButtonState(){
        if (this._hasInvalidInput()) {
            this._setButtonDisabled();
          } else {
            this._removeButtonDisabled();
          }
    }

    _setHandlers() {
        this._form.addEventListener('reset', () => {
            this._setButtonDisabled();
            this._inputList.forEach((input) => {
                this._hideError(input);
            });
        })

        this._toggleButtonState();

        this._inputList.forEach((input) => {
            const error = this._form.querySelector(`#${input.id}-error`);

            input.addEventListener('input', () => {
                this._validateInput(input)
                this._toggleButtonState()
            })
        });
    };

    enableValidation(){
        this._form,addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setHandlers();
    };
    
}