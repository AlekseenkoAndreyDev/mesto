const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__input-button',
    inactiveButtonClass: 'popup__input-button_state_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__error_state_visible'
}

function setError(form, input, config){
    const error = form.querySelector(`#${input.id}-error`)
    input.classList.add(config.inputErrorClass)
    error.classList.add(config.errorClass)
    error.textContent = input.validationMessage
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`)
    input.classList.remove(config.inputErrorClass)
    error.classList.remove(config.errorClass)
    error.textContent = ''
}

function validateInput(form, input, config){
    const error = form.querySelector(`#${input.id}-error`)
    if (!input.validity.valid) {
        setError(form, input, config)
    } else {
        hideError(form, input, config)
    }
}

function hasInvalidInput(inputs){
    return inputs.some((input) => {
        return !input.validity.valid
    })
}

function setButtonDisabled(button, config) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute("disabled", "disabled")
}

function removeButtonDisabled(button, config) {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute("disabled", "disabled")
}

function toggleButtonState(inputs, button, config){
    if (hasInvalidInput(inputs)) {
        setButtonDisabled(button, config)
      } else {
        removeButtonDisabled(button, config)
      }
}

function setHandlers(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector))
    const button = form.querySelector(config.submitButtonSelector)
    toggleButtonState(inputs, button, config)
    inputs.forEach(function(input) {
        input.addEventListener('input', function(){
            validateInput(form, input, config)
            toggleButtonState(inputs, button, config)
        })
    })
}

function enableValidation(config){
    const forms = Array.from(document.querySelectorAll(config.formSelector))
    forms.forEach(function(form) {
        setHandlers(form, config)
    })
};

enableValidation(validationConfig)