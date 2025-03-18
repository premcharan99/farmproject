
import NavLink from './NavLink';
import CategoryDropdown from './CategoryDropdown';

type Category = {
  name: string;
  path: string;
};

type DesktopNavProps = {
  categories: Category[];
};

const DesktopNav = ({ categories }: DesktopNavProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <NavLink to="/">
        Home
      </NavLink>

      <CategoryDropdown categories={categories} />

      <NavLink to="/farmers">
        Our Farmers
      </NavLink>
      
      <NavLink to="/blog">
        Blog & Recipes
      </NavLink>
      
      <NavLink to="/about">
        About Us
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
