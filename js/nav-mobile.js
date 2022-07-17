const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navlinks = document.querySelector('.navigation');

const closeMenuModal = () => {
  const navModal = document.getElementById('mobile-modal');
  navModal.style.display = 'none';
  navModal.remove();
  // Reset the background that was blurred
  nav.style.filter = '';
  header.style.filter = '';
};

function renderMenuModal() {
  // Refresh the DOM for modal;
  const prevCloseBtn = document.getElementById('close-btn');
  if (prevCloseBtn) {
    prevCloseBtn.remove();
  }
  // Create close button
  const closeBtn = document.createElement('button');
  const menuCloseIcon = document.createElement('a');
  menuCloseIcon.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#fff"/>
  </svg>
  `;

  closeBtn.onclick = closeMenuModal;
  closeBtn.appendChild(menuCloseIcon);
  closeBtn.className = 'menu-close-btn';
  closeBtn.id = 'close-btn';

  // Add display to ul Element and , add onclick for each link.
  navlinks.style.display = 'flex';
  const navLinks = document.querySelectorAll('.navigation li');
  navLinks.forEach((link) => {
    link.onclick = closeMenuModal;
  });

  // Create a Modal for Mobile Menu,
  const navModal = document.createElement('div');
  navModal.className = 'mobile-menu';
  navModal.id = 'mobile-modal';
  navModal.addEventListener('click', (e) => {
    if (e.target.nodeName === 'DIV') closeMenuModal();
  });
  navModal.style.display = 'block';
  navModal.appendChild(closeBtn);
  navModal.appendChild(navlinks);
  document.body.prepend(navModal);
  // Blur Background
  nav.style.filter = 'blur(8px)';
  header.style.filter = 'blur(8px)';
}

const resetNavLinks = () => {
  const desktopScreen = window.matchMedia('(min-width: 768px)');
  if (desktopScreen.matches) {
    nav.prepend(navlinks);
    navlinks.style.display = 'inline-flex';
  } else if (nav.firstElementChild.classList.contains('navigation')) nav.firstElementChild.remove();
  // nav.prepend(navlinks);
  // navlinks.style.display = desktopScreen.matches ? "inline-flex" : "none";
};

export { renderMenuModal, closeMenuModal, resetNavLinks };
