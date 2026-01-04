import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface SlideTransitionProps {
  children: ReactNode;
}

export default function SlideTransition({ children }: SlideTransitionProps) {
  const location = useLocation();
  const direction = (location.state as { direction?: 'left' | 'right' })?.direction || 'left';

  return (
    <motion.div
      key={location.pathname}
      initial={{ x: direction === 'left' ? '100%' : '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 'left' ? '-100%' : '100%', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
