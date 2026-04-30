import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Africa Music Conference 2022',
    org: 'Microverse',
    role: 'Front End Dev',
    year: '2022',
    description:
      'A homepage and about page for an online conference event. Microverse Capstone Project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/af9be1a8c_generated_5f840e56.png',
  },
  {
    title: 'Awesome Books',
    org: 'Microverse',
    role: 'Front End Dev',
    year: '2022',
    description:
      'A modular book list app with add/remove functionality built with ES6 modules.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/dac13f9d7_generated_e9ec59a5.png',
  },
  {
    title: 'Micro-Tasks',
    org: 'Microverse',
    role: 'Back End Dev',
    year: '2022',
    description:
      'Task management with sortable drag-and-drop. Webpack-bundled for performance.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Webpack'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/727073c43_generated_72cb4a17.png',
  },
  {
    title: 'Gamify',
    org: 'Microverse',
    role: 'Front End Dev',
    year: '2022',
    description:
      'Game discovery app built on FreeToGame + Involvement APIs with likes and comments.',
    tech: ['HTML', 'Tailwind CSS', 'ES6', 'Webpack'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/4888a7ff5_generated_8ee043b6.png',
  },
  {
    title: 'Heroic',
    org: 'Microverse',
    role: 'Full Stack Dev',
    year: '2022',
    description:
      'Superhero browser with filtering by publisher. React + Redux with the SuperHero Search API.',
    tech: ['React', 'Redux', 'Tailwind CSS', 'React Router'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/3d039e772_generated_0cef1f9b.png',
  },
  {
    title: 'Carpe Diem',
    org: 'Microverse',
    role: 'Full Stack Dev',
    year: '2022',
    description:
      'Mobile budget tracker — categorized transactions with Rails + PostgreSQL backend.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/d11ea3cb3_generated_a9c9f1f2.png',
  },
  {
    title: 'El Dorado',
    org: 'Microverse',
    role: 'Full Stack Dev',
    year: '2023',
    description:
      'Luxury car rental platform. Full-stack app — React/Redux frontend, Rails API backend, admin car management.',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'REST API'],
    image:
      'https://media.base44.com/images/public/69f054b1c3f7803e73f4ec80/373f58de0_generated_a65076c2.png',
  },
];

export default function WorkGallery() {
  return (
    <section
      id="work"
      className="py-28 md:py-36"
      style={{ background: '#F7F4F0' }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-ink-light uppercase">
            Selected work
          </p>
          <h2
            className="text-4xl font-extrabold text-ink md:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Projects<span className="font-light text-ink-light italic">.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
