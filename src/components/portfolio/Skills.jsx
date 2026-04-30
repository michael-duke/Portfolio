import React from 'react';
import { motion } from 'framer-motion';

const techLogos = {
  'Ruby on Rails':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  React:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  TypeScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Redux:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  PostgreSQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Node.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Webpack:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  Laravel:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Backend',
    skills: ['Ruby on Rails', 'Ruby', 'Node.js', 'Laravel'],
  },
  {
    label: 'Data & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Webpack', 'Git'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-cream-dark py-28 md:py-36"
      style={{ background: '#EDE8E0' }}
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
            Tech stack
          </p>
          <h2
            className="text-4xl font-extrabold text-ink md:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Skills<span className="font-light text-ink-light italic">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <p className="mb-6 text-[10px] font-semibold tracking-[0.2em] text-ink-light uppercase">
                {group.label}
              </p>
              <div className="space-y-4">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.05 }}
                    className="group flex items-center gap-3"
                  >
                    {techLogos[skill] ? (
                      <img
                        src={techLogos[skill]}
                        alt={skill}
                        className="h-6 w-6 shrink-0"
                      />
                    ) : (
                      <div className="h-6 w-6 shrink-0 rounded-full bg-cream-dark" />
                    )}
                    <span className="text-sm font-medium text-ink">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
