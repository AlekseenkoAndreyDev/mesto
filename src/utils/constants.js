export const popupEdit = document.querySelector('.popup_type_edit-profile');
export const popupAdd = document.querySelector('.popup_type_add-card');
export const popupImageFs = document.querySelector('.popup_type_image-fs');

export const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
export const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
export const buttonClosePopupEdit = document.querySelector('.popup__close-button_type_editProfile');
export const buttonClosePopupAdd = document.querySelector('.popup__close-button_type_addProfile');
export const buttonClosePopupImageFs = document.querySelector('.popup__close-button_type_image-fs');

export const popupEditForm = document.querySelector('.popup__form_type_edit-profile');
export const popupAddForm = document.querySelector('.popup__form_type_addCard');

export const nameInput = document.querySelector('.popup__input-text_content_name');
export const aboutInput = document.querySelector('.popup__input-text_content_about');
export const cardNameInput = document.querySelector('.popup__input-text_content_name-card');
export const cardLinkInput = document.querySelector('.popup__input-text_content_link-card');

export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');

export const cardsList = document.querySelector('.elements');

export const imagePopupImageFs = document.querySelector('.popup__image');
export const subtitlePopupImageFs = document.querySelector('.popup__subtitle');

export const popupList = document.querySelectorAll('.popup')

export const initialCards = [
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

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__input-button',
    inactiveButtonClass: 'popup__input-button_state_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__error_state_visible'
  };