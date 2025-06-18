import { ReactNode } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Footer from './Footer';

interface NavigationProps {
  children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
} 