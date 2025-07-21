function addCard(placesTitle, placesImage) {
  const places = document.querySelector(".places");
  const cardTemplate = document.querySelector("#place__card").content;
  const placesCard = cardTemplate
    .querySelector(".places__card")
    .cloneNode(true);
  const placesTitleElement = placesCard.querySelector(".places__title");
  const placesDeleteButton = placesCard.querySelector(".places__delete-button");
  const placesImageElement = placesCard.querySelector(".places__image");
  const placesLikeButton = placesCard.querySelector(".places__like-button");

  placesImageElement.src = placesImage;
  placesImageElement.alt = placesTitle;
  placesTitleElement.textContent = placesTitle;

  placesDeleteButton.addEventListener("click", function () {
    placesCard.remove();
  });

  placesLikeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("places__like-button_active");
  });

  function openImagePopup(evt) {
    const imagePopupTemplate = document.querySelector("#popup__image").content;
    const imagePopup = imagePopupTemplate
      .querySelector(".popup__image")
      .cloneNode(true);
    const imagePopupCloseButton = imagePopup.querySelector(
      ".popup__image-close-button"
    );
    const imagePopupContent = imagePopup.querySelector(".popup__image-content");
    const imagePopupTitle = imagePopup.querySelector(".popup__image-title");

    imagePopupTitle.textContent = placesTitle;
    imagePopupContent.src = placesImage;
    imagePopupContent.alt = placesTitle;

    document.body.append(imagePopup);
    imagePopup.classList.add("popup_opened");

    imagePopupCloseButton.addEventListener("click", function () {
      imagePopup.remove();
    });

    document.querySelector(".popup").addEventListener("click", (evt) => {
      if (evt.target === imagePopup) {
        imagePopup.remove();
      }
    });
  }

  placesImageElement.addEventListener("click", openImagePopup);

  places.append(placesCard);
}

const initialCards = [
  {
    name: "Kilauea",
    link: "https://images.unsplash.com/photo-1576941026827-bccc82341bdd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gran Cañón",
    link: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago Tahoe",
    link: "https://images.unsplash.com/photo-1647285467535-f57aa912ebe8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Parque Nacional de las Secuoyas",
    link: "https://images.unsplash.com/photo-1472740378865-80aab8e73251?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cataratas McWay",
    link: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Glaciar Hubbard",
    link: "https://images.unsplash.com/photo-1605978208410-c3deb0fab40d?q=80&w=1676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

const profileEditButton = document.querySelector(".profile__edit-button");

function openPopup(evt) {
  const popup = document.querySelector("#popup");
  popup.classList.add("popup_opened");
}

function editProfile(evt) {
  const popupTemplate = document.querySelector("#popup").content;
  const popup = popupTemplate.querySelector(".popup").cloneNode(true);
  const popupCloseButton = popup.querySelector(".popup__close-button");
  const popupTitle = popup.querySelector(".popup__title");
  const popupFirstInput = popup.querySelector(".popup__first-input");
  const popupSecondInput = popup.querySelector(".popup__second-input");
  const currentName = document.querySelector(".profile__name");
  const currentBio = document.querySelector(".profile__bio");
  const popupSubmitButton = popup.querySelector(".popup__submit-button");

  popupTitle.textContent = "Editar perfil";

  popupFirstInput.value = currentName.textContent;
  popupFirstInput.placeholder = "Nombre";
  popupFirstInput.name = "profile-name";
  popupFirstInput.setAttribute("minlength", 2);
  popupFirstInput.setAttribute("maxlength", 30);
  popupSecondInput.value = currentBio.textContent;
  popupSecondInput.placeholder = "Acerca de mí";
  popupSecondInput.name = "profile-bio";
  popupSecondInput.setAttribute("minlength", 1);
  popupSecondInput.setAttribute("maxlength", 100);

  popupSubmitButton.textContent = "Guardar";

  document.body.append(popup);
  popup.classList.add("popup_opened");

  popupCloseButton.addEventListener("click", function () {
    popup.remove();
  });

  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      popup.remove();
    }
  });

  popupSubmitButton.addEventListener("click", function () {
    currentName.textContent = popupFirstInput.value;
    currentBio.textContent = popupSecondInput.value;
    popup.remove();
  });
}

profileEditButton.addEventListener("click", editProfile);

const addPlaceButton = document.querySelector(".profile__add-button");

function addPlace(evt) {
  const popupTemplate = document.querySelector("#popup").content;
  const popup = popupTemplate.querySelector(".popup").cloneNode(true);
  const popupCloseButton = popup.querySelector(".popup__close-button");
  const popupTitle = popup.querySelector(".popup__title");
  const popupFirstInput = popup.querySelector(".popup__first-input");
  const popupSecondInput = popup.querySelector(".popup__second-input");
  const popupSubmitButton = popup.querySelector(".popup__submit-button");

  popupTitle.textContent = "Nuevo lugar";

  popupFirstInput.placeholder = "Título";
  popupFirstInput.name = "place-name";
  popupSecondInput.placeholder = "Enlace a la imagen";
  popupSecondInput.name = "place-link";

  const placeTitle = popupFirstInput.value;
  const placeImage = popupSecondInput.value;

  popupSubmitButton.textContent = "Crear";

  document.body.append(popup);
  popup.classList.add("popup_opened");

  popupCloseButton.addEventListener("click", function () {
    popup.remove();
  });

  popupSubmitButton.addEventListener("click", function () {
    const placeTitle = popupFirstInput.value;
    const placeImage = popupSecondInput.value;
    const newCard = {
      name: placeTitle,
      link: placeImage,
    };
    addCard(newCard.name, newCard.link);
    popup.remove();
  });

  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      popup.remove();
    }
  });
}

addPlaceButton.addEventListener("click", addPlace);
