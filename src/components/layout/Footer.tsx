
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-50 border-t border-forest-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-forest-700 font-serif">Farm Fresh</h2>
            </Link>
            <p className="text-gray-700 max-w-xs">
              Direct from our fields to your table. Fresh, sustainable, and locally grown produce for a healthier you and a healthier planet.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-forest-600 hover:text-forest-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-600 hover:text-forest-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-600 hover:text-forest-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-forest-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Products', 'Our Farmers', 'Blog & Recipes', 'About Us', 'Contact Us', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    className="inline-flex items-center text-gray-700 hover:text-forest-600 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium text-forest-700 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Vegetables', 'Fruits', 'Dairy', 'Eggs', 'Meat', 'Specialty Items'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products?category=${item.toLowerCase()}`}
                    className="inline-flex items-center text-gray-700 hover:text-forest-600 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-forest-700 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-forest-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  123 Farm Lane, Harvest Valley,<br />
                  Country Side, CA 91234
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-forest-500 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-700 hover:text-forest-600 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-forest-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@farmfresh.com" className="text-gray-700 hover:text-forest-600 transition-colors">
                  info@farmfresh.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Farm Store Hours:</span><br />
                  Monday-Saturday: 8am - 6pm<br />
                  Sunday: 10am - 4pm
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Farm Fresh. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-forest-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-forest-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping-policy" className="text-gray-600 hover:text-forest-600 text-sm transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
