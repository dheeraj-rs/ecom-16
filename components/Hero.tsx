"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    warranty: 0
  });

  const heroSlides = [
    {
      title: "Crafting Timeless Furniture",
      subtitle: "Where Heritage Meets Innovation",
      description: "Transform your space with our handcrafted furniture, blending traditional woodworking techniques with contemporary design.",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
    },
    {
      title: "Sustainable Luxury Living",
      subtitle: "Eco-Friendly Excellence",
      description: "Discover our commitment to sustainable practices while creating furniture that lasts generations.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    {
      title: "Custom Solutions",
      subtitle: "Your Vision, Our Craftsmanship",
      description: "From concept to completion, we bring your unique furniture dreams to life with precision and artistry.",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    }
  ];

  const stats = [
    { icon: Clock, label: "Years Experience", target: 25, suffix: "+" },
    { icon: Award, label: "Projects Completed", target: 2500, suffix: "+" },
    { icon: Users, label: "Happy Clients", target: 1200, suffix: "+" },
    { icon: CheckCircle, label: "Year Warranty", target: 10, suffix: "" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate counters
          const duration = 2000;
          const targets = { experience: 25, projects: 2500, clients: 1200, warranty: 10 };
          
          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets];
            let start = 0;
            const increment = target / (duration / 16);
            
            const animate = () => {
              start += increment;
              if (start < target) {
                setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
                requestAnimationFrame(animate);
              } else {
                setCounters(prev => ({ ...prev, [key]: target }));
              }
            };
            animate();
          });
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsElement = document.getElementById('hero-stats');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center mobile-hero-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <div className="absolute inset-0 bg-overlay-mobile" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-amber-400 font-medium tracking-wide uppercase text-xs sm:text-sm">
                {heroSlides[currentSlide].subtitle}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold leading-tight text-shadow-mobile">
                {heroSlides[currentSlide].title}
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed px-4 lg:px-0">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 lg:px-0">
              <Button 
                size="lg"
                className="mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-xl transform hover:scale-105 transition-all duration-200 group w-full sm:w-auto"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="mobile-button border-2 border-white text-white hover:bg-white hover:text-amber-900 backdrop-blur-sm w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div id="hero-stats" className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-4 lg:px-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const counterKey = ['experience', 'projects', 'clients', 'warranty'][index] as keyof typeof counters;
              
              return (
                <div key={index} className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center text-white transform hover:scale-105 smooth-hover">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-amber-400" />
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-playfair">
                    {counters[counterKey].toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-200 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 mobile-touch-target ${
              index === currentSlide 
                ? 'bg-amber-500 w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-4 sm:right-8 text-white/60 animate-bounce hidden sm:block">
        <div className="text-xs mb-2">Scroll</div>
        <div className="w-px h-8 bg-white/40 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;