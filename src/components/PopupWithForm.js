import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input-text'));
    }

    _getInputValues(){
        return this._inputs.reduce( (data, input) => {
            data[input.name] = input.value;
            return data;
        }, {});
    }

    closePopupWithForm() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

}