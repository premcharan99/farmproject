
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './navbar/Logo';
import DesktopNav from './navbar/DesktopNav';
import DesktopActions from './navbar/DesktopActions';
import MobileActions from './navbar/MobileActions';
import MobileMenu from './navbar/MobileMenu';

const categories = [
  { name: 'Vegetables', path: '/products?category=vegetables' },
  { name: 'Fruits', path: '/products?category=fruits' },
  { name: 'Dairy', path: '/products?category=dairy' },
  { name: 'Eggs', path: '/products?category=eggs' },
  { name: 'Meat', path: '/products?category=meat' },
  { name: 'Specialty Items', path: '/products?category=specialty' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav categories={categories} />
          <DesktopActions />
          <MobileActions isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        categories={categories}
      />
    </header>
  );
};

export default Navbar;
