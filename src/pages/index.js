import './index.css';

import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
/* import Popup from '../components/Popup.js'; */
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {  /* popupEdit,
          popupAdd,
          popupImageFs, */
          buttonOpenPopupEdit,
          buttonOpenPopupAdd, /* buttonClosePopupEdit, buttonClosePopupAdd, buttonClosePopupImageFs, */
          popupEditForm,
          popupAddForm,
          nameInput,
          aboutInput, /* cardNameInput, cardLinkInput, */
          /* profileName, profileAbout, */
        /*  cardsList, */
          /* imagePopupImageFs, subtitlePopupImageFs, */
        /*  popupList, */
          initialCards,
          validationConfig
} from '../utils/constants.js';

const popupImageFullScreen = new PopupWithImage('.popup_type_image-fs');

const userInfo = new UserInfo({ name: '.profile__title', about: '.profile__subtitle',});
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', submitForm);
const popupAddCard = new PopupWithForm('.popup_type_add-card', renderCard);

const validatePopupEdit = new FormValidator(validationConfig, popupEditForm);
const validatePopupAdd = new FormValidator(validationConfig, popupAddForm);

function handleButtonOpenEdit(){
  popupEditProfile.open();
  const editInputs = userInfo.getUserInfo();
  nameInput.value = editInputs.name;
  aboutInput.value = editInputs.about;
  validatePopupEdit.resetValidation();
}

function handleButtonOpenAdd(){
  popupAddCard.open();
  validatePopupAdd.resetValidation();
}

function submitForm(data){
  userInfo.setUserInfo(data.name, data.about);
  popupEditProfile.closePopupWithForm();
}

function createCard(data) {
  const newCard = new Card(
    { name: data.name, link: data.link },
    '.element-template',
    popupImageFullScreen.open.bind(popupImageFullScreen)
  );

  return newCard.generateCard();
}

const createInitialCards = new Section({ items: initialCards, renderer: (item) => {createInitialCards.addItem(createCard(item))}}, '.elements');

function renderCard(data){
  createInitialCards.addItem(createCard(data));
  popupAddCard.closePopupWithForm();
}

function runValidation() {
  validatePopupEdit.enableValidation();
  validatePopupAdd.enableValidation();
};

runValidation();

popupImageFullScreen.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();

createInitialCards.renderItems();

buttonOpenPopupEdit.addEventListener('click', handleButtonOpenEdit);
buttonOpenPopupAdd.addEventListener('click', handleButtonOpenAdd)