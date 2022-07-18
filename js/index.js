import { renderMenuModal, resetNavigation } from './nav-mobile.js';
import { toggleStickyNav, navScrollSpy } from './nav-desktop.js';
import toggleSkill from './about.js';

const mobileMenu = document.getElementById('menu-toggle');
mobileMenu.onclick = renderMenuModal;

window.addEventListener('resize', resetNavigation);
window.addEventListener('scroll', toggleStickyNav);
window.addEventListener('scroll', navScrollSpy);

const chevronBtns = [...document.getElementsByClassName('skill-drop-btn')];
chevronBtns.forEach((btn, i) => {
  btn.id = `drop-btn-${i + 1}`;
  btn.onclick = toggleSkill;
});
