
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, filters } from '@/lib/data';
import { Check, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // First filter by category
  const categoryFilteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase() === activeCategory.toLowerCase()
      );
  
  // Then filter by search query
  const filteredProducts = searchQuery 
    ? categoryFilteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryFilteredProducts;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>All Products | Farm Fresh</title>
        <meta name="description" content="Browse our selection of fresh, locally grown products." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-forest-800 mb-4">Our Products</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our selection of fresh, sustainably grown products sourced directly from local farmers.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-forest-600 hover:bg-forest-700' 
                    : 'text-forest-700 hover:text-forest-800'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span>Filter Products</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Hidden on mobile unless expanded */}
            <div className={`md:w-1/4 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
                <h2 className="text-lg font-medium mb-4">Filters</h2>
                
                {/* Dietary Preferences */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Dietary Preferences</h3>
                  <div className="space-y-2">
                    {filters.diet.map(option => (
                      <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-forest-600 focus:ring-forest-500" />
                        <span className="text-gray-700">{option.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Product Characteristics */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Characteristics</h3>
                  <div className="space-y-2">
                    {filters.characteristics.map(option => (
                      <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-forest-600 focus:ring-forest-500" />
                        <span className="text-gray-700">{option.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {filters.price.map(option => (
                      <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-forest-600 focus:ring-forest-500" />
                        <span className="text-gray-700">{option.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="md:w-3/4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found. Try changing your filters or search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
