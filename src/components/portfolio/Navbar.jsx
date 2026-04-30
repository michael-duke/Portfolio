import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-cream-dark bg-cream/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Button
            variant="outline"
            onClick={() => scrollTo('#hero')}
            className="border-none text-sm font-semibold tracking-tight text-ink"
          >
            Michael Mesfin
          </Button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Button
                variant="outline"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'min-h-11 rounded-full px-4 py-2 text-sm text-ink-light transition-colors duration-200 hover:bg-cream-dark hover:text-ink',
                  link.label === 'Contact' && 'hidden',
                )}
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollTo('#contact')}
              className="ml-3 min-h-11 rounded-full bg-ink px-5 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-ink/80"
            >
              Hire me
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center text-ink md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-cream"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-semibold text-ink"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
