import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center pt-16"
      style={{ background: '#F7F4F0' }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-32">
        {/* Label */}
        <motion.p
          {...fade(0.1)}
          className="mb-8 text-xs font-medium tracking-[0.2em] text-ink-light uppercase"
        >
          Full-Stack Software Engineer
        </motion.p>

        {/* Big headline — editorial Wealthsimple style */}
        <motion.h1
          {...fade(0.25)}
          className="mb-10 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          I build <span className="font-light italic">digital</span>
          <br />
          experiences
          <span className="text-ink-light">.</span>
        </motion.h1>

        <motion.p
          {...fade(0.4)}
          className="mb-12 max-w-md text-base leading-relaxed text-ink-light md:text-lg"
        >
          Full-stack engineer specializing in Ruby on Rails, React, and
          PostgreSQL. Currently open to roles at top-tier companies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.5)}
          className="mb-20 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() =>
              document
                .querySelector('#work')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="min-h-11 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-ink/80"
          >
            View my work
          </button>
          <a
            href="https://drive.google.com/file/d/1RSfEotJG_j-jsXpuBxuSGJaQlONHgsM8/view"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 rounded-full border border-ink/20 bg-transparent px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink/60"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          {...fade(0.6)}
          className="flex items-center gap-6 border-t border-cream-dark pt-8"
        >
          {[
            {
              label: 'LinkedIn',
              url: 'https://www.linkedin.com/in/michael-mes/',
            },
            { label: 'GitHub', url: 'https://github.com/michael-duke' },
            { label: 'Email', url: 'mailto:michae.21duke@gmail.com' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-xs font-medium tracking-[0.15em] text-ink-light uppercase transition-colors duration-200 hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-ink-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
