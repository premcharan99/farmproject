
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import CartIcon from './CartIcon';

const DesktopActions = () => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <button className="text-forest-700 hover:text-forest-500 transition-colors p-2">
        <Search className="h-5 w-5" />
      </button>
      
      <Link to="/account" className="text-forest-700 hover:text-forest-500 transition-colors p-2">
        <User className="h-5 w-5" />
      </Link>
      
      <CartIcon />
    </div>
  );
};

export default DesktopActions;
