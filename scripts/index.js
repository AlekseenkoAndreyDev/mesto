let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let popupForm = document.querySelector('.popup__form');
let nameValue = document.querySelector('.popup__input-text_content_name');
let aboutValue = document.querySelector('.popup__input-text_content_about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

openPopupButton.onclick = function() {
    nameValue.value = profileName.textContent;
    aboutValue.value = profileAbout.textContent;
    popup.classList.add('popup_state_opened');
}

closePopupButton.onclick = function() {
    popup.classList.remove('popup_state_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameValue.value;
    profileAbout.textContent = aboutValue.value;
    popup.classList.remove('popup_state_opened');
}

popupForm.addEventListener('submit', formSubmitHandler);
