import toggleSkill from './about.js';
import { renderMenuModal, resetNavLinks } from './nav-mobile.js';

const mobileMenu = document.getElementById('menu-toggle');
mobileMenu.onclick = renderMenuModal;

window.addEventListener('resize', resetNavLinks);

const chevronBtns = [...document.getElementsByClassName('skill-drop-btn')];
chevronBtns.forEach((btn, i) => {
  btn.id = `drop-btn-${i + 1}`;
  btn.onclick = toggleSkill;
});
