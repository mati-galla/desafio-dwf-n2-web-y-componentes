function header(el) {
  el.innerHTML = `
<div class="header__left">
  <figure class="logo">
    <span>Tu logo</span>
    <img src="" alt="" />
  </figure>
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

function mobileMenu(el) {
  el.innerHTML = `<div class="mobile-menu">
  <span class="mobile-menu__close-button">X</span>
  <nav class="mobile-menu__links">
    <a href="" class="menu-link">Portfolio</a>
    <a href="" class="menu-link">Servicios</a>
    <a href="" class="menu-link">Contacto</a>
  </nav>
</div>`;
}
