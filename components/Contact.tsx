"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Home, Building2, Store, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@royalwood.com", "quotes@royalwood.com"],
      action: "mailto:info@royalwood.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Craftsman Boulevard", "Woodwork District, CA 90210"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      action: null
    }
  ];

  const projectTypes = [
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building2 },
    { value: 'office', label: 'Office', icon: Building2 },
    { value: 'hospitality', label: 'Restaurant/Hotel', icon: Utensils },
    { value: 'retail', label: 'Retail', icon: Store },
    { value: 'custom', label: 'Custom Project', icon: User }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-xs sm:text-sm mb-2">Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Start Your Project Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
            Ready to transform your space with custom furniture? Get in touch with our team 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-none mobile-card shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-xs sm:text-sm">
                                {info.action ? (
                                  <a 
                                    href={info.action} 
                                    className="hover:text-amber-600 transition-colors"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-none mobile-card shadow-md">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mobile-touch-target">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-2" />
                    <p className="text-amber-800 font-medium text-sm sm:text-base">Interactive Map</p>
                    <p className="text-amber-700 text-xs sm:text-sm">Visit Our Showroom</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="border-none mobile-card shadow-xl">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl font-playfair text-gray-900">
                  Request a Quote
                </CardTitle>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className="mobile-input pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className="mobile-input pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className="mobile-input pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)} required>
                        <SelectTrigger className="mobile-input">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2 text-sm">
                                  <Icon className="w-4 h-4" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger className="mobile-input">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                          <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger className="mobile-input">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">ASAP (Rush Order)</SelectItem>
                          <SelectItem value="1-2months">1-2 Months</SelectItem>
                          <SelectItem value="3-6months">3-6 Months</SelectItem>
                          <SelectItem value="6months+">6+ Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Please describe your project, including dimensions, materials, style preferences, and any specific requirements..."
                        rows={6}
                        className="mobile-input pl-10 resize-none"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="mobile-button w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Quote Request
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="border-none mobile-card shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">How long does a custom project take?</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Custom projects typically take 4-12 weeks depending on complexity and current workload. 
                  We'll provide a detailed timeline with your quote.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none mobile-card shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Do you offer delivery and installation?</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Yes, we provide white-glove delivery and professional installation services 
                  throughout the region for an additional fee.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none mobile-card shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What materials do you work with?</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  We work with premium hardwoods including oak, maple, walnut, cherry, and more. 
                  All our wood is sustainably sourced.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none mobile-card shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Can I visit your showroom?</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Absolutely! We encourage clients to visit our showroom to see our craftsmanship 
                  firsthand. Please schedule an appointment for personalized service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;