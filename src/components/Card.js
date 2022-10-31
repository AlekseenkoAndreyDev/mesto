export default class Card {
  
    constructor(data, templateSelector, handleCardClick){
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate(){
      const cardTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(".element")
        .cloneNode(true);

      return cardTemplate;
    }

    _setEventListeners(){
      this._elementLikeButton = this._element.querySelector('.element__like-button');

      this._elementLikeButton.addEventListener('click', () => {
        this._handleLikeButtonClick();
      });
  
      this._element.querySelector('.element__remove').addEventListener('click', () => {
        this._handleRemoveButtonClick();
      });
  
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }
  
    generateCard(){
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');
      this._setEventListeners();
  
      this._element.querySelector('.element__title').textContent = this._name;
      this._elementImage.src = this._link;
      this._elementImage.alt = `картинка ${this._name}`;
  
      return this._element;
    }
  
    _handleLikeButtonClick() {
      this._elementLikeButton.classList.toggle('element__like-button_state_active');
    }
  
    _handleRemoveButtonClick() {
      this._element.remove();
      this._element = null;
    }
  
  }