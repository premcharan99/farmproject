
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const CartIcon = () => {
  const { itemCount } = useCart();

  return (
    <Link to="/cart" className="relative p-2">
      <ShoppingBag className="h-5 w-5 text-forest-700 hover:text-forest-500 transition-colors" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-forest-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
