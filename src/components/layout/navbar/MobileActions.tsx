
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';

type MobileActionsProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MobileActions = ({ isMenuOpen, toggleMenu }: MobileActionsProps) => {
  return (
    <div className="flex lg:hidden items-center space-x-2">
      <CartIcon />
      
      <button
        onClick={toggleMenu}
        className="text-forest-700 p-2"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileActions;
