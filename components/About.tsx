"use client";

import { useState, useEffect } from 'react';
import { Award, Users, Leaf, Shield, Palette, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const timeline = [
    { year: 1998, title: "Founded", description: "Started as a small family workshop" },
    { year: 2005, title: "First Award", description: "Best Craftsmanship Award" },
    { year: 2012, title: "Expansion", description: "Opened second manufacturing facility" },
    { year: 2018, title: "Sustainability", description: "100% sustainable sourcing achieved" },
    { year: 2023, title: "Innovation", description: "Smart furniture line launched" }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "We source our materials from certified sustainable forests and use eco-friendly finishes.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
    },
    {
      icon: Shield,
      title: "10-Year Warranty",
      description: "Our confidence in quality means every piece comes with comprehensive warranty coverage.",
      image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Work directly with our designers to create furniture that perfectly matches your vision.",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-xs sm:text-sm mb-2">Our Story</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            25 Years of Crafting Excellence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
            From a humble family workshop to a leading furniture manufacturer, Royalwood has been 
            creating timeless pieces that blend traditional craftsmanship with modern innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Heritage Story */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900 text-center lg:text-left">
                Heritage & Innovation
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 by master craftsman Robert Sterling, Royalwood began as a small 
                  family workshop with a simple mission: create furniture that tells a story and 
                  stands the test of time.
                </p>
                <p>
                  Today, we've grown into a premier furniture manufacturer while maintaining our 
                  commitment to handcrafted quality. Every piece that leaves our workshop carries 
                  forward our tradition of excellence and attention to detail.
                </p>
                <p>
                  Our team of skilled artisans combines time-honored techniques with cutting-edge 
                  technology to create furniture that's both beautiful and built to last generations.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 w-full sm:w-auto"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Awards
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="mobile-button border-amber-600 text-amber-700 hover:bg-amber-50 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Right: Workshop Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1778798/pexels-photo-1778798.jpeg"
                alt="Craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-xl border">
              <div className="flex items-center gap-2 sm:gap-3">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-gray-900">Master Craftsmen</div>
                  <div className="text-xs sm:text-sm text-gray-600">25+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-px h-full w-0.5 bg-amber-200"></div>
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 pl-8 sm:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <Card className="mobile-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8 text-center md:text-left">
              Why Choose Royalwood?
            </h3>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 mobile-touch-target ${
                    activeFeature === index 
                      ? 'bg-amber-50 border-2 border-amber-200 shadow-lg' 
                      : 'bg-white border-2 border-gray-100 hover:border-amber-100 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${
                      activeFeature === index ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-600'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Image */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;