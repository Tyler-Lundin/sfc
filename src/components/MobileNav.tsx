'use client';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const isScrolled = useScrollPosition();

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {!isScrolled ? (
        <motion.nav
          key="initial"
          variants={navVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 z-[100] right-0 h-24 bg-neutral-100 dark:bg-neutral-900 border-b-2 border-[#e8073b] md:hidden"
        >
          <div className="h-full px-4 flex items-center justify-between">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Logo height={64} className="h-16" />
            </motion.div>
            
            {/* Hamburger Menu in Initial Nav */}
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-[#e8073b] hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors absolute top-1/2 right-4 -translate-y-1/2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </motion.button>
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          key="scrolled"
          variants={navVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 z-[100] right-0 h-12 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b-2 border-[#e8073b] md:hidden"
        >
          <div className="h-full px-4 flex items-center justify-between">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Logo height={32} className="h-8" />
            </motion.div>
            <div className="flex items-center gap-2">
              
              {/* Hamburger Menu */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-[#e8073b] hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors absolute top-1/2 right-4 -translate-y-1/2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
} 