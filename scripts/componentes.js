async function header(el) {
  const imagesData = await getImages();
  const indexLogo = await imagesData.findIndex((e) => e.title == "Logo MG");
  const logo = await imagesData[indexLogo].url;
  el.innerHTML = `
<div class="header__left">
<a href=".">
<img class="logo" src="${logo}" alt="" />
</a>
</div>

<div class="header__right">
  <nav class="header__menu">
    <a href="./portfolio.html" class="menu-link">Portfolio</a>
    <a href="./servicios.html" class="menu-link">Servicios</a>
    <a href="./contacto.html" class="menu-link">Contacto</a>
  </nav>

  <div class="header__hamburger-menu">
    <div class="hamburger-menu__bar"></div>
    <div class="hamburger-menu__bar"></div>
    <div class="hamburger-menu__bar"></div>
  </div>
</div>`;
}

async function mobileMenu(el) {
  el.innerHTML = `<div class="mobile-menu">
  <span class="mobile-menu__close-button">X</span>
  <nav class="mobile-menu__links">
    <a href="./portfolio.html" class="menu-link">Portfolio</a>
    <a href="./servicios.html" class="menu-link">Servicios</a>
    <a href="./contacto.html" class="menu-link">Contacto</a>
  </nav>
</div>`;
}

async function card(cardType) {
  const cardsList = [];
  let cardTag;
  let data;
  let cardsNumber;
  if (cardType == "services") {
    data = await getServices();
    cardTag = "div";
    cardsNumber = data.length;
  } else if (cardType == "repos") {
    data = await getRepos();
    cardTag = "a";
    cardsNumber = data.length;
  }

  for (i = cardsNumber; i > 0; i--) {
    cardsList.push(document.createElement(cardTag));
    cardsList[cardsNumber - i].classList = "card";
    if (cardType == "services") {
      cardsList[cardsNumber - i].href = data[i - 1].url;
    }
    cardsList[cardsNumber - i].innerHTML = `<img src=${
      data[i - 1].image
    } alt="" class="card__image" />
  <h2 class="card__title">${data[i - 1].title}</h2>
  <p class="card__description">${data[i - 1].description}</p>`;
  }

  return cardsList;
}

async function contactForm(el) {
  el.innerHTML = `<div class="contact__container">
  <h2 class="contact__title">Escribime</h2>
  <form class="contact-form">
    <div class="contact-form__row">
      <label class="contact-form__label" for="name">Nombre</label>
      <input
        class="contact-form__input"
        type="text"
        name="name"
        placeholder="Tu nombre" />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="email">Email</label>
      <input
        class="contact-form__input"
        type="text"
        name="email"
        placeholder="tu@mail.com" />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="message">Mensaje</label>
      <textarea
        name="message"
        cols="30"
        rows="10"
        class="contact-form__textarea"></textarea>
    </div>
    <button class="contact-form__send-button">
      Enviar <i class="fa-regular fa-paper-plane"></i>
    </button>
  </form>
</div>`;
}

async function footer(el) {
  const imagesData = await getImages();
  const indexLogo = await imagesData.findIndex((e) => e.title == "Logo MG");
  const logo = await imagesData[indexLogo].url;
  const indexLinkedIn = await imagesData.findIndex(
    (e) => e.title == "Icono LinkedIn"
  );
  const linkedin = await imagesData[indexLinkedIn].url;
  const indexGitHub = await imagesData.findIndex(
    (e) => e.title == "Icono GitHub"
  );
  const github = await imagesData[indexGitHub].url;
  const indexTwitter = await imagesData.findIndex(
    (e) => e.title == "Icono Twitter"
  );
  const twitter = await imagesData[indexTwitter].url;

  el.innerHTML = ` <img class="logo" src="${logo}" alt="" />
  
  <div class="page-links">
    <a href="."><i class="fas fa-house"></i> Home</a>
    <a href="./servicios.html"><i class="fas fa-user"></i> Servicios</a>
    <a href="./contacto.html"><i class="fas fa-phone"></i> Contacto</a>
  </div>
  
  <div class="social-links">
    <a href="https://www.linkedin.com/"><img src="${linkedin}" alt=""></a>
    <a href="https://github.com/mati-galla"><img src="${github}" alt=""></a>
    <a href="https://twitter.com/MaatyGallardo"><img src="${twitter}" alt=""></a>
  </div>
  
  <div class="copyright-notice">
    <a href="https://apx.school">&#169;2023 - https://apx.school</a>
  </div>`;
}
