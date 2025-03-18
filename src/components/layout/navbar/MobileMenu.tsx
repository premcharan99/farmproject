
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

type Category = {
  name: string;
  path: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
};

const MobileMenu = ({ isOpen, onClose, categories }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-in-right absolute top-full left-0 right-0 shadow-lg">
      <div className="container-custom py-4">
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-forest-700 font-medium py-2 border-b border-gray-100"
            onClick={onClose}
          >
            Home
          </Link>
          
          <div className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-forest-700">Shop Categories</span>
            </div>
            <div className="ml-2 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="block py-1 text-forest-600 hover:text-forest-500"
                  onClick={onClose}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="block py-1 text-forest-600 hover:text-forest-500 font-medium"
                onClick={onClose}
              >
                View All Products
              </Link>
            </div>
          </div>
          
          <Link 
            to="/farmers" 
            className="text-forest-700 font-medium py-2 border-b border-gray-100"
            onClick={onClose}
          >
            Our Farmers
          </Link>
          
          <Link 
            to="/blog" 
            className="text-forest-700 font-medium py-2 border-b border-gray-100"
            onClick={onClose}
          >
            Blog & Recipes
          </Link>
          
          <Link 
            to="/about" 
            className="text-forest-700 font-medium py-2 border-b border-gray-100"
            onClick={onClose}
          >
            About Us
          </Link>
          
          <Link 
            to="/account" 
            className="text-forest-700 font-medium py-2 border-b border-gray-100"
            onClick={onClose}
          >
            My Account
          </Link>
          
          <div className="flex items-center justify-between py-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-3 pr-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
