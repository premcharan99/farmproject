
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard, { ProductType } from '../products/ProductCard';

interface FeaturedProductsProps {
  products: ProductType[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setScrollPosition(Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount));
      }
    }
  };
  
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10 : true;
  
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <span className="text-forest-600 text-sm font-medium bg-forest-50 px-3 py-1 rounded-full mb-2 inline-block">Most Popular</span>
            <h2 className="text-3xl md:text-4xl font-serif">Featured Products</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${
                canScrollLeft
                  ? 'border-forest-200 text-forest-600 hover:border-forest-400 hover:text-forest-800'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              } transition-colors`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border ${
                canScrollRight
                  ? 'border-forest-200 text-forest-600 hover:border-forest-400 hover:text-forest-800'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              } transition-colors`}
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x space-x-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/products" 
            className="btn-outline inline-flex items-center"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
