
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type Category = {
  name: string;
  path: string;
};

type CategoryDropdownProps = {
  categories: Category[];
};

const CategoryDropdown = ({ categories }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center text-forest-700 hover:text-forest-500 font-medium transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Shop <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
          <div className="py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="block px-4 py-2 text-forest-700 hover:bg-forest-50 hover:text-forest-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-1"></div>
            <Link
              to="/products"
              className="block px-4 py-2 text-forest-700 hover:bg-forest-50 hover:text-forest-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              View All Products
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
