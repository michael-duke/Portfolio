import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const cursorOpacity = useMotionValue(1);
  const cursorScale = useMotionValue(1);
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Hide cursor if in the top "Navbar Zone"
      if (e.clientY < 55) {
        cursorOpacity.set(0);
        cursorScale.set(0.5);
      } else {
        cursorOpacity.set(1);
        cursorScale.set(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorOpacity, cursorScale, mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-9999 hidden h-8 w-8 rounded-full border border-ink mix-blend-difference md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: cursorOpacity,
        scale: cursorScale,
      }}
    />
  );
}
