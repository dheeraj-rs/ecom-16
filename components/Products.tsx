"use client";

import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Heart, Eye, ShoppingCart, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products', count: 24 },
    { id: 'dining', label: 'Dining Room', count: 8 },
    { id: 'bedroom', label: 'Bedroom', count: 6 },
    { id: 'living', label: 'Living Room', count: 5 },
    { id: 'office', label: 'Office', count: 3 },
    { id: 'kitchen', label: 'Kitchen', count: 2 }
  ];

  const products = [
    {
      id: 1,
      name: "Royal Oak Dining Table",
      category: "dining",
      price: 2899,
      originalPrice: 3299,
      discount: 12,
      rating: 4.9,
      reviews: 127,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      isNew: false,
      isFeatured: true,
      inStock: true,
      description: "Handcrafted solid oak dining table with elegant grain patterns"
    },
    {
      id: 2,
      name: "Executive Leather Chair",
      category: "office",
      price: 1299,
      originalPrice: null,
      discount: 0,
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      isNew: true,
      isFeatured: false,
      inStock: true,
      description: "Premium leather executive chair with ergonomic design"
    },
    {
      id: 3,
      name: "Artisan Bedroom Set",
      category: "bedroom",
      price: 4599,
      originalPrice: 5299,
      discount: 15,
      rating: 4.7,
      reviews: 203,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      isNew: false,
      isFeatured: true,
      inStock: false,
      description: "Complete bedroom set with bed, nightstands, and dresser"
    },
    {
      id: 4,
      name: "Modern Kitchen Island",
      category: "kitchen",
      price: 3299,
      originalPrice: null,
      discount: 0,
      rating: 4.6,
      reviews: 156,
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
      isNew: true,
      isFeatured: false,
      inStock: true,
      description: "Custom kitchen island with marble top and storage"
    },
    {
      id: 5,
      name: "Luxury Sectional Sofa",
      category: "living",
      price: 3799,
      originalPrice: 4199,
      discount: 10,
      rating: 4.8,
      reviews: 92,
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      isNew: false,
      isFeatured: true,
      inStock: true,
      description: "L-shaped sectional sofa with premium fabric upholstery"
    },
    {
      id: 6,
      name: "Classic Dining Chairs",
      category: "dining",
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.5,
      reviews: 78,
      image: "https://images.pexels.com/photos/1350778/pexels-photo-1350778.jpeg",
      isNew: false,
      isFeatured: false,
      inStock: true,
      description: "Set of 2 classic dining chairs with comfortable cushioning"
    }
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-1000' && product.price < 1000) ||
      (priceRange === '1000-3000' && product.price >= 1000 && product.price <= 3000) ||
      (priceRange === 'over-3000' && product.price > 3000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default: // featured
        return b.isFeatured - a.isFeatured;
    }
  });

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-xs sm:text-sm mb-2">Our Collection</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Furniture Catalog
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
            Discover our curated collection of handcrafted furniture, each piece designed 
            to bring elegance and functionality to your space.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 items-stretch">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mobile-input pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="mobile-input w-full sm:w-[150px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-1000">Under $1,000</SelectItem>
                  <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                  <SelectItem value="over-3000">Over $3,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="mobile-input w-full sm:w-[150px]">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-12 justify-center px-2">
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
              <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sortedProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer overflow-hidden mobile-card shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1 sm:gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white text-xs">New</Badge>
                  )}
                  {product.isFeatured && (
                    <Badge className="bg-amber-500 text-white text-xs">Featured</Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge className="bg-red-500 text-white text-xs">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`mobile-touch-target p-2 rounded-full backdrop-blur-sm border transition-colors ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-white/80 text-gray-700 border-white/80 hover:bg-red-500 hover:text-white hover:border-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="mobile-touch-target p-2 bg-white/80 text-gray-700 rounded-full border border-white/80 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-sm sm:text-base py-2 px-3 sm:px-4">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h4>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm sm:text-base lg:text-lg text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Button 
                  className="mobile-button w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-200 group-hover:scale-105"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More / Pagination */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg mb-4">No products found matching your criteria.</p>
            <Button 
              variant="outline"
              className="mobile-button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setPriceRange('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Showing {sortedProducts.length} of {products.length} products
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="mobile-button border-amber-600 text-amber-700 hover:bg-amber-50 w-full sm:w-auto mx-4 sm:mx-0"
            >
              Load More Products
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
            Need Something Custom?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our master craftsmen can create 
            custom furniture tailored to your specific needs and preferences.
          </p>
          <Button 
            size="lg"
            className="mobile-button bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;