
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isOrganic?: boolean;
  isSeasonal?: boolean;
  isNew?: boolean;
};

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div 
      className={cn(
        'product-card group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-image transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </Link>
        
        {/* Quick Add Button - Appears on hover */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transition-all duration-300 flex justify-center",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          )}
        >
          <button 
            className="btn-primary w-full py-2 text-sm flex items-center justify-center bg-forest-600 hover:bg-forest-700 text-white rounded-md"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
        
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isOrganic && (
            <span className="tag tag-organic bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              Organic
            </span>
          )}
          {product.isSeasonal && (
            <span className="tag tag-seasonal bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
              Seasonal
            </span>
          )}
          {product.isNew && (
            <span className="tag bg-forest-500 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-rose-500 transition-colors" />
        </button>
      </div>
      
      {/* Product Content */}
      <div className="product-card-content p-4">
        <h3 className="text-lg font-medium text-forest-800 mb-1">
          <Link to={`/products/${product.id}`} className="hover:text-forest-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-sm text-gray-500 mb-2">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-forest-700">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
