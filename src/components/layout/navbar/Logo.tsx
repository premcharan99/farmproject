
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <h1 className="text-2xl font-bold text-forest-600 font-serif tracking-tight m-0 p-0">Farm Fresh</h1>
    </Link>
  );
};

export default Logo;
