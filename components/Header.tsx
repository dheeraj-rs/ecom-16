"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@royalwood.com</span>
            </div>
          </div>
          <div className="text-xs hidden sm:block">
            Mon - Fri: 8AM - 6PM | Sat: 9AM - 4PM
          </div>
          <div className="text-xs sm:hidden">
            Mon-Fri: 8AM-6PM
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${isScrolled ? 'top-0' : 'top-8 sm:top-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-amber-900">
                Royalwood
              </div>
              <div className="hidden xs:block ml-1 sm:ml-2 text-xs text-amber-700 font-medium">
                EST. 1998
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-amber-700 ${
                    isScrolled ? 'text-gray-800' : 'text-white hero-text-shadow'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button 
                className="mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg text-sm sm:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden mobile-touch-target p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-md border-t shadow-lg">
            <nav className="container mx-auto px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-nav-item text-gray-800 font-medium hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-3 border-t">
                <Button 
                  className="w-full mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Quote
                </Button>
              </div>
              <div className="pb-2"></div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;