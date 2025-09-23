"use client";

import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' }
  ];

  const services = [
    { label: 'Custom Furniture', href: '#' },
    { label: 'Kitchen Cabinets', href: '#' },
    { label: 'Office Solutions', href: '#' },
    { label: 'Restoration', href: '#' },
    { label: 'Interior Design', href: '#' },
    { label: 'Consultation', href: '#' }
  ];

  const support = [
    { label: 'Warranty Info', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'Shipping & Delivery', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Support Center', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const certifications = [
    { name: 'FSC Certified', desc: 'Sustainable Forestry' },
    { name: 'EPA Compliant', desc: 'Eco-Friendly Finishes' },
    { name: 'ISO 9001', desc: 'Quality Management' },
    { name: 'A+ BBB Rating', desc: 'Better Business Bureau' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl sm:text-3xl font-playfair font-bold text-amber-400">Royalwood</div>
              <div className="ml-1 sm:ml-2 text-xs text-amber-300 font-medium">EST. 1998</div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Crafting exceptional furniture for over 25 years. From traditional craftsmanship 
              to modern innovation, we create pieces that last generations.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@royalwood.com" className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                  info@royalwood.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300 text-sm sm:text-base">123 Craftsman Blvd, CA 90210</span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="mobile-touch-target p-2 bg-gray-800 rounded-lg hover:bg-amber-600 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm mobile-touch-target block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm mobile-touch-target block py-1"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Customer Support</h4>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm mobile-touch-target block py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <h5 className="text-white font-medium mb-2 text-sm sm:text-base">Business Hours</h5>
              <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                <div className="hidden sm:block">Saturday: 9:00 AM - 4:00 PM</div>
                <div className="sm:hidden">Sat: 9:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center">Our Certifications</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 text-white rounded-lg p-2 sm:p-4 mb-2 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <div className="text-xs sm:text-sm font-bold">{cert.name.split(' ')[0]}</div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">{cert.name}</div>
                <div className="text-xs text-gray-400 hidden sm:block">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-0 text-center md:text-left">
              © {currentYear} Royalwood Furniture Manufacturing. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Accessibility
              </a>
              <div className="hidden sm:flex items-center gap-1 text-gray-400">
                Made with <Heart className="w-4 h-4 text-red-500" /> in California
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;