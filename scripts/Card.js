import { imagePopupImageFs, subtitlePopupImageFs, popupImageFs, openPopup, templateCard } from "./index.js";

export default class Card {
  
    constructor(name, link){
      this._name = name;
      this._link = link;
    }
  
    _getTemplate(){
      const cardElement = templateCard.cloneNode(true);
      return cardElement;
    }
  
    generateCard(){
      this._element = this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = `картинка ${this._name}`;
  
      return this._element;
    }
  
    _setEventListeners(){
      this._element.querySelector('.element__like-button').addEventListener('click', () => {
        this._handleLikeButtonClick();
      });
  
      this._element.querySelector('.element__remove').addEventListener('click', () => {
        this._handleRemoveButtonClick();
      });
  
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleImageClick();
      });
    }
  
    _handleLikeButtonClick() {
      this._element.querySelector('.element__like-button').classList.toggle('element__like-button_state_active');
    }
  
    _handleRemoveButtonClick() {
      this._element.remove();
      this._element = null;
    }
  
    _handleImageClick() {
      imagePopupImageFs.src = this._link;
      imagePopupImageFs.alt = `картинка ${this._name}`;
      subtitlePopupImageFs.textContent = this._name;
      openPopup(popupImageFs);
    }
  
  }