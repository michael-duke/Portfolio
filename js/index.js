import { renderMenuModal, resetNavigation } from './nav-mobile.js';
import { toggleStickyNav, navScrollSpy } from './nav-desktop.js';
import toggleSkill from './about.js';
import renderPortfolio from './project.js';
import validateForm from './form-validation.js';
import  { onUpdate, refreshForm } from './storage.js';

const mobileMenu = document.getElementById('menu-toggle');
mobileMenu.onclick = renderMenuModal;

window.addEventListener('resize', resetNavigation);
window.addEventListener('scroll', toggleStickyNav);
window.addEventListener('scroll', navScrollSpy);

document.addEventListener('DOMContentLoaded', renderPortfolio);

const chevronBtns = [...document.getElementsByClassName('skill-drop-btn')];
chevronBtns.forEach((btn, i) => {
  btn.id = `drop-btn-${i + 1}`;
  btn.onclick = toggleSkill;
});

const form = document.getElementById('contact-me');
form.addEventListener('submit', validateForm);

const {elements:{name,email, message}} = form;
name.onchange = onUpdate;
email.onchange = onUpdate;
message.onchange= onUpdate;

window.onload= refreshForm(form);