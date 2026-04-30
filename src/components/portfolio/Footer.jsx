import { getYear } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onContactOpen }) {
  return (
    <footer id="contact" className="bg-background py-24 md:py-48">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
          onClick={onContactOpen}
        >
          <p className="mb-6 text-[10px] font-bold tracking-[0.2em] text-ink-light uppercase">
            Project in mind?
          </p>
          <div className="flex items-end justify-between border-b border-ink/10 pb-12">
            <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-ink md:text-[10vw]">
              LET&apos;S <br />
              <span className="font-light text-ink-light italic transition-colors group-hover:text-ink">
                BUILD.
              </span>
            </h2>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-ink/10 transition-all duration-500 group-hover:bg-ink group-hover:text-cream md:h-24 md:w-24">
              <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12" />
            </div>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 text-[10px] font-bold tracking-widest text-ink-light/60 uppercase sm:flex-row">
          <span>© {getYear(new Date())} Michael Mesfin</span>
          <div className="flex gap-8">
            <button
              onClick={onContactOpen}
              className="transition-colors hover:text-ink"
            >
              LinkedIn
            </button>
            <button
              onClick={onContactOpen}
              className="transition-colors hover:text-ink"
            >
              GitHub
            </button>
            <button
              onClick={onContactOpen}
              className="transition-colors hover:text-ink"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
