
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Check, ChevronRight } from 'lucide-react';

type CheckoutStep = 'information' | 'shipping' | 'payment' | 'review';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const navigate = useNavigate();
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'information') {
      setCurrentStep('shipping');
    } else if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('review');
    } else if (currentStep === 'review') {
      // Process the payment and complete the order
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/');
    }
  };
  
  const goBack = () => {
    if (currentStep === 'shipping') {
      setCurrentStep('information');
    } else if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'review') {
      setCurrentStep('payment');
    } else {
      navigate('/cart');
    }
  };
  
  // Calculate total
  const subtotal = totalPrice;
  const shipping = subtotal < 50 ? 5.99 : 0;
  const tax = subtotal * 0.0725; // 7.25% tax rate
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Checkout | Farm Fresh</title>
        <meta name="description" content="Complete your purchase" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          <div className="max-w-5xl mx-auto">
            {/* Checkout steps */}
            <nav className="mb-8">
              <ol className="flex items-center justify-center">
                {['information', 'shipping', 'payment', 'review'].map((step, index) => {
                  const isActive = currentStep === step;
                  const isComplete = (
                    (step === 'information' && currentStep !== 'information') ||
                    (step === 'shipping' && ['payment', 'review'].includes(currentStep)) ||
                    (step === 'payment' && currentStep === 'review')
                  );
                  
                  return (
                    <li key={step} className="flex items-center">
                      {index > 0 && (
                        <div className="h-0.5 w-10 md:w-16 bg-gray-200 mx-2">
                          {isComplete && <div className="h-full bg-forest-600 w-full"></div>}
                        </div>
                      )}
                      <div className="flex flex-col items-center">
                        <div 
                          className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            isActive 
                              ? 'bg-forest-600 text-white' 
                              : isComplete 
                                ? 'bg-forest-600 text-white' 
                                : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {isComplete ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        <span className="hidden md:block text-xs mt-1 text-gray-500 capitalize">
                          {step}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </nav>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main checkout form */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6">
                  <h1 className="text-2xl font-serif text-forest-800 mb-6 capitalize">
                    {currentStep}
                  </h1>
                  
                  <form onSubmit={handleSubmit}>
                    {currentStep === 'information' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              First Name
                            </label>
                            <Input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name
                            </label>
                            <Input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 'shipping' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              City
                            </label>
                            <Input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              State
                            </label>
                            <Input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Postal Code
                            </label>
                            <Input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Country
                            </label>
                            <Input
                              type="text"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 'payment' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number
                          </label>
                          <Input
                            type="text"
                            name="cardNumber"
                            placeholder="xxxx xxxx xxxx xxxx"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name on Card
                          </label>
                          <Input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Expiry Date
                            </label>
                            <Input
                              type="text"
                              name="expiry"
                              placeholder="MM/YY"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              CVV
                            </label>
                            <Input
                              type="text"
                              name="cvv"
                              placeholder="xxx"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 'review' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Customer Information</h3>
                          <div className="text-sm text-gray-600">
                            <p>{formData.firstName} {formData.lastName}</p>
                            <p>{formData.email}</p>
                            <p>{formData.phone}</p>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4">
                          <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
                          <div className="text-sm text-gray-600">
                            <p>{formData.address}</p>
                            <p>{formData.city}, {formData.state} {formData.postalCode}</p>
                            <p>{formData.country}</p>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4">
                          <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                          <div className="text-sm text-gray-600">
                            <p>Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                            <p>{formData.cardName}</p>
                            <p>Expires: {formData.expiry}</p>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4">
                          <h3 className="font-medium text-gray-900 mb-2">Order Items</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            {items.map(item => (
                              <li key={item.product.id} className="flex justify-between">
                                <span>
                                  {item.quantity} x {item.product.name}
                                </span>
                                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-8 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={goBack}
                      >
                        Back
                      </Button>
                      
                      <Button 
                        type="submit"
                        className="bg-forest-600 hover:bg-forest-700"
                      >
                        {currentStep === 'review' ? 'Place Order' : 'Continue'}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-24">
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                    
                    <ul className="divide-y divide-gray-200 mb-4">
                      {items.map(item => (
                        <li key={item.product.id} className="py-3 flex justify-between">
                          <div className="flex items-start">
                            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                              <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Shipping</p>
                        <p className="font-medium text-gray-900">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Tax (7.25%)</p>
                        <p className="font-medium text-gray-900">${tax.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                      <p className="text-base font-medium text-gray-900">Total</p>
                      <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                    </div>
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

export default Checkout;
