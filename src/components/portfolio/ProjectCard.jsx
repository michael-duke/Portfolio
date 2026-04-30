import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Devicon CDN logo URLs for common techs
const techLogos = {
  React:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Redux:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Ruby on Rails':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  PostgreSQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  ES6: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Webpack:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  'Node.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'REST API':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'React Router':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-cream-dark bg-white transition-shadow duration-300 hover:shadow-lg md:grid-cols-2"
    >
      {/* Image — alternate sides */}
      <div
        className={`overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}
        style={{ minHeight: 220 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ minHeight: 220 }}
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center p-8 md:p-10 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
      >
        <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-ink-light uppercase">
          {project.org} · {project.role} · {project.year}
        </p>

        <h3
          className="mb-3 text-xl leading-tight font-bold text-ink md:text-2xl"
          style={{ letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-ink-light">
          {project.description}
        </p>

        {/* Tech logos */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {project.tech.map((t) =>
            techLogos[t] ? (
              <img
                key={t}
                src={techLogos[t]}
                alt={t}
                title={t}
                className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100"
              />
            ) : (
              <span
                key={t}
                className="rounded-full bg-cream-dark px-2.5 py-1 text-[10px] font-medium tracking-wider text-ink-light uppercase"
              >
                {t}
              </span>
            ),
          )}
        </div>

        <button className="group/btn inline-flex min-h-11 w-fit items-center gap-1.5 text-xs font-semibold text-ink transition-colors duration-200 hover:text-ink-light">
          View project
          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </motion.div>
  );
}
