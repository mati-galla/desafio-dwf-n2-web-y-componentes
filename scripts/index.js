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

(function () {
  createHeader();
  createFooter();
})();
