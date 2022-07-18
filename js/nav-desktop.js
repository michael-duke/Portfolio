const toggleStickyNav = () => {
  const toolbar = document.querySelector('.toolbar-containter');
  const scrollPos = window.scrollY;
  const toggleSticky = scrollPos > 0
    ? toolbar.classList.add('sticky-nav')
    : toolbar.classList.remove('sticky-nav');

  return window.innerWidth < 768
    ? toolbar.classList.remove('sticky-nav')
    : toggleSticky;
};

const navScrollSpy = () => {
  if (window.innerWidth >= 768) {
    const secionAll = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY;
    secionAll.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 200;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(
        `.navigation li a[href*=${sectionId}]`,
      );

      if (scrollPos > sectionTop && scrollPos <= sectionTop + sectionHeight) {
        navLink.parentElement.classList.add('active-navlink');
      } else navLink.parentElement.classList.remove('active-navlink');
    });
  }
};
export { toggleStickyNav, navScrollSpy };
