"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'office', label: 'Office' }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Dining Room",
      category: "residential",
      year: 2023,
      location: "Beverly Hills, CA",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      description: "Custom dining set crafted from sustainable walnut with gold inlays",
      featured: true
    },
    {
      id: 2,
      title: "Modern Corporate Offices",
      category: "office",
      year: 2023,
      location: "Manhattan, NY",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      description: "Executive office furniture combining functionality with luxury"
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      year: 2022,
      location: "Miami, FL",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description: "Artistic reception desk and lounge furniture"
    },
    {
      id: 4,
      title: "Family Kitchen Island",
      category: "residential",
      year: 2023,
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
      description: "Custom kitchen island with integrated storage solutions"
    },
    {
      id: 5,
      title: "Restaurant Interior",
      category: "commercial",
      year: 2022,
      location: "San Francisco, CA",
      image: "https://images.pexels.com/photos/1350778/pexels-photo-1350778.jpeg",
      description: "Complete restaurant furniture package with custom tables and chairs"
    },
    {
      id: 6,
      title: "Master Bedroom Suite",
      category: "residential",
      year: 2023,
      location: "Seattle, WA",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      description: "Luxury bedroom set with coordinated nightstands and dresser",
      featured: true
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-xs sm:text-sm mb-2">Our Work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Portfolio Showcase
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
            Explore our collection of custom furniture projects, each crafted with precision 
            and designed to enhance beautiful spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`mobile-button transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
                  : "border-amber-600 text-amber-700 hover:bg-amber-50"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-gray-900">
              Featured Projects
            </h3>
            <div className="flex gap-1 sm:gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => scroll('left')}
                className="mobile-touch-target p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scroll('right')}
                className="mobile-touch-target p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.filter(p => p.featured).map((project) => (
              <Card key={project.id} className="flex-shrink-0 w-72 sm:w-80 group cursor-pointer overflow-hidden mobile-card shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                    Featured
                  </Badge>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group cursor-pointer overflow-hidden mobile-card shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                    Featured
                  </Badge>
                )}
                
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mobile-touch-target">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    {categories.find(c => c.id === project.category)?.label}
                  </Badge>
                  <span className="text-xs sm:text-sm text-gray-500">{project.year}</span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500 truncate">{project.location}</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 text-xs sm:text-sm">
                    View Details →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg px-4">
            Ready to create something extraordinary for your space?
          </p>
          <Button 
            size="lg"
            className="mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 w-full sm:w-auto mx-4 sm:mx-0"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;