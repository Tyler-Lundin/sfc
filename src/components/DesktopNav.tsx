'use client';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function DesktopNav() {
  const isScrolled = useScrollPosition();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  const linkVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05 },
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
          className="fixed top-0 left-0 right-0 z-[100] h-24 bg-neutral-100 dark:bg-neutral-900 border-b-2 border-[#e8073b] hidden md:block"
        >
          <div className="container mx-auto h-full px-4">
            {/* Logo Section - Top 2/3 */}
            <motion.div 
              className="h-2/3 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Logo height={48} className="h-12" />
            </motion.div>
            {/* Links Section - Bottom 1/3 */}
            <div className="h-1/3 flex items-center justify-center space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/membership', label: 'Membership' },
                { href: '/services', label: 'Services' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/store', label: 'Store' },
                { href: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-black dark:text-white hover:text-[#e8073b] dark:hover:text-[#e8073b] transition-colors ${
                      isActive(link.href) 
                        ? 'text-[#e8073b] font-semibold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#e8073b]' 
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
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
          className="fixed top-0 left-0 z-[100] right-0 h-16 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b-2 border-[#e8073b] hidden md:block"
        >
          <div className="container mx-auto h-full px-4 flex items-center justify-between">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Logo height={32} className="h-8" />
            </motion.div>
            <div className="flex items-center space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/membership', label: 'Membership' },
                { href: '/services', label: 'Services' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/store', label: 'Store' },
                { href: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-black dark:text-white hover:text-[#e8073b] dark:hover:text-[#e8073b] transition-colors ${
                      isActive(link.href) 
                        ? 'text-[#e8073b] font-semibold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#e8073b]' 
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
} 