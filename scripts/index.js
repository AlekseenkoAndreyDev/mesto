import Card from "./Card.js";
import FormValidator from './FormValidator.js';

export { imagePopupImageFs, subtitlePopupImageFs, popupImageFs, templateCard };

const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAdd = document.querySelector('.popup_type_add-card');
const popupImageFs = document.querySelector('.popup_type_image-fs');

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const buttonClosePopupEdit = document.querySelector('.popup__close-button_type_editProfile');
const buttonClosePopupAdd = document.querySelector('.popup__close-button_type_addProfile');
const buttonClosePopupImageFs = document.querySelector('.popup__close-button_type_image-fs');

const popupEditForm = document.querySelector('.popup__form_type_edit-profile');
const popupAddForm = document.querySelector('.popup__form_type_addCard');

const nameInput = document.querySelector('.popup__input-text_content_name');
const aboutInput = document.querySelector('.popup__input-text_content_about');
const cardNameInput = document.querySelector('.popup__input-text_content_name-card');
const cardLinkInput = document.querySelector('.popup__input-text_content_link-card');

const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

const templateCard = document.querySelector('#element-template').content.querySelector('.element');
const cardsList = document.querySelector('.elements');

const imagePopupImageFs = document.querySelector('.popup__image');
const subtitlePopupImageFs = document.querySelector('.popup__subtitle');

const popupList = document.querySelectorAll('.popup')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__input-button',
  inactiveButtonClass: 'popup__input-button_state_disabled',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__error_state_visible'
};

const validatePopupEdit = new FormValidator(validationConfig, popupEditForm);
const validatePopupAdd = new FormValidator(validationConfig, popupAddForm);

function runValidation() {
  validatePopupEdit.enableValidation();
  validatePopupAdd.enableValidation();
};

function closeEscPopupHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_state_opened')
    closePopup(openedPopup)
  };
};

function addCloseEscPopupHandler() {
  document.addEventListener('keydown', closeEscPopupHandler)
};

function deleteCloseEscPopupHandler() {
  document.removeEventListener('keydown', closeEscPopupHandler)
};

export function openPopup(item){
  item.classList.add('popup_state_opened');
  addCloseEscPopupHandler();
};

function closePopup(item){
  item.classList.remove('popup_state_opened');
  deleteCloseEscPopupHandler()
}

function setPopupCloseOverlayHandlers(popupList){
  popupList.forEach(function(popup){
    popup.addEventListener('mousedown', function(evt){
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
    }
    })
  })
}

buttonOpenPopupEdit.addEventListener ('click', function() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  const button = popupEdit.querySelector('.popup__input-button')
  openPopup(popupEdit);
});

buttonOpenPopupAdd.addEventListener ('click', function() {
  const button = popupAdd.querySelector('.popup__input-button')
  popupAddForm.reset();
  openPopup(popupAdd);
});

buttonClosePopupEdit.addEventListener ('click', function() {
  closePopup(popupEdit);
});

buttonClosePopupAdd.addEventListener ('click', function() {
  closePopup(popupAdd);
});

buttonClosePopupImageFs.addEventListener ('click', function() {
  closePopup(popupImageFs);
});

function handleSubmitPopupEditForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);
}

popupEditForm.addEventListener('submit', handleSubmitPopupEditForm);

function renderCard(name, link) {
  const newCard = new Card (name, link);
  const newCardElement = newCard.generateCard();
  cardsList.prepend(newCardElement);
}

function addCreateCardListener(){
  popupAddForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    renderCard(cardNameInput.value, cardLinkInput.value);
    closePopup(popupAdd);
  });
}

function createInitialCards() {
    initialCards.forEach(function (item) {
      renderCard(item.name, item.link)
    });
};

runValidation();

addCreateCardListener();

createInitialCards();

setPopupCloseOverlayHandlers(popupList)