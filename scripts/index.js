async function createServiceCards() {
  const cardsContainerEl = document.querySelector(".cards-container");
  const cardType = "services";
  const cardsList = await card(cardType);
  for (let i = 0; i < 3; i++) {
    cardsContainerEl.appendChild(cardsList[i]);
  }
}

async function createReposCards() {
  const cardsContainerEl = document.querySelector(".cards-container");
  const cardType = "repos";
  const cardsList = await card(cardType);
  const reposNumber = cardsList.length;
  for (let i = 0; i < reposNumber; i++) {
    cardsContainerEl.appendChild(cardsList[i]);
  }
  const repos = cardsContainerEl.querySelectorAll(".card");
  for (let i = reposNumber; i > 3; i--) {
    repos[i - 1].style.display = "none";
  }
  return reposNumber;
}

async function showHideCards(n) {
  const repos = document.querySelectorAll(".card");
  for (let i = n; i > 3; i--) {
    if (repos[i - 1].style.display == "none") {
      repos[i - 1].style.display = "initial";
    } else if (repos[i - 1].style.display == "initial") {
      repos[i - 1].style.display = "none";
    }
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data.entries());
  const msg = `Nombre: ${values.name}, Email: ${values.email}, Mensaje: ${values.message}`;
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ to: "matias.jgallardo@gmail.com", message: msg }),
  });
}

async function addBackground() {
  const imagesData = await getImages();

  const indexBackground = await imagesData.findIndex(
    (e) => e.title == "Background Doodle"
  );
  const backgroundImg = await imagesData[indexBackground].url;
  const elsWithBg = document.querySelectorAll(".background");
  elsWithBg.forEach((e) => (e.style.background = `url(${backgroundImg})`));
}

async function createHeader() {
  const headerEl = document.querySelector(".header");
  await header(headerEl);

  const ddMenuContainer = document.querySelector(".mobile-menu-container");
  await mobileMenu(ddMenuContainer);

  const ddMenu = ddMenuContainer.querySelector(".mobile-menu");
  const hamburgerMenu = headerEl.querySelector(".header__hamburger-menu");
  hamburgerMenu.addEventListener("click", function () {
    ddMenu.style = "display: flex";
  });

  const closeMenuButton = ddMenuContainer.querySelector(
    ".mobile-menu__close-button"
  );
  closeMenuButton.addEventListener("click", function () {
    ddMenu.style = "display: none";
  });
}

async function createWelcome() {
  const imagesData = await getImages();
  const welcomeImage = document.querySelector(".welcome__image");
  const welcomeImgIndex = await imagesData.findIndex(
    (e) => e.title == "Rocket Icon"
  );
  welcomeImage.src = imagesData[welcomeImgIndex].url;
}

async function createPresentation() {
  const imagesData = await getImages();
  const presentationPhoto = document.querySelector(".presentation__photo");
  const presentationPhotoIndex = await imagesData.findIndex(
    (e) => e.title == "Foto Propia"
  );
  presentationPhoto.src = imagesData[presentationPhotoIndex].url;
}

async function createServices() {
  const imagesData = await getImages();
  if (document.querySelector(".services__title-container")) {
    const servicesImage = document.querySelector(".services__image");
    const servicesImgIndex = await imagesData.findIndex(
      (e) => e.title == "Icono Maletín"
    );
    servicesImage.src = imagesData[servicesImgIndex].url;
  }
  await createServiceCards();
}

async function createPortfolio() {
  const imagesData = await getImages();
  const portfolioImage = document.querySelector(".portfolio__image");
  const portfolioImgIndex = await imagesData.findIndex(
    (e) => e.title == "Icono Maletín"
  );
  portfolioImage.src = imagesData[portfolioImgIndex].url;
  const reposNumber = await createReposCards();
  const cardsContainerEl = document.querySelector(".cards-container");
  const showHideButton = document.createElement("div");
  showHideButton.classList = "portfolio__show-hide-button";
  showHideButton.innerHTML = `<span>Ver mas</span> <span> 
  <i class="fa-regular fa-square-caret-down"></i> </span>`;
  showHideButton.addEventListener("click", function () {
    const buttonText = showHideButton.querySelector("span");
    if (buttonText.textContent == "Ver mas") {
      buttonText.textContent = "Ver menos";
      showHideButton.querySelector("i").classList =
        "fa-regular fa-square-caret-up";
    } else if (buttonText.textContent == "Ver menos") {
      buttonText.textContent = "Ver mas";
      showHideButton.querySelector("i").classList =
        "fa-regular fa-square-caret-down";
    }
    showHideCards(reposNumber);
  });
  cardsContainerEl.appendChild(showHideButton);
}

async function createContact() {
  const contactEl = document.querySelector(".contact");
  await contactForm(contactEl);
  const formEl = contactEl.querySelector(".contact-form");
  formEl.addEventListener("submit", function (e) {
    handleFormSubmit(e);
    formEl.reset();
  });
}

async function createFooter() {
  const footerEl = document.querySelector(".footer");
  await footer(footerEl);
}

(async function () {
  if (document.querySelector(".header")) createHeader();
  if (document.querySelector(".welcome")) createWelcome();
  if (document.querySelector(".presentation")) createPresentation();
  if (document.querySelector(".services")) createServices();
  if (document.querySelector(".portfolio")) createPortfolio();
  if (document.querySelector(".contact")) createContact();
  if (document.querySelector(".footer")) createFooter();
  if (document.querySelector(".background")) addBackground();
})();
