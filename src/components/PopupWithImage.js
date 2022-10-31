import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selectorPopup){
        super(selectorPopup);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupSubtitle = this._popup.querySelector('.popup__subtitle')
    }

    open(name, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = `картинка ${name}`;
        this._popupSubtitle.textContent = name;
    }
}