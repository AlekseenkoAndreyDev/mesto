const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAdd = document.querySelector('.popup_type_add-card');
const popupImageFs = document.querySelector('.popup_type_image-fs');

const openButtonPopupEdit = document.querySelector('.profile__edit-button');
const openButtonPopupAdd = document.querySelector('.profile__add-button');
const closeButtonPopupEdit = document.querySelector('.popup__close-button_type_editProfile');
const closeButtonPopupAdd = document.querySelector('.popup__close-button_type_addProfile');
const closeButtonPopupImageFs = document.querySelector('.popup__close-button_type_image-fs');

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

function openPopup(item){
  item.classList.add('popup_state_opened');
};

function closePopup(item){
  item.classList.remove('popup_state_opened');
};

openButtonPopupEdit.addEventListener ('click', function() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEdit);
});

openButtonPopupAdd.addEventListener ('click', function() {
  openPopup(popupAdd);
});

closeButtonPopupEdit.addEventListener ('click', function() {
  closePopup(popupEdit);
});

closeButtonPopupAdd.addEventListener ('click', function() {
  closePopup(popupAdd);
});

closeButtonPopupImageFs.addEventListener ('click', function() {
  closePopup(popupImageFs);
});

function popupEditFormSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);
}

popupEditForm.addEventListener('submit', popupEditFormSubmitHandler);

function createCard(name, link) {
    const cardElement = templateCard.cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__image');
    const likeButton = cardElement.querySelector('.element__like-button');
    likeButton.addEventListener ('click', function() {
      likeButton.classList.toggle('element__like-button_state_active');
    });
    const removeButton = cardElement.querySelector('.element__remove');
    removeButton.addEventListener ('click', function() {
      cardElement.remove();
    });
    cardImage.addEventListener ('click', function() {
      openPopup(popupImageFs);
      imagePopupImageFs.src = link;
      imagePopupImageFs.alt = 'картинка ' + name;
      subtitlePopupImageFs.textContent = name;
    });
      
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = 'картинка ' + name;
    
    return cardElement;
};

function renderCard(name, link) {
  const newCard = createCard(name, link);
  cardsList.prepend(newCard);
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

addCreateCardListener();

createInitialCards();