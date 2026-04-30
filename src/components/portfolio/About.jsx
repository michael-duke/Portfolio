import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-cream-dark py-28 md:py-36"
      style={{ background: '#F7F4F0' }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-ink-light uppercase">
              About me
            </p>
            <h2
              className="mb-8 text-3xl leading-tight font-extrabold text-ink md:text-4xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Turning complex problems
              <br />
              into <span className="font-light italic">elegant</span> software.
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-ink-light">
              {`I'm a full-stack engineer passionate about scalable architecture
              and elegant interfaces. I thrive at the intersection of technical
              depth and user experience.`}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-ink-light">
              {`My stack: Ruby on Rails, React, Redux, PostgreSQL and Node.js. I'm
              looking for opportunities at top-tier product companies where
              craft and engineering excellence are valued.`}
            </p>
            <a
              href="https://drive.google.com/file/d/1RSfEotJG_j-jsXpuBxuSGJaQlONHgsM8/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-ink/80"
            >
              View full résumé
            </a>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10 md:pt-12"
          >
            {[
              { number: '7+', label: 'Projects shipped' },
              { number: '5+', label: 'Years engineering' },
              { number: '10+', label: 'Technologies mastered' },
            ].map((stat) => (
              <div key={stat.label} className="border-b border-cream-dark pb-8">
                <span
                  className="mb-1 block text-5xl font-extrabold text-ink"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {stat.number}
                </span>
                <span className="text-xs font-medium tracking-[0.15em] text-ink-light uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
