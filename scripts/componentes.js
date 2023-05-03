async function header(el) {
  const imagesData = await getImages();
  const indexLogo = await imagesData.findIndex((e) => e.title == "Logo MG");
  const logo = await imagesData[indexLogo].url;
  el.innerHTML = `
<div class="header__left">
    <img class="logo" src="${logo}" alt="" />
</div>

<div class="header__right">
  <nav class="header__menu">
    <a href="" class="menu-link">Portfolio</a>
    <a href="" class="menu-link">Servicios</a>
    <a href="" class="menu-link">Contacto</a>
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
    <a href="" class="menu-link">Portfolio</a>
    <a href="" class="menu-link">Servicios</a>
    <a href="" class="menu-link">Contacto</a>
  </nav>
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
  <a href=""><i class="fas fa-house"></i> Home</a>
  <a href=""><i class="fas fa-user"></i> Servicios</a>
  <a href=""><i class="fas fa-phone"></i> Contacto</a>
</div>

<div class="social-links">
  <a href=""><img src="${linkedin}" alt=""></a>
  <a href=""><img src="${github}" alt=""></a>
  <a href=""><img src="${twitter}" alt=""></a>
</div>

<div class="copyright-notice">
  <span>&#169;2023 - https://apx.school</span>
</div>`;
}

async function card(el, index, cardType) {
  let cardEl;
  let data;
  if (cardType == "services") {
    data = await getServices();
    cardEl = document.createElement("div.");
  } else if (cardType == "repos") {
    data = await getRepos();
    cardEl = document.createElement("a");
    cardEl.href = data[index].url;
  }
  cardEl.classList = "card";
  cardEl.innerHTML = `<img src=${data[index].image} alt="" class="card__image" />
<h2 class="card__title">${data[index].title}</h2>
<p class="card__description">${data[index].description}</p>`;
  el.appendChild(cardEl);
}

async function contactForm(el) {
  el.innerHTML = `<div class="contact__container">
  <h2 class="contact__title">Escribime</h2>
  <form class="contact-form" action="">
    <div class="contact-form__row">
      <label class="contact-form__label" for="fullname">Nombre</label>
      <input
        class="contact-form__input"
        type="text"
        id="fullname"
        placeholder="Tu nombre" />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="email">Email</label>
      <input
        class="contact-form__input"
        type="text"
        id="email"
        placeholder="tu@mail.com" />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="message">Mensaje</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        class="contact-form__textarea"></textarea>
    </div>
    <button class="send-button">
      Enviar <i class="fa-regular fa-paper-plane"></i>
    </button>
  </form>
</div>`;
}
