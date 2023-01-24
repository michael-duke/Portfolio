const projectList = [
  {
    id: 1,
    title: 'Africa Music Conference 2022',
    featuredImage: {
      url: 'images/snapshoot-project-1.jpg',
      alt: 'capstone-project-1',
    },
    description: {
      less: 'The goal of the Microverse Capstone Project for Module I: (The Portal) is to create a website with an about page and a home page for an online conference event. Built with JavaScript, CSS, and HTML.',
      more: 'The goal of the Microverse Capstone Project for Module I: (The Portal) is to create a website with an about page and a home page for an online conference event. Built with JavaScript, CSS, and HTML.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript (ES6)'],
    projectDetail: {
      client: 'microverse',
      role: 'front end dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Capstone-I',
      live: 'https://michael-duke.github.io/Capstone-I/',
    },
  },
  {
    id: 2,
    title: 'Awesome Books',
    featuredImage: {
      url: 'images/snapshoot-project-2.png',
      alt: 'snapshoot-project-2',
    },
    description: {
      less: 'This educational project for Microverse Module 2 involves creating a straightforward website that shows a list of books and lets you add and remove books from that list. The intention is to use modules and learn ES6 syntax to make it more orderly. built with JavaScript, CSS and HTML.',
      more: 'This educational project for Microverse Module 2 involves creating a straightforward website that shows a list of books and lets you add and remove books from that list. The intention is to use modules and learn ES6 syntax to make it more orderly. built with JavaScript, CSS and HTML.',
    },
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript (ES6)'],
    projectDetail: {
      client: 'microverse',
      role: 'front end dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Awesome-Books',
      live: 'https://michael-duke.github.io/Awesome-Books/',
    },
  },
  {
    id: 3,
    title: 'Micro-Tasks',
    featuredImage: {
      url: 'images/snapshoot-project-3.jpg',
      alt: 'snapshoot-project-3',
    },
    description: {
      less: 'Micro-Taks is an interactive project where you can create different daily task list. Functionalities include adding and removing a task, as well as a sortable drag and drop',
      more: 'Micro-Taks is an interactive project where you can create different daily task list. Functionalities include adding and removing a task, as well as a sortable drag and drop',
    },
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript (ES6)', 'Webpack'],
    projectDetail: {
      client: 'microverse',
      role: 'back end dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Micro-Tasks',
      live: 'https://michael-duke.github.io/Micro-Tasks/',
    },
  },
  {
    id: 4,
    title: 'Gamify',
    featuredImage: {
      url: 'images/snapshoot-project-4.jpg',
      alt: 'snapshoot-project-4',
    },
    description: {
      less: 'This JavaScript capstone project is built on the FreeToGame API, an external API, and Microverse\'s in-house Involvement API. The cards display the game information that was retrieved from the API. The user has the option to like and comment on the game cards.',
      more: 'This JavaScript capstone project is built on the FreeToGame API, an external API, and Microverse\'s in-house Involvement API. The cards display the game information that was retrieved from the API. The user has the option to like and comment on the game cards.',
    },
    technologies: ['HTML', 'Taiwind CSS', 'ES6', 'Webpack'],
    projectDetail: {
      client: 'microverse',
      role: 'front end dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Capstone-II',
      live: 'https://gamify-zone.netlify.app/',
    },
  },
  {
    id: 5,
    title: 'Heroic',
    featuredImage: {
      url: 'images/snapshoot-project-5.png',
      alt: 'snapshoot-project-5',
    },
    description: {
      less: 'Heroic is a web app that will display a list of random 20 heroes from SuperHero Search API. User can click on a hero card and have all his details in a separate page, and filter by publisher as well.',
      more: 'Heroic is a web app that will display a list of random 20 heroes from SuperHero Search API. User can click on a hero card and have all his details in a separate page, and filter by publisher as well.',
    },
    technologies: ['HTML', 'Tailwind CSS', 'React', 'Redux', 'React Router', 'Redux-thunk'],
    projectDetail: {
      client: 'microverse',
      role: 'fullstack dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Capstone-III',
      live: 'https://heroic-2112.netlify.app/',
    },
  },
  {
    id: 6,
    title: 'Carpe Diem',
    featuredImage: {
      url: 'images/snapshoot-project-6.png',
      alt: 'snapshoot-project-6',
    },
    description: {
      less: 'Carpe Diem is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. The app is built with Ruby on Rails and PostgreSQL.',
      more: 'LCarpe Diem is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. The app is built with Ruby on Rails and PostgreSQL.',
    },
    technologies: ['Tailwind CSS', 'Ruby', 'Ruby on Rails', 'PostgreSQL'],
    projectDetail: {
      client: 'microverse',
      role: 'fullstack dev',
      year: 2022,
    },
    link: {
      source: 'https://github.com/michael-duke/Capstone-V',
      live: 'https://carpe-diem.up.railway.app/',
    },
  },
  {
    id: 7,
    title: 'El Dorado',
    featuredImage: {
      url: 'images/snapshoot-project-7.png',
      alt: 'snapshoot-project-7',
    },
    description: {
      less: 'El Dorado Frontend is a luxury car rental application where the user can register new accounts, login and reserve a set of different cars. Admin user can also create new cars and mark them as available/removed on the list. Built using a connection to two different repos, including Back-end(Rails) and Front-end(React/Redux).',
      more: 'El Dorado Frontend is a luxury car rental application where the user can register new accounts, login and reserve a set of different cars. Admin user can also create new cars and mark them as available/removed on the list. Built using a connection to two different repos, including Back-end(Rails) and Front-end(React/Redux).',
    },
    technologies: ['Tailwind CSS', 'Ruby', 'Ruby on Rails', 'PostgreSQL', 'React', 'Redux', 'React Router', 'Redux-toolkit', 'REST API'],
    projectDetail: {
      client: 'microverse',
      role: 'fullstack dev',
      year: 2023,
    },
    link: {
      source: 'https://github.com/michael-duke/ElDorado-Frontend',
      live: 'https://eldorado-rentals.netlify.app/',
    },
  },
];

export default projectList;