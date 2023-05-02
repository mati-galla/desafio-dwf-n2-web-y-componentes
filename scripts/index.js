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

async function createFooter() {
  const footerEl = document.querySelector(".footer");
  await footer(footerEl);
}

async function createServiceCards() {
  const cardsContainer = document.querySelector(".cards-container");
  const cardType = "services";
  for (let i = 2; i > -1; i--) {
    await card(cardsContainer, i, cardType);
  }
}

(function () {
  createHeader();
  createFooter();
  createServiceCards();
})();
