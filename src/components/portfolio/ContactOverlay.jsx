import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

export default function ContactOverlay({ isOpen, onClose }) {
  const links = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-mes/' },
    { title: 'GitHub', url: 'https://github.com/michael-duke' },
    { title: 'Email', url: 'mailto:michael.21duke@gmail.com' },
    {
      title: 'Resume',
      url: 'https://drive.google.com/file/d/1RSfEotJG_j-jsXpuBxuSGJaQlONHgsM8/view',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 flex flex-col bg-ink text-cream"
        >
          {/* Close Header */}
          <div className="flex justify-between p-8 md:p-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">
              Get in touch
            </span>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
            >
              Close{' '}
              <X
                size={16}
                className="transition-transform group-hover:rotate-90"
              />
            </button>
          </div>

          {/* Links List */}
          <div className="flex flex-1 flex-col justify-center px-8 md:px-24">
            <nav className="flex flex-col">
              {links.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group relative flex items-center justify-between border-b border-cream/10 py-8 md:py-12"
                >
                  <h2 className="text-5xl font-extrabold tracking-tighter transition-all duration-300 group-hover:pl-4 md:text-8xl">
                    {link.title}
                  </h2>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:bg-cream group-hover:text-ink md:h-20 md:w-20">
                    <ArrowUpRight size={32} className="md:size-48" />
                  </div>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Location Footer */}
          <div className="p-8 text-[10px] font-medium tracking-widest uppercase opacity-40 md:p-12">
            Based in Toronto, ON — Available Worldwide
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
