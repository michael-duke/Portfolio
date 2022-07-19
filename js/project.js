import test from './popup-detail.js';
const projectList = [
  {
    id: 1,
    title: 'tonic',
    featuredImage: {
      url: 'images/snapshoot-project-1.png',
      alt: 'snapshoot-project-1',
    },
    description: {
      less: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
      more: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectDetail: {
      client: 'canopy',
      role: 'back end dev',
      year: 2015,
    },
    link: {
      source: '',
      live: '',
    },
  },
  {
    id: 2,
    title: 'multi-post stories',
    featuredImage: {
      url: 'images/snapshoot-project-2.png',
      alt: 'snapshoot-project-2',
    },
    description: {
      less: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
      more: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectDetail: {
      client: 'canopy',
      role: 'back end dev',
      year: 2015,
    },
    link: {
      source: '',
      live: '',
    },
  },
  {
    id: 3,
    title: 'tonic',
    featuredImage: {
      url: 'images/snapshoot-project-3.png',
      alt: 'snapshoot-project-3',
    },
    description: {
      less: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
      more: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectDetail: {
      client: 'canopy',
      role: 'back end dev',
      year: 2015,
    },
    link: {
      source: '',
      live: '',
    },
  },
  {
    id: 4,
    title: 'multi-post stories',
    featuredImage: {
      url: 'images/snapshoot-project-4.png',
      alt: 'snapshoot-project-3',
    },
    description: {
      less: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
      more: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectDetail: {
      client: 'canopy',
      role: 'back end dev',
      year: 2015,
    },
    link: {
      source: '',
      live: '',
    },
  },
];

function renderPortfolio() {
  const sectionProjects = document.createElement('section');
  sectionProjects.id = 'portfolio';

  //Add for Linter error
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
// function createProject(title='Hello', imageUrl='someImage') {
//   const id = projectList.length +1;
//   projectList.push({id,title,imageUrl})

//   console.log(projectList);
// }

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
    seeBtn.onclick = test;
    projectContainer.appendChild(seeBtn);

    projectDiv.appendChild(imageContainer);
    projectDiv.appendChild(projectContainer);
    parentGrid.appendChild(projectDiv);
  });
};

export { renderPortfolio, projectList };
