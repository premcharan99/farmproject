
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Your Cart | Farm Fresh</title>
          <meta name="description" content="View and manage items in your cart" />
        </Helmet>
        
        <Navbar />
        
        <main className="flex-grow pt-20">
          <div className="container-custom py-16 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h1 className="text-2xl font-medium mb-2">Your cart is empty</h1>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button 
                onClick={() => navigate('/products')}
                className="bg-forest-600 hover:bg-forest-700"
              >
                Browse Products
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  // Calculate subtotal, shipping, and total
  const subtotal = totalPrice;
  const shipping = subtotal < 50 ? 5.99 : 0;
  const estimatedTotal = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Your Cart | Farm Fresh</title>
        <meta name="description" content="View and manage items in your cart" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-serif text-forest-800 mb-8">Your Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center p-4 sm:p-6">
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            <Link to={`/products/${item.product.id}`} className="hover:text-forest-600">
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                          <p className="mt-1 text-sm font-medium text-gray-900">${item.product.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border border-gray-200 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 sm:p-2 text-gray-600 hover:text-gray-700"
                            >
                              <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                            <span className="px-2 py-1 sm:px-4 sm:py-2 text-center min-w-[40px]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 sm:p-2 text-gray-600 hover:text-gray-700"
                            >
                              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-4 text-gray-400 hover:text-gray-500"
                          >
                            <X className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/products')}
                    >
                      Continue Shopping
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={clearCart}
                      className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-24">
                <div className="px-4 py-6 sm:px-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="text-sm font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </p>
                    </div>
                    
                    {shipping > 0 && (
                      <div className="text-xs text-gray-500">
                        Free shipping on orders over $50
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between">
                        <p className="text-base font-medium text-gray-900">Estimated Total</p>
                        <p className="text-base font-medium text-gray-900">${estimatedTotal.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex space-x-2 mb-4">
                      <Input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                    
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-forest-600 hover:bg-forest-700 text-white"
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
