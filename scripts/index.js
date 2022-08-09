let editPopup = document.querySelector('.popup_editProfile');
let addPopup = document.querySelector('.popup_addCard');
let openEditPopupButton = document.querySelector('.profile__edit-button');
let openAddPopupButton = document.querySelector('.profile__add-button');
let closeEditPopupButton = document.querySelector('.popup_editProfile__close-button');
let closeAddPopupButton = document.querySelector('.popup_addProfile__close-button');
let editPopupForm = document.querySelector('.popup_editProfile__form');
let addPopupForm = document.querySelector('.popup_addCard__form');
let nameValue = document.querySelector('.popup__input-text_content_name');
let aboutValue = document.querySelector('.popup__input-text_content_about');
let nameCard = document.querySelector('.popup__input-text_content_nameCard');
let linkCard = document.querySelector('.popup__input-text_content_linkCard');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

openEditPopupButton.onclick = function() {
    nameValue.value = profileName.textContent;
    aboutValue.value = profileAbout.textContent;
    editPopup.classList.add('popup_state_opened');
}

openAddPopupButton.onclick = function() {
    addPopup.classList.add('popup_state_opened');
}

closeEditPopupButton.onclick = function() {
    editPopup.classList.remove('popup_state_opened');
}

closeAddPopupButton.onclick = function() {
    addPopup.classList.remove('popup_state_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameValue.value;
    profileAbout.textContent = aboutValue.value;
    editPopup.classList.remove('popup_state_opened');
}

editPopupForm.addEventListener('submit', formSubmitHandler);

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

const template = document.querySelector('#element-template').content.children[0];
const cardsList = document.querySelector('.elements');

function createCard(name, link) {
    const cardElement = template.cloneNode(true);
    cardsList.prepend(cardElement);
    const cardTitle = document.querySelector('.element__title');
    const cardImage = document.querySelector('.element__image');
    
    const likeButton = cardElement.querySelector('.element__like-button');
    likeButton.onclick = function(){
      likeButton.classList.toggle('element__like-button_state_active');
    };

    const removeButton = cardElement.querySelector('.element__remove');
    removeButton.onclick = function(){
      cardElement.remove();
    }

    const imagePopup = document.querySelector('.popup_imageFs');
    const imagePopupImage = document.querySelector('.popup__image');
    const imagePopupSubtitle = document.querySelector('.popup__subtitle');
    const imagePopupCloseButton = document.querySelector('.popup__close-button_imageFs');

    cardImage.onclick = function(){
      imagePopup.classList.add('popup_state_opened');
      imagePopupImage.src = link;
      imagePopupSubtitle.textContent = name;
    }

    imagePopupCloseButton.onclick = function(){
      imagePopup.classList.remove('popup_state_opened');
    }
    
    cardTitle.textContent = name;
    cardImage.src = link;

    return cardElement;
};



function addEventListener(){
  addPopupForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    createCard(nameCard.value, linkCard.value);
    addPopup.classList.remove('popup_state_opened');
    nameCard.value = '';
    linkCard.value = '';
  });
}

function createInitialCards() {
    initialCards.forEach(function (item) {
      createCard(item.name, item.link)
    });
};

addEventListener();

createInitialCards();