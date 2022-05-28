let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let savePopupButton = document.querySelector('.popup__input-button');
let nameValue = document.querySelector('.popup__input-text_name');
let aboutValue = document.querySelector('.popup__input-text_about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let likeButtons = document.querySelectorAll('.element__like-button');

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function() {
        likeButtons[i].classList.toggle('element__like-button_state_active');
    });
}

openPopupButton.onclick = function() {
    nameValue.value = profileName.textContent;
    aboutValue.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

closePopupButton.onclick = function() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameValue.value;
    profileAbout.textContent = aboutValue.value;
    popup.classList.remove('popup_opened');
}

savePopupButton.addEventListener('click', formSubmitHandler);
