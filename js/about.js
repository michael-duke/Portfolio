const list = [...document.getElementsByClassName('skill-list')];
const desktopScreen = window.matchMedia('(max-width: 768px)');

const rotateChevron = (btn) => {
  const chevronBtn = btn;
  const { transform } = window.getComputedStyle(chevronBtn);
  chevronBtn.style.transform = transform === 'none' ? 'rotate(-90deg)' : 'none';
};

const toggleSkill = (event) => {
  const btn = event.path[1];
  const skillContainer = event.path[2];

  const toggleFlex = desktopScreen.matches ? 'flex' : 'inline-flex';

  list.forEach((skillList, i) => {
    const { display } = window.getComputedStyle(skillList);
    const { borderBottom } = window.getComputedStyle(skillContainer);
    if (btn.id === `drop-btn-${i + 1}`) {
      skillContainer.style.borderBottom = borderBottom === '1px solid rgb(223, 225, 230)'
        ? '0px none rgb(255, 255, 255)'
        : '1px solid rgb(223, 225, 230)';

      skillList.style.display = display === 'none' ? toggleFlex : 'none';
    }
  });
  rotateChevron(btn);
};

export default toggleSkill;
