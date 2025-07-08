let profileEditButton = document.querySelector(".profile__edit-button");
let profileCloseButton = document.querySelector(".popup__close-button");
let profileForm = document.querySelector(".popup__form");
let profileNameInput = document.querySelector(".popup__input_type-name");
let profileBioInput = document.querySelector(".popup__input_type-bio");
let profileSaveButton = document.querySelector(".popup__submit-button");
let currentName = document.querySelector(".profile__name");
let currentBio = document.querySelector(".profile__bio");

function openProfilePopup(evt) {
  let profilePopup = document.querySelector("#profile-popup");

  profileNameInput.value = currentName.textContent;
  profileBioInput.value = currentBio.textContent;

  profilePopup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", openProfilePopup);

function closePopup(evt) {
  let profilePopup = document.querySelector("#profile-popup");

  profilePopup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  currentName.textContent = profileNameInput.value;
  currentBio.textContent = profileBioInput.value;

  closePopup();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

profileCloseButton.addEventListener("click", closePopup);
