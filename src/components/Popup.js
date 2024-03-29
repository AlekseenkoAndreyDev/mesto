export default class Popup {
    constructor(selectorPopup){
        this._popup = document.querySelector(selectorPopup);
    }

    open(){
        this._popup.classList.add('popup_state_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_state_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    setEventListeners(){
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-image')) {
                this.close();
            }
        })
    }

}