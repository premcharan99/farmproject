
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const NavLink = ({ to, children, onClick, className }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className={cn("text-forest-700 hover:text-forest-500 font-medium transition-colors", className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
