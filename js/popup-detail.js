import { projectList } from './project.js';

const onPopup = (e) => {
  const {
    path: [, , project],
  } = e;
  const id = +project.id.slice(-1);

  renderPopup(projectList[id - 1]);
};
const closePopup = () => {
  const modal = document.querySelector('.detail-backdrop');
  modal.remove();
};
function renderPopup(projectInfo) {
  const {
    id,
    title,
    featuredImage: { url, alt },
    description: { more },
    technologies,
    projectDetail: { client, role, year },
    link: { source, live },
  } = projectInfo;

  const modalBackdrop = document.createElement('article');
  modalBackdrop.className = 'detail-backdrop';
  modalBackdrop.onclick = (e) => {
    const {
      target: { nodeName },
    } = e;
    if (nodeName === 'ARTICLE') closePopup();
  };

  const dummyheading = document.createElement('h2');
  dummyheading.innerText = `Project Detail ${id}`;
  dummyheading.className = 'dummy-heading';
  modalBackdrop.appendChild(dummyheading);

  const modal = document.createElement('div');
  modal.className = 'detail-popup';
  modal.id = `popup-prj-${id}`;

  const primaryDiv = document.createElement('div');
  primaryDiv.className = 'detail-header';

  const frame1 = document.createElement('div');
  frame1.style.display = 'flex';
  frame1.style.justifyContent = 'space-between';
  frame1.style.alignItems = 'flex-start';

  const projectTitle = document.createElement('h2');
  projectTitle.innerText = title;
  projectTitle.className = 'project-title';
  frame1.appendChild(projectTitle);

  const cancelBtn = document.createElement('button');
  const cancelIcon = document.createElement('a');
  cancelIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#67798E"/>
  </svg>  
  `;

  cancelBtn.onclick = closePopup;
  cancelBtn.appendChild(cancelIcon);
  cancelBtn.className = 'cancel-btn';
  cancelBtn.id = `cancel-btn-${id}`;
  frame1.appendChild(cancelBtn);

  const frame2 = document.createElement('div');
  frame2.className = 'project-details';

  const middot = document.createElement('span');
  middot.innerHTML = '&middot;';
  middot.className = 'middot';

  const clientSpan = document.createElement('span');
  clientSpan.innerText = client;
  clientSpan.className = 'client-label';

  const roleSpan = document.createElement('span');
  roleSpan.innerText = role;
  roleSpan.className = 'role-label';

  const yearSpan = document.createElement('span');
  yearSpan.innerText = year;
  yearSpan.className = 'year-label';

  frame2.appendChild(clientSpan);
  frame2.appendChild(middot);
  frame2.appendChild(roleSpan);
  frame2.appendChild(middot.cloneNode(true));
  frame2.appendChild(yearSpan);

  primaryDiv.appendChild(frame1);
  primaryDiv.appendChild(frame2);
  modal.appendChild(primaryDiv);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'project-image-container';

  const projectImage = document.createElement('img');
  projectImage.src = url;
  projectImage.alt = alt;
  imageContainer.appendChild(projectImage);
  modal.appendChild(imageContainer);

  const projectContainerGrid = document.createElement('div');
  projectContainerGrid.className = 'project-container-grid';

  const frame3 = document.createElement('div');
  frame3.className = 'left-block';

  const projectDesc = document.createElement('p');
  projectDesc.innerText = more;
  projectDesc.className = 'project-desc';
  frame3.appendChild(projectDesc);

  const techTags = document.createElement('ul');
  techTags.className = 'tags';
  technologies.forEach((tag) => {
    const li = document.createElement('li');
    li.innerText = tag;
    techTags.appendChild(li);
  });

  const divider = document.createElement('div');
  divider.className = 'divider';
  
  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  
  const liveBtn = document.createElement('a');
  liveBtn.href = live;
  liveBtn.innerHTML =`see live <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
  </svg>`;
  liveBtn.className = 'primary-btn';
  
  const sourceBtn = document.createElement('a');
  sourceBtn.href = source;
  sourceBtn.innerHTML =`see source <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
  </svg>`;
  sourceBtn.className = 'primary-btn';
  
  
  actionContainer.appendChild(liveBtn);
  actionContainer.appendChild(sourceBtn);
  
  const frame4 = document.createElement('div');
  frame4.className = 'right-block';
  frame4.appendChild(techTags);
  frame4.appendChild(divider);
  frame4.appendChild(actionContainer);

  projectContainerGrid.appendChild(frame3);
  projectContainerGrid.appendChild(frame4);
  
  modal.appendChild(projectContainerGrid);
  modalBackdrop.appendChild(modal);
  document.body.appendChild(modalBackdrop);
}



export default onPopup;
