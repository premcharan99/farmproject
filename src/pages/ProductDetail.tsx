
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products, productDetails } from '@/lib/data';
import { Minus, Plus, ShoppingBag, Heart, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const productId = Number(id);
  const product = products.find(p => p.id === productId);
  const details = product ? productDetails[productId as keyof typeof productDetails] : null;
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container-custom py-16 text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/products')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const relatedProducts = details?.relatedProducts 
    ? products.filter(p => details.relatedProducts.includes(p.id))
    : products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.name} | Farm Fresh</title>
        <meta name="description" content={`Fresh ${product.name} from local farms.`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          {/* Breadcrumb navigation */}
          <div className="mb-6">
            <button 
              onClick={() => navigate('/products')} 
              className="text-forest-600 hover:text-forest-800 flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </button>
          </div>
          
          {/* Product details section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Additional images if available */}
              {details?.images && details.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {details.images.map((img, index) => (
                    <div key={index} className="rounded-md overflow-hidden border border-gray-200">
                      <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-20 object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product info */}
            <div className="md:w-1/2">
              <div className="mb-2">
                <span className="text-gray-500">{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-serif text-forest-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                {product.isOrganic && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Organic</span>
                )}
                {product.isSeasonal && (
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Seasonal</span>
                )}
              </div>
              
              <div className="text-2xl font-medium text-forest-700 mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <p className="text-gray-700 mb-4">
                  {details?.description || "Fresh from local farms to your table."}
                </p>
                
                {details?.farmer && (
                  <div className="flex items-center mt-4">
                    <img 
                      src={details.farmer.image} 
                      alt={details.farmer.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-500">Grown by</p>
                      <p className="font-medium">{details.farmer.name}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quantity selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center">
                  <button 
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                    className="p-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="px-4 py-2 border-t border-b border-gray-300 text-center min-w-[50px] bg-white">
                    {quantity}
                  </div>
                  <button 
                    onClick={handleIncreaseQuantity}
                    className="p-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <div className="flex space-x-4 mb-6">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-md flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  className="p-3 border border-gray-300 rounded-md"
                >
                  <Heart className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
              
              {/* Shipping info */}
              <div className="flex items-start space-x-2 text-sm text-gray-500">
                <Truck className="h-5 w-5 text-forest-600 mt-0.5" />
                <p>Free shipping on orders over $50. Standard delivery in 2-4 business days.</p>
              </div>
            </div>
          </div>
          
          {/* Product details tabs */}
          {details && (
            <div className="mt-16">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  <button className="border-b-2 border-forest-600 py-4 px-1 text-sm font-medium text-forest-600">
                    Product Details
                  </button>
                  <button className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Nutrition Information
                  </button>
                  <button className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Growing Method
                  </button>
                </nav>
              </div>
              
              <div className="py-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">About {product.name}</h2>
                <p className="text-gray-700 mb-4">{details.description}</p>
                
                {details.nutritionInfo && (
                  <div className="mt-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Nutrition Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Serving Size</p>
                        <p className="font-medium">{details.nutritionInfo.servingSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Calories</p>
                        <p className="font-medium">{details.nutritionInfo.calories}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Protein</p>
                        <p className="font-medium">{details.nutritionInfo.protein}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Carbs</p>
                        <p className="font-medium">{details.nutritionInfo.carbs}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif text-forest-800 mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
