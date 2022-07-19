import onPopup from './popup-detail.js';
import projectList from './project-list.js';

const renderProjects = (parentGrid) => {
  projectList.forEach((project) => {
    const {
      id,
      title,
      featuredImage: { url, alt },
      description: { less },
      technologies,
      projectDetail: { client, role, year },
    } = project;

    const projectDiv = document.createElement('div');
    projectDiv.className = 'projects';
    projectDiv.id = `project-${id}`;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'project-image-container';

    const projectImage = document.createElement('img');
    projectImage.src = url;
    projectImage.alt = alt;
    imageContainer.appendChild(projectImage);

    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    const projectTitle = document.createElement('h2');
    projectTitle.innerText = title;
    projectTitle.className = 'project-title';
    projectContainer.appendChild(projectTitle);

    const projectDetails = document.createElement('div');
    projectDetails.className = 'project-details';

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

    projectDetails.appendChild(clientSpan);
    projectDetails.appendChild(middot);
    projectDetails.appendChild(roleSpan);
    projectDetails.appendChild(middot.cloneNode(true));
    projectDetails.appendChild(yearSpan);
    projectContainer.appendChild(projectDetails);

    const projectDesc = document.createElement('p');
    projectDesc.innerText = less;
    projectDesc.className = 'project-desc';
    projectContainer.appendChild(projectDesc);

    const techTags = document.createElement('ul');
    techTags.className = 'tags';
    technologies.forEach((tag) => {
      const li = document.createElement('li');
      li.innerText = tag;
      techTags.appendChild(li);
    });
    projectContainer.appendChild(techTags);

    const seeBtn = document.createElement('button');
    seeBtn.type = 'button';
    seeBtn.innerText = 'See Project';
    seeBtn.id = `btn-project${id}`;
    seeBtn.className = 'btn-margin primary-btn';
    seeBtn.onclick = onPopup;
    projectContainer.appendChild(seeBtn);

    projectDiv.appendChild(imageContainer);
    projectDiv.appendChild(projectContainer);
    parentGrid.appendChild(projectDiv);
  });
};

function renderPortfolio() {
  const sectionProjects = document.createElement('section');
  sectionProjects.id = 'portfolio';

  // Add for Linter error
  const dummyheading = document.createElement('h2');
  dummyheading.innerText = 'Work Projects';
  dummyheading.className = 'dummy-heading';
  sectionProjects.appendChild(dummyheading);

  const containerGrid = document.createElement('div');
  containerGrid.className = 'works-grid';
  sectionProjects.appendChild(containerGrid);

  const mainSection = document.querySelector('main');
  mainSection.prepend(sectionProjects);
  renderProjects(containerGrid);
}

export default renderPortfolio;
